"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

type Client = {
	name: string;
	logo: string;
	url: string;
};

const clients: Client[] = [
	{
		name: "Adidas",
		logo: "/brand-logos/adidas.svg",
		url: "https://www.adidas.com",
	},
	{
		name: "Amazon",
		logo: "/brand-logos/amazon.svg",
		url: "https://www.amazon.com",
	},
	{
		name: "Asics",
		logo: "/brand-logos/asics.svg",
		url: "https://www.asics.com",
	},
	{
		name: "Deloitte",
		logo: "/brand-logos/deloitte.svg",
		url: "https://www2.deloitte.com",
	},
	{
		name: "Google",
		logo: "/brand-logos/google.svg",
		url: "https://www.google.com",
	},
	{ name: "HBO", logo: "/brand-logos/hbo.svg", url: "https://www.hbo.com" },
	{
		name: "Netflix",
		logo: "/brand-logos/netflix.svg",
		url: "https://www.netflix.com",
	},
	{ name: "Nike", logo: "/brand-logos/nike.svg", url: "https://www.nike.com" },
	{
		name: "Spotify",
		logo: "/brand-logos/spotify.svg",
		url: "https://www.spotify.com",
	},
	{ name: "Uber", logo: "/brand-logos/uber.svg", url: "https://www.uber.com" },
];

const ClientsMarquee: React.FC = () => {
	return (
		<div className="marquee-wrapper py-32 relative flex flex-col gap-8">
			<div className="text-center">
				<h2 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-4 drop-shadow-xl font-bebas text-gray-700 text-gray-700">
					Our Trusted Partners
				</h2>
			</div>

			<div className="bg-gradient-to-l from-white to-transparent from-20% w-[30vw] absolute bottom-0 h-[60%] right-0 z-40"></div>
			<div className="bg-gradient-to-r from-white to-transparent from-20% w-[30vw] absolute bottom-0 h-[60%] left-0 z-40"></div>
			<div className="marquee-track ">
				{[...clients, ...clients].map((client, index) => (
					<div
						key={`${client.name}-${index}`}
						className="mx-2 md:mx-6 flex-shrink-0"
					>
						<Link href={client.url} target="_blank" rel="noopener noreferrer">
							<div className="relative w-20 h-20 md:w-24 md:h-24">
								<Image
									// src={"next.svg"}
									src={client.logo}
									alt={`${client.name} logo`}
									fill
									sizes="160px"
									className="object-contain"
								/>
							</div>
						</Link>
					</div>
				))}
				{[...clients, ...clients].map((client, index) => (
					<div
						key={`${client.name}-${index}`}
						className="mx-2 md:mx-6 flex-shrink-0"
					>
						<Link href={client.url} target="_blank" rel="noopener noreferrer">
							<div className="relative w-20 h-20 md:w-24 md:h-24">
								<Image
									// src={"next.svg"}
									src={client.logo}
									alt={`${client.name} logo`}
									fill
									sizes="160px"
									className="object-contain"
								/>
							</div>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default ClientsMarquee;
