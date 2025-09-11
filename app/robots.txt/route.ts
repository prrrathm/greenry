import { NextResponse } from 'next/server';

export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://evergreenry.com/sitemap.xml

# Crawl-delay (optional)
Crawl-delay: 1

# Block sensitive paths (if any)
Disallow: /api/
Disallow: /admin/
Disallow: /_next/
Disallow: /static/

# Allow specific bots
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /`;

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}