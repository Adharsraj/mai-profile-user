import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { ViewTransitions } from "next-view-transitions";

const concord = localFont({
  src: [
    {
      path: "../public/fonts/concord-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/concord-medium.woff2",
      weight: "500",
      style: "medium",
    },
  ],
  variable: "--font-concord",
});

export const metadata: Metadata = {
  title: "Mai-Profile",
  description:
    "Cost effective online profile portfolio maker and NFC digital visiting cards provider",
  icons: {
    icon: "./icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={concord.variable}>{children}</body>
      </html>
    </ViewTransitions>
  );
}
