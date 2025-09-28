"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, User } from "lucide-react"; // Removed unused Clock import
import { cn } from "@/lib/utils";
import { toast } from "sonner";

// Zod schema for form validation
const formSchema = z.object({
	name: z.string().min(1, "Name is required"),
	email: z.string().email("Invalid email address").min(1, "Email is required"),
	phone: z.string().min(1, "Phone number is required"),
	company: z.string().optional(),
	// spaceType: z.string().min(1, "Space type is required"),
	spaceType: z.string().optional(),
	preferredDate: z.string().optional(),
	message: z.string().optional(),
});

// Infer TypeScript type from Zod schema
type FormData = z.infer<typeof formSchema>;

export default function BookingFormBeta() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
	} = useForm<FormData>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			phone: "",
			company: "",
			spaceType: "",
			preferredDate: "",
			message: "",
		},
	});

	const onSubmit = async (data: FormData) => {
		try {
			const res = await fetch("/api/send-mail", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});

			const result = await res.json();

			if (result.success) {
				toast.info(
					"Thank you! We'll contact you within 24 hours to schedule your consultation.",
				);
				reset();
			} else {
				toast.error("Something went wrong. Please try again.");
			}
		} catch (err) {
			toast.error("Something went wrong. Please try again.");
			console.error(err);
			// alert("Failed to send message.");
		}
	};
	// const services = [
	// 	"Office Plants",
	// 	"Green Walls",
	// 	"Moss Walls",
	// 	"Plant Maintenance",
	// 	"Zen Garden",
	// 	"Indoor Terrarium",
	// ];

	return (
		<section
			id="book-demo"
			className="py-20 md:py-20 bg-[#27918B50] rounded-t-4xl"
		>
			<div className="container mx-auto px-2 sm:px-6 lg:px-8">
				<div className="max-w-6xl mx-auto flex flex-col gap-4 md:gap-12">
					{/* <div className="text-center">
						<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
							Book Your Free Consultation
						</h2>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">
							Let our experts assess your space and create a customized plant
							solution that transforms your environment.
						</p>
					</div> */}

					<div className="max-w-2xl mx-auto px-4">
						{/* Form */}
						<Card className="shadow-lg border border-gray-200">
							<CardHeader className=" border-b border-gray-200">
								<CardTitle className="text-3xl font-semibold text-gray-900">
									Schedule Your Consultation
								</CardTitle>
								<CardDescription className="text-gray-600">
									Fill out the form below and we&apos;ll contact you within 24
									hours to confirm your appointment.
								</CardDescription>
							</CardHeader>
							<CardContent className="p-8">
								<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
									<div className="grid md:grid-cols-2 gap-6">
										<div className="space-y-2">
											<label
												htmlFor="booking-name"
												className="text-sm font-semibold text-gray-700"
											>
												Full Name *
											</label>
											<div className="relative">
												<User
													className="absolute left-3 top-3.5 h-5 w-5 text-[#418833]"
													aria-hidden="true"
												/>
												<Input
													id="booking-name"
													{...register("name")}
													placeholder="Enter your full name"
													className="pl-12 h-12 border-2 border-gray-200 focus:border-[#418833] rounded-lg transition-colors"
													aria-describedby={
														errors.name ? "booking-name-error" : undefined
													}
												/>
												{errors.name && (
													<p
														id="booking-name-error"
														className="text-red-500 text-sm mt-1 flex items-center gap-1"
														role="alert"
													>
														{errors.name.message}
													</p>
												)}
											</div>
										</div>
										<div className="space-y-2">
											<label
												htmlFor="booking-phone"
												className="text-sm font-semibold text-gray-700"
											>
												Phone Number *
											</label>
											<div className="relative">
												<Phone
													className="absolute left-3 top-3.5 h-5 w-5 text-[#27918B]"
													aria-hidden="true"
												/>
												<Input
													id="booking-phone"
													{...register("phone")}
													type="tel"
													placeholder="+91 9891347119"
													className="pl-12 h-12 border-2 border-gray-200 focus:border-[#27918B] rounded-lg transition-colors"
													aria-describedby={
														errors.phone ? "booking-phone-error" : undefined
													}
												/>
												{errors.phone && (
													<p
														id="booking-phone-error"
														className="text-red-500 text-sm mt-1 flex items-center gap-1"
														role="alert"
													>
														{errors.phone.message}
													</p>
												)}
											</div>
										</div>
									</div>

									<div className="grid md:grid-cols-2 gap-6">
										<div className="space-y-2">
											<label
												htmlFor="booking-email"
												className="text-sm font-medium text-gray-700"
											>
												Email *
											</label>
											<div className="relative">
												<Mail
													className="absolute left-3 top-3 h-4 w-4 text-gray-400"
													aria-hidden="true"
												/>
												<Input
													id="booking-email"
													{...register("email")}
													type="email"
													placeholder="Your Email"
													className="pl-10"
													aria-describedby={
														errors.email ? "booking-email-error" : undefined
													}
												/>
												{errors.email && (
													<p
														id="booking-email-error"
														className="text-red-500 text-xs mt-1"
														role="alert"
													>
														{errors.email.message}
													</p>
												)}
											</div>
										</div>
										<div className="space-y-2">
											<label
												htmlFor="booking-company"
												className="text-sm font-medium text-gray-700"
											>
												Company Name
											</label>
											<Input
												id="booking-company"
												{...register("company")}
												placeholder="Your Company"
											/>
										</div>
									</div>

									{/* <div className="grid grid-cols-2 gap-4">
										<div className="space-y-2">
											<label
												htmlFor="booking-service-type"
												className="text-sm font-medium text-gray-700"
											>
												Service Type *
											</label>
											<select
												id="booking-service-type"
												{...register("spaceType")}
												className="w-full h-9 px-3 py-1 text-sm border border-input bg-transparent rounded-md shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
												aria-describedby={
													errors.spaceType
														? "booking-service-type-error"
														: undefined
												}
											>
												<option value="" disabled>
													Select Service type
												</option>
												{services.map((item, iter) => (
													<option
														key={iter}
														value={item.toLowerCase().replace(/\s+/g, "-")}
													>
														{item}
													</option>
												))}
											</select>
											{errors.spaceType && (
												<p
													id="booking-service-type-error"
													className="text-red-500 text-xs mt-1"
													role="alert"
												>
													{errors.spaceType.message}
												</p>
											)}
										</div>
										<div className="space-y-2">
											<label
												htmlFor="booking-preferred-date"
												className="text-sm font-medium text-gray-700"
											>
												Preferred Date
											</label>
											<div className="relative">
												<Calendar
													className="absolute left-3 top-3 h-4 w-4 text-gray-400"
													aria-hidden="true"
												/>
												<Input
													id="booking-preferred-date"
													{...register("preferredDate")}
													type="date"
													className="pl-10"
												/>
											</div>
										</div>
									</div> */}
									<div className="space-y-2">
										<label
											htmlFor="booking-message"
											className="text-sm font-medium text-gray-700"
										>
											Your message here
										</label>
										<Textarea
											id="booking-message"
											{...register("message")}
											placeholder="Tell us about your space, specific requirements, or any questions you have..."
											rows={4}
										/>
									</div>

									<Button
										type="submit"
										aria-label={
											isSubmitting
												? "Submitting consultation request, please wait"
												: "Submit consultation request form"
										}
										className={cn(
											"w-full bg-[#27918B] text-white font-medium py-3 h-11",
											isSubmitting
												? "cursor-progress opacity-80"
												: "cursor-pointer",
										)}
										disabled={isSubmitting}
									>
										{isSubmitting
											? "Submitting..."
											: "Schedule Free Consultation"}
									</Button>
								</form>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
}
