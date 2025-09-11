"use client";

import {
	Card,
	CardContent,
	// CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
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
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";

const services = [
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
		// price: "Starting from $299/month",
	},
	{
		icon: BrickWall,
		title: "Green Walls",
		image: "/projects/green-walls.jpeg",
		description:
			"Enhance your space with stunning green walls and vertical gardens that bring nature indoors. These living walls purify the air, reduce noise, and create a refreshing, stylish ambiance. Perfect for homes and offices, they require minimal maintenance. Ready to transform your space? Contact us below!",
		features: [
			"Personalized selection",
			"Easy care guidance",
			"Seasonal updates",
			"Health benefits",
		],
		// price: "Starting from $149/month",
	},
	{
		icon: Flower,
		title: "Moss Walls",
		image: "/projects/moss-wall.jpeg",
		description:
			"Add elegance and tranquility to your space with premium moss walls. These maintenance-free, air-purifying installations enhance aesthetics while reducing stress and noise. A perfect blend of style and nature, they fit seamlessly into any setting. Want to bring this lush beauty to your space? Contact us below!",
		features: [
			"Flexible arrangements",
			"Community benefits",
			"Brand enhancement",
			"Member satisfaction",
		],
		// price: "Starting from $199/month",
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
		// price: "Custom pricing",
	},
	{
		icon: MountainSnow, // replace with suitable icon
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
		// price: "Starting from $249",
	},
	{
		icon: Globe, // replace with suitable icon
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
		// price: "Starting from $99",
	},
];

export default function Services() {
	return (
		<section className="py-20 bg-white">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-8 sm:mb-10 md:mb-16">
					<h2 className="text-2xl sm:text-4xl mb-4 font-roboto font-extrabold text-gray-700">
						Our Services
					</h2>
					<p className="text-sm sm:text-base md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
						Comprehensive plant solutions tailored to your specific environment
						and needs.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
					{services.map((service, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30, scale: 0.95 }}
							whileInView={{ opacity: 1, y: 0, scale: 1 }}
							viewport={{ once: true, amount: 0.2 }}
							transition={{
								duration: 0.5,
								delay: index * 0.1,
								ease: "easeOut",
							}}
							className="shadow-lg transition-all duration-300 flex flex-col justify-between rounded-md border border-primary/20"
							// whileHover={{
							// 	scale: 1.05,
							// 	rotate: [-0.5, 0.5, 0], // cute wobble
							// 	transition: { duration: 0.3 },
							// }}
						>
							<Card className="bg-secondary/10 hover:bg-secondary/20 h-full shadow-none border-0 transition-all duration-300 flex flex-col justify-between min-h-[300px] sm:min-h-[200px] rounded-2xl">
								<div className="relative aspect-video rounded-t-2xl">
									<Image src={service.image} alt={service.title} fill className="rounded-t-md object-cover" />
								</div>
								<CardHeader className="text-center flex flex-col gap-2 pb-2 relative">
									<CardTitle className="text-xl sm:text-2xl flex items-start sm:items-stretch justify-between gap-3 sm:gap-2 font-semibold text-gray-900 mb-5">
										<div className="flex items-center justify-start gap-2 flex-shrink-0">
											<service.icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
											<div className="text-lg sm:text-xl">{service.title}</div>
										</div>

										<Link 
											href="/services"
											aria-label={`Learn more about ${service.title} services - Professional plant installation and maintenance`}
											title={`Discover our ${service.title.toLowerCase()} services and how we can transform your space`}
										>
											<Button size={"sm"} className="border bg-primary hover:bg-primary cursor-pointer font-semibold flex gap-2 px-3 py-2 text-sm sm:text-xs transition-all duration-300 w-full sm:w-auto">
												Learn More
												<ArrowRight className="h-2 w-2" />
											</Button>
										</Link>
									</CardTitle>
								</CardHeader>
								<CardContent className="flex flex-col justify-between flex-1">
									<div className="text-gray-600 text-sm sm:text-base text-left leading-relaxed">
										{service.description}
									</div>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
