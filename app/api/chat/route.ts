import { NextRequest, NextResponse } from "next/server";

const FLOWISE_API_URL = process.env.FLOWISE_API_URL || "";

export async function POST(req: NextRequest) {
  if (!FLOWISE_API_URL) {
    console.error("[chat] FLOWISE_API_URL non défini côté serveur.");
    return NextResponse.json(
      { error: "Service indisponible." },
      { status: 503 }
    );
  }

  try {
    const { question } = await req.json();

    if (!question || typeof question !== "string") {
      return NextResponse.json({ error: "Question manquante." }, { status: 400 });
    }

    const flowiseRes = await fetch(FLOWISE_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
    });

    if (!flowiseRes.ok) {
      const body = await flowiseRes.text();
      console.error(`[chat] Flowise a répondu ${flowiseRes.status}: ${body}`);
      return NextResponse.json(
        { error: `Erreur Flowise: ${flowiseRes.status}` },
        { status: flowiseRes.status }
      );
    }

    const data = await flowiseRes.json();
    return NextResponse.json(data);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("[chat] Erreur proxy Flowise:", msg);
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
  }
}
