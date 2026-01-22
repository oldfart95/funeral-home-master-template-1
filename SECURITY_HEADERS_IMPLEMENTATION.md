# Security Headers Implementation Summary

## Overview

Security headers have been added to `vercel.json` to enhance the security posture of the website. This addresses items #84 and #85 from the comprehensive site review.

---

## Security Headers Added

### 1. Strict-Transport-Security (HSTS) ✅

**Header:** `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`

**Purpose:**
- Forces browsers to use HTTPS for all future connections
- Prevents protocol downgrade attacks
- Protects against man-in-the-middle attacks

**Configuration:**
- `max-age=31536000` - 1 year (31536000 seconds)
- `includeSubDomains` - Applies to all subdomains
- `preload` - Eligible for browser HSTS preload lists

**Note:** Only effective when site is served over HTTPS. Vercel automatically provides HTTPS.

---

### 2. Permissions-Policy ✅

**Header:** `Permissions-Policy: geolocation=(), microphone=(), camera=(), payment=(), usb=(), magnetometer=(), gyroscope=(), speaker=()`

**Purpose:**
- Restricts access to browser APIs and features
- Prevents unauthorized access to sensitive device features
- Reduces attack surface

**Restricted Features:**
- `geolocation=()` - No geolocation access
- `microphone=()` - No microphone access
- `camera=()` - No camera access
- `payment=()` - No payment API access
- `usb=()` - No USB device access
- `magnetometer=()` - No magnetometer access
- `gyroscope=()` - No gyroscope access
- `speaker=()` - No speaker access

**Rationale:** The funeral home website doesn't need these features, so they're disabled for security.

---

### 3. Content-Security-Policy (CSP) ✅

**Header:** `Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests;`

**Purpose:**
- Prevents XSS attacks by controlling resource loading
- Restricts where scripts, styles, and other resources can be loaded from
- Provides defense-in-depth security

**Directive Breakdown:**

#### `default-src 'self'`
- Default policy: only allow resources from same origin
- Applies to all resource types unless overridden

#### `script-src 'self' 'unsafe-inline'`
- **Scripts:** Same origin + inline scripts allowed
- **Note:** `'unsafe-inline'` is required for Astro's inline scripts (dark mode detection, form handlers)
- **Future Improvement:** Consider using nonces for stricter control

#### `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com`
- **Styles:** Same origin + inline styles + Google Fonts
- Allows Tailwind CSS inline styles and Google Fonts stylesheets

#### `font-src 'self' https://fonts.gstatic.com data:`
- **Fonts:** Same origin + Google Fonts + data URIs
- Allows Google Fonts (Inter, Merriweather) to load

#### `img-src 'self' data: https:`
- **Images:** Same origin + data URIs + any HTTPS source
- Allows local images and external HTTPS images (for flexibility)

#### `connect-src 'self'`
- **Network Requests:** Only same origin
- Allows fetch/XMLHttpRequest to `/api/contact` (same origin)
- Prevents data exfiltration to external domains

#### `frame-ancestors 'none'`
- **Framing:** Prevents site from being embedded in iframes
- Complements `X-Frame-Options: DENY`
- Prevents clickjacking attacks

#### `base-uri 'self'`
- **Base Tag:** Only allows base tags pointing to same origin
- Prevents base tag injection attacks

#### `form-action 'self'`
- **Form Submissions:** Only allows forms to submit to same origin
- Prevents form data from being sent to malicious domains

#### `upgrade-insecure-requests`
- **HTTPS Upgrade:** Automatically upgrades HTTP requests to HTTPS
- Ensures all resources load over secure connections

---

## Existing Security Headers (Already Present)

### X-Content-Type-Options: nosniff
- Prevents MIME type sniffing
- Forces browsers to respect declared content types

### X-Frame-Options: DENY
- Prevents site from being embedded in iframes
- Complements CSP `frame-ancestors 'none'`

### X-XSS-Protection: 1; mode=block
- Legacy XSS protection (modern browsers use CSP)
- Provides fallback for older browsers

### Referrer-Policy: strict-origin-when-cross-origin
- Controls referrer information sent with requests
- Balances privacy and functionality

---

## CSP Considerations

### Why `'unsafe-inline'` for Scripts?

