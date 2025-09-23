"use client"
import React from "react";
import { motion } from "framer-motion";

const MainTagline = () => {
	return (
		<section className="main-tagline-section bg-[var(--color-background-primary)] py-24 md:py-28">
			<div className="flex w-full items-center justify-center">
				<div className="mx-auto w-full text-center lg:w-10/12 xl:w-8/12">
					<motion.h3
						className="font-display text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-700 text-center"
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.6 }}
						transition={{ duration: 0.6, ease: "easeOut" }}
					>
						We&apos;re a tech-led design and build venture creating future ready
						spaces for our partners. We deliver integrated services across
						interior design, product supply and project management globally.
					</motion.h3>
				</div>
			</div>
		</section>
	);
};

export default MainTagline;
