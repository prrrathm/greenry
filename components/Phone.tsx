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
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem>
					{" "}
					<Link href="tel:+919891347119" className="flex">
						North: +91 98913 47119
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem>
					{" "}
					<Link href="tel:+919606130700" className="flex">
						South: +91 96061 30700
					</Link>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default PhoneDropDown;
