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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
