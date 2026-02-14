import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0f1e",
};

export const metadata: Metadata = {
  title: "Unspiral - Calm Your Mind, One Breath at a Time",
  description:
    "Transform overthinking into peace with Unspiral. Available now on iOS. Guided breathing exercises, journaling, and ambient sounds to help you find calm in moments of stress and anxiety.",
  keywords: [
    "mental wellness",
    "anxiety relief",
    "breathing exercises",
    "meditation",
    "journaling",
    "ambient sounds",
    "mindfulness",
    "calm",
    "relaxation",
    "iOS app",
    "mindfulness app",
  ],
  authors: [{ name: "Unspiral" }],
  openGraph: {
    title: "Unspiral - Calm Your Mind, One Breath at a Time",
    description:
      "Available now on iOS. Guided breathing, journaling, and calming sounds to help you stop overthinking.",
    type: "website",
    locale: "en_US",
    siteName: "Unspiral",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unspiral - Calm Your Mind, One Breath at a Time",
    description:
      "Available now on iOS. Guided breathing, journaling, and calming sounds to help you stop overthinking.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
