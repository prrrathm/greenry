"use client";
import React, { useRef } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useAutoplay } from "./EmblaCarouselAutoplay";
import { useAutoplayProgress } from "./EmblaCarouselAutoplayProgress";
import {
	NextButton,
	PrevButton,
	usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import Image from "next/image";
import { Leaf } from "lucide-react";

type PropType = {
	slides: number[];
	options?: EmblaOptionsType;
};

const GalleryCarousel: React.FC<PropType> = (props) => {
	const { slides, options } = props;
	const progressNode = useRef<HTMLDivElement>(null);
	const [emblaRef, emblaApi] = useEmblaCarousel(options, [
		Autoplay({ playOnInit: true, delay: 3000 }),
	]);

	const {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick,
	} = usePrevNextButtons(emblaApi);

	const { autoplayIsPlaying, toggleAutoplay, onAutoplayButtonClick } =
		useAutoplay(emblaApi);

	const { showAutoplayProgress, progressBarStyles } = useAutoplayProgress(
		emblaApi,
		progressNode,
	);

	return (
		<div className="">
			<div className="" ref={emblaRef}>
				<div className="flex w-full border pr-10">
					{slides.map((index) => (
						<div className="flex mx-4" key={index}>
							<div className="flex border min-w-[25vw] aspect-[4/5] relative rounded-4xl overflow-clip">
								<Image
									src={"/clients/google.jpg"}
									// src={client.logo}
									alt={`logo`}
									fill
									sizes="160px"
									className="object-cover z-10"
								/>
								<div className="z-20 px-10 py-4 border h-full w-full bg-gradient-to-b from-black/20  to-green-800/60 hover:backdrop-blur-sm transition-all duration-500 cursor-pointer ">
									<div className="flex justify-between items-center text-white">
										<Leaf className="h-10 w-10" />
										<div className="text-2xl font-semibold">Google</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="embla__controls">
				<div className="embla__buttons">
					<PrevButton
						onClick={() => onAutoplayButtonClick(onPrevButtonClick)}
						disabled={prevBtnDisabled}
					/>
					<NextButton
						onClick={() => onAutoplayButtonClick(onNextButtonClick)}
						disabled={nextBtnDisabled}
					/>
				</div>

				<div
					className={`embla__progress`.concat(
						showAutoplayProgress ? "" : " embla__progress--hidden",
					)}
				>
					<div
						className="embla__progress__bar"
						ref={progressNode}
						style={progressBarStyles}
					/>
				</div>

				<button className="embla__play" onClick={toggleAutoplay} type="button">
					{autoplayIsPlaying ? "Stop" : "Start"}
				</button>
			</div>
		</div>
	);
};

export default GalleryCarousel;
