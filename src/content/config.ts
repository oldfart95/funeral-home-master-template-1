import { defineCollection, z } from 'astro:content';

/**
 * Content Collections Configuration
 * 
 * Defines the schemas for all content collections used in the site.
 * Uses Zod for runtime validation and TypeScript type inference.
 */

// Obituaries Collection Schema
const obituariesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string().describe('Full name of the deceased'),
    slug: z.string().describe('URL-friendly identifier (auto-generated from filename)'),
    dateOfBirth: z.string().or(z.date()).describe('Date of birth'),
    dateOfDeath: z.string().or(z.date()).describe('Date of death'),
    visitationTime: z.string().optional().describe('Visitation time and date'),
    serviceLocation: z.string().optional().describe('Location of the service'),
    bio: z.string().describe('Biography content (markdown)'),
    image: z.string().optional().describe('Path to obituary image'),
  }),
});

// Services Collection Schema
const servicesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().describe('Service title'),
    description: z.string().describe('Service description'),
    icon: z.string().describe('Icon name (string identifier for icon component)'),
    price: z.number().optional().describe('Optional price for the service'),
  }),
});

// Legal Documents Collection Schema
const legalCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().describe('Document title (e.g., "Privacy Policy")'),
    slug: z.string().describe('URL-friendly identifier'),
    content: z.string().describe('Legal document content (markdown)'),
    type: z.enum(['privacy', 'terms']).describe('Type of legal document'),
  }),
});

// Export all collections
export const collections = {
  obituaries: obituariesCollection,
  services: servicesCollection,
  legal: legalCollection,
};

