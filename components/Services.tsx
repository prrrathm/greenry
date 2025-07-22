"use client";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sprout, BrickWall, Flower, SprayCan } from "lucide-react";

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
				<div className="text-center mb-16">
					<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
						Our Services
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Comprehensive plant solutions tailored to your specific environment
						and needs.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
					{services.map((service, index) => (
						<Card
							key={index}
							className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
						>
							<CardHeader className="text-center">
								<div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
									<service.icon className="h-8 w-8 text-green-800" />
								</div>
								<CardTitle className="text-xl font-semibold text-gray-900">
									{service.title}
								</CardTitle>
								<CardDescription className="text-gray-600 text-[0.75rem] text-left">
									{service.description}
								</CardDescription>
							</CardHeader>
							<CardContent className="flex flex-col justify-between ">
								{/* <ul className="space-y-2">
									{service.features.map((feature, featureIndex) => (
										<li
											key={featureIndex}
											className="flex items-center text-sm text-gray-600"
										>
											<div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
											{feature}
										</li>
									))}
								</ul> */}
								<div className="pt-4">
									{/* <p className="font-semibold text-green-800 mb-3">
										{service.price}
									</p> */}
									<Button className="w-full bg-green-800 hover:bg-green-700 cursor-pointer font-semibold">
										Learn More
										<ArrowRight className="ml-2 h-4 w-4" />
									</Button>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
