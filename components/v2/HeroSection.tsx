"use client";

import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";

const HeroSection = () => {
	const [isMainTaglineVisible, setIsMainTaglineVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.target.classList.contains("main-tagline-section")) {
						setIsMainTaglineVisible(entry.isIntersecting);
					}
				});
			},
			{
				threshold: 0.3, // Trigger when 30% of MainTagline is visible
				rootMargin: "0px 0px -50px 0px", // Trigger slightly before fully visible
			},
		);

		// Find and observe the MainTagline component
		const mainTaglineElement = document.querySelector(".main-tagline-section");
		if (mainTaglineElement) {
			observer.observe(mainTaglineElement);
		}

		return () => {
			if (mainTaglineElement) {
				observer.unobserve(mainTaglineElement);
			}
		};
	}, []);

	return (
		<section className="relative h-screen w-full overflow-hidden transition-all duration-500 ">
			<video
				className={cn(
					`absolute top-0 left-0 w-full h-full object-cover duration-200 ${
						isMainTaglineVisible ? "opacity-0" : "opacity-100"
					}`,
				)}
				autoPlay
				muted
				loop
				playsInline
			>
				<source src="/video.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>

			{/* Scroll indicator */}
			<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
				<svg
					className="w-6 h-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M19 14l-7 7m0 0l-7-7m7 7V3"
					/>
				</svg>
			</div>
		</section>
	);
};

export default HeroSection;
