"use client";

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function VideoHero() {
	const [isMuted, setIsMuted] = useState(true);
	const [isMainTaglineVisible, setIsMainTaglineVisible] = useState(false);
	const videoRef = useRef<HTMLVideoElement>(null);

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

	const toggleMute = () => {
		if (videoRef.current) {
			videoRef.current.muted = !isMuted;
			setIsMuted(!isMuted);
		}
	};

	return (
		<section
			className={`relative w-full h-screen overflow-hidden sticky top-0 transition-opacity duration-400 ${
				isMainTaglineVisible ? "opacity-0" : "opacity-100"
			}`}
		>
			{/* Video Background */}
			<video
				ref={videoRef}
				className="absolute top-20 left-0 right-0 bottom-0 w-full h-[calc(100vh-5rem)] object-cover object-top"
				autoPlay
				loop
				muted={isMuted}
				playsInline
				preload="auto"
			>
				<source src="/videos/greenery.mov" type="video/mp4" />
				Your browser does not support the video tag.
			</video>

			{/* Optional Dark Overlay for better text readability */}
			<div className="absolute top-20 left-0 right-0 bottom-0 bg-black/30"></div>

			{/* Mute/Unmute Button - Bottom Right */}
			<button
				onClick={toggleMute}
				className="absolute bottom-6 right-6 z-20 bg-white/90 hover:bg-white text-primary rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
				aria-label={isMuted ? "Unmute video" : "Mute video"}
				title={isMuted ? "Unmute" : "Mute"}
			>
				{isMuted ? (
					<VolumeX className="w-6 h-6" />
				) : (
					<Volume2 className="w-6 h-6" />
				)}
			</button>

			{/* Optional Content Overlay */}
			<div className="absolute inset-0 flex items-center justify-center z-10">
				<div className="text-center text-white px-4">
					{/* Add any overlay content here if needed */}
				</div>
			</div>
		</section>
	);
}
