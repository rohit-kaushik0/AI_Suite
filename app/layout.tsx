import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
