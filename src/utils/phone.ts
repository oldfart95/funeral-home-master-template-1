/**
 * Phone Number Utility Functions
 * Provides consistent phone number formatting across the site
 */

/**
 * Formats a phone number for display
 * Input can be formatted or unformatted (e.g., "1111111111" or "(111) 111-1111")
 * Output: "(111) 111-1111"
 */
export function formatPhoneDisplay(phone: string): string {
  // Remove all non-digit characters
  const digits = phone.replace(/\D/g, '');
  
  // If we don't have 10 digits, return as-is (invalid)
  if (digits.length !== 10) {
    return phone;
  }
  
  // Format as (XXX) XXX-XXXX
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

/**
 * Formats a phone number for tel: links
 * Input can be formatted or unformatted
 * Output: "1111111111" (digits only)
 */
export function formatPhoneTel(phone: string): string {
  // Remove all non-digit characters
  return phone.replace(/\D/g, '');
}
