import type { APIRoute } from 'astro';
import { z } from 'zod';
import crypto from 'crypto';

/**
 * Standardized API Response Types
 */
interface ApiSuccessResponse {
  success: true;
  message: string;
}

interface ApiErrorResponse {
  success: false;
  error: string;
  code?: string;
  details?: Array<{
    path?: string[];
    message?: string;
  }>;
}

type ApiResponse = ApiSuccessResponse | ApiErrorResponse;

/**
 * Helper function to create standardized error responses
 */
function createErrorResponse(
  error: string,
  status: number,
  code?: string,
  details?: Array<{ path?: string[]; message?: string }>
): Response {
  const response: ApiErrorResponse = {
    success: false,
    error,
    ...(code && { code }),
    ...(details && { details }),
  };

  return new Response(JSON.stringify(response), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

/**
 * Helper function to create standardized success responses
 */
function createSuccessResponse(message: string): Response {
  const response: ApiSuccessResponse = {
    success: true,
    message,
  };

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

/**
 * Email Transporter Interface
 * 
 * This interface allows easy swapping of email providers.
 * Currently mocked, but ready for SMTP integration.
 */
interface EmailTransporter {
  send(options: {
    from: string;
    to: string;
    subject: string;
    text: string;
    html?: string;
  }): Promise<{ success: boolean; messageId?: string }>;
}

/**
 * Mock Email Transporter
 * 
 * Replace this with actual SMTP configuration when ready:
 * 
 * import nodemailer from 'nodemailer';
 * const transporter = nodemailer.createTransport({
 *   host: process.env.SMTP_HOST,
 *   port: parseInt(process.env.SMTP_PORT || '587'),
 *   secure: false,
 *   auth: {
 *     user: process.env.SMTP_USER,
 *     pass: process.env.SMTP_PASS,
 *   },
 * });
 */
class MockEmailTransporter implements EmailTransporter {
  async send(options: {
    from: string;
    to: string;
    subject: string;
    text: string;
    html?: string;
  }): Promise<{ success: boolean; messageId?: string }> {
    // Mock implementation
    // Simulate async operation
    await new Promise((resolve) => setTimeout(resolve, 100));
    
    return {
      success: true,
      messageId: `mock-${Date.now()}`,
    };
  }
}

// Initialize transporter (swap with real implementation when ready)
const emailTransporter: EmailTransporter = new MockEmailTransporter();

/**
 * Rate Limiting Configuration
 * 
 * The contact form API implements rate limiting to prevent abuse and spam.
 * 
 * **Rate Limit Settings:**
 * - **Window:** 15 minutes (900,000 milliseconds)
 * - **Max Requests:** 5 submissions per IP address per window
 * - **Algorithm:** Sliding window (resets after the time window expires)
 * 
 * **Behavior:**
 * - Each IP address can submit up to 5 contact forms within any 15-minute period
 * - After 5 submissions, the IP is rate-limited until the window expires
 * - Rate limit resets automatically after 15 minutes from the first request
 * - Rate limit is tracked per IP address (using x-forwarded-for or x-real-ip headers)
 * 
 * **Error Response:**
 * When rate limit is exceeded, the API returns:
 * - Status Code: 429 (Too Many Requests)
 * - Error Code: `RATE_LIMIT_EXCEEDED`
 * - Message: "Too many requests. Please try again later."
 * 
 * **Implementation Notes:**
 * - Uses in-memory storage (Map) - resets on server restart
 * - For production with multiple servers, consider using Redis or a shared cache
 * - Rate limit is per IP address, not per user session
 * 
 * @example
 * ```typescript
 * // First 5 requests within 15 minutes: ✅ Allowed
 * // 6th request within same window: ❌ Rate limited (429 error)
 * // Request after 15 minutes: ✅ Allowed (window reset)
 * ```
 */
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX_REQUESTS = 5; // Max 5 requests per window

/**
 * Checks if an IP address has exceeded the rate limit
 * 
 * Uses a sliding window algorithm to track requests per IP address.
 * Each IP is allowed a maximum number of requests within a time window.
 * 
 * @param ip - The client IP address to check
 * @returns `true` if the request is allowed, `false` if rate limit is exceeded
 * 
 * @example
 * ```typescript
 * if (!checkRateLimit(clientIp)) {
 *   return createErrorResponse('Too many requests', 429);
 * }
 * ```
 */
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitStore.get(ip);
  
  if (!record || now > record.resetAt) {
    // Create new record or reset expired one
    rateLimitStore.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW,
    });
    return true;
  }
  
  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false; // Rate limit exceeded
  }
  
  record.count++;
  return true;
}

