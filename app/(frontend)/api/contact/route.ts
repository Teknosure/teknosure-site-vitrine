import { randomUUID } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/graphClient";

/** Échappe les caractères spéciaux HTML pour insérer une saisie utilisateur dans le corps d'un email. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Retourne la valeur nettoyée si c'est une chaîne, sinon une chaîne vide. Tronque à `max` caractères. */
function field(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

/** Version texte brut pour l'objet de l'email : pas de retours à la ligne. */
function plain(value: string): string {
  return value.replace(/[\r\n]+/g, " ");
}

/** Vérification simple d'une adresse email (une seule @, domaine avec un point, pas d'espace ni de < > "). */
function isValidEmail(value: string): boolean {
  if (/[\s<>"]/.test(value)) return false;
  const parts = value.split("@");
  if (parts.length !== 2) return false;
  const [local, domain] = parts;
  const dot = domain.lastIndexOf(".");
  return local.length > 0 && dot > 0 && dot < domain.length - 1;
}

export async function POST(req: NextRequest) {
  const correlationId = randomUUID();

  try {
    const body = await req.json();
    const raw = {
      prenom: field(body?.prenom, 100),
      nom: field(body?.nom, 100),
      email: field(body?.email, 254),
      telephone: field(body?.telephone, 40),
      entreprise: field(body?.entreprise, 200),
      service: field(body?.service, 200),
      message: field(body?.message, 5000),
    };

    // Validation basique
    if (!raw.prenom || !raw.nom || !raw.email || !raw.message || !raw.service) {
      return NextResponse.json(
        { error: "Veuillez remplir tous les champs obligatoires." },
        { status: 400 }
      );
    }

    if (!isValidEmail(raw.email)) {
      return NextResponse.json(
        { error: "Adresse email invalide." },
        { status: 400 }
      );
    }

    // Valeurs échappées : les seules à insérer dans le HTML des emails.
    const prenom = escapeHtml(raw.prenom);
    const nom = escapeHtml(raw.nom);
    const email = escapeHtml(raw.email);
    const telephone = escapeHtml(raw.telephone);
    const entreprise = escapeHtml(raw.entreprise);
    const service = escapeHtml(raw.service);
    const message = escapeHtml(raw.message);

    const senderEmail = process.env.SENDER_EMAIL || "contact@teknosure.com";
    /** Boîte qui reçoit les notifications formulaire (par défaut = expéditeur Graph). Si contact@… n’est pas une vraie boîte consultée, définir CONTACT_NOTIFICATION_EMAIL. */
    const notificationInbox =
      process.env.CONTACT_NOTIFICATION_EMAIL?.trim() || senderEmail;

    console.info(
      `[contact ${correlationId}] début — service=${plain(raw.service)} visiteur=${raw.email}expéditeur_graph=${senderEmail} notification_vers=${notificationInbox}`
    );

    // Email interne (notif à Teknosure)
    await sendEmail({
      from: senderEmail,
      toRecipients: [notificationInbox],
      subject: plain(`[Contact] ${raw.service} — ${raw.prenom} ${raw.nom}`),
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
    console.info(
      `[contact ${correlationId}] Graph OK — notification interne envoyée vers ${notificationInbox}`
    );

    // Email de confirmation automatique au client
    await sendEmail({
      from: senderEmail,
      toRecipients: [raw.email],
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
            <p style="color: #1e40af; margin: 0;">📞 <a href="tel:+33176297899" style="color: #2563eb;">+33 1 76 29 78 99</a></p>
            <p style="color: #1e40af; margin: 4px 0 0;">✉️ <a href="mailto:contact@teknosure.com" style="color: #2563eb;">contact@teknosure.com</a></p>
          </div>
          <p style="color: #9ca3af; font-size: 12px; text-align: center; margin-top: 24px;">
            Teknosure — 16 rue de Condorcet, 95150 Taverny, France
          </p>
        </div>
      `,
    });
    console.info(
      `[contact ${correlationId}] Graph OK — confirmation automatique envoyée vers ${raw.email}`
    );

    console.info(`[contact ${correlationId}] terminé avec succès`);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    const errMsg = err instanceof Error ? err.message : String(err);
    const graphBody =
      err && typeof err === "object" && "body" in err
        ? JSON.stringify((err as { body?: unknown }).body)
        : undefined;
    console.error(
      `[contact ${correlationId}] échec Graph / envoi :`,
      errMsg,
      graphBody ? `body=${graphBody}` : ""
    );
    return NextResponse.json(
      { error: "Erreur serveur. Veuillez réessayer ou nous appeler directement." },
      { status: 500 }
    );
  }
}
