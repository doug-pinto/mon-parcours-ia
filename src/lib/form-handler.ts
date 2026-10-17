import { NextResponse } from "next/server";
import { clientIp, isRateLimited } from "./rate-limit";
import { isSpam, type Result } from "./validation";

const GENERIC_ERROR = "Une erreur est survenue. Merci de réessayer dans quelques instants.";

type Options<T> = {
  req: Request;
  parse: (body: unknown) => Result<T>;
  deliver: (data: T) => Promise<boolean>;
};

export async function handleForm<T>({ req, parse, deliver }: Options<T>) {
  if (isRateLimited(clientIp(req))) {
    return NextResponse.json({ error: "Trop de demandes. Merci de réessayer plus tard." }, { status: 429 });
  }
  const body: unknown = await req.json().catch(() => null);
  // Les robots reçoivent un succès factice pour ne pas adapter leur comportement.
  if (isSpam(body)) return NextResponse.json({ ok: true });
  const parsed = parse(body);
  if (!parsed.ok) return NextResponse.json({ error: parsed.error }, { status: 400 });
  const sent = await deliver(parsed.data);
  if (!sent) return NextResponse.json({ error: GENERIC_ERROR }, { status: 500 });
  return NextResponse.json({ ok: true });
}