/**
 * Input Sanitization Functions
 * 
 * Sanitizes user input to prevent XSS (Cross-Site Scripting) attacks
 * by escaping HTML special characters.
 * 
 * @param input - The string to sanitize
 * @returns The sanitized string with HTML entities escaped
 */
function sanitizeInput(input: string): string {
  if (!input || typeof input !== 'string') {
    return '';
  }
  
  // Escape HTML special characters
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

/**
 * Sanitizes an object's string properties recursively
 * 
 * @param obj - The object to sanitize
 * @returns A new object with all string values sanitized
 */
function sanitizeObject<T extends Record<string, any>>(obj: T): T {
  const sanitized = { ...obj };
  
  for (const key in sanitized) {
    if (typeof sanitized[key] === 'string') {
      sanitized[key] = sanitizeInput(sanitized[key]) as T[Extract<keyof T, string>];
    } else if (typeof sanitized[key] === 'object' && sanitized[key] !== null) {
      sanitized[key] = sanitizeObject(sanitized[key]) as T[Extract<keyof T, string>];
    }
  }
  
  return sanitized;
}

/**
 * CSRF Token Store
 * 
 * Stores CSRF tokens temporarily for validation.
 * In production, consider using a more persistent storage solution.
 */
const csrfTokenStore = new Map<string, { token: string; expiresAt: number }>();
const CSRF_TOKEN_EXPIRY = 60 * 60 * 1000; // 1 hour

/**
 * Generates a secure CSRF token
 * 
 * @returns A cryptographically secure random token
 */
function generateCsrfToken(): string {
  return crypto.randomBytes(32).toString('hex');
}

/**
 * Validates a CSRF token
 * 
 * @param token - The token to validate
 * @param sessionId - Optional session identifier (can use IP as fallback)
 * @returns `true` if token is valid, `false` otherwise
 */
function validateCsrfToken(token: string | undefined, sessionId: string): boolean {
  if (!token) {
    return false;
  }
  
  const record = csrfTokenStore.get(sessionId);
  if (!record) {
    return false;
  }
  
  // Check if token expired
  if (Date.now() > record.expiresAt) {
    csrfTokenStore.delete(sessionId);
    return false;
  }
  
  // Validate token matches
  if (record.token !== token) {
    return false;
  }
  
  // Token is valid - remove it (one-time use) or keep for session
  // For contact forms, we can allow reuse within the session
  return true;
}

// Zod schema for form validation
const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  honeypot: z.string().optional(), // Spam prevention field
  csrfToken: z.string().optional(), // CSRF protection token
});

/**
 * GET handler for CSRF token generation
 * 
 * Generates and returns a CSRF token for the contact form.
 * The token should be included in form submissions.
 * 
 * @param request - The incoming HTTP request
 * @returns Response containing CSRF token
 */
