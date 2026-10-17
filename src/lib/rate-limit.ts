// Limiteur en mémoire par IP. Best-effort : en serverless, chaque instance a son propre compteur.
// Pour une protection stricte, le remplacer par un store partagé (ex. Upstash/Vercel KV).
const hits = new Map<string, number[]>();

export function isRateLimited(ip: string, limit = 5, windowMs = 10 * 60 * 1000): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < windowMs);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > limit;
}

export function clientIp(req: Request): string {
  return req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
}
