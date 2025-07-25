"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
	type CarouselApi,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import Image from "next/image";

export interface Testimonial {
	name: string;
	role: string;
	image: string;
	content: string;
	rating: number; // 1-5
	delayMs?: number; // optional per-slide autoplay delay override (ms)
}

const defaultTestimonials: Testimonial[] = [
	{
		name: "Sarah Johnson",
		role: "CEO, TechCorp",
		image:
			"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
		content:
			"Greenry transformed our office environment completely. Our team's productivity has increased significantly, and the air quality is noticeably better. Highly recommended!",
		rating: 5,
	},
	{
		name: "Michael Chen",
		role: "Operations Manager, StartupHub",
		image:
			"https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
		content:
			"The consultation was thorough and professional. They understood our space perfectly and delivered exactly what we needed. Our employees love the new green environment.",
		rating: 5,
	},
	{
		name: "Emily Rodriguez",
		role: "HR Director, InnovateCo",
		image:
			"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
		content:
			"Working with Greenry was seamless. From consultation to installation, everything was handled professionally. The ongoing support has been exceptional.",
		rating: 5,
	},
	{
		name: "David Thompson",
		role: "Facility Manager, CorpCenter",
		image:
			"https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150",
		content:
			"The low-maintenance aspect was exactly what we needed. Beautiful plants that thrive with minimal care, and the team provides excellent ongoing support.",
		rating: 5,
	},
	{
		name: "Lisa Park",
		role: "Creative Director, DesignStudio",
		image:
			"https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150",
		content:
			"Our creative space has been completely revitalized. The plants add such positive energy, and our clients always comment on the beautiful environment.",
		rating: 5,
	},
	{
		name: "Robert Kim",
		role: "Office Manager, LegalFirm",
		image:
			"https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150",
		content:
			"Professional service from start to finish. The team understood our corporate environment needs and delivered a solution that exceeded expectations.",
		rating: 5,
	},
];

const renderStars = (rating: number) => (
	<div
		className="flex items-center mb-4"
		aria-label={`Rating: ${rating} out of 5 stars`}
	>
		{Array.from({ length: rating }).map((_, i) => (
			<Star key={i} fill="yellow" className="h-5 w-5 text-black" />
		))}
	</div>
);

// interface ProgressProps {
// 	value: number; // 0-1
// }

// function Progress({ value }: ProgressProps) {
// 	return (
// 		<div className="h-1 w-full overflow-hidden rounded-full bg-muted/40">
// 			<div
// 				className="h-full bg-primary transition-[width] duration-100 ease-linear"
// 				style={{ width: `${Math.min(Math.max(value, 0), 1) * 100}%` }}
// 			/>
// 		</div>
// 	);
// }

export interface TestimonialsCarouselProps {
	testimonials?: Testimonial[];
	delay?: number; // fallback autoplay delay (ms)
	loop?: boolean;
	pauseOnHover?: boolean;
	pauseOnFocus?: boolean;
	resumeAfterInteraction?: boolean;
	showArrows?: boolean;
	showSlideCount?: boolean; // (not currently rendered; reserve for future)
	showProgress?: boolean;
	/** Background image src (public path or remote URL). Default = "/leafs-bg-1.jpg". */
	backgroundSrc?: string;
	/** Optional: make the background fixed to simulate parallax (Safari-safe approach below). */
	fixedBackground?: boolean;
}

