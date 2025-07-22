import { Button } from "@/components/ui/button";
import {
	Dialog,
	// DialogClose,
	DialogContent,
	// DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { services } from "@/lib/variables";
import { Textarea } from "../ui/textarea";
const BookingForm = ({
	hasTrigger,
	triggerText,
}: {
	hasTrigger: boolean;
	triggerText?: string;
}) => {
	return (
		<Dialog>
			<form>
				{hasTrigger ? (
					<DialogTrigger asChild>
						<Button className="hidden md:block bg-green-800 hover:bg-green-700 text-white px-6 py-2 cursor-pointer">
							{triggerText}
						</Button>
					</DialogTrigger>
				) : (
					<></>
				)}
				<DialogContent className="sm:max-w-[425px] bg-slate-100 rounded-4xl py-8">
					<DialogHeader>
						<DialogTitle className="text-green-800 text-2xl">
							Reach out to us
						</DialogTitle>
						{/* <DialogDescription>
							Make changes to your profile here. Click save when you&apos;re
							done.
						</DialogDescription> */}
					</DialogHeader>
					<div className="grid gap-4">
						<div className="grid gap-3">
							{/* <Label htmlFor="name-1">Name</Label> */}
							<Input id="name-1" name="name" placeholder="Name" />
						</div>
						<div className="grid gap-3">
							{/* <Label htmlFor="email">Email</Label> */}
							<Input id="email" name="email" placeholder="Email" />
						</div>
						<div className="grid gap-3">
							{/* <Label htmlFor="number">Contact Number</Label> */}
							<Input id="number" name="number" type="number" placeholder="Phone Number" />
						</div>
						<div className="">
							<Select>
								<SelectTrigger className="w-full">
									<SelectValue placeholder="Select Service" />
								</SelectTrigger>
								<SelectContent>
									{services.map((item, iter) => (
										<SelectItem value={item} key={iter}>
											{item}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</div>
						<div className="grid gap-3">
							{/* <Label htmlFor="number">Contact Number</Label> */}
							<Textarea id="number" name="number" className="resize-none h-20" placeholder="Your Message" />
						</div>

					</div>
					<DialogFooter>
						{/* <DialogClose asChild>
							<Button variant="outline">Cancel</Button>
						</DialogClose> */}
						<Button
							type="submit"
							className="hidden md:block bg-green-800 hover:bg-green-700 text-white px-6 py-2 cursor-pointer w-full"
						>
							Send Enquiry
						</Button>
					</DialogFooter>
				</DialogContent>
			</form>
		</Dialog>
	);
};

export default BookingForm;
