import type { APIRoute } from 'astro';
import { z } from 'zod';

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
    // Mock implementation - logs to console
    console.log('📧 Mock Email Sent:', {
      from: options.from,
      to: options.to,
      subject: options.subject,
    });
    
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

// Rate limiting store (in-memory, simple implementation)
// In production, consider using Redis or a more robust solution
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX_REQUESTS = 5; // Max 5 requests per window

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

// Zod schema for form validation
const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  honeypot: z.string().optional(), // Spam prevention field
});

export const POST: APIRoute = async ({ request }) => {
  try {
    // Get client IP for rate limiting
    const clientIp = request.headers.get('x-forwarded-for') || 
                     request.headers.get('x-real-ip') || 
                     'unknown';
    
    // Check rate limit
    if (!checkRateLimit(clientIp)) {
      return new Response(
        JSON.stringify({ 
          error: 'Too many requests. Please try again later.' 
        }),
        { 
          status: 429,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
    
    // Parse request body
    const body = await request.json();
    
    // Honeypot check - if filled, it's likely spam
    if (body.honeypot && body.honeypot.trim() !== '') {
      // Silently reject (don't let spammers know the honeypot worked)
      return new Response(
        JSON.stringify({ success: true, message: 'Thank you for your message.' }),
        { 
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
    
    // Validate with Zod
    const validationResult = contactFormSchema.safeParse(body);
    
    if (!validationResult.success) {
      return new Response(
        JSON.stringify({ 
          error: 'Validation failed',
          details: validationResult.error.errors,
        }),
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
    
    const { name, email, phone, message } = validationResult.data;
    
    // Import site details for email configuration
    // Note: In a real implementation, you might want to use environment variables
    const siteDetails = (await import('../../config/siteDetails')).default;
    
    // Prepare email content
    const emailSubject = `Contact Form Submission from ${name}`;
    const emailText = `
New contact form submission:

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}

Message:
${message}
    `.trim();
    
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
      throw new Error('Failed to send email');
    }
    
    // Return success response
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Thank you for your message. We will get back to you soon.' 
      }),
      { 
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
    
  } catch (error) {
    console.error('Contact form error:', error);
    
    return new Response(
      JSON.stringify({ 
        error: 'An error occurred while processing your request. Please try again later.' 
      }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};

