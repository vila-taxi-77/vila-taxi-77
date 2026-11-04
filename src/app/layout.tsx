import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Taxi VILA – Taxi điện Phù Cát, Phù Mỹ",
  description: "Taxi VILA phục vụ Phù Cát, Phù Mỹ và đưa đón sân bay Phù Cát 24/7.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
