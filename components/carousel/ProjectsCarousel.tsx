"use client";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	// CarouselNext,
	// CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Leaf } from "lucide-react";
import Image from "next/image";

export function ProjectsCarousel() {
	return (
		<Carousel
			opts={{
				align: "start",
				loop: true,
			}}
			plugins={[
				Autoplay({
					delay: 2500,
				}),
			]}
			className="w-screen"
		>
			<CarouselContent className="-ml-1">
				{Array.from({ length: 5 }).map((_, index) => (
					<CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/4">
						<div className="p-1">
							<div className="flex border min-w-[20vw] aspect-square relative rounded-4xl overflow-clip">
								<Image
									src={"/clients/google.jpg"}
									// src={client.logo}
									alt={`logo`}
									fill
									sizes="160px"
									className="object-cover z-10"
								/>
								<div className="z-20 px-10 py-4 h-full w-full bg-gradient-to-b from-black/20  to-black/60 hover:to-black/90 hover:backdrop-blur-sm transition-all duration-500 cursor-pointer flex items-end ">
									<div className="flex justify-between items-center text-white">
										<Leaf className="h-10 w-10" />
										<div className="text-2xl font-semibold">Google</div>
									</div>
								</div>
							</div>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			{/* <CarouselPrevious />
			<CarouselNext /> */}
		</Carousel>
	);
}
