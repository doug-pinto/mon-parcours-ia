"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "done";

export function useFormSubmit(endpoint: string) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError(null);
    try {
      const body = Object.fromEntries(new FormData(e.currentTarget));
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = (await res.json().catch(() => null)) as { error?: string } | null;
      if (!res.ok) throw new Error(data?.error ?? "Une erreur est survenue. Merci de réessayer.");
      setStatus("done");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue. Merci de réessayer.");
      setStatus("idle");
    }
  }

  return { status, error, onSubmit };
}
