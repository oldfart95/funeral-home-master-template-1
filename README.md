# White-Label Funeral Home Website Framework

A scalable, cloneable website framework built with Astro 5.0, TypeScript, and Tailwind CSS. Designed for easy rebranding and deployment for service businesses.

## Features

- **White-Label Configuration**: Single configuration file (`src/config/siteDetails.ts`) for easy rebranding
- **Content Collections**: Type-safe content management for obituaries, services, and legal documents
- **Custom Email API**: Built-in contact form endpoint with validation and rate limiting
- **Modern Stack**: Astro 5.0, TypeScript (strict mode), Tailwind CSS
- **Server-Side Rendering**: Configured for API routes and dynamic content

## Quick Start

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Configuration

To rebrand this site for a new client, update `src/config/siteDetails.ts` with:
- Company name
- Phone number
- Address
- Email configuration
- Theme colors
- Social media links

## Project Structure

```
src/
├── config/
│   └── siteDetails.ts      # Central configuration
├── content/
│   ├── config.ts           # Content collection schemas
│   ├── obituaries/         # Obituary markdown files
│   ├── services/           # Service markdown files
│   └── legal/              # Legal document markdown files
├── layouts/
│   └── Layout.astro        # Base layout component
├── components/
│   ├── Navbar.astro        # Navigation component
│   └── Footer.astro        # Footer component
└── pages/
    └── api/
        └── contact.ts      # Email API endpoint
```

## Email Configuration

The contact form API endpoint (`src/pages/api/contact.ts`) currently uses a mock email transporter. To enable real email sending:

1. Install an email library (e.g., `nodemailer` or `resend`)
2. Replace the `MockEmailTransporter` class with your email provider
3. Configure SMTP credentials via environment variables

## License

Proprietary - All rights reserved

