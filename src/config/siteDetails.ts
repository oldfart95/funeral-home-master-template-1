/**
 * Central Configuration File
 * 
 * This is the single source of truth for all site-specific information.
 * To rebrand this site for a new client, update only this file.
 */

export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
}

export interface ThemeColors {
  primary: string;      // Deep Charcoal/Navy for stability
  secondary: string;    // Soft Cream/Off-White for backgrounds
  accent: string;       // Muted Gold or Sage for highlights
  background: string;   // Background color
  text: string;         // Primary text color
}

export interface SocialLinks {
  facebook?: string;
  twitter?: string;
  linkedin?: string;
  instagram?: string;
}

export interface SiteDetails {
  companyName: string;
  phone: string;
  address: Address;
  emailFrom: string;
  themeColors: ThemeColors;
  socialLinks: SocialLinks;
}

const siteDetails: SiteDetails = {
  companyName: "Arbaugh-Pearce-Greenisen & Sons Funeral and Cremation Services",
  phone: "(330) 332-4401",
  address: {
    street: "", // Add address when available
    city: "",
    state: "",
    zip: "",
  },
  emailFrom: "noreply@example.com", // Update with actual email
  themeColors: {
    primary: "#1a3b34",      // Forest Green / Deep Charcoal
    secondary: "#f9f7f2",     // Parchment / Soft Cream
    accent: "#b08d57",        // Gold / Muted Gold
    background: "#f9f7f2",   // Parchment
    text: "#2d2d2d",         // Charcoal
  },
  socialLinks: {
    // Add social media links when available
  },
};

export default siteDetails;

