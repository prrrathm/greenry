"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowDown, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// Background images array
const backgroundImages = [
	"/carousel-images/carousel-new-1.jpg",
	"/carousel-images/carousel-new-7.jpg",
	"/carousel-images/carousel-new-10.jpg",
	"/carousel-images/carousel-new-4.jpg",
	"/carousel-images/carousel-2.jpg",
	"/carousel-images/carousel-new-11.jpg",
];

export default function Hero() {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const scrollToBooking = () => {
		document
			.getElementById("book-demo")
			?.scrollIntoView({ behavior: "smooth" });
	};

	// Auto-rotate background images
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImageIndex(
				(prevIndex) => (prevIndex + 1) % backgroundImages.length,
			);
		}, 5000); // Change image every 5 seconds

		return () => clearInterval(interval);
	}, []);

	const [isMainTaglineVisible, setIsMainTaglineVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY || document.documentElement.scrollTop;
			setIsMainTaglineVisible(scrollTop >= 150);
		};

		// Set initial state
		handleScroll();

		// Add scroll event listener
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<section
			className={cn(
				`pt-32 pb-20 min-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary via-white to-secondary/40 duration-400 sticky top-0 ${
					isMainTaglineVisible ? "opacity-0" : "opacity-100"
				}`,
			)}
		>
			{/* Background Image Carousel */}
			{backgroundImages.map((image, index) => (
				<div
					key={image}
					className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
						index === currentImageIndex ? "opacity-100" : "opacity-0"
					}`}
					style={{
						backgroundImage: `url(${image})`,
					}}
				/>
			))}

			{/* Dark overlay */}
			<div className="absolute inset-0 bg-gradient-to-br from-black/80 to-primary/40"></div>

			{/* Background Pattern */}
			<div className="absolute hidden inset-0 opacity-20">
				<div
					className="absolute inset-0 bg-secondary bg-opacity-20"
					style={{
						backgroundImage:
							"radial-gradient(circle at 1px 1px, #418833 1px, transparent 0)",
						backgroundSize: "20px 20px",
					}}
				></div>
			</div>

			{/* Carousel Indicators */}
			<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
				{backgroundImages.map((_, index) => (
					<button
						key={index}
						className={`w-3 h-3 rounded-full transition-all duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center ${
							index === currentImageIndex
								? "bg-secondary scale-110"
								: "bg-white/50 hover:bg-white/70"
						}`}
						onClick={() => setCurrentImageIndex(index)}
						aria-label={`Go to slide ${index + 1}`}
						title={`Go to slide ${index + 1}`}
					>
						<span
							className={`w-3 h-3 rounded-full ${
								index === currentImageIndex ? "bg-white" : "bg-current"
							}`}
						/>
					</button>
				))}
			</div>

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="flex gap-12 items-center justify-center">
					{/* Left Content */}
					<div className="text-center lg:text-left space-y-8">
						<div className="space-y-4">
							<div className="inline-flex items-center px-4 py-2 bg-secondary text-primary rounded-full text-sm font-medium">
								🌱 Transform Your Environment
							</div>
							<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
								Create a <span className="">Thriving</span>{" "}
								<span className="text-secondary relative">Environment</span>
							</h1>
							<p className="text-sm md:text-xl text-white max-w-2xl">
								Transform your workspace and home with our premium plant
								solutions. Boost productivity, reduce stress, and create
								healthier environments with our expert-curated green companions.
							</p>
						</div>

						{/* CTA Buttons */}
						<div className="flex gap-2 sm:gap-4 justify-center lg:justify-start text-sm md:text-lg px-8 md:px-0">
							<div className="relative flex">
								<Button
									className=" bg-primary cursor-pointer hover:bg-primary text-white px-3 sm:px-8 py-3 font-semibold flex gap-2"
									onClick={scrollToBooking}
								>
									Book Free Consultation
									<ArrowDown className="h-5 w-5" />
								</Button>
								<Link
									href={"https://www.youtube.com/watch?v=0zEfCODX-TE&t=3s"}
									target="_blank"
									rel="noopener noreferrer"
									aria-label="Watch Evergreenry plant transformation demo video on YouTube - Opens in new tab"
									title="Watch our 3-minute demo video showing office plant transformations"
								>
									<Button
										variant="outline"
										className="md:hidden border-2 border-primary text-primary hover:text-primary hover:bg-secondary bg-secondary/60 cursor-pointer rounded-full !px-2 !py-1 absolute -right-12 scale-90"
									>
										<Play fill="#418833" className="h-5 w-5 text-primary" />
									</Button>
								</Link>
							</div>
							<Link
								href={"https://www.youtube.com/watch?v=0zEfCODX-TE&t=3s"}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Watch Evergreenry plant transformation demo video on YouTube - Opens in new tab"
								title="Watch our comprehensive demo video showing office plant transformations"
							>
								<Button
									variant="outline"
									className="hidden md:flex p-2  text-primary hover:text-primary hover:bg-secondary font-bold bg-secondary cursor-pointer rounded-full md:rounded-md"
								>
									<Play fill="#418833" className="h-5 w-5 text-primary" />
									Watch Demo
								</Button>
							</Link>
						</div>

						{/* Stats */}
						<div className="grid grid-cols-3 gap-8 pt-8 md:border-t border-gray-200">
							<div className="text-center lg:text-left">
								<div className="text-2xl font-bold text-secondary">500+</div>
								<div className="text-sm text-white whitespace-nowrap">
									Happy Clients
								</div>
							</div>
							<div className="text-center lg:text-left">
								<div className="text-2xl font-bold text-secondary">50k+</div>
								<div className="text-sm text-white whitespace-nowrap">
									Plants Delivered
								</div>
							</div>
							<div className="text-center lg:text-left">
								<div className="text-2xl font-bold text-secondary">100%</div>
								<div className="text-sm text-white whitespace-nowrap">
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
						<div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary rounded-full opacity-60 animate-pulse"></div>
						<div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary rounded-full opacity-40 animate-pulse delay-1000"></div>
					</div>
				</div>
			</div>
		</section>
	);
}
