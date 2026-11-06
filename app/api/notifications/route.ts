const topics = ["굿즈 출시", "캠페인 소식", "체험 이야기", "브랜드 이야기"];

export async function POST(request: Request) {
 const endpoint = process.env.BLOOM_SHEETS_WEB_APP_URL;
 const secret = process.env.BLOOM_SHEETS_SECRET;
 if (!endpoint || !secret) return Response.json({ error: "unconfigured" }, { status: 503 });

 const body = await request.text();
 if (body.length > 2048) return Response.json({ error: "invalid" }, { status: 400 });

 let input;
 try {
  input = JSON.parse(body);
 } catch {
  return Response.json({ error: "invalid" }, { status: 400 });
 }
 const email = typeof input?.email === "string" ? input.email.trim() : "";
 const name = typeof input?.name === "string" ? input.name.trim() : "";
 const phone = typeof input?.phone === "string" ? input.phone.trim() : "";
 const selected: string[] = Array.isArray(input?.topics) ? input.topics : [];
 if (input?.consent !== true || email.length > 254 || !/^[a-z0-9][^\s@]*@[^\s@]+\.[^\s@]+$/i.test(email)
  || !name || name.length > 80 || !/^[+0-9][0-9 ().-]{6,31}$/.test(phone)
  || !selected.length || selected.length > topics.length || !selected.every(topic => topics.includes(topic))) {
  return Response.json({ error: "invalid" }, { status: 400 });
 }

 try {
  const url = new URL(endpoint);
  if (url.protocol !== "https:" || url.hostname !== "script.google.com" || !url.pathname.endsWith("/exec")) {
   return Response.json({ error: "unconfigured" }, { status: 503 });
  }
  const result = await fetch(url, {
   method: "POST",
   headers: { "Content-Type": "application/json" },
   body: JSON.stringify({ secret, email, name, phone, topics: [...new Set(selected)] }),
   signal: AbortSignal.timeout(12000),
  });
  if (result.ok && (await result.json()).ok === true) return Response.json({ ok: true });
 } catch {
  // Avoid logging subscriber data or configuration.
 }
 return Response.json({ error: "unavailable" }, { status: 502 });
}
