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
	{ name: "Client 1", logo: "/logos/client1.png", url: "https://client1.com" },
	{ name: "Client 2", logo: "/logos/client2.png", url: "https://client2.com" },
	{ name: "Client 3", logo: "/logos/client3.png", url: "https://client3.com" },
	{ name: "Client 4", logo: "/logos/client4.png", url: "https://client4.com" },
	{ name: "Client 5", logo: "/logos/client5.png", url: "https://client5.com" },
];

const ClientsMarquee: React.FC = () => {
	return (
		<div className="marquee-wrapper py-8 ">
			<div className="marquee-track">
			{[...clients, ...clients].map((client, index) => (
					<div
						key={`${client.name}-${index}`}
						className="mx-6 flex-shrink-0"
					>
						<Link href={client.url} target="_blank" rel="noopener noreferrer">
							<div className="relative w-40 h-20">
								<Image
									src={"next.svg"}
									// src={client.logo}
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
						className="mx-6 flex-shrink-0"
					>
						<Link href={client.url} target="_blank" rel="noopener noreferrer">
							<div className="relative w-40 h-20">
								<Image
									src={"next.svg"}
									// src={client.logo}
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
