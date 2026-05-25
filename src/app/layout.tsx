import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Daanish Rahman | Portfolio",
  description: "Engineering and data portfolio for Daanish Rahman.",
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
