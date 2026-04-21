import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/graphClient";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { prenom, nom, email, telephone, entreprise, service, message } = body;

    // Validation basique
    if (!prenom || !nom || !email || !message || !service) {
      return NextResponse.json(
        { error: "Veuillez remplir tous les champs obligatoires." },
        { status: 400 }
      );
    }

    const senderEmail = process.env.SENDER_EMAIL || "contact@teknosure.com";

    // Email interne (notif à Teknosure)
    await sendEmail({
      from: senderEmail,
      toRecipients: [senderEmail],
      subject: `[Contact] ${service} — ${prenom} ${nom}`,
      body: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 12px;">
          <div style="background: linear-gradient(135deg, #2563eb, #06b6d4); padding: 20px 24px; border-radius: 8px; margin-bottom: 24px;">
            <h1 style="color: white; margin: 0; font-size: 20px;">Nouveau message de contact</h1>
          </div>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr><td style="padding: 8px 12px; font-weight: 600; color: #374151; background: #f9fafb; border-radius: 4px; width: 140px;">Prénom</td><td style="padding: 8px 12px; color: #111827;">${prenom}</td></tr>
            <tr><td style="padding: 8px 12px; font-weight: 600; color: #374151; background: #f9fafb; border-radius: 4px;">Nom</td><td style="padding: 8px 12px; color: #111827;">${nom}</td></tr>
            <tr><td style="padding: 8px 12px; font-weight: 600; color: #374151; background: #f9fafb; border-radius: 4px;">Email</td><td style="padding: 8px 12px; color: #2563eb;">${email}</td></tr>
            <tr><td style="padding: 8px 12px; font-weight: 600; color: #374151; background: #f9fafb; border-radius: 4px;">Téléphone</td><td style="padding: 8px 12px; color: #111827;">${telephone || "—"}</td></tr>
            <tr><td style="padding: 8px 12px; font-weight: 600; color: #374151; background: #f9fafb; border-radius: 4px;">Entreprise</td><td style="padding: 8px 12px; color: #111827;">${entreprise || "—"}</td></tr>
            <tr><td style="padding: 8px 12px; font-weight: 600; color: #374151; background: #f9fafb; border-radius: 4px;">Service</td><td style="padding: 8px 12px; color: #111827;">${service}</td></tr>
          </table>
          <div style="background: #f9fafb; border-left: 4px solid #2563eb; padding: 16px; border-radius: 4px;">
            <p style="font-weight: 600; color: #374151; margin: 0 0 8px;">Message :</p>
            <p style="color: #4b5563; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #9ca3af; font-size: 12px; margin-top: 24px; text-align: center;">
            Message reçu via le formulaire de contact — teknosure.fr
          </p>
        </div>
      `,
    });

    // Email de confirmation automatique au client
    await sendEmail({
      from: senderEmail,
      toRecipients: [email],
      subject: "Nous avons bien reçu votre message — Teknosure",
      body: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 12px;">
          <div style="background: linear-gradient(135deg, #2563eb, #06b6d4); padding: 20px 24px; border-radius: 8px; margin-bottom: 24px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 20px;">Message bien reçu ✓</h1>
          </div>
          <p style="color: #111827; font-size: 16px;">Bonjour <strong>${prenom}</strong>,</p>
          <p style="color: #4b5563;">Merci de nous avoir contactés. Nous avons bien reçu votre message concernant <strong>${service}</strong>.</p>
          <p style="color: #4b5563;">Notre équipe vous répondra dans les <strong>24 heures ouvrées</strong>.</p>
          <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 16px; margin: 24px 0;">
            <p style="color: #1d4ed8; font-weight: 600; margin: 0 0 8px;">Besoin urgent ?</p>
            <p style="color: #1e40af; margin: 0;">📞 <a href="tel:+33146884975" style="color: #2563eb;">+33 1 46 88 49 75</a></p>
            <p style="color: #1e40af; margin: 4px 0 0;">✉️ <a href="mailto:contact@teknosure.fr" style="color: #2563eb;">contact@teknosure.fr</a></p>
          </div>
          <p style="color: #9ca3af; font-size: 12px; text-align: center; margin-top: 24px;">
            Teknosure — 16 rue de Condorcet, 95150 Taverny, France
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Erreur envoi mail:", err);
    return NextResponse.json(
      { error: "Erreur serveur. Veuillez réessayer ou nous appeler directement." },
      { status: 500 }
    );
  }
}
