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
		<div className="relative rounded-xl overflow-hidden">
			<div className="font-[geist] absolute bottom-1/5 px-16 inset-x-0 z-30">
				<Button
					size={"lg"}
					className="text-black font-bold bg-[#eee] hover:bg-[#ddd] border border-[#eee] cursor-pointer uppercase px-4 flex gap-4 hover:gap-6 transition-all duration-500 hover:text-green-700"
				>
					Request a Demo Now
					<ArrowRight className="h-4 w-4" />
				</Button>
			</div>

			<div className="flex flex-col absolute left-32 h-full justify-center text-8xl font-bold pl-20 bg-black/40 w-full text-shadow-2xs gap-2 uppercase scale-125 z-20">
				<span className="bg-clip-text font-[anton] tracking-wider flex gap-4">
					<span
						className="text-green-100/30 "
						style={{
							WebkitTextStroke: "0.1px #eee",
							WebkitBackgroundClip: "text",
						}}
					>
						Breathe
					</span>
					<span
						className="text-green-600/80 "
						style={{
							WebkitTextStroke: "0.01px #016630",
							WebkitBackgroundClip: "text",
						}}
					>
						Green,
					</span>
				</span>
				<span className="font-[anton] tracking-wider flex gap-4">
					<span
						className="text-green-100/30 "
						style={{
							WebkitTextStroke: "0.1px #eee",
							WebkitBackgroundClip: "text",
						}}
					>
						Breathe
					</span>
					<span
						className="text-green-600/80 "
						style={{
							WebkitTextStroke: "0.01px #016630",
							WebkitBackgroundClip: "text",
						}}
					>
						Peace.
					</span>
				</span>
				<div className="font-[geist] text-sm text-gray-300 normal-case font-medium w-[40%]">
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
				className="w-full object-cover border rounded-2xl"
			>
				<source src={src} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</div>
	);
};

export default AutoPlayVideo;
