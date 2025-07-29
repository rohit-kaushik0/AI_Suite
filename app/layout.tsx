import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ADmyBRAND AI Suite - Next-Gen AI Marketing Platform",
  description: "Transform your marketing with AI-powered automation, intelligent analytics, and personalized campaigns. The future of marketing is here.",
  keywords: "AI marketing, automation, analytics, personalization, SaaS, ADmyBRAND",
  authors: [{ name: "ADmyBRAND Team" }],
  creator: "ADmyBRAND",
  openGraph: {
    title: "ADmyBRAND AI Suite - Next-Gen AI Marketing Platform",
    description: "Transform your marketing with AI-powered automation, intelligent analytics, and personalized campaigns.",
    type: "website",
    siteName: "ADmyBRAND AI Suite",
  },
  twitter: {
    card: "summary_large_image",
    title: "ADmyBRAND AI Suite - Next-Gen AI Marketing Platform",
    description: "Transform your marketing with AI-powered automation, intelligent analytics, and personalized campaigns.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
