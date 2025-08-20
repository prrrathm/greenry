"use client";
import Link from "next/link";
// import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import BookingForm from "./BookingFormDialog";
// import { Button } from "./ui/button";
import { Mail, MailOpen, Phone, PhoneCall } from "lucide-react";
import NavMobileDrawer from "./NavMobileDrawer";
// import PhoneDropDown from "./Phone";
import Image from "next/image";

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
		{ label: "Services", link: "/services" },
		{ label: "Projects", link: "/projects" },
		{ label: "Blogs", link: "/blogs" },
		{ label: "About", link: "/about" },
		{ label: "Contact", link: "/contact" },
	];

	// const scrollToBooking = () => {
	// 	document.getElementById('book-demo')?.scrollIntoView({ behavior: 'smooth' });
	// };

	return (
		<div
			className={cn({
				"fixed flex items-center justify-between z-50 px-4 sm:px-8 py-4 backdrop-blur transition-all duration-500":
					true,
				"bg-primary/90 drop-shadow-lg rounded-none inset-x-0 top-0 ":
					isScrolled,
				"rounded-xl inset-x-[5%] md:inset-x-1/6 top-8": !isScrolled,
			})}
		>
			{/* Logo */}
			<Link
				href={"/"}
				className={cn(
					"font-black text-lg md:text-xl flex items-center gap-2",
					isScrolled ? "text-white" : "text-primary",
				)}
			>
				<Image
					src="/logo/logo-bold.png"
					alt="Snake Plant"
					width={30}
					height={30}
					className="rounded-md"
				/>
				<div className="w-full">Evergreenry</div>
			</Link>
			{/* Menu */}
			<div className="hidden md:flex gap-8 items-center font-semibold w-full justify-center pl-20">
				{navLinks.map((item, iter) => (
					<Link
						key={iter}
						href={item.link}
						className={cn(
							" transition-colors duration-200",
							isScrolled ? "text-white" : "text-gray-700 hover:text-primary",
						)}
					>
						{item.label}
					</Link>
				))}
			</div>
			<div className="flex flex-row-reverse md:flex-row items-center justify-center gap-3 md:gap-4">
				<NavMobileDrawer navLinks={navLinks} isScrolled={isScrolled} />
				{/* <div className="hover:bg-white hover:text-primary p-2 md:p-2.5 text-sm md:text-base w-fit sm:hidden">
					<Menu fill="#26420f" className="h-6 w-6 text-primary" />
				</div> */}
				<Link href="tel:+919891347119">
					<div
						className={cn(
							"group inline-flex items-center cursor-pointer",
							isScrolled ? "text-white" : "text-primary",
						)}
					>
						<Phone
							fill={isScrolled ? "#fff" : "#26420f"}
							className="h-4 w-4 md:h-5 md:w-5 cursor-pointer transition-all duration-200 group-hover:opacity-0 group-hover:scale-90"
						/>
						<PhoneCall
							fill={isScrolled ? "#fff" : "#26420f"}
							className="h-4 w-4 md:h-5 md:w-5 cursor-pointer transition-all duration-200 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 absolute"
						/>
					</div>
				</Link>
				<Link
					href="mailto:green@evergreenry.com"
					className={cn(
						"group inline-flex items-center",
						isScrolled ? "text-white" : "text-primary",
					)}
				>
					<Mail className="h-5 w-5 md:h-6 md:w-6 cursor-pointer transition-all duration-200 group-hover:opacity-0 group-hover:scale-90" />
					<MailOpen className="h-5 w-5 md:h-6 md:w-6 cursor-pointer transition-all duration-200 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 absolute" />
				</Link>
				<BookingForm
					hasTrigger={true}
					triggerText="Book Demo"
					isScrolled={isScrolled}
				/>
			</div>
			{/* CTA */}
			{/* <Button className="hidden md:block bg-primary hover:bg-primary text-white px-6 py-2">
				Book Demo
			</Button> */}
		</div>
	);
};
