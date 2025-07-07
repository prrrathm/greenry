"use client"
import { useEffect, useRef } from "react";

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
		<video
			ref={videoRef}
			autoPlay
			loop
			playsInline
			preload="auto"
			className="w-screen h-screen object-cover"
		>
			<source src={src} type="video/mp4" />
			Your browser does not support the video tag.
		</video>
	);
};

export default AutoPlayVideo;
