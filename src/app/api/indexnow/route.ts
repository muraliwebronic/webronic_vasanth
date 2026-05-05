export async function POST() {
  const key = process.env.INDEXNOW_KEY;

  if (!key) {
    return new Response(
      JSON.stringify({ error: "INDEXNOW_KEY not configured" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  const response = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      host: "www.webronic.com",
      key,
      urlList: [
        "https://www.webronic.com/",
        "https://www.webronic.com/services",
        "https://www.webronic.com/about",
        "https://www.webronic.com/contact",
        "https://www.webronic.com/locations",
      ],
    }),
  });

  return new Response(
    JSON.stringify({ status: response.status }),
    { headers: { "Content-Type": "application/json" } }
  );
}
