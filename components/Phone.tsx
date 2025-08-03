import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	// DropdownMenuLabel,
	// DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Phone, PhoneCall } from "lucide-react";
import Link from "next/link";

const PhoneDropDown = ({ isScrolled }: { isScrolled: boolean }) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="flex items-center justify-center">
				<div
					className={cn(
						"group inline-flex items-center",
						isScrolled ? "text-white" : "text-green-800",
					)}
				>
					<Phone
						fill="#016630"
						className="h-5 w-5 cursor-pointer transition-all duration-200 group-hover:opacity-0 group-hover:scale-90"
					/>
					<PhoneCall
						fill="#016630"
						className="h-5 w-5cursor-pointer transition-all duration-200 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 absolute"
					/>
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem>
					{" "}
					<Link href="tel:+919999373473" className="flex">
						+91 99993 73473
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem>
					{" "}
					<Link href="tel:+919891347119" className="flex">
						+91 98913 47119
					</Link>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default PhoneDropDown;
