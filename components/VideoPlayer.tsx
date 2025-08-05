"use client";
import { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const AutoPlayVideo = ({ src }: { src: string }) => {
	const videoRef = useRef<HTMLVideoElement | null>(null);

	useEffect(() => {
		const video = videoRef.current;
		if (video) {
			video.muted = true;
			video.play().catch((err) => {
				console.warn("Autoplay failed:", err);
			});
		}
	}, []);

	return (
		<div className="relative rounded-xl overflow-hidden h-full min-h-[60vh] aspect-[9/16] w-full sm:aspect-auto">
			<div className="font-[geist] absolute bottom-4 sm:bottom-1/5 px-4 sm:px-16 inset-x-0 z-30 flex justify-center sm:justify-start">
				<Button
					size={"lg"}
					className="text-black font-bold bg-[#eee] hover:bg-[#ddd] border border-[#eee] cursor-pointer uppercase px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base flex gap-2 sm:gap-4 hover:gap-3 sm:hover:gap-6 transition-all duration-500 hover:text-green-700 w-full sm:w-auto max-w-xs sm:max-w-none"
				>
					Request a Demo Now
					<ArrowRight className="h-4 w-4" />
				</Button>
			</div>

			<div className="flex flex-col absolute left-0 sm:left-8 md:left-32 h-full justify-center text-6xl md:text-6xl lg:text-8xl font-bolder pl-4 sm:pl-8 md:pl-20 bg-black/40 w-full text-shadow-2xs gap-2 sm:gap-3 scale-100 sm:scale-110 md:scale-125 z-20 uppercase">
				<span className="bg-clip-text font-bebas tracking-wider flex flex-col md:flex-row gap-2 font-bolder">
					<span
						className="text-green-100/30 drop-shadow-lg"
						style={{
							WebkitTextStroke: "2px #eee",
							WebkitBackgroundClip: "text",
						}}
					>
						Breathe
					</span>
					<span
						className="text-green-600/80 drop-shadow-lg"
						style={{
							WebkitTextStroke: "2px #016630",
							WebkitBackgroundClip: "text",
						}}
					>
						Green,
					</span>
				</span>
				<span className="font-bebas tracking-wider flex flex-col md:flex-row gap-2 sm:gap-4">
					<span
						className="text-green-100/30 drop-shadow-lg"
						style={{
							WebkitTextStroke: "2px #eee",
							WebkitBackgroundClip: "text",
						}}
					>
						Breathe
					</span>
					<span
						className="text-green-600/80 drop-shadow-lg"
						style={{
							WebkitTextStroke: "2px #016630",
							WebkitBackgroundClip: "text",
						}}
					>
						Peace.
					</span>
				</span>
				<div className="font-[geist] text-xs sm:text-base text-gray-300 normal-case font-medium w-[80%] sm:w-[60%] md:w-[40%] leading-relaxed mt-3 sm:mt-4">
					Having plants in the workspace can boost productivity by up to 15%,
					according to research by the University of Exeter.
				</div>
			</div>
			<video
				ref={videoRef}
				autoPlay
				loop
				playsInline
				preload="auto"
				className="w-full h-full object-cover border rounded-2xl"
				style={{
					objectPosition: "center center",
					objectFit: "cover",
				}}
			>
				<source src={src} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</div>
	);
};

export default AutoPlayVideo;
