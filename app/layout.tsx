import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import "./globals.css";
import Script from "next/script";
const redHaTDisplay = Red_Hat_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AdHard",
  description: "All In One Digital Hub!!",
  openGraph: {
    title: "AdHard",
    description: "All In One Digital Hub!!",
    url: "https://adhard.vercel.app/",
    siteName: "AdHard Digital",
    images: [
      {
        url: "/og_image_adhard.jpg",
        width: 800,
        height: 600,
        alt: "AdHard",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AdHard",
    description: "All In One Digital Hub!!",
    images: ["/og_image_adhard.jpg"],
  },
  icons: {
    icon: "/fav_icon_adhard.png",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
        type="module"
      ></Script>
      <body className={redHaTDisplay.className}>{children}</body>
    </html>
  );
}
