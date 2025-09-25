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

const getNavDescription = (label: string): string => {
	const descriptions: Record<string, string> = {
		Home: "Discover premium plant solutions for your office and home spaces",
		Services:
			"Professional plant installation, maintenance, and consulting services",
		Projects: "View our portfolio of office and home plant transformations",
		Blogs: "Plant care tips, workspace design ideas, and green living insights",
		About: "Learn about Evergreenry's mission and plant expertise",
		Contact: "Get in touch for plant consultation and service inquiries",
	};
	return descriptions[label] || `Navigate to ${label} section`;
};

export const NavBar = () => {
	const [isScrolled, setIsScrolled] = useState(true);

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
				"fixed flex items-center justify-between z-50 px-4 sm:px-8 py-4 backdrop-blur transition-all duration-500 inset-x-0 top-0":
					true,
				"bg-[var(--color-background-primary)]": isScrolled,
				"bg-primary/10": !isScrolled,
			})}
		>
			{/* Logo */}
			<Link
				href={"/"}
				aria-label="Evergreenry home page - Premium plant solutions for offices and homes"
				title="Return to Evergreenry homepage"
				className={cn(
					"font-black text-lg md:text-xl flex items-center",
					isScrolled ? "text-primary" : "text-white",
				)}
			>
				<Image
					src="/logo/logo-gold.png"
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
						aria-label={`Navigate to ${item.label} page - ${getNavDescription(
							item.label,
						)}`}
						title={getNavDescription(item.label)}
						className={cn(
							" transition-colors duration-200",
							isScrolled
								? "text-black hover:text-secondary"
								: "text-secondary hover:text-white",
						)}
					>
						{item.label}
					</Link>
				))}
			</div>
			<div className="flex flex-row-reverse md:flex-row items-center justify-center gap-3 md:gap-4">
				<NavMobileDrawer navLinks={navLinks} isScrolled={true} />
				{/* <div className="hover:bg-white hover:text-primary p-2 md:p-2.5 text-sm md:text-base w-fit sm:hidden">
					<Menu fill="#26420f" className="h-6 w-6 text-primary" />
				</div> */}
				<Link
					href="tel:+919891347119"
					aria-label="Call Evergreenry North Office at +91 9891347119 for plant consultation and services"
					title="Call us for immediate plant consultation"
					className={cn(
						"group inline-flex items-center justify-center cursor-pointer text-white",
						isScrolled ? "text-primary" : "text-white",
					)}
				>
					<Phone
						fill={isScrolled ? "#26420f" : "#fff"}
						// fill={"#fff"}
						className="h-4 w-4 md:h-5 md:w-5 cursor-pointer transition-all duration-200 group-hover:opacity-0 group-hover:scale-90"
					/>
					<PhoneCall
						// fill={"#fff"}
						fill={isScrolled ? "#26420f" : "#fff"}
						className="h-4 w-4 md:h-5 md:w-5 cursor-pointer transition-all duration-200 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 absolute"
					/>
				</Link>
				<Link
					href="mailto:green@evergreenry.com"
					aria-label="Email Evergreenry at green@evergreenry.com for general inquiries and plant services"
					title="Send us an email for detailed plant consultation"
					className={cn(
						"group inline-flex items-center ",
						isScrolled ? "text-primary" : "text-white",
					)}
				>
					<Mail className="h-5 w-5 md:h-6 md:w-6 cursor-pointer transition-all duration-200 group-hover:opacity-0 group-hover:scale-90" />
					<MailOpen className="h-5 w-5 md:h-6 md:w-6 cursor-pointer transition-all duration-200 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 absolute" />
				</Link>
				<BookingForm
					hasTrigger={true}
					triggerText="Book Demo"
					isScrolled={true}
				/>
			</div>
			{/* CTA */}
			{/* <Button className="hidden md:block bg-primary hover:bg-primary text-white px-6 py-2">
				Book Demo
			</Button> */}
		</div>
	);
};
