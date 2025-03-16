// pages/sitemap.xml.ts

import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Type', 'text/xml')

  res.write(`
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://turkkilainenparturivefa.fi/</loc>
      </url>
      <url>
        <loc>https://turkkilainenparturivefa.fi/gallery</loc>
      </url>
    </urlset>
  `)
  res.end()
}
