import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import CookieBanner from "./components/cookies/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.teknosure.com"),
  title: {
    default: "Teknosure — Cybersécurité, Cloud & Ingénierie IT",
    template: "%s | Teknosure",
  },
  description:
    "Teknosure accompagne les TPE, PME et ETI avec des solutions de cybersécurité, infrastructure cloud, infogérance et ingénierie logicielle sur mesure.",
  keywords: [
    "cybersécurité",
    "cloud managé",
    "infogérance",
    "ingénierie logicielle",
    "ESN France",
    "audit sécurité",
    "SOC 24/7",
    "ISO 27001",
    "NIS2",
    "deepfakes",
    "Teknosure",
    "Taverny",
    "Île-de-France",
  ],
  authors: [{ name: "Teknosure", url: "https://www.teknosure.com" }],
  creator: "Teknosure",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.teknosure.com",
    siteName: "Teknosure",
    title: "Teknosure — Cybersécurité, Cloud & Ingénierie IT",
    description:
      "Solutions IT sur mesure pour TPE, PME et ETI. Cybersécurité, cloud managé, infogérance, ingénierie.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Teknosure — Cabinet de conseil IT et cybersécurité",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Teknosure — Cybersécurité, Cloud & Ingénierie IT",
    description:
      "Solutions IT sur mesure pour TPE, PME et ETI.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Teknosure",
              url: "https://www.teknosure.com",
              logo: "https://www.teknosure.com/images/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+33-1-46-88-49-75",
                email: "contact@teknosure.fr",
                contactType: "customer service",
                availableLanguage: "French",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "16 rue de Condorcet",
                addressLocality: "Taverny",
                postalCode: "95150",
                addressCountry: "FR",
              },
              sameAs: ["https://www.linkedin.com/company/teknosure"],
            }),
          }}
        />
      </body>
    </html>
  );
}
