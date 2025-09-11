import Link from "next/link";
import { Mail, Phone } from "lucide-react";

const Ribbon = () => {
	return (
		<div className="h-5 bg-primary fixed inset-x-0 top-0 z-999 text-white flex text-sm justify-between px-4">
			<div>Greens in Every Home, With Us!</div>
			<div className="flex gap-4">
				<div className="flex gap-2 items-center">
					<Phone fill="#ffffff" className="h-4 w-4 text-white" />
					<span>
						<Link href="tel:+919891347119">North: +91 98913 47119</Link>
						{" | "}
						<Link href="tel:+919606130700">South: +91 96061 30700</Link>
					</span>
				</div>
				<div className="flex gap-2 items-center">
					<Mail className="h-4 w-4 text-white" />
					<span>green@evergreenry.com</span>
				</div>
			</div>
		</div>
	);
};

export default Ribbon;
