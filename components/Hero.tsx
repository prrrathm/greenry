"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Play } from "lucide-react";
import Image from "next/image";

export default function Hero() {
	const scrollToBooking = () => {
		document
			.getElementById("book-demo")
			?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<section className="relative pt-32 pb-20 min-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-50/40">
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
							<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight letter">
								Create a <span className="">Thriving</span>{" "}
								<span className="text-green-800 relative">Environment</span>
							</h1>
							<p className="text-sm md:text-xl text-gray-600 max-w-2xl">
								Transform your workspace and home with our premium plant
								solutions. Boost productivity, reduce stress, and create
								healthier environments with our expert-curated green companions.
							</p>
						</div>

						{/* CTA Buttons */}
						<div className="flex gap-2 sm:gap-4 justify-center lg:justify-start text-sm md:text-lg px-8 md:px-0">
							<div className="relative flex">
								<Button
									// size="lg"
									className=" bg-green-800 cursor-pointer hover:bg-green-700 text-white px-3 sm:px-8 py-3 font-semibold flex gap-2"
									onClick={scrollToBooking}
								>
									Book Free Consultation
									<ArrowDown className="h-5 w-5" />
									{/* <ArrowRight className="h-5 w-5" /> */}
								</Button>
								<Button
									variant="outline"
									// size="lg"
									className="md:hidden border-2 border-green-600 text-green-600 hover:text-green-800 hover:bg-green-100 bg-green-100/60 cursor-pointer rounded-full !px-2 !py-1 absolute -right-12 scale-90"
								>
									<Play
										fill="oklch(62.7% 0.194 149.214)"
										className="h-5 w-5 text-green-600"
									/>
								</Button>
							</div>
							<Button
								variant="outline"
								// size="lg"
								className="hidden md:flex p-2 border-2 border-green-600 text-green-600 hover:text-green-800 hover:bg-green-100 font-bold bg-green-100/60 cursor-pointer rounded-full md:rounded-md"
							>
								<Play
									fill="oklch(62.7% 0.194 149.214)"
									className="h-5 w-5 text-green-600"
								/>
								Watch Demo
							</Button>
						</div>

						{/* Stats */}
						<div className="grid grid-cols-3 gap-8 pt-8 md:border-t border-gray-200">
							<div className="text-center lg:text-left">
								<div className="text-2xl font-bold text-green-800">500+</div>
								<div className="text-sm text-gray-600 whitespace-nowrap">
									Happy Clients
								</div>
							</div>
							<div className="text-center lg:text-left">
								<div className="text-2xl font-bold text-green-800">50k+</div>
								<div className="text-sm text-gray-600 whitespace-nowrap">
									Plants Delivered
								</div>
							</div>
							<div className="text-center lg:text-left">
								<div className="text-2xl font-bold text-green-800">100%</div>
								<div className="text-sm text-gray-600 whitespace-nowrap">
									Satisfaction Rate
								</div>
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
