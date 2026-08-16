import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "AL FALAK Industrial Equipment Trading LLC | UAE",
    template: "%s | AL FALAK UAE",
  },
  description:
    "ISO 9001:2015 certified supplier for Pneumatic, Hydraulic, Electrical, and Mechanical equipment in UAE, Middle East, Central Asia and East Africa.",
  metadataBase: new URL("https://alfalakuae.com"),
  openGraph: {
    type: "website",
    siteName: "AL FALAK Industrial Equipment Trading LLC",
    images: ["/assets/logo/al-falak-logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