export default function TestimonialsCarousel({
	testimonials = defaultTestimonials,
	delay = 2000,
	loop = true,
	pauseOnHover = true,
	pauseOnFocus = true,
	resumeAfterInteraction = true,
	showArrows = true,
	showProgress = true,
	// backgroundSrc = "/leafs-bg-1.jpg",
	// fixedBackground = false,
}: TestimonialsCarouselProps) {
	const [api, setApi] = React.useState<CarouselApi>();
	const [current, setCurrent] = React.useState(0);

	// Build per-snap delays if any slide defines a delay override.
	const hasPerSlideDelay = React.useMemo(
		() => testimonials.some((t) => typeof t.delayMs === "number"),
		[testimonials],
	);

	const plugin = React.useRef(
		Autoplay({
			delay: hasPerSlideDelay
				? (scrollSnapList) =>
						scrollSnapList.map((_, i) => testimonials[i]?.delayMs ?? delay)
				: delay,
			stopOnInteraction: !resumeAfterInteraction,
			stopOnMouseEnter: pauseOnHover,
			stopOnFocusIn: pauseOnFocus,
		}),
	);

	// Track slide index.
	React.useEffect(() => {
		if (!api) return;
		setCurrent(api.selectedScrollSnap());

		const onSelect = () => setCurrent(api.selectedScrollSnap());
		api.on("select", onSelect);
		return () => {
			api.off("select", onSelect);
		};
	}, [api]);

	// (Optional) progress ticker—currently placeholder logic.
	React.useEffect(() => {
		if (!showProgress) return;
		// const currentDelay = hasPerSlideDelay
		// 	? testimonials[current]?.delayMs ?? delay
		// 	: delay;
		let frame: number;
		// const start = performance.now();
		const tick = () => {
			// const _elapsed = now - start;
			// TODO: set progress state if you want visible progress.
			frame = requestAnimationFrame(tick);
		};
		frame = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(frame);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [current, delay, hasPerSlideDelay, showProgress, testimonials]);

	/**
	 * If you want a Safari-friendly "fixed" background:
	 * Instead of relying on CSS `background-attachment: fixed`,
	 * conditionally render the image inside a `fixed` positioned wrapper
	 * that spans the viewport. That’s what we do below with `fixedBackground`.
	 */
	const bgRef = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		const onScroll = () => {
			const y = window.scrollY * 0.2; // tune factor
			const docHeight = document.documentElement.scrollHeight;
			if (bgRef.current) {
				bgRef.current.style.transform = `translateY(${y - docHeight / 9.6}px)`;
			}
		};

		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<section className="relative py-10 overflow-hidden">
			{/* Background image */}
			<div ref={bgRef} className="absolute inset-0 -z-10">
				<Image
					src="/leafs-bg-3.jpg" // adjust path
					alt=""
					fill
					priority
					sizes="100vw"
					className="object-cover object-center opacity-90"
				/>
				<div className="absolute inset-0 bg-black/10" />
			</div>
			{/* Overlay (dark gradient for contrast) */}
			{/* <span
				aria-hidden="true"
				className={
					fixedBackground
						? "pointer-events-none fixed inset-0 -z-10 bg-gradient-to-b from-black/20 via-black/30 to-black/40"
						: "hidden pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-black/20 via-black/30 to-black/40"
				}
			/> */}

			<div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center">
					<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 drop-shadow-xl">
						What Our Clients Say
					</h2>
					<p className="md:text-xl text-gray-600 max-w-4xl mx-auto drop-shadow-xl">
						Join hundreds of satisfied businesses who have transformed their
						workspaces with Greenry.
					</p>
				</div>

				<Carousel
					setApi={setApi}
					plugins={[plugin.current]}
					opts={{
						align: "start",
						loop,
					}}
					onMouseEnter={pauseOnHover ? plugin.current.stop : undefined}
					onMouseLeave={pauseOnHover ? plugin.current.reset : undefined}
					className="w-full"
				>
					<CarouselContent className="-ml-4 py-10">
						{testimonials.map((t, index) => (
							<CarouselItem
								key={index}
								className="pl-4 md:basis-1/2 lg:basis-1/3"
								aria-roledescription="slide"
								aria-label={`${index + 1} of ${testimonials.length}`}
							>
								<Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 h-full bg-green-50/10 backdrop-blur-lg border-gray-400">
									<CardContent className="p-6 flex flex-col h-full">
										{renderStars(t.rating)}
										<p className="text-gray-700 mb-6 flex-1">
											&quot;{t.content}&quot;
										</p>
										<div className="flex items-center mt-auto gap-2">
											<div className="relative h-16 w-16">
												<Image
													src={t.image}
													alt={t.name}
													fill
													// width={48}
													// height={48}
													className="rounded-full mr-4 object-cover object-top"
												/>
											</div>
											<div>
												<h4 className="font-semibold text-green-900 text-lg">
													{t.name}
												</h4>
												<p className="text-sm text-gray-600">{t.role}</p>
											</div>
										</div>
									</CardContent>
								</Card>
							</CarouselItem>
						))}
					</CarouselContent>

					{showArrows && (
						<div className="hidden md:block">
							<CarouselPrevious aria-label="Previous testimonial" />
							<CarouselNext aria-label="Next testimonial" />
						</div>
					)}
				</Carousel>
			</div>
		</section>
	);
}
