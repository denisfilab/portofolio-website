import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const sans = Inter({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	title: "Daanish Rahman | Product Systems, Data Workflows, Applied AI",
	description:
		"Personal website, selected work, and writing from Daanish Rahman, a Computer Science student at Universitas Indonesia.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={sans.variable}>
			<body>{children}</body>
		</html>
	);
}
