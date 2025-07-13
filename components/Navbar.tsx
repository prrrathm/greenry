"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const NavBar = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 150);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	const navLinks = [
		{ label: "Home", link: "/" },
		{ label: "Services", link: "#services" },
		{ label: "About", link: "#about" },
		{ label: "Projects", link: "#testimonials" },
	];

	// const scrollToBooking = () => {
	// 	document.getElementById('book-demo')?.scrollIntoView({ behavior: 'smooth' });
	// };

	return (
		<div
			className={cn({
				"fixed flex items-center justify-between z-50 px-4 sm:px-6 py-4  backdrop-blur transition-all duration-500":
					true,
				"bg-white/70 drop-shadow-lg rounded-none inset-x-0 top-0": isScrolled,
				"rounded-xl inset-x-1/12 md:inset-x-1/5 top-8": !isScrolled,
			})}
		>
			{/* Logo */}
			<div className="font-black text-xl text-green-800">GREENRY</div>
			{/* Menu */}
			<div className="hidden md:flex gap-8 items-center font-semibold">
				{navLinks.map((item, iter) => (
					<Link
						key={iter}
						href={item.link}
						className="text-gray-700 hover:text-green-600 transition-colors duration-200"
					>
						{item.label}
					</Link>
				))}
			</div>
			{/* CTA */}
			<Button className="hidden md:block bg-green-800 hover:bg-green-700 text-white px-6 py-2">
				Book Demo
			</Button>
		</div>
	);
};
