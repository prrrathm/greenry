import Link from "next/link";

export const NavBar = () => {
	const navLinks = [
		{ label: "Home", link: "/" },
		{ label: "Our Services", link: "/" },
		{ label: "About Us", link: "/" },
		{ label: "Blogs", link: "/'" },
	];
	return (
		<div className="fixed top-0 flex items-center justify-between w-full z-50 px-6 py-6 bg-white">
			{/* Logo */}
			<div className="font-black text-xl text-green-7800">GREENRY</div>
			{/* Menu */}
			<div className="flex gap-10 items-end justify-center font-bold">
				{navLinks.map((item, iter) => (
					<Link
						key={iter}
						href={item.link}
						className="cursor-pointer hover:text-green-800 hover:drop-shadow-lg transition-all duration-200"
					>
						{item.label}
					</Link>
				))}
			</div>
			{/* CTA */}
			<div className="border border-green-700 px-4 py-1 rounded-full text-green-800 bg-green-800/20 backdrop-blur font-semibold cursor-pointer">
				Enquire Now
			</div>
		</div>
	);
};
