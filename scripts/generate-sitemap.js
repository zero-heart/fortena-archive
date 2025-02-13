import fs from 'fs';
import path from 'path';

const baseUrl = 'https://fortena.info';

const pages = [{ loc: '/', lastmod: '2025-02-11', changefreq: 'daily', priority: 1.0 }];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `
  <url>
    <loc>${baseUrl}${page.loc}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('')}
</urlset>`;

const sitemapPath = path.resolve('public/sitemap.xml');
fs.writeFileSync(sitemapPath, sitemap);
console.log('✅ Sitemap has been generated: ' + sitemapPath);
