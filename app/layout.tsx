import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./src/components/layout/Navbar";
import Footer from "./src/components/layout/Footer";
import SmoothScroll from "./src/components/providers/SmoothScroll";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
	display: "swap",
});

const playfair = Playfair_Display({
	variable: "--font-playfair",
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: {
		default: "ÉLORE — Fine Art Photography",
		template: "%s | ÉLORE",
	},
	description:
		"A fine art photography portfolio capturing timeless moments, quiet emotions, and extraordinary stories through an artistic lens.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.variable} ${playfair.variable}`}>
				<SmoothScroll>
					<Navbar />
					{children}
					<Footer />
				</SmoothScroll>
			</body>
		</html>
	);
}
