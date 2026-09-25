import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://midhat-interiors-karachi.efepro2003.chatgpt.site"),
  title: "Midhat Interiors | Warm Minimalist Interior Design in Karachi",
  description:
    "Warm, purposeful residential and commercial interiors in Karachi. Book a free design consultation with Midhat Interiors.",
  openGraph: {
    title: "Midhat Interiors — Space, made personal.",
    description:
      "Warm minimalist residential and commercial interiors, shaped around the way you live and work.",
    type: "website",
    locale: "en_PK",
    images: [{ url: "/og.png", width: 1792, height: 936, alt: "Midhat Interiors — Space, made personal." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Midhat Interiors — Space, made personal.",
    description: "Warm, purposeful interior design in Karachi.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
