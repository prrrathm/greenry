"use client";
import Link from "next/link";
// import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import BookingForm from "./BookingFormDialog";
// import { Button } from "./ui/button";
import { Phone } from "lucide-react";
import NavMobileDrawer from "./NavMobileDrawer";

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
				"bg-white/70 drop-shadow-lg rounded-none inset-x-0 top-0 ": isScrolled,
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
			<div className="flex items-center justify-center gap-2">
				<div className="hover:bg-white hover:text-green-600 p-2 md:p-2.5 text-sm md:text-base w-fit sm:hidden">
					<Phone fill="#016630" className="h-5 w-5 text-green-800" />
				</div>
				<NavMobileDrawer navLinks={navLinks} />
				{/* <div className="hover:bg-white hover:text-green-600 p-2 md:p-2.5 text-sm md:text-base w-fit sm:hidden">
					<Menu fill="#016630" className="h-6 w-6 text-green-800" />
				</div> */}
				<BookingForm hasTrigger={true} triggerText="Book Demo" />
			</div>
			{/* CTA */}
			{/* <Button className="hidden md:block bg-green-800 hover:bg-green-700 text-white px-6 py-2">
				Book Demo
			</Button> */}
		</div>
	);
};