export const GET: APIRoute = async ({ request }) => {
  try {
    // Get client IP or use a session identifier
    const clientIp = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
                     request.headers.get('x-real-ip') || 
                     'unknown';
    
    // Generate new CSRF token
    const token = generateCsrfToken();
    const expiresAt = Date.now() + CSRF_TOKEN_EXPIRY;
    
    // Store token
    csrfTokenStore.set(clientIp, { token, expiresAt });
    
    // Clean up expired tokens (simple cleanup)
    if (csrfTokenStore.size > 1000) {
      const now = Date.now();
      for (const [key, value] of csrfTokenStore.entries()) {
        if (now > value.expiresAt) {
          csrfTokenStore.delete(key);
        }
      }
    }
    
    return new Response(JSON.stringify({ csrfToken: token }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('CSRF token generation error:', error);
    return createErrorResponse(
      'Failed to generate security token. Please refresh the page and try again.',
      500,
      'CSRF_TOKEN_ERROR'
    );
  }
};

/**
 * POST handler for contact form submissions
 * 
 * Processes contact form submissions with the following security features:
 * - **Rate Limiting:** 5 requests per 15 minutes per IP address
 * - **CSRF Protection:** Validates CSRF token to prevent cross-site request forgery
 * - **Input Sanitization:** Escapes HTML special characters to prevent XSS attacks
 * - **Honeypot:** Spam detection via hidden form field
 * - **Zod Validation:** Schema-based input validation
 * - **Email Sending:** Currently mocked, ready for SMTP integration
 * - **Standardized Error Responses:** Consistent error format
 * 
 * **Security Flow:**
 * 1. Rate limit check (prevents abuse)
 * 2. CSRF token validation (prevents CSRF attacks)
 * 3. Honeypot check (spam detection)
 * 4. Input sanitization (XSS prevention)
 * 5. Zod schema validation (data integrity)
 * 6. Email processing
 * 
 * @param request - The incoming HTTP request containing form data
 * @returns Response with success or error message
 * 
 * @example
 * ```typescript
 * POST /api/contact
 * Body: { 
 *   name: "John", 
 *   email: "john@example.com", 
 *   message: "Hello",
 *   csrfToken: "abc123..."
 * }
 * ```
 */
export const POST: APIRoute = async ({ request }) => {
  try {
    // Get client IP for rate limiting and CSRF validation
    const clientIp = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
                     request.headers.get('x-real-ip') || 
                     'unknown';
    
    // Check rate limit
    if (!checkRateLimit(clientIp)) {
      return createErrorResponse(
        'Too many requests. Please try again later.',
        429,
        'RATE_LIMIT_EXCEEDED'
      );
    }
    
    // Parse request body
    const body = await request.json();
    
    // CSRF token validation
    if (!validateCsrfToken(body.csrfToken, clientIp)) {
      return createErrorResponse(
        'Invalid security token. Please refresh the page and try again.',
        403,
        'CSRF_TOKEN_INVALID'
      );
    }
    
    // Honeypot check - if filled, it's likely spam
    if (body.honeypot && body.honeypot.trim() !== '') {
      // Silently reject (don't let spammers know the honeypot worked)
      return createSuccessResponse('Thank you for your message.');
    }
    
    // Validate with Zod
    const validationResult = contactFormSchema.safeParse(body);
    
    if (!validationResult.success) {
      const details = validationResult.error.errors.map(err => ({
        path: err.path,
        message: err.message,
      }));
      
      return createErrorResponse(
        'Validation failed. Please check your input and try again.',
        400,
        'VALIDATION_ERROR',
        details
      );
    }
    
    // Sanitize inputs to prevent XSS attacks
    const sanitizedData = sanitizeObject({
      name: validationResult.data.name,
      email: validationResult.data.email,
      phone: validationResult.data.phone || '',
      message: validationResult.data.message,
    });
    
    const { name, email, phone, message } = sanitizedData;
    
    // Import site details for email configuration
    // Note: In a real implementation, you might want to use environment variables
    const siteDetails = (await import('@/config/siteDetails')).default;
    
    // Prepare email content
    // Note: Inputs are already sanitized, but we use them directly in email
    // since email content is server-side and not rendered in browser
    // For HTML email, we preserve line breaks but keep sanitization
    const emailSubject = `Contact Form Submission from ${name}`;
    const emailText = `
New contact form submission:

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}

Message:
${message}
    `.trim();
    
    // For HTML email, convert newlines to <br> but keep sanitized content
    // The sanitization prevents XSS if email is viewed in a vulnerable email client
    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `;
    
    // Send email (currently mocked)
    const emailResult = await emailTransporter.send({
      from: siteDetails.emailFrom,
      to: siteDetails.emailFrom, // In production, use actual recipient email
      subject: emailSubject,
      text: emailText,
      html: emailHtml,
    });
    
    if (!emailResult.success) {
      // Log error for debugging (in production, use proper logging)
      console.error('Email sending failed:', emailResult);
      return createErrorResponse(
        'Failed to send your message. Please try again later or contact us directly.',
        500,
        'EMAIL_SEND_FAILED'
      );
    }
    
    // Return success response
    return createSuccessResponse('Thank you for your message. We will get back to you soon.');
    
  } catch (error) {
    // Log error for debugging (in production, use proper logging)
    console.error('Contact form API error:', error);
    
    // Handle specific error types
    if (error instanceof SyntaxError) {
      return createErrorResponse(
        'Invalid request format. Please try again.',
        400,
        'INVALID_REQUEST'
      );
    }
    
    if (error instanceof Error && error.message.includes('JSON')) {
      return createErrorResponse(
        'Invalid request data. Please check your input and try again.',
        400,
        'INVALID_JSON'
      );
    }
    
    // Generic server error
    return createErrorResponse(
      'An unexpected error occurred. Please try again later or contact us directly.',
      500,
      'INTERNAL_SERVER_ERROR'
    );
  }
};

