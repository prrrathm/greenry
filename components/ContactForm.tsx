"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Send, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

const schema = z.object({
	name: z.string().min(2, "Full name is required"),
	email: z.string().email("Invalid email address"),
	phone: z.string().optional(),
	company: z.string().optional(),
	service: z.string().optional(),
	message: z.string().min(5, "Message must be at least 5 characters"),
});

type FormData = z.infer<typeof schema>;

const services = [
	"Office Plants",
	"Green Walls",
	"Moss Walls",
	"Plant Maintenance",
	"Zen Garden",
	"Indoor Terrarium",
];

export default function ContactForm() {
	const [loading, setLoading] = useState(false);
	const [submitted, setSubmitted] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<FormData>({
		resolver: zodResolver(schema),
	});

	const onSubmit = async (data: FormData) => {
		try {
			setLoading(true);
			const res = await fetch("/api/send-mail", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});

			const result = await res.json();

			if (result.success) {
				setSubmitted(true);
				toast.info(
					"Thank you! We'll contact you within 24 hours to schedule your consultation.",
				);
				reset();
			} else {
				toast.error("Something went wrong. Please try again.");
			}
		} catch (error) {
			console.error(error);
			toast.error("Something went wrong. Please try again.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="space-y-8 bg-white p-6 sm:p-8 rounded-2xl shadow-sm">
			<div>
				<h2 className="text-2xl sm:text-3xl md:text-4xl font-roboto font-extrabold text-gray-900 mb-4">
					Send Us a Message
				</h2>
				<p className="text-base sm:text-lg text-gray-600">
					Fill out the form below and we&apos;ll get back to you within
					24 hours.
				</p>
			</div>

			{submitted ? (
				<div className="bg-green-50 border border-secondary rounded-lg p-6 sm:p-8 text-center">
					<CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
					<h3 className="text-2xl font-roboto font-extrabold text-primary mb-2">
						Message Sent!
					</h3>
					<p className="text-green-700">
						Thank you for reaching out. We&apos;ll get back to you
						within 24 hours.
					</p>
				</div>
			) : (
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="space-y-4 sm:space-y-6"
				>
					<div className="grid md:grid-cols-2 gap-4 sm:gap-6">
						<div className="space-y-2">
							<Label
								htmlFor="name"
								className="text-gray-700 font-semibold"
							>
								Full Name *
							</Label>
							<Input
								id="name"
								placeholder="Your full name"
								className="border-gray-300 focus:border-green-500 focus:ring-green-500"
								{...register("name")}
							/>
							{errors.name && (
								<p className="text-red-500 text-sm">
									{errors.name.message}
								</p>
							)}
						</div>

						<div className="space-y-2">
							<Label
								htmlFor="email"
								className="text-gray-700 font-semibold"
							>
								Email Address *
							</Label>
							<Input
								id="email"
								type="email"
								placeholder="your.email@example.com"
								className="border-gray-300 focus:border-green-500 focus:ring-green-500"
								{...register("email")}
							/>
							{errors.email && (
								<p className="text-red-500 text-sm">
									{errors.email.message}
								</p>
							)}
						</div>
					</div>

					<div className="grid md:grid-cols-2 gap-4 sm:gap-6">
						<div className="space-y-2">
							<Label
								htmlFor="phone"
								className="text-gray-700 font-semibold"
							>
								Phone Number
							</Label>
							<Input
								id="phone"
								type="tel"
								placeholder="+91 9891347119"
								className="border-gray-300 focus:border-green-500 focus:ring-green-500"
								{...register("phone")}
							/>
						</div>

						<div className="space-y-2">
							<Label
								htmlFor="company"
								className="text-gray-700 font-semibold"
							>
								Company
							</Label>
							<Input
								id="company"
								type="text"
								placeholder="Your company name"
								className="border-gray-300 focus:border-green-500 focus:ring-green-500"
								{...register("company")}
							/>
						</div>
					</div>

					<div className="space-y-2">
						<Label
							htmlFor="service"
							className="text-gray-700 font-semibold"
						>
							Service Interest
						</Label>
						<select
							id="service"
							className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
							{...register("service")}
						>
							<option value="">Select a service</option>
							{services.map((service, index) => (
								<option key={index} value={service}>
									{service}
								</option>
							))}
						</select>
					</div>

					<div className="space-y-2">
						<Label
							htmlFor="message"
							className="text-gray-700 font-semibold"
						>
							Message *
						</Label>
						<Textarea
							id="message"
							placeholder="Tell us about your project and how we can help..."
							className="border-gray-300 focus:border-green-500 focus:ring-green-500 min-h-[120px]"
							{...register("message")}
						/>
						{errors.message && (
							<p className="text-red-500 text-sm">
								{errors.message.message}
							</p>
						)}
					</div>

					<Button
						type="submit"
						disabled={loading}
						className="w-full bg-primary hover:bg-primary text-white py-3 font-semibold text-lg flex justify-center items-center"
					>
						{loading ? "Sending..." : "Send Message"}
						{!loading && <Send className="h-5 w-5 ml-2" />}
					</Button>

					{submitted && (
						<p className="text-green-600 font-semibold mt-4 text-center">
							✅ Your message has been sent!
						</p>
					)}
				</form>
			)}

			<div className="bg-primary p-8 rounded-2xl text-white mt-8">
				<h3 className="text-2xl font-bold mb-4">
					Need Immediate Assistance?
				</h3>
				<p className="text-secondary mb-6">
					For urgent inquiries or emergency plant care, call us
					directly.
				</p>
				<Button
					className="w-full md:w-max bg-white text-primary hover:bg-gray-100 font-semibold"
					onClick={() => (window.location.href = "tel:+919891347119")}
				>
					<Phone className="h-5 w-5 mr-2" />
					Call Now: +91 9891347119
				</Button>
			</div>
		</div>
	);
}