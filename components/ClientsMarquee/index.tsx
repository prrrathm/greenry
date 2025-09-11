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
		name: "Nestle",
		logo: "/brand-logos/nestle-4.svg",
		url: "https://www.nestle.com",
	},
	{
		name: "IBM",
		logo: "/brand-logos/ibm.svg",
		url: "https://www.ibm.com",
	},
	{
		name: "Accenture",
		logo: "/brand-logos/accenture-2.svg",
		url: "https://www.accenture.com",
	},
	{
		name: "Mastercard",
		logo: "/brand-logos/mastercard-6.svg",
		url: "https://www.mastercard.com",
	},
	{
		name: "SBI",
		logo: "/brand-logos/sbi.svg",
		url: "https://www.sbi.co.in",
	},
	{
		name: "IDFC",
		logo: "/brand-logos/idfc.svg.png",
		url: "https://www.idfcfirstbank.com",
	},
	{
		name: "Bank of America",
		logo: "/brand-logos/bank-of-america.svg",
		url: "https://www.bankofamerica.com",
	},
	{
		name: "Simpliworks",
		logo: "/brand-logos/simpliworks.svg",
		url: "https://www.simpliworks.com",
	},
	{
		name: "AWFIS",
		logo: "/brand-logos/awfix.png",
		url: "https://www.awfis.com",
	},
	{
		name: "Brookfield Properties",
		logo: "/brand-logos/brookfield.svg",
		url: "https://www.brookfieldproperties.com",
	},
	{
		name: "Optum",
		logo: "/brand-logos/optum.svg",
		url: "https://www.optum.com",
	},
	{
		name: "NURA",
		logo: "/brand-logos/nura.svg",
		url: "https://www.nura.com",
	},
	{
		name: "Khaitan",
		logo: "/brand-logos/khaitan.png",
		url: "https://www.khaitan.com",
	},
	{
		name: "Air France",
		logo: "/brand-logos/air-france-11.svg",
		url: "https://www.airfrance.com",
	},
	{
		name: "Cushman & Wakefield",
		logo: "/brand-logos/cushman-wakefield-1.svg",
		url: "https://www.cushmanwakefield.com",
	},
	{
		name: "Office Banao",
		logo: "/brand-logos/office-banao.svg",
		url: "https://www.officebanao.com",
	},
	{
		name: "Adidas",
		logo: "/brand-logos/adidas-2.svg",
		url: "https://www.adidas.com",
	},
	{
		name: "DLF",
		logo: "/brand-logos/DLF_logo.svg",
		url: "https://www.dlf.in",
	},
	{
		name: "Capgemini",
		logo: "/brand-logos/capgemini.svg",
		url: "https://www.capgemini.com",
	},
	{
		name: "Concentrix",
		logo: "/brand-logos/concentrix.svg",
		url: "https://www.concentrix.com",
	},
];

const ClientsMarquee: React.FC = () => {
	return (
		<div className="marquee-wrapper py-10 md:py-32 relative flex flex-col gap-8">
			<div className="text-center">
				<h2 className="text-2xl sm:text-4xl font-bold mb-4 drop-shadow-xl font-roboto text-gray-700">
					Our Trusted Partners
				</h2>
			</div>

			<div className="bg-gradient-to-l from-white to-transparent from-20% w-[30vw] absolute bottom-0 h-[60%] right-0 z-40"></div>
			<div className="bg-gradient-to-r from-white to-transparent from-20% w-[30vw] absolute bottom-0 h-[60%] left-0 z-40"></div>
			<div className="marquee-track ">
				{[...clients, ...clients].map((client, index) => (
					<div
						key={`${client.name}-${index}`}
						className="mx-1 md:mx-10  flex-shrink-0 "
					>
						<Link href={client.url} target="_blank" rel="noopener noreferrer">
							<div className="relative w-48 h-32 md:w-64 md:h-40 bg-white rounded-lg  border-gray-100 p-4 flex items-center justify-center">
								<Image
									src={client.logo}
									alt={`${client.name} logo`}
									fill
									sizes="160px"
									className="object-contain p-2"
									style={{
										maxWidth: "90%",
										maxHeight: "90%",
									}}
								/>
							</div>
						</Link>
					</div>
				))}
				{/* {[...clients, ...clients].map((client, index) => (
					<div
						key={`${client.name}-${index}`}
						className="mx-1 md:mx-2 flex-shrink-0"
					>
						<Link href={client.url} target="_blank" rel="noopener noreferrer">
							<div className="relative w-52 h-32 md:w-64 md:h-40">
								<Image
									src={client.logo}
									alt={`${client.name} logo`}
									fill
									sizes="200px"
									className="object-contain"
								/>
							</div>
						</Link>
					</div>
				))} */}
			</div>
		</div>
	);
};

export default ClientsMarquee;
