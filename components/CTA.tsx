"use client";

import { Button } from "@/components/ui/button";
import { ArrowUp, Phone } from "lucide-react";

export default function CTA() {
	const scrollToBooking = () => {
		document
			.getElementById("book-demo")
			?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<section className="py-20 flex items-center bg-primary ">
			<div className="container mx-auto px-2 sm:px-6 lg:px-8 text-white flex flex-col items-center justify-center text-center">
				<h2 className="text-2xl sm:text-4xl font-bold mb-2 md:mb-4 px-0">
					Ready to Transform Your Space?
				</h2>
				<p className="text-sm md:text-lg mb-8 max-w-2xl mx-auto opacity-90">
					Join hundreds of satisfied clients who have created healthier, more
					productive environments with Evergreenry.
				</p>

				<div className="flex px-2 gap-4 md:gap-4 justify-center items-center md:w-max w-full">
					<Button
						onClick={scrollToBooking}
						aria-label="Book free consultation - Schedule your plant transformation visit"
						title="Click to book your free consultation and transform your space with plants"
						className="bg-white text-primary hover:bg-gray-100 py-4 font-bold text-sm md:text-base w-full min-h-[44px]"
					>
						Book Free Consultation
						<ArrowUp className="h-5 w-5" aria-hidden="true" />
					</Button>
					<div className="font-semibold text-sm md:text-xl">or</div>
					<Button
						variant="outline"
						aria-label="Call us at +91 9891347119 for immediate assistance"
						title="Click to call our plant experts at +91 9891347119"
						className="border-white text-black hover:bg-white hover:text-primary p-2 md:p-2.5 text-sm md:text-base w-fit rounded-full min-w-[44px] min-h-[44px]"
					>
						<Phone
							fill="#418833"
							className="h-5 w-5 text-primary"
							aria-hidden="true"
						/>
					</Button>
				</div>

				<div className="mt-12 grid grid-cols-3 gap-1 md:gap-8 text-center w-full text-xs md:text-base">
					<div>
						<div className="text-xl md:text-3xl font-bold mb-1">24-48h</div>
						<div className="opacity-90 whitespace-nowrap">
							Quick Installation
						</div>
					</div>
					<div>
						<div className="text-xl md:text-3xl font-bold mb-1">100%</div>
						<div className="opacity-90 whitespace-nowrap">
							Satisfaction Guarantee
						</div>
					</div>
					<div>
						<div className="text-xl md:text-3xl font-bold mb-1">24/7</div>
						<div className="opacity-90 whitespace-nowrap">Expert Support</div>
					</div>
				</div>
			</div>
		</section>
	);
}
