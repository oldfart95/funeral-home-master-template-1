import { z } from 'zod';
import crypto from 'crypto';
export { renderers } from '../../renderers.mjs';

function createErrorResponse(error, status, code, details) {
  const response = {
    success: false,
    error,
    ...code && { code },
    ...details && { details }
  };
  return new Response(JSON.stringify(response), {
    status,
    headers: { "Content-Type": "application/json" }
  });
}
function createSuccessResponse(message) {
  const response = {
    success: true,
    message
  };
  return new Response(JSON.stringify(response), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}
class MockEmailTransporter {
  async send(options) {
    await new Promise((resolve) => setTimeout(resolve, 100));
    return {
      success: true,
      messageId: `mock-${Date.now()}`
    };
  }
}
const emailTransporter = new MockEmailTransporter();
const rateLimitStore = /* @__PURE__ */ new Map();
const RATE_LIMIT_WINDOW = 15 * 60 * 1e3;
const RATE_LIMIT_MAX_REQUESTS = 5;
function checkRateLimit(ip) {
  const now = Date.now();
  const record = rateLimitStore.get(ip);
  if (!record || now > record.resetAt) {
    rateLimitStore.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW
    });
    return true;
  }
  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }
  record.count++;
  return true;
}
function sanitizeInput(input) {
  if (!input || typeof input !== "string") {
    return "";
  }
  return input.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;");
}
function sanitizeObject(obj) {
  const sanitized = { ...obj };
  for (const key in sanitized) {
    if (typeof sanitized[key] === "string") {
      sanitized[key] = sanitizeInput(sanitized[key]);
    } else if (typeof sanitized[key] === "object" && sanitized[key] !== null) {
      sanitized[key] = sanitizeObject(sanitized[key]);
    }
  }
  return sanitized;
}
const csrfTokenStore = /* @__PURE__ */ new Map();
const CSRF_TOKEN_EXPIRY = 60 * 60 * 1e3;
function generateCsrfToken() {
  return crypto.randomBytes(32).toString("hex");
}
function validateCsrfToken(token, sessionId) {
  if (!token) {
    return false;
  }
  const record = csrfTokenStore.get(sessionId);
  if (!record) {
    return false;
  }
  if (Date.now() > record.expiresAt) {
    csrfTokenStore.delete(sessionId);
    return false;
  }
  if (record.token !== token) {
    return false;
  }
  return true;
}
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  honeypot: z.string().optional(),
  // Spam prevention field
  csrfToken: z.string().optional()
  // CSRF protection token
});
const GET = async ({ request }) => {
  try {
    const clientIp = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
    const token = generateCsrfToken();
    const expiresAt = Date.now() + CSRF_TOKEN_EXPIRY;
    csrfTokenStore.set(clientIp, { token, expiresAt });
    if (csrfTokenStore.size > 1e3) {
      const now = Date.now();
      for (const [key, value] of csrfTokenStore.entries()) {
        if (now > value.expiresAt) {
          csrfTokenStore.delete(key);
        }
      }
    }
    return new Response(JSON.stringify({ csrfToken: token }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("CSRF token generation error:", error);
    return createErrorResponse(
      "Failed to generate security token. Please refresh the page and try again.",
      500,
      "CSRF_TOKEN_ERROR"
    );
  }
};
const POST = async ({ request }) => {
  try {
    const clientIp = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
    if (!checkRateLimit(clientIp)) {
      return createErrorResponse(
        "Too many requests. Please try again later.",
        429,
        "RATE_LIMIT_EXCEEDED"
      );
    }
    const body = await request.json();
    if (!validateCsrfToken(body.csrfToken, clientIp)) {
      return createErrorResponse(
        "Invalid security token. Please refresh the page and try again.",
        403,
        "CSRF_TOKEN_INVALID"
      );
    }
    if (body.honeypot && body.honeypot.trim() !== "") {
      return createSuccessResponse("Thank you for your message.");
    }
    const validationResult = contactFormSchema.safeParse(body);
    if (!validationResult.success) {
      const details = validationResult.error.errors.map((err) => ({
        path: err.path,
        message: err.message
      }));
      return createErrorResponse(
        "Validation failed. Please check your input and try again.",
        400,
        "VALIDATION_ERROR",
        details
      );
    }
    const sanitizedData = sanitizeObject({
      name: validationResult.data.name,
      email: validationResult.data.email,
      phone: validationResult.data.phone || "",
      message: validationResult.data.message
    });
    const { name, email, phone, message } = sanitizedData;
    const siteDetails = (await import('../../assets/siteDetails.B9KLVKNZ.js')).default;
    const emailSubject = `Contact Form Submission from ${name}`;
    const emailText = `
New contact form submission:

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}

Message:
${message}
    `.trim();
    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `;
    const emailResult = await emailTransporter.send({
      from: siteDetails.emailFrom,
      to: siteDetails.emailFrom,
      // In production, use actual recipient email
      subject: emailSubject,
      text: emailText,
      html: emailHtml
    });
    if (!emailResult.success) {
      console.error("Email sending failed:", emailResult);
      return createErrorResponse(
        "Failed to send your message. Please try again later or contact us directly.",
        500,
        "EMAIL_SEND_FAILED"
      );
    }
    return createSuccessResponse("Thank you for your message. We will get back to you soon.");
  } catch (error) {
    console.error("Contact form API error:", error);
    if (error instanceof SyntaxError) {
      return createErrorResponse(
        "Invalid request format. Please try again.",
        400,
        "INVALID_REQUEST"
      );
    }
    if (error instanceof Error && error.message.includes("JSON")) {
      return createErrorResponse(
        "Invalid request data. Please check your input and try again.",
        400,
        "INVALID_JSON"
      );
    }
    return createErrorResponse(
      "An unexpected error occurred. Please try again later or contact us directly.",
      500,
      "INTERNAL_SERVER_ERROR"
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
