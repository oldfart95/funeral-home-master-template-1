# Redirect Optimization Implementation

## Issue Identified
Performance report shows a 923ms delay from redirects affecting 1 page (likely `/es` or home page).

## Root Cause Analysis

### Potential Sources:
1. **HTTP to HTTPS redirect** - Vercel handles this automatically (not the issue)
2. **Client-side language redirect** - Happens after page load (shouldn't affect FCP)
3. **Server-side redirect** - Could be causing the delay

## Solutions Implemented

### 1. Optimized Client-Side Language Redirect
**Location:** `src/layouts/Layout.astro`

**Changes:**
- Deferred execution using `requestIdleCallback` or `setTimeout`
- Prevents blocking initial page render
- Language detection now runs after page is interactive

**Impact:** Reduces blocking time, but redirect still happens after FCP

### 2. HSTS Already Configured
**Location:** `vercel.json` (line 28-30)

**Status:** ✅ Already implemented
- `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`
- Tells browsers to always use HTTPS, reducing redirects

## Recommendations for Further Optimization

### Option 1: Server-Side Language Detection (Best Performance)
Use Vercel Edge Middleware to detect language server-side and redirect before HTML is sent:

```typescript
// middleware.ts (if using Astro middleware)
export async function onRequest(context, next) {
  const request = context.request;
  const url = new URL(request.url);
  const acceptLanguage = request.headers.get('accept-language');
  
  // Detect language and redirect server-side
  // This happens before HTML is generated
}
```

**Benefits:**
- Redirect happens before HTML is sent
- No client-side JavaScript needed
- Faster than client-side redirect

### Option 2: Use Canonical URLs
Ensure all internal links point directly to the final destination:
- Use `https://funeral-home-master-template-1.vercel.app/` (not `http://`)
- Use canonical URLs in `<link rel="canonical">` tags
- Update sitemap to use canonical URLs

### Option 3: Disable Client-Side Redirect (If Not Critical)
If language detection isn't critical, consider:
- Removing automatic redirect
- Using a language toggle button instead
- Letting users choose manually

## Current Status

✅ **Client-side redirect optimized** - Non-blocking execution
✅ **HSTS configured** - Reduces HTTP→HTTPS redirects
⚠️ **Server-side redirect** - May still be happening (needs investigation)

## Testing

To verify the fix:
1. Run performance tests again
2. Check if redirect delay is reduced
3. Monitor FCP and LCP metrics on home page and `/es` page

## Next Steps

1. **Monitor performance** - Run tests after deployment
2. **Consider server-side redirect** - If client-side isn't sufficient
3. **Check Vercel logs** - Look for any unexpected redirects
4. **Verify canonical URLs** - Ensure all internal links are correct

## Notes

- The 923ms delay might be from the initial page load being slow (FCP: 3548ms on home page)
- Client-side redirects don't typically affect FCP, but server-side redirects do
- If the issue persists, consider implementing server-side language detection
