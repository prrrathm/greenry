"use client";

import {
	Card,
	CardContent,
	// CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sprout, BrickWall, Flower, SprayCan } from "lucide-react";
import { motion } from "motion/react";

const services = [
	{
		icon: Sprout,
		title: "Office Plants",
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
];

export default function Services() {
	return (
		<section className="py-20 bg-white">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-10 md:mb-16">
					<h2 className="text-4xl sm:text-6xl font-bold mb-4 font-bebas text-gray-700 text-gray-700">
						Our Services
					</h2>
					<p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
						Comprehensive plant solutions tailored to your specific environment
						and needs.
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-4">
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
							className="shadow-lg transition-all duration-300 flex flex-col justify-between rounded-md border "
							// whileHover={{
							// 	scale: 1.05,
							// 	rotate: [-0.5, 0.5, 0], // cute wobble
							// 	transition: { duration: 0.3 },
							// }}
						>
							<Card className="hover:bg-gray-50 h-full shadow-none border-0 transition-all duration-300 flex flex-col justify-between">
								<CardHeader className="text-center flex flex-col gap-2 pb-2">
									<CardTitle className="text-2xl flex items-stretch justify-between gap-2 font-semibold text-gray-900 mb-5">
										<div className="flex items-stretch justify-start gap-2 ">
											<service.icon className="h-7 w-7 text-green-800" />
											<div className="">{service.title}</div>
										</div>

										<Button className="border bg-green-800 hover:bg-green-700 cursor-pointer font-semibold flex gap-2 mr-1 hover:mr-0 hover:gap-3 transition-all duration-300">
											Learn More
											<ArrowRight className="ml-2 h-4 w-4" />
										</Button>
									</CardTitle>
								</CardHeader>
								<CardContent className="flex flex-col justify-between">
									<div className="text-gray-600 text-base md:text-sm text-left">
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
