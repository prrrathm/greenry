"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";

export default function Hero() {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-50">
			{/* Background Pattern */}
			<div className="absolute hidden inset-0 opacity-40">
				<div
					className="absolute inset-0 bg-green-100 bg-opacity-20"
					style={{
						backgroundImage:
							"radial-gradient(circle at 1px 1px, rgba(22, 163, 74, 0.15) 1px, transparent 0)",
						backgroundSize: "20px 20px",
					}}
				></div>
			</div>

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="flex gap-12 items-center justify-center">
					{/* Left Content */}
					<div className="text-center lg:text-left space-y-8">
						<div className="space-y-4">
							<div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
								🌱 Transform Your Environment
							</div>
							<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
								Create a{" "}
								<span className="text-green-800 relative">Thriving</span>{" "}
								Environment
							</h1>
							<p className="text-sm md:text-xl text-gray-600 max-w-2xl">
								Transform your workspace and home with our premium plant
								solutions. Boost productivity, reduce stress, and create
								healthier environments with our expert-curated green companions.
							</p>
						</div>

						{/* CTA Buttons */}
						<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
							<Button
								size="lg"
								className="bg-green-800 cursor-pointer hover:bg-green-700 text-white px-8 py-3 text-lg font-semibold"
							>
								Book Free Consultation
								<ArrowRight className="ml-2 h-5 w-5" />
							</Button>
							<Button
								variant="outline"
								size="lg"
								className="px-3 py-3 text-lg border-2 border-green-700 text-green-900 hover:text-green-800 hover:bg-green-100 font-bold bg-green-100/60 cursor-pointer"
							>
								<Play className="h-5 w-5" />
								Watch Demo
							</Button>
						</div>

						{/* Stats */}
						<div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
							<div className="text-center lg:text-left">
								<div className="text-2xl font-bold text-green-800">500+</div>
								<div className="text-sm text-gray-600">Happy Clients</div>
							</div>
							<div className="text-center lg:text-left">
								<div className="text-2xl font-bold text-green-800">50k+</div>
								<div className="text-sm text-gray-600">Plants Delivered</div>
							</div>
							<div className="text-center lg:text-left">
								<div className="text-2xl font-bold text-green-800">98%</div>
								<div className="text-sm text-gray-600">Satisfaction Rate</div>
							</div>
						</div>
					</div>

					{/* Right Content - Hero Image */}
					<div className="relative hidden">
						<div className="relative z-10">
							<Image
								src="https://images.pexels.com/photos/6913395/pexels-photo-6913395.jpeg?auto=compress&cs=tinysrgb&w=800"
								alt="Modern office with plants"
								width={600}
								height={600}
								className="rounded-2xl shadow-2xl"
								priority
							/>
						</div>
						{/* Floating Elements */}
						<div className="absolute -top-4 -right-4 w-24 h-24 bg-green-200 rounded-full opacity-60 animate-pulse"></div>
						<div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-100 rounded-full opacity-40 animate-pulse delay-1000"></div>
					</div>
				</div>
			</div>
		</section>
	);
}