The site uses inline scripts in multiple components:
- Dark mode detection (Layout.astro)
- Form handling (ContactForm.astro)
- Navigation menu (Navbar.astro)
- Accordion functionality (Accordion.astro)
- Back to top button (BackToTop.astro)
- Service navigation (ServiceNav.astro, ServiceButtons.astro, ServiceTabs.astro)
- Page loading overlay (PageLoadingOverlay.astro)

**Current Approach:** `'unsafe-inline'` is used for simplicity and compatibility.

**Future Improvement:** Consider implementing nonces:
1. Generate unique nonce per request
2. Add nonce to inline scripts: `<script nonce="{nonce}">`
3. Update CSP: `script-src 'self' 'nonce-{nonce}'`
4. This provides stricter security while maintaining functionality

### Why `'unsafe-inline'` for Styles?

Tailwind CSS generates inline styles, and the site uses inline `<style>` blocks for:
- Dark mode CSS variables
- Custom button styles
- Print styles
- Focus states

**Current Approach:** `'unsafe-inline'` is required for these features.

**Alternative:** Extract inline styles to external stylesheets (more complex refactoring).

---

## Testing Recommendations

### Verify Headers Are Applied

1. **Browser DevTools:**
   - Open Network tab
   - Reload page
   - Check Response Headers for all security headers

2. **Online Tools:**
   - [SecurityHeaders.com](https://securityheaders.com/)
   - [Mozilla Observatory](https://observatory.mozilla.org/)
   - [SSL Labs](https://www.ssllabs.com/ssltest/)

3. **Command Line:**
   ```bash
   curl -I https://your-domain.com
   ```

### Test CSP Functionality

1. **Verify Google Fonts Load:**
   - Check that Inter and Merriweather fonts load correctly
   - Verify no CSP violations in console

2. **Test Form Submission:**
   - Submit contact form
   - Verify `/api/contact` request succeeds (same origin)

3. **Check Inline Scripts:**
   - Verify dark mode toggle works
   - Verify form validation works
   - Verify navigation menu works
   - Check browser console for CSP violations

4. **Test Image Loading:**
   - Verify local images load
   - Verify external HTTPS images load (if any)

### Expected CSP Violations

If you see CSP violations in the console, they may indicate:
- Missing external resource in CSP
- Need to adjust CSP directives
- Potential security issue to investigate

---

## Production Deployment

### Before Deploying

1. ✅ Test all functionality with CSP enabled
2. ✅ Verify no console errors
3. ✅ Check that all resources load correctly
4. ✅ Test form submissions
5. ✅ Verify fonts load

### Monitoring

After deployment, monitor:
- Browser console for CSP violations
- Server logs for security header issues
- User reports of broken functionality

### Rollback Plan

If issues occur:
1. Temporarily remove CSP header from `vercel.json`
2. Investigate specific violations
3. Adjust CSP directives as needed
4. Re-enable CSP with fixes

---

## Security Benefits

### XSS Protection
- CSP prevents unauthorized script execution
- Restricts where scripts can be loaded from
- Provides defense-in-depth against XSS attacks

### Clickjacking Protection
- `X-Frame-Options: DENY` + `frame-ancestors 'none'`
- Prevents site from being embedded maliciously

### Data Exfiltration Prevention
- `connect-src 'self'` prevents sending data to external domains
- Form submissions restricted to same origin

### HTTPS Enforcement
- HSTS forces HTTPS connections
- `upgrade-insecure-requests` upgrades HTTP to HTTPS

### API Security
- Restricted form actions prevent CSRF to external domains
- Network requests limited to same origin

---

## Files Modified

1. **`vercel.json`**
   - Added `Strict-Transport-Security` header
   - Added `Permissions-Policy` header
   - Added `Content-Security-Policy` header

---

## References

- [MDN: Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [MDN: Strict-Transport-Security](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security)
- [MDN: Permissions-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Permissions-Policy)
- [CSP Evaluator](https://csp-evaluator.withgoogle.com/) - Test your CSP
- [HSTS Preload](https://hstspreload.org/) - Submit site for HSTS preload

---

**Implementation Date:** Based on COMPREHENSIVE_SITE_REVIEW_IMPROVEMENTS.md items #84, #85
**Status:** ✅ Complete
