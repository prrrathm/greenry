"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { cn } from "@/lib/utils"; // Adjust import path based on your setup
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

type project = {
	title: string;
	imageURL: string;
	link: string;
	logo: string;
};

const projects: project[] = [
	{
		title: "Google",
		imageURL: "/projects/office-1.jpg",
		link: "/projects/google",
		logo: "/brand-logos/google.svg",
	},
	{
		title: "Nike",
		imageURL: "/projects/office-2.jpg",
		link: "/projects/google",
		logo: "/brand-logos/nike.svg",
	},
	{
		title: "Asics",
		imageURL: "/projects/office-3.jpg",
		link: "/projects/google",
		logo: "/brand-logos/asics.svg",
	},
	{
		title: "HBO",
		imageURL: "/projects/office-4.jpg",
		link: "/projects/google",
		logo: "/brand-logos/hbo.svg",
	},
	{
		title: "Spotify",
		imageURL: "/projects/office-5.jpg",
		link: "/projects/google",
		logo: "/brand-logos/spotify.svg",
	},
];

const ProjectCarouselBeta: React.FC = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [progress, setProgress] = useState(0);
	const [isPaused] = useState(false);
	const items = [1, 2, 3, 4, 5]; // Define items array for clarity
	const animationFrameRef = useRef<number | null>(null);
	const intervalRef = useRef<NodeJS.Timeout | null>(null);
	const pauseStartTime = useRef<number>(0);
	const startTimeRef = useRef<number>(Date.now());

	useEffect(() => {
		// Clear any existing animations/intervals
		if (animationFrameRef.current) {
			cancelAnimationFrame(animationFrameRef.current);
		}
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
		}

		if (isPaused) {
			// Store elapsed time when pausing
			pauseStartTime.current = Date.now() - startTimeRef.current;
			return;
		}

		// Reset progress to 0 when currentIndex changes (only when not paused)
		if (!isPaused && progress >= 100) {
			setProgress(0);
			startTimeRef.current = Date.now();
			pauseStartTime.current = 0;
		}

		// Animate progress from current progress value
		const duration = 4000; // 4 seconds
		// const delay = 1;
		const durationWithDelay = duration;

		const animateProgress = () => {
			if (isPaused) return; // Stop animation if paused

			const elapsed =
				Date.now() - startTimeRef.current + pauseStartTime.current;
			const newProgress = Math.min((elapsed / durationWithDelay) * 100, 100);
			setProgress(newProgress);

			if (elapsed < durationWithDelay) {
				animationFrameRef.current = requestAnimationFrame(animateProgress);
			}
		};

		animationFrameRef.current = requestAnimationFrame(animateProgress);

		// Update currentIndex after 4 seconds
		intervalRef.current = setInterval(() => {
			if (!isPaused) {
				setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
			}
		}, 4000);

		return () => {
			if (animationFrameRef.current) {
				cancelAnimationFrame(animationFrameRef.current);
			}
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
			}
		};
	}, [currentIndex, items.length, isPaused, progress]);

	// const togglePause = () => {
	// 	setIsPaused((prev) => !prev);
	// 	if (!isPaused) {
	// 		// When pausing, store the current elapsed time
	// 		pauseStartTime.current = Date.now() - startTimeRef.current;
	// 	} else {
	// 		// When resuming, adjust startTime to account for paused duration
	// 		startTimeRef.current = Date.now() - pauseStartTime.current;
	// 	}
	// };

	const autoplayRef = useRef(
		Autoplay({ delay: 3000, stopOnInteraction: false }),
	);
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
		autoplayRef.current,
	]);
	const onSelect = useCallback(() => {
		if (!emblaApi) return;
		setCurrentIndex(emblaApi.selectedScrollSnap());
	}, [emblaApi]);

	useEffect(() => {
		if (!emblaApi) return;
		emblaApi.on("select", onSelect);
		onSelect(); // set initial index
	}, [emblaApi, onSelect]);

	return (
		<>
			{/* Desktop View */}
			<div className="flex-col px-10 py-20 gap-6 hidden md:flex">
				<div className="text-3xl sm:text-4xl font-semibold flex justify-between items-end-safe">
					<div className="font-bebas  text-gray-700 text-3xl md:text-5xl ">
						Some of our Recent Projects
					</div>
					<div className="text-sm cursor-pointer font-semibold flex transition-all duration-300 items-center justify-center underline text-green-800">
						See all projects
					</div>
				</div>
				<div className="flex gap-0.5">
					{projects.map((item, iter) => (
						<div
							key={iter}
							className={cn(
								"border rounded-2xl h-full flex flex-col transition-all duration-600 py-4 px-6 relative",
								iter === currentIndex ? "w-[84%]" : "w-[4%]",
							)}
							aria-hidden={iter !== currentIndex} // Basic accessibility
						>
							<div
								className={cn(
									"absolute inset-0  z-20 rounded-2xl",
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
											<div className="flex items-center justify-center text-2xl font-semibold ">
												{item.title}
											</div>
											<Button
												size={"sm"}
												className="bg-transparent hover:bg-transparent cursor-pointer font-semibold flex gap-2 mr-1 hover:mr-0 hover:gap-3 transition-all duration-300"
											>
												Learn More
												<ArrowRight className="ml-2 h-4 w-4" />
											</Button>

											{/* <button
											onClick={togglePause}
											className="mb-2 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
											aria-label={
												isPaused
													? "Resume carousel animation"
													: "Pause carousel animation"
											}
										>
											{isPaused ? <Play /> : <Pause />}
										</button> */}
										</div>
										<Progress
											value={progress}
											className={cn("w-full z-30")}
											color="#6a7282"
										/>
									</div>
								)}
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Mobile View */}
			<div className="md:hidden px-4 py-12">
				<div className="text-center mb-8">
					<div className="font-bebas text-gray-700 text-4xl font-bold sm:text-3xl mb-2">
						Some of our Recent Projects
					</div>
					<div className="text-sm cursor-pointer font-semibold underline text-green-800">
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
													className="bg-transparent text-white border-white hover:bg-white hover:text-green-800"
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
									index === currentIndex ? "bg-green-800 w-6" : "bg-gray-300"
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
