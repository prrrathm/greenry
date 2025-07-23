"use client";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Leaf, Heart, TrendingUp, Shield, Users, Zap } from "lucide-react";

const features = [
	{
		icon: Leaf,
		title: "Air Purification",
		description:
			"Our plants naturally filter toxins and improve air quality, creating healthier indoor environments.",
	},
	{
		icon: Heart,
		title: "Stress Reduction",
		description:
			"Studies show that plants reduce stress levels by up to 37% and improve overall well-being.",
	},
	{
		icon: TrendingUp,
		title: "Productivity Boost",
		description:
			"Increase workplace productivity by 15% with strategically placed greenery.",
	},
	{
		icon: Shield,
		title: "Low Maintenance",
		description:
			"Carefully selected plants that thrive with minimal care, perfect for busy lifestyles.",
	},
	{
		icon: Users,
		title: "Expert Support",
		description:
			"Our plant specialists provide ongoing care guidance and maintenance support.",
	},
	{
		icon: Zap,
		title: "Quick Setup",
		description:
			"Professional installation and setup within 24-48 hours of your consultation.",
	},
];

export default function Features() {
	return (
		<section className="py-20 bg-white">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-8 md:mb-16">
					<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
						Why Choose Greenry?
					</h2>
					<p className="text-sm md:text-xl text-gray-600 max-w-3xl mx-auto">
						We provide comprehensive plant solutions that transform your space
						into a thriving, productive environment while supporting your health
						and well-being.
					</p>
				</div>

				<div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
					{features.map((feature, index) => (
						<Card
							key={index}
							className="border-green-800/40 shadow-sm md:hover:shadow-lg transition-shadow duration-300 flex flex-col md:gap-2 justify-between px-0"
						>
							<CardHeader className="text-center pb-1 ">
								<div className="mx-auto p-2 md:p-4 bg-green-100 rounded-full flex items-center justify-center mb-4">
									<feature.icon className="h-4 w-4 md:h-8 md:w-8 text-green-800" />
								</div>
								<CardTitle className="text-sm md:text-xl font-semibold text-gray-900">
									{feature.title}
								</CardTitle>
							</CardHeader>
							<CardContent className="px-3 md:px-6 pb-6">
								<CardDescription className="text-gray-600 text-xs md:text-sm text-center ">
									{feature.description}
								</CardDescription>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
