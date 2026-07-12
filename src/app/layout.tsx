import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter, Noto_Serif_KR } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const notoSerifKr = Noto_Serif_KR({
  variable: "--font-korean-serif",
  weight: "700",
  preload: false,
});

const metaTitle = "VYV House — Live close. Build with focus.";
const metaDescription =
  "A hacker house and builder residency in Seoul for people who live close to the work and ship in good company.";
const ogImage = "/og/vyv-house-og.jpg";

export const metadata: Metadata = {
  metadataBase: new URL("https://vyv.house"),
  title: metaTitle,
  description: metaDescription,
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    url: "https://vyv.house",
    siteName: "vyv-house",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "VYV House — a hacker house and builder residency in Seoul",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metaTitle,
    description: metaDescription,
    images: [ogImage],
  },
  alternates: {
    canonical: "https://vyv.house",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${ibmPlexMono.variable} ${notoSerifKr.variable} antialiased`}
    >
      <body
        className="min-h-screen"
      >
        {children}
      </body>
    </html>
  );
}
