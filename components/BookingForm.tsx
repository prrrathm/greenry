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
import { Calendar, MapPin, Phone, Mail, User } from "lucide-react"; // Removed unused Clock import
import { cn } from "@/lib/utils";
import { toast } from "sonner";

// Zod schema for form validation
const formSchema = z.object({
	name: z.string().min(1, "Name is required"),
	email: z.string().email("Invalid email address").min(1, "Email is required"),
	phone: z.string().min(1, "Phone number is required"),
	company: z.string().optional(),
	spaceType: z.string().min(1, "Space type is required"),
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
	const services = [
		"Office Plants",
		"Green Walls",
		"Moss Walls",
		"Plant Maintenance",
		"Zen Garden",
		"Indoor Terrarium",
	];

	return (
		<section
			id="book-demo"
			className="py-20 md:py-20 bg-gradient-to-br from-lime-50 to-white"
		>
			<div className="container mx-auto px-2 sm:px-6 lg:px-8">
				<div className="max-w-4xl mx-auto flex flex-col gap-4 md:gap-10">
					<div className="text-center">
						<h2 className="text-2xl sm:text-4xl font-roboto font-extrabold text-gray-700 mb-2 md:mb-4">
							Book Your Free Consultation
						</h2>
						<p className="text-sm md:text-xl text-gray-600 max-w-2xl mx-auto">
							Let our experts assess your space and create a customized plant
							solution that transforms your environment.
						</p>
					</div>

					<div className="grid lg:grid-cols-2 gap-12 px-4">
						{/* Form */}
						<Card className="shadow-xl border-0">
							<CardHeader>
								<CardTitle className="text-2xl text-gray-900">
									Schedule Your Visit
								</CardTitle>
								<CardDescription>
									Fill out the form below and we&apos;ll contact you within 24
									hours to confirm your appointment.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
									<div className="grid md:grid-cols-2 gap-4">
										<div className="space-y-2">
											<label htmlFor="booking-name" className="text-sm font-medium text-gray-700">
												Full Name *
											</label>
											<div className="relative">
												<User className="absolute left-3 top-3 h-4 w-4 text-gray-400" aria-hidden="true" />
												<Input
													id="booking-name"
													{...register("name")}
													placeholder="John Doe"
													className="pl-10"
													aria-describedby={errors.name ? "booking-name-error" : undefined}
												/>
												{errors.name && (
													<p id="booking-name-error" className="text-red-500 text-xs mt-1" role="alert">
														{errors.name.message}
													</p>
												)}
											</div>
										</div>
										<div className="space-y-2">
											<label htmlFor="booking-email" className="text-sm font-medium text-gray-700">
												Email *
											</label>
											<div className="relative">
												<Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" aria-hidden="true" />
												<Input
													id="booking-email"
													{...register("email")}
													type="email"
													placeholder="john@company.com"
													className="pl-10"
													aria-describedby={errors.email ? "booking-email-error" : undefined}
												/>
												{errors.email && (
													<p id="booking-email-error" className="text-red-500 text-xs mt-1" role="alert">
														{errors.email.message}
													</p>
												)}
											</div>
										</div>
									</div>

									<div className="grid md:grid-cols-2 gap-4">
										<div className="space-y-2">
											<label htmlFor="booking-phone" className="text-sm font-medium text-gray-700">
												Phone *
											</label>
											<div className="relative">
												<Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" aria-hidden="true" />
												<Input
													id="booking-phone"
													{...register("phone")}
													type="tel"
													placeholder="+91 9891347119"
													className="pl-10"
													aria-describedby={errors.phone ? "booking-phone-error" : undefined}
												/>
												{errors.phone && (
													<p id="booking-phone-error" className="text-red-500 text-xs mt-1" role="alert">
														{errors.phone.message}
													</p>
												)}
											</div>
										</div>
										<div className="space-y-2">
											<label htmlFor="booking-company" className="text-sm font-medium text-gray-700">
												Company
											</label>
											<Input
												id="booking-company"
												{...register("company")}
												placeholder="Your Company"
											/>
										</div>
									</div>

									<div className="grid grid-cols-2 gap-4">
										<div className="space-y-2">
											<label htmlFor="booking-service-type" className="text-sm font-medium text-gray-700">
												Service Type *
											</label>
											<select
												id="booking-service-type"
												{...register("spaceType")}
												className="w-full h-9 px-3 py-1 text-sm border border-input bg-transparent rounded-md shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
												aria-describedby={errors.spaceType ? "booking-service-type-error" : undefined}
											>
												<option value="" disabled>Select Service type</option>
												{services.map((item, iter) => (
													<option key={iter} value={item.toLowerCase().replace(/\s+/g, '-')}>
														{item}
													</option>
												))}
											</select>
											{errors.spaceType && (
												<p id="booking-service-type-error" className="text-red-500 text-xs mt-1" role="alert">
													{errors.spaceType.message}
												</p>
											)}
										</div>
										<div className="space-y-2">
											<label htmlFor="booking-preferred-date" className="text-sm font-medium text-gray-700">
												Preferred Date
											</label>
											<div className="relative">
												<Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" aria-hidden="true" />
												<Input
													id="booking-preferred-date"
													{...register("preferredDate")}
													type="date"
													className="pl-10"
												/>
											</div>
										</div>
									</div>
									<div className="space-y-2">
										<label htmlFor="booking-message" className="text-sm font-medium text-gray-700">
											Additional Information
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
										aria-label={isSubmitting ? "Submitting consultation request, please wait" : "Submit consultation request form"}
										className={cn(
											"w-full bg-primary hover:bg-primary text-white py-3 min-h-[44px] min-w-[44px]",
											isSubmitting ? "cursor-progress" : "cursor-pointer",
										)}
										disabled={isSubmitting}
									>
										{isSubmitting
											? "Submitting..."
											: "Schedule a Free Consultation"}
									</Button>
								</form>
							</CardContent>
						</Card>

						{/* Info Panel */}
						<div className="space-y-4">
							<Card className="border-0 bg-green-50">
								<CardContent className="p-6 text-sm">
									<h3 className="text-xl font-semibold text-gray-900 mb-4">
										What to Expect
									</h3>
									<ul className="space-y-1">
										<li className="flex items-start">
											<div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
											<span className="text-gray-700">
												Comprehensive space assessment
											</span>
										</li>
										<li className="flex items-start">
											<div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
											<span className="text-gray-700">
												Customized plant recommendations
											</span>
										</li>
										<li className="flex items-start">
											<div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
											<span className="text-gray-700">
												Detailed proposal and pricing
											</span>
										</li>
										<li className="flex items-start">
											<div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
											<span className="text-gray-700">
												Maintenance plan discussion
											</span>
										</li>
									</ul>
								</CardContent>
							</Card>

							<Card className="border-0 bg-blue-50">
								<CardContent className="p-6 text-sm">
									<h3 className="text-xl font-semibold text-gray-900 mb-4">
										Contact Information
									</h3>
									<div className="space-y-1">
										<div className="flex items-center">
											<Phone className="h-5 w-5 text-blue-600 mr-3" />
											<span className="text-gray-700">+91 9891347119</span>
										</div>
										<div className="flex items-center">
											<Mail className="h-5 w-5 text-blue-600 mr-3" />
											<span className="text-gray-700">
												green@evergreenry.com
											</span>
										</div>
										<div className="flex items-center">
											<MapPin className="h-5 w-5 text-blue-600 mr-3" />
											<span className="text-gray-700">
												Available nationwide
											</span>
										</div>
									</div>
								</CardContent>
							</Card>

							<Card className="border-0 bg-yellow-50">
								<CardContent className="p-6">
									<h3 className="text-xl font-semibold text-gray-900 mb-2">
										Free Consultation
									</h3>
									<p className="text-gray-700 text-sm">
										Our initial consultation is completely free with no
										obligation. We&apos;ll assess your space and provide expert
										recommendations tailored to your needs.
									</p>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
