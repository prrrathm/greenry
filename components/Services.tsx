"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	ArrowRight,
	Sprout,
	BrickWall,
	Flower,
	SprayCan,
	MountainSnow,
	Globe,
} from "lucide-react";

interface Service {
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	title: string;
	description: string;
	image: string;
	features: string[];
	link: string;
}

// Define the specific color palette for cards
const cardColors = [
	"#418833", // Office Plants - Green
	"#D4E0C5", // Green Walls - Light Green
	"#27918B", // Moss Walls - Teal
	"#4C88B8", // Plant Maintenance - Blue
	"#A05459", // Zen Garden - Mauve/Rose
	"#42758F", // Indoor Terrarium - Blue-Gray
];

// Function to determine if text should be light or dark based on background
const getTextColor = (index: number) => {
	// Light text for darker backgrounds, dark text for lighter backgrounds
	const lightBackgrounds = [1]; // #D4E0C5 is light
	return lightBackgrounds.includes(index) ? "#1a1a1a" : "#ffffff";
};

// Function to get icon and button colors
const getAccentColors = (index: number) => {
	const lightBackgrounds = [1]; // #D4E0C5 is light
	const isLightBackground = lightBackgrounds.includes(index);

	if (isLightBackground) {
		return {
			iconColor: "#1a1a1a",
			buttonBg: "#1a1a1a",
			buttonText: "#ffffff",
			buttonHover: "rgba(26, 26, 26, 0.8)",
			hrColor: "rgba(26, 26, 26, 0.2)",
		};
	} else {
		return {
			iconColor: "#ffffff",
			buttonBg: "#ffffff",
			buttonText: "#1a1a1a",
			buttonHover: "rgba(255, 255, 255, 0.9)",
			hrColor: "rgba(255, 255, 255, 0.3)",
		};
	}
};


const services: Service[] = [
	{
		icon: Sprout,
		title: "Office Plants",
		image: "/projects/office-plants.jpg",
		description:
			"Office plants boost aesthetics and improve productivity. Their presence enhances mood, reduces stress, and purifies the air, creating a healthier, more focused environment. Add greenery to your workspace for a refreshing and productive atmosphere.",
		features: [
			"Air quality improvement",
			"Stress reduction",
			"Professional aesthetics",
			"Ongoing maintenance",
		],
		link: "/services",
	},
	{
		icon: BrickWall,
		title: "Green Walls",
		image: "/projects/green-walls.jpeg",
		description:
			"Enhance your space with stunning green walls and vertical gardens that bring nature indoors. These living walls purify the air, reduce noise, and create a refreshing, stylish ambiance. Perfect for homes and offices, they require minimal maintenance.",
		features: [
			"Personalized selection",
			"Easy care guidance",
			"Seasonal updates",
			"Health benefits",
		],
		link: "/services",
	},
	{
		icon: Flower,
		title: "Moss Walls",
		image: "/projects/moss-wall.jpeg",
		description:
			"Add elegance and tranquility to your space with premium moss walls. These maintenance-free, air-purifying installations enhance aesthetics while reducing stress and noise. A perfect blend of style and nature, they fit seamlessly into any setting.",
		features: [
			"Flexible arrangements",
			"Community benefits",
			"Brand enhancement",
			"Member satisfaction",
		],
		link: "/services",
	},
	{
		icon: SprayCan,
		title: "Plant Maintenance",
		image: "/projects/plant-maintenance.jpeg",
		description:
			"Plant maintenance keeps your office plants thriving. Regular watering, proper light, and pruning ensure they stay healthy, improve air quality, and create a positive work environment. Keep your plants in top shape for better focus and productivity.",
		features: [
			"Event planning",
			"Temporary setups",
			"Custom arrangements",
			"Professional service",
		],
		link: "/services",
	},
	{
		icon: MountainSnow,
		title: "Zen Garden",
		image: "/projects/zen-garden.jpeg",
		description:
			"Create a calming retreat with a custom Zen Garden. Designed to bring balance and serenity, these gardens feature stones, sand, and greenery arranged to promote mindfulness and relaxation. Perfect for homes, offices, or meditation spaces.",
		features: [
			"Stress relief",
			"Minimal maintenance",
			"Custom design layouts",
			"Perfect for meditation areas",
		],
		link: "/services",
	},
	{
		icon: Globe,
		title: "Indoor Terrarium",
		image: "/projects/terrarium.jpeg",
		description:
			"Bring nature indoors with a personalized terrarium. These miniature ecosystems combine plants, moss, and decorative elements to create a self-sustaining, low-maintenance piece of living art. Ideal for desks, shelves, or as thoughtful gifts.",
		features: [
			"Compact and stylish",
			"Custom plant selection",
			"Low upkeep",
			"Unique decorative piece",
		],
		link: "/services",
	},
];

