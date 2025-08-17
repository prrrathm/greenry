"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

type project = {
	title: string;
	imageURL: string;
	link: string;
	logo: string;
};

const projects: project[] = [
	{
		title: "Google",
		imageURL: "/projects/office-new-1.jpg",
		link: "/projects/google",
		logo: "/brand-logos/google.svg",
	},
	{
		title: "Nike",
		imageURL: "/projects/office-new-2.jpg",
		link: "/projects/google",
		logo: "/brand-logos/nike.svg",
	},
	{
		title: "Asics",
		imageURL: "/projects/office-new-3.jpg",
		link: "/projects/google",
		logo: "/brand-logos/asics.svg",
	},
	{
		title: "HBO",
		imageURL: "/projects/office-new-4.jpg",
		link: "/projects/google",
		logo: "/brand-logos/hbo.svg",
	},
	{
		title: "Spotify",
		imageURL: "/projects/office-new-5.jpg",
		link: "/projects/google",
		logo: "/brand-logos/spotify.svg",
	},
];

const ProjectCarouselBeta: React.FC = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [progress, setProgress] = useState(0);
	const [isPaused] = useState(false);

	// Refs for desktop carousel timing
	const intervalRef = useRef<NodeJS.Timeout | null>(null);
	const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
	const startTimeRef = useRef<number>(Date.now());

	// Mobile carousel setup
	const autoplayRef = useRef(
		Autoplay({ delay: 4000, stopOnInteraction: false }),
	);
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
		autoplayRef.current,
	]);

	// Desktop carousel logic
	useEffect(() => {
		// Clear existing intervals
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
		}
		if (progressIntervalRef.current) {
			clearInterval(progressIntervalRef.current);
		}

		if (isPaused) return;

		// Reset progress and start time for new slide
		setProgress(0);
		startTimeRef.current = Date.now();

		const duration = 4000; // 4 seconds
		const updateInterval = 50; // Update every 50ms for smooth animation

		// Progress animation
		progressIntervalRef.current = setInterval(() => {
			const elapsed = Date.now() - startTimeRef.current;
			const newProgress = Math.min((elapsed / duration) * 100);
			console.log("Carousel Progress", newProgress);
			setProgress(newProgress);

			if (elapsed >= duration) {
				if (progressIntervalRef.current) {
					clearInterval(progressIntervalRef.current);
				}
			}
		}, updateInterval);

		// Slide transition
		intervalRef.current = setTimeout(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
		}, duration);

		// Cleanup function
		return () => {
			if (intervalRef.current) {
				clearTimeout(intervalRef.current);
			}
			if (progressIntervalRef.current) {
				clearInterval(progressIntervalRef.current);
			}
		};
	}, [currentIndex, isPaused]);

	// Mobile carousel index sync
	const onSelect = useCallback(() => {
		if (!emblaApi) return;
		setCurrentIndex(emblaApi.selectedScrollSnap());
	}, [emblaApi]);

	useEffect(() => {
		if (!emblaApi) return;
		emblaApi.on("select", onSelect);
		onSelect(); // Set initial index
	}, [emblaApi, onSelect]);

	return (
		<>
			{/* Desktop View */}
			<div className="flex-col px-10 py-20 gap-6 hidden md:flex">
				<div className="text-2xl sm:text-4xl font-semibold flex justify-between items-end">
					<div className="font-roboto font-extrabold text-gray-700 text-lg md:text-4xl">
						Some of our Recent Projects
					</div>
					<Link
						href={"/projects"}
						className="text-sm cursor-pointer font-semibold flex transition-all duration-300 items-center justify-center underline text-primary"
					>
						See all projects
					</Link>
				</div>
				<div className="flex gap-0.5">
					{projects.map((item, iter) => (
						<div
							key={iter}
							className={cn(
								"border rounded-2xl h-full flex flex-col transition-all duration-600 py-4 px-6 relative",
								iter === currentIndex ? "w-[84%]" : "w-[4%]",
							)}
							aria-hidden={iter !== currentIndex}
						>
							<div
								className={cn(
									"absolute inset-0 z-20 rounded-2xl",
									iter !== currentIndex ? "bg-black/40" : "bg-black/20",
								)}
							></div>
							<Image
								src={item.imageURL}
								fill
								alt={item.title}
								className="z-10 object-cover rounded-2xl"
							/>
							<div className="z-30 w-full h-[65vh] rounded-2xl text-white flex flex-col items-center justify-center">
								{iter === currentIndex && (
									<div className="w-full flex flex-col gap-4 justify-end items-center mb-4 h-full">
										<div className="flex justify-between w-full">
											<div className="flex items-center justify-center text-2xl font-semibold">
												{item.title}
											</div>
											<Button
												size="sm"
												className="bg-transparent hover:bg-transparent cursor-pointer font-semibold flex gap-2 mr-1 hover:mr-0 hover:gap-3 transition-all duration-300"
											>
												Learn More
												<ArrowRight className="ml-2 h-4 w-4" />
											</Button>
										</div>
										<Progress value={progress} className="w-full z-30" />
									</div>
								)}
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Mobile View */}
			<div className="md:hidden px-2 py-12">
				<div className="text-center mb-8">
					<div className="font-roboto text-gray-700 text-2xl font-extrabold mb-2">
						Our Recent Projects
					</div>
					<div className="text-sm cursor-pointer font-semibold underline text-primary">
						See all projects
					</div>
				</div>

				<div className="relative overflow-hidden">
					<div className="overflow-hidden" ref={emblaRef}>
						<div className="flex">
							{projects.map((item, iter) => (
								<div key={iter} className="min-w-0 flex-shrink-0 w-full px-2">
									<div className="relative border rounded-2xl h-64 overflow-hidden">
										<Image
											src={item.imageURL}
											fill
											alt={item.title}
											className="object-cover"
										/>
										<div className="absolute inset-0 bg-black/30"></div>
										<div className="absolute bottom-0 left-0 right-0 p-4 text-white">
											<div className="flex items-center justify-between">
												<div className="flex items-center gap-3">
													<Image
														src={item.logo}
														width={24}
														height={24}
														alt={`${item.title} logo`}
														className="bg-white rounded p-1 hidden"
													/>
													<div className="text-lg font-semibold">
														{item.title}
													</div>
												</div>
												<Button
													size="sm"
													className="bg-transparent text-white border-white hover:bg-white hover:text-primary"
												>
													Learn More
													<ArrowRight className="ml-1 h-4 w-4" />
												</Button>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Dots */}
					<div className="flex justify-center gap-2 mt-4">
						{projects.map((_, index) => (
							<button
								key={index}
								onClick={() => emblaApi?.scrollTo(index)}
								className={`w-2 h-2 rounded-full transition-all duration-300 ${
									index === currentIndex ? "bg-primary w-6" : "bg-gray-300"
								}`}
								aria-label={`Go to slide ${index + 1}`}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default ProjectCarouselBeta;
