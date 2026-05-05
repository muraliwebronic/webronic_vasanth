export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0">
    <channel>
      <title>Webronic</title>
      <link>https://www.webronic.com</link>
      <description>DevOps and IoT development company</description>
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      <item>
        <title>DevOps Services</title>
        <link>https://www.webronic.com/services</link>
        <description>Enterprise DevOps solutions</description>
      </item>
      <item>
        <title>IoT Development</title>
        <link>https://www.webronic.com/services</link>
        <description>End-to-end IoT development</description>
      </item>
    </channel>
  </rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
