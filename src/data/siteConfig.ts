// ============================================================================
// SITE CONFIGURATION
// This is the single place to update company details before you go live.
// ============================================================================

export const siteConfig = {
  companyName: 'AH Technical Consulting',
  tagline: 'Technology × Commerce × Growth',

  // Replace with your real inbox. Never commit a real address you don't want public
  // scraping — consider an obfuscation or a form-only contact flow if that's a concern.
  contactEmail: 'hi@ahtechnicalconsulting.com',

  // Replace with your production domain once you have one. This value is only used
  // for display and metadata — it does not need to match immediately.
  domain: 'https://yourdomain.com',

  year: new Date().getFullYear(),
} as const
