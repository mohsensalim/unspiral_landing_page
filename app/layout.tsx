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
  icons: {
    icon: [
      { url: "/unspiral_landing_page/icon.png", sizes: "any" },
      { url: "/unspiral_landing_page/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/unspiral_landing_page/icon.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/unspiral_landing_page/icon.png",
    apple: { url: "/unspiral_landing_page/icon.png", sizes: "180x180", type: "image/png" },
  },
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
      <head>
        <link rel="icon" href="/unspiral_landing_page/icon.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/unspiral_landing_page/icon.png" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
