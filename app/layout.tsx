import type { Metadata } from "next";
import { Playfair_Display, Work_Sans } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { GsapProvider } from "@/components/providers/GsapProvider";
import { PageTransitionProvider } from "@/components/providers/PageTransitionProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { LiveChatWidget } from "@/components/shared/LiveChatWidget";
import { buildMetadata } from "@/lib/seo/metadata";
import { organizationJsonLd } from "@/lib/seo/jsonld";
import { SITE_NAME } from "@/lib/constants";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const workSans = Work_Sans({
  variable: "--font-worksans",
  subsets: ["latin"],
});

export const metadata: Metadata = buildMetadata({ title: SITE_NAME });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${workSans.variable} antialiased`}>
      <body className="min-h-screen bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
        <LenisProvider>
          <GsapProvider>
            <Header />
            <PageTransitionProvider>
              <main>{children}</main>
            </PageTransitionProvider>
            <Footer />
            <WhatsAppButton />
            <LiveChatWidget />
          </GsapProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