const ServiceCard = ({
	service,
	index,
}: {
	service: Service;
	index: number;
}) => {
	// top offset for sticky stacking
	const topBase = 120;
	const step = 20;
	const topOffset = topBase + index * step;

	const textColor = getTextColor(index);
	const accentColors = getAccentColors(index);

	const CardContent = (
		<div
			className="w-full grid grid-cols-1 md:grid-cols-2 border border-[#303133] rounded-3xl min-h-[27.5rem] md:sticky md:overflow-hidden mt-5 relative"
			style={{
				backgroundColor: cardColors[index],
				top: `${topOffset}px`,
				zIndex: 100 + index,
			}}
		>
			{/* TEXT */}
			<div className="p-8 md:p-12 flex flex-col" style={{ color: textColor }}>
				<div className="flex items-center gap-3 mb-3">
					<service.icon
						className="h-8 w-8"
						style={{ color: accentColors.iconColor }}
					/>
					<h3 className="text-2xl lg:text-3xl font-semibold">
						{service.title}
					</h3>
				</div>
				<hr
					className="border-t my-4"
					style={{ borderColor: accentColors.hrColor }}
				/>
				<p className="text-base leading-relaxed mb-6" style={{ opacity: 0.9 }}>
					{service.description}
				</p>
				<div className="mt-auto">
					<Link
						href={service.link}
						aria-label={`Learn more about ${service.title} services`}
					>
						<Button
							className="font-semibold flex gap-2 px-6 py-3 transition-colors duration-200"
							style={{
								backgroundColor: accentColors.buttonBg,
								color: accentColors.buttonText,
							}}
							onMouseEnter={(e) => {
								e.currentTarget.style.backgroundColor =
									accentColors.buttonHover;
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.backgroundColor = accentColors.buttonBg;
							}}
						>
							Learn More
							<ArrowRight className="h-4 w-4" />
						</Button>
					</Link>
				</div>
			</div>

			{/* IMAGE */}
			<div className="p-8 md:p-12 flex items-center justify-center">
				<div className="w-full h-full max-h-[420px] flex items-center justify-center">
					<Image
						src={service.image}
						alt={service.title}
						width={520}
						height={320}
						className="object-cover rounded-xl"
					/>
				</div>
			</div>
		</div>
	);

	return CardContent;
};

const Services = () => {
	return (
		<>
			<style jsx>{`
				:root {
					--card-height: 40vw;
					--card-margin: 4vw;
					--card-top-offset: 3em;
					--numcards: 6;
				}

				#card-1 {
					--index: 1;
				}

				#card-2 {
					--index: 2;
				}

				#card-3 {
					--index: 3;
				}

				#card-4 {
					--index: 4;
				}

				#card-5 {
					--index: 5;
				}

				#card-6 {
					--index: 6;
				}

				.card {
					padding-top: calc(var(--index) * var(--card-top-offset));
				}

				/* Animation */
				@supports (animation-timeline: works) {
					@scroll-timeline cards-element-scrolls-in-body {
						source: selector(body);
						scroll-offsets: selector(#cards) start 1, selector(#cards) start 0;
						start: selector(#cards) start 1;
						end: selector(#cards) start 0;
						time-range: 4s;
					}

					.card {
						--index0: calc(var(--index) - 1);
						--reverse-index: calc(var(--numcards) - var(--index0));
						--reverse-index0: calc(var(--reverse-index) - 1);
					}

					.card__content {
						transform-origin: 50% 0%;
						will-change: transform;

						--duration: calc(var(--reverse-index0) * 1s);
						--delay: calc(var(--index0) * 1s);

						animation: var(--duration) linear scale var(--delay) forwards;
						animation-timeline: cards-element-scrolls-in-body;
					}

					@keyframes scale {
						to {
							transform: scale(calc(1.1 - calc(0.1 * var(--reverse-index))));
						}
					}
				}
			`}</style>
			<div className="bg-[var(--color-background-primary)] text-amber-100 text-center py-[20vh] px-5 md:px-20">
				<div className="max-w-6xl mx-auto text-center">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-700 mb-6">
						Our Services
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
						Comprehensive plant solutions tailored to your specific environment
						and needs.
					</p>
				</div>
				<ul
					id="cards"
					className="list-none grid grid-cols-1 gap-[4vw] pb-[calc(6*1em)] mb-[4vw]"
					style={{
						gridTemplateRows: "repeat(var(--numcards), var(--card-height))",
					}}
				>
					<li className="card sticky top-60" id="card-services">
						{services.map((service, index) => (
							<ServiceCard key={index} service={service} index={index} />
						))}
					</li>
				</ul>
			</div>
		</>
	);
};

export default Services;
