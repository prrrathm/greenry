"use client"
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	// DrawerDescription,
	// DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
// import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import {
	// Leaf,
	// Mail,
	// Phone,
	// MapPin,
	Facebook,
	Twitter,
	Instagram,
	Linkedin,
} from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const getNavDescription = (label: string): string => {
	const descriptions: Record<string, string> = {
		"Home": "Discover premium plant solutions for your office and home spaces",
		"Services": "Professional plant installation, maintenance, and consulting services",
		"Projects": "View our portfolio of office and home plant transformations",
		"Blogs": "Plant care tips, workspace design ideas, and green living insights",
		"About": "Learn about Evergreenry's mission and plant expertise",
		"Contact": "Get in touch for plant consultation and service inquiries"
	};
	return descriptions[label] || `Navigate to ${label} section`;
};

export default function NavMobileDrawer({
	navLinks,
	// isScrolled,
}: {
	navLinks: {
		label: string;
		link: string;
	}[];
	isScrolled: boolean;
}) {
	return (
		<Drawer>
			<DrawerTrigger>
				{" "}
				<div className="hover:bg-white hover:text-primary p-2 md:p-2.5 text-sm md:text-base w-fit sm:hidden">
					<Menu
						fill="#1e2939"
						className={cn(
							"h-6 w-6 text-gray-800",
							// isScrolled ? "text-white" : "text-gray-800",
						)}
					/>
				</div>
			</DrawerTrigger>
			<DrawerContent className="bg-white/80 backdrop-blur">
				<DrawerHeader>
					<DrawerTitle></DrawerTitle>
				</DrawerHeader>
				<div className="flex flex-col justify-center items-start max-h-[50vh] gap-6 pb-4">
					<div className="flex flex-col justify-center items-center gap-2 w-full px-6">
						{navLinks.map((item, iter) => (
							<motion.div
								key={iter}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{
									delay: iter * 0.2,
									duration: 0.4,
									ease: "easeOut",
								}}
								whileHover={{ scale: 1.05 }}
								className="text-gray-800 font-bold hover:text-primary transition-colors duration-200 text-xl text-center w-full"
							>
								<Link 
									href={item.link}
									aria-label={`Navigate to ${item.label} page - ${getNavDescription(item.label)}`}
									title={getNavDescription(item.label)}
								>
									<DrawerClose>{item.label}</DrawerClose>
								</Link>
							</motion.div>
						))}
					</div>
					<div className="mt-6 flex justify-center items-center gap-4 w-full">
						<Link href="https://facebook.com/evergreenry" aria-label="Follow Evergreenry on Facebook for plant tips and updates" title="Visit our Facebook page">
							<Facebook
								fill="#1e2939"
								className="h-6 w-6 text-gray-800 cursor-pointer transition-colors"
							/>
						</Link>
						<Link href="https://twitter.com/evergreenry" aria-label="Follow Evergreenry on Twitter for latest plant news" title="Visit our Twitter profile">
							<Twitter
								fill="#1e2939"
								className="h-6 w-6 text-gray-800 cursor-pointer transition-colors"
							/>
						</Link>
						<Link href="https://instagram.com/evergreenry" aria-label="Follow Evergreenry on Instagram for plant inspiration and project photos" title="Visit our Instagram profile">
							<Instagram
								fill="#1e2939"
								className="h-6 w-6 text-gray-200 hover:text-gray-800 cursor-pointer transition-colors"
							/>
						</Link>
						<Link href="https://linkedin.com/company/evergreenry" aria-label="Connect with Evergreenry on LinkedIn for business updates" title="Visit our LinkedIn company page">
							<Linkedin
								fill="#1e2939"
								className="h-6 w-6 text-gray-800 cursor-pointer transition-colors"
							/>
						</Link>
					</div>
				</div>
			</DrawerContent>
		</Drawer>
	);
}
