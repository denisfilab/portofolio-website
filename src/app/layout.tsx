import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";


export const metadata: Metadata = {
  title: "Denis Portofolio",
  description: "Take a look at my portofolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
