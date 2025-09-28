"use client";

import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { services } from "@/lib/variables";
import { Textarea } from "../ui/textarea";
import { cn } from "@/lib/utils";

import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { toast } from "sonner";

const schema = z.object({
	name: z.string().min(2, "Name is required"),
	email: z.string().email("Invalid email"),
	number: z
		.string()
		.min(10, "Enter a valid number")
		.max(15, "Enter a valid number"),
	service: z.string().min(1, "Please select a service"),
	message: z.string().min(5, "Message must be at least 5 characters"),
});

type FormData = z.infer<typeof schema>;

const BookingForm = ({
	hasTrigger,
	triggerText,
	isScrolled,
}: {
	hasTrigger: boolean;
	triggerText?: string;
	isScrolled: boolean;
}) => {
	const {
		register,
		handleSubmit,
		control,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<FormData>({
		resolver: zodResolver(schema),
		defaultValues: {
			name: "",
			email: "",
			number: "",
			service: "",
			message: "",
		},
	});

	const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

	const onSubmit = async (data: FormData) => {
		console.log("Form submitted with data:", data);
		setStatus("idle");
		try {
			const res = await fetch("/api/send-mail", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});

			if (res.ok) {
				setStatus("success");
				toast.info(
					"Thank you for reaching out to us, our team will contact you shortly.",
				);
				reset();
			} else {
				setStatus("error");
			}
		} catch (e) {
			setStatus("error");
			toast.error("There was Some issue, please try again later.");
			console.log("error", e);
		}
	};

	return (
		<Dialog>
			{hasTrigger && (
				<DialogTrigger asChild>
					<Button
						className={cn(
							"hidden md:block px-6 py-2 cursor-pointer text-white",
							// isScrolled
							// 	? "bg-amber-400 hover:bg-amber-600 text-black"
							// 	: "bg-amber-600 hover:bg-amber-700 text-white",
						)}
					>
						{triggerText}
					</Button>
				</DialogTrigger>
			)}

			<DialogContent className="sm:max-w-[425px] bg-slate-100 rounded-4xl py-8">
				<DialogHeader>
					<DialogTitle className="text-primary text-2xl">
						Reach out to us
					</DialogTitle>
				</DialogHeader>

				{/* ✅ FORM IS NOW INSIDE DialogContent */}
				<form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
					<div>
						<Input id="name" placeholder="Name" {...register("name")} />
						{errors.name && (
							<p className="text-red-500 text-sm">{errors.name.message}</p>
						)}
					</div>
					<div>
						<Input id="email" placeholder="Email" {...register("email")} />
						{errors.email && (
							<p className="text-red-500 text-sm">{errors.email.message}</p>
						)}
					</div>
					<div>
						<Input
							id="number"
							type="tel"
							placeholder="Phone Number"
							{...register("number")}
						/>
						{errors.number && (
							<p className="text-red-500 text-sm">{errors.number.message}</p>
						)}
					</div>
					<div>
						<Controller
							name="service"
							control={control}
							defaultValue=""
							render={({ field }) => (
								<Select onValueChange={field.onChange} value={field.value}>
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
							)}
						/>
						{errors.service && (
							<p className="text-red-500 text-sm">{errors.service.message}</p>
						)}
					</div>
					<div>
						<Textarea
							id="message"
							placeholder="Your Message"
							className="resize-none h-20"
							{...register("message")}
						/>
						{errors.message && (
							<p className="text-red-500 text-sm">{errors.message.message}</p>
						)}
					</div>

					<DialogFooter>
						<Button
							type="submit"
							className="w-full bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 cursor-pointer"
							disabled={isSubmitting}
						>
							{isSubmitting ? "Sending..." : "Send Enquiry"}
						</Button>
					</DialogFooter>
				</form>

				{status === "success" && (
					<p className="text-green-600 text-center pt-2">
						Message sent successfully!
					</p>
				)}
				{status === "error" && (
					<p className="text-red-600 text-center pt-2">
						Failed to send message. Try again.
					</p>
				)}
			</DialogContent>
		</Dialog>
	);
};

export default BookingForm;
