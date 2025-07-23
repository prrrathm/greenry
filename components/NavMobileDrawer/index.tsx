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

export default function NavMobileDrawer({
	navLinks,
}: {
	navLinks: {
		label: string;
		link: string;
	}[];
}) {
	return (
		<Drawer>
			<DrawerTrigger>
				{" "}
				<div className="hover:bg-white hover:text-green-600 p-2 md:p-2.5 text-sm md:text-base w-fit sm:hidden">
					<Menu fill="#1e2939" className="h-6 w-6 text-gray-800" />
				</div>
			</DrawerTrigger>
			<DrawerContent className="bg-white/80 backdrop-blur">
				<DrawerHeader>
					<DrawerTitle></DrawerTitle>
				</DrawerHeader>
				<div className="flex flex-col justify-center items-start max-h-[50vh] gap-6 pb-4">
					<div className="flex flex-col justify-center items-start gap-4 w-full">
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
								className="text-gray-800 font-bold hover:text-green-600 transition-colors duration-200 text-3xl text-center w-full"
							>
								<Link href={item.link}>
									<DrawerClose>{item.label}</DrawerClose>
								</Link>
							</motion.div>
						))}
					</div>
					<div className="mt-6 flex justify-center items-center gap-4 w-full">
						<Facebook
							fill="#1e2939"
							className="h-6 w-6 text-gray-800 cursor-pointer transition-colors"
						/>
						<Twitter
							fill="#1e2939"
							className="h-6 w-6 text-gray-800 cursor-pointer transition-colors"
						/>
						<Instagram
							fill="#1e2939"
							className="h-6 w-6 text-gray-200 hover:text-gray-800 cursor-pointer transition-colors"
						/>
						<Linkedin
							fill="#1e2939"
							className="h-6 w-6 text-gray-800 cursor-pointer transition-colors"
						/>
					</div>
				</div>
			</DrawerContent>
		</Drawer>
	);
}
