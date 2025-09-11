import type { Metadata } from "next";
import { Geist, Geist_Mono, Anton, Bebas_Neue, Roboto } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/Navbar";
import Footer from "@/components/Footer";
// import Ribbon from "@/components/Ribbon";
import { Toaster } from "@/components/ui/sonner";

const roboto = Roboto({
	variable: "--font-roboto",
	subsets: ["latin"],
});

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const anton = Anton({
	subsets: ["latin"],
	weight: "400", // Anton only comes in 400 weight
	variable: "--font-anton",
	display: "swap",
});
const bebas = Bebas_Neue({
	subsets: ["latin"],
	weight: "400", // Only 400 is available for Bebas Neue
	variable: "--font-bebas",
	display: "swap",
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
		default: "Evergreenry - Premium Office Plants & Biophilic Design Solutions",
		template: "%s | Evergreenry",
	},
	description: "Transform your workspace with Evergreenry's premium office plants, green walls, moss walls, and biophilic design solutions. Expert installation and maintenance services nationwide. Boost productivity and air quality naturally.",
	keywords: [
		"office plants",
		"biophilic design",
		"green walls",
		"moss walls",
		"workplace wellness",
		"air purifying plants",
		"plant maintenance",
		"indoor plants",
		"corporate landscaping",
		"zen gardens",
		"terrarium design",
		"plant installation",
	],
	authors: [{ name: "Evergreenry", url: "https://evergreenry.com" }],
	creator: "Evergreenry",
	publisher: "Evergreenry",
	robots: "index, follow",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://evergreenry.com",
		siteName: "Evergreenry",
		title: "Evergreenry - Premium Office Plants & Biophilic Design Solutions",
		description: "Transform your workspace with Evergreenry's premium office plants, green walls, moss walls, and biophilic design solutions. Expert installation and maintenance services nationwide.",
		images: [
			{
				url: "/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Evergreenry - Premium Office Plants & Biophilic Design",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Evergreenry - Premium Office Plants & Biophilic Design Solutions",
		description: "Transform your workspace with premium office plants, green walls & biophilic design solutions. Expert installation & maintenance nationwide.",
		images: ["/og-image.jpg"],
		creator: "@evergreenry",
		site: "@evergreenry",
	},
	icons: {
		icon: "/favicon.ico",
		apple: "/apple-touch-icon.png",
	},
	manifest: "/site.webmanifest",
	other: {
		"google-site-verification": "your-google-verification-code",
		"msvalidate.01": "your-bing-verification-code",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const organizationJsonLd = {
		"@context": "https://schema.org",
		"@type": "Organization",
		"name": "Evergreenry",
		"url": "https://evergreenry.com",
		"logo": "https://evergreenry.com/logo.png",
		"description": "Premium office plants, biophilic design solutions, green walls, and plant maintenance services for businesses nationwide.",
		"foundingDate": "2020",
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "Gurgaon",
			"addressRegion": "Haryana",
			"addressCountry": "IN"
		},
		"contactPoint": {
			"@type": "ContactPoint",
			"telephone": "+91-9891347119",
			"contactType": "customer service",
			"areaServed": "IN",
			"availableLanguage": ["English", "Hindi"]
		},
		"sameAs": [
			"https://facebook.com/evergreenry",
			"https://instagram.com/evergreenry",
			"https://linkedin.com/company/evergreenry",
			"https://twitter.com/evergreenry"
		],
		"services": [
			"Office Plants Installation",
			"Green Wall Design",
			"Moss Wall Installation", 
			"Plant Maintenance Services",
			"Zen Garden Design",
			"Terrarium Design",
			"Biophilic Design Consultation"
		]
	};

	return (
		<html lang="en">
			<head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
				/>
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${anton.variable} ${bebas.variable} ${roboto.variable} antialiased bg-gradient-to-br from-green-50 via-white to-green-50/40`}
			>
				{/* <Ribbon /> */}
				<NavBar />
				{children}
				<Toaster />
				<Footer />
			</body>
		</html>
	);
}
