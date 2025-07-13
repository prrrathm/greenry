import Link from "next/link";
import { Button } from "@/components/ui/button";

export const NavBar = () => {
	const navLinks = [
		{ label: "Home", link: "/" },
		{ label: "Services", link: "#services" },
		{ label: "About", link: "#about" },
		{ label: "Testimonials", link: "#testimonials" },
	];

	// const scrollToBooking = () => {
	// 	document.getElementById('book-demo')?.scrollIntoView({ behavior: 'smooth' });
	// };

	return (
		<div className="fixed top-0 flex items-center justify-between w-full z-50 px-4 sm:px-6 py-4 bg-white/95 backdrop-blur-sm border-b border-gray-100">
			{/* Logo */}
			<div className="font-black text-xl text-green-800">GREENRY</div>
			{/* Menu */}
			<div className="hidden md:flex gap-8 items-center font-medium">
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
			<Button
				className="bg-green-600 hover:bg-green-700 text-white px-6 py-2"
			>
				Book Demo
			</Button>
		</div>
	);
};
