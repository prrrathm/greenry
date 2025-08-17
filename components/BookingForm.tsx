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
											<label className="text-sm font-medium text-gray-700">
												Full Name *
											</label>
											<div className="relative">
												<User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
												<Input
													{...register("name")}
													placeholder="John Doe"
													className="pl-10"
												/>
												{errors.name && (
													<p className="text-red-500 text-xs mt-1">
														{errors.name.message}
													</p>
												)}
											</div>
										</div>
										<div className="space-y-2">
											<label className="text-sm font-medium text-gray-700">
												Email *
											</label>
											<div className="relative">
												<Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
												<Input
													{...register("email")}
													type="email"
													placeholder="john@company.com"
													className="pl-10"
												/>
												{errors.email && (
													<p className="text-red-500 text-xs mt-1">
														{errors.email.message}
													</p>
												)}
											</div>
										</div>
									</div>

									<div className="grid md:grid-cols-2 gap-4">
										<div className="space-y-2">
											<label className="text-sm font-medium text-gray-700">
												Phone *
											</label>
											<div className="relative">
												<Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
												<Input
													{...register("phone")}
													type="tel"
													placeholder="+1 (555) 123-4567"
													className="pl-10"
												/>
												{errors.phone && (
													<p className="text-red-500 text-xs mt-1">
														{errors.phone.message}
													</p>
												)}
											</div>
										</div>
										<div className="space-y-2">
											<label className="text-sm font-medium text-gray-700">
												Company
											</label>
											<Input
												{...register("company")}
												placeholder="Your Company"
											/>
										</div>
									</div>

									<div className="grid grid-cols-2 gap-4">
										<div className="space-y-2">
											<label className="text-sm font-medium text-gray-700">
												Service Type *
											</label>
											<select
												{...register("spaceType")}
												className="w-full h-9 px-3 py-1 text-sm border border-input bg-transparent rounded-md shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
											>
												<option disabled>Select Service type</option>
												{services.map((item, iter) => (
													<option key={iter} value="office">
														{item}
													</option>
												))}
											</select>
											{errors.spaceType && (
												<p className="text-red-500 text-xs mt-1">
													{errors.spaceType.message}
												</p>
											)}
										</div>
										<div className="space-y-2">
											<label className="text-sm font-medium text-gray-700">
												Preferred Date
											</label>
											<div className="relative">
												<Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
												<Input
													{...register("preferredDate")}
													type="date"
													className="pl-10"
												/>
											</div>
										</div>
									</div>
									<div className="space-y-2">
										<label className="text-sm font-medium text-gray-700">
											Additional Information
										</label>
										<Textarea
											{...register("message")}
											placeholder="Tell us about your space, specific requirements, or any questions you have..."
											rows={4}
										/>
									</div>

									<Button
										type="submit"
										className={cn(
											"w-full bg-primary hover:bg-primary text-white py-3",
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
											<span className="text-gray-700">+1 (555) 123-4567</span>
										</div>
										<div className="flex items-center">
											<Mail className="h-5 w-5 text-blue-600 mr-3" />
											<span className="text-gray-700">
												hello@Evergreenry.com
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
