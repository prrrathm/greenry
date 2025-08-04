"use client"
import { useCallback, useEffect, useRef, useState } from "react";
import { EmblaCarouselType } from "embla-carousel";

type UseAutoplayProgressType = {
	showAutoplayProgress: boolean;
	progressBarStyles: React.CSSProperties;
};

export const useAutoplayProgress = <ProgressElement extends HTMLElement>(
	emblaApi: EmblaCarouselType | undefined,
	progressNode: React.RefObject<ProgressElement | null>,
): UseAutoplayProgressType => {
	const [showAutoplayProgress, setShowAutoplayProgress] = useState(false);
	const [progressBarStyles, setProgressBarStyles] = useState<React.CSSProperties>({});
	const animationName = useRef("");
	const timeoutId = useRef(0);
	const rafId = useRef(0);

	const startProgress = useCallback((timeUntilNext: number | null) => {
		const node = progressNode.current;

		if (!node) return;
		if (timeUntilNext === null) return;

		if (!animationName.current) {
			const style = window.getComputedStyle(node);
			animationName.current = style.animationName;
		}

		// Use React state instead of direct DOM manipulation
		setProgressBarStyles({
			animationName: "none",
			transform: "translate3d(0,0,0)"
		});

		rafId.current = window.requestAnimationFrame(() => {
			timeoutId.current = window.setTimeout(() => {
				setProgressBarStyles({
					animationName: animationName.current,
					animationDuration: `${timeUntilNext}ms`
				});
			}, 0);
		});

		setShowAutoplayProgress(true);
	}, [progressNode]);

	const stopProgress = useCallback(() => {
		setShowAutoplayProgress(false);
		setProgressBarStyles({});
	}, []);

	useEffect(() => {
		const autoplay = emblaApi?.plugins()?.autoplay;
		if (!autoplay) return;

		emblaApi
			.on("autoplay:timerset", () => startProgress(autoplay.timeUntilNext()))
			.on("autoplay:timerstopped", stopProgress);
	}, [emblaApi, startProgress, stopProgress]);

	useEffect(() => {
		return () => {
			cancelAnimationFrame(rafId.current);
			clearTimeout(timeoutId.current);
		};
	}, []);

	return {
		showAutoplayProgress,
		progressBarStyles,
	};
};