"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
// import { Card, CardContent } from "@/components/ui/card";
import {
	// Mail,
	Phone,
	// MapPin,
	// Clock,
	MessageSquare,
	Send,
	CheckCircle,
} from "lucide-react";
import { useState } from "react";
import FAQs from "@/components/FAQ";

export default function ContactPage() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		company: "",
		message: "",
		service: "",
	});

	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleInputChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>,
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Here you would typically send the form data to your backend
		console.log("Form submitted:", formData);
		setIsSubmitted(true);
		// Reset form after 3 seconds
		setTimeout(() => {
			setIsSubmitted(false);
			setFormData({
				name: "",
				email: "",
				phone: "",
				company: "",
				message: "",
				service: "",
			});
		}, 3000);
	};

	const faqs = [
		{
			q: "What is Evergreen?",
			a: "Evergreen is an environmental organization focused on biodiversity conservation and ecological restoration through premium plant solutions for businesses and homes.",
		},
		{
			q: "What types of projects does Evergreen undertake?",
			a: "We specialize in corporate office installations, home plant solutions, co-working space transformations, and event space arrangements with ongoing maintenance support.",
		},
		{
			q: "How can I get involved with Evergreen'apos;s initiatives?",
			a: "You can book a free consultation through our website, call us directly, or reach out via email. We offer customized solutions for every space and budget.",
		},
		{
			q: "Where does Evergreen operate?",
			a: "Evergreen operates nationwide, providing professional plant installation and maintenance services across multiple regions with local expert support.",
		},
		{
			q: "Why is biodiversity conservation important?",
			a: "Biodiversity conservation ensures ecosystem stability, supports life-sustaining services, helps combat climate change, and creates healthier indoor environments that boost productivity and well-being.",
		},
	];

	// const contactInfo = [
	// 	{
	// 		icon: Mail,
	// 		title: "Email Us",
	// 		content: "info@evergreen.com",
	// 		subtitle: "We&apos;ll respond within 24 hours",
	// 	},
	// 	{
	// 		icon: Phone,
	// 		title: "Call Us",
	// 		content: "+1 (555) 123-4567",
	// 		subtitle: "Mon-Fri 9AM-6PM EST",
	// 	},
	// 	{
	// 		icon: MapPin,
	// 		title: "Visit Us",
	// 		content: "123 Green Street, Eco City, EC 12345",
	// 		subtitle: "By appointment only",
	// 	},
	// 	{
	// 		icon: Clock,
	// 		title: "Business Hours",
	// 		content: "Monday - Friday: 9AM - 6PM",
	// 		subtitle: "Saturday: 10AM - 4PM",
	// 	},
	// ];

	const services = [
		"Office Plant Installation",
		"Home Plant Solutions",
		"Maintenance Services",
		"Consultation",
		"Event Decoration",
		"Other",
	];

	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="relative pt-32 pb-12 min-h-[40vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-50/40">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<div className="text-center space-y-8 max-w-4xl mx-auto">
						<div className="space-y-4">
							<div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
								📞 Get In Touch
							</div>
							<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bebas text-gray-900 leading-tight">
								Let&apos;s <span className="text-green-800">Connect</span>
							</h1>
							<p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
								Ready to transform your space? We&apos;re here to help you
								create the perfect green environment. Reach out to us today for
								a free consultation.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Form Section */}
			<section className="pb-20 bg-gray-50">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-12">
						{/* Form */}
						<div className="space-y-8 bg-white p-6 sm:p-8 rounded-2xl shadow-sm">
							<div>
								<h2 className="text-2xl sm:text-3xl md:text-4xl font-bebas text-gray-900 mb-4">
									Send Us a Message
								</h2>
								<p className="text-base sm:text-lg text-gray-600">
									Fill out the form below and we&apos;ll get back to you within
									24 hours.
								</p>
							</div>

							{isSubmitted ? (
								<div className="bg-green-50 border border-green-200 rounded-lg p-6 sm:p-8 text-center">
									<CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
									<h3 className="text-2xl font-bebas text-green-800 mb-2">
										Message Sent!
									</h3>
									<p className="text-green-700">
										Thank you for reaching out. We&apos;ll get back to you
										within 24 hours.
									</p>
								</div>
							) : (
								<form
									onSubmit={handleSubmit}
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
												name="name"
												type="text"
												required
												value={formData.name}
												onChange={handleInputChange}
												className="border-gray-300 focus:border-green-500 focus:ring-green-500"
												placeholder="Your full name"
											/>
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
												name="email"
												type="email"
												required
												value={formData.email}
												onChange={handleInputChange}
												className="border-gray-300 focus:border-green-500 focus:ring-green-500"
												placeholder="your.email@example.com"
											/>
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
												name="phone"
												type="tel"
												value={formData.phone}
												onChange={handleInputChange}
												className="border-gray-300 focus:border-green-500 focus:ring-green-500"
												placeholder="(555) 123-4567"
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
												name="company"
												type="text"
												value={formData.company}
												onChange={handleInputChange}
												className="border-gray-300 focus:border-green-500 focus:ring-green-500"
												placeholder="Your company name"
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
											name="service"
											value={formData.service}
											onChange={handleInputChange}
											className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
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
											name="message"
											required
											value={formData.message}
											onChange={handleInputChange}
											className="border-gray-300 focus:border-green-500 focus:ring-green-500 min-h-[120px]"
											placeholder="Tell us about your project and how we can help..."
										/>
									</div>

									<Button
										type="submit"
										className="w-full bg-green-800 hover:bg-green-700 text-white py-3 font-semibold text-lg"
									>
										Send Message
										<Send className="h-5 w-5 ml-2" />
									</Button>
								</form>
							)}
						</div>

						{/* Additional Info */}
						<div className="space-y-8">
							<div className="bg-white p-8 rounded-2xl shadow-sm">
								<h3 className="text-4xl sm:text-6xl font-bebas text-gray-900 mb-6">
									Why Choose Evergreen?
								</h3>
								<div className="space-y-4">
									<div className="flex items-start space-x-4">
										<div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
											<CheckCircle className="h-5 w-5 text-green-600" />
										</div>
										<div>
											<h4 className="font-semibold text-gray-900">
												Expert Consultation
											</h4>
											<p className="text-gray-600 text-sm">
												Free initial consultation to understand your needs
											</p>
										</div>
									</div>
									<div className="flex items-start space-x-4">
										<div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
											<CheckCircle className="h-5 w-5 text-green-600" />
										</div>
										<div>
											<h4 className="font-semibold text-gray-900">
												Custom Solutions
											</h4>
											<p className="text-gray-600 text-sm">
												Tailored plant solutions for your specific space
											</p>
										</div>
									</div>
									<div className="flex items-start space-x-4">
										<div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
											<CheckCircle className="h-5 w-5 text-green-600" />
										</div>
										<div>
											<h4 className="font-semibold text-gray-900">
												Ongoing Support
											</h4>
											<p className="text-gray-600 text-sm">
												Maintenance and care services to keep your plants
												thriving
											</p>
										</div>
									</div>
									<div className="flex items-start space-x-4">
										<div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
											<CheckCircle className="h-5 w-5 text-green-600" />
										</div>
										<div>
											<h4 className="font-semibold text-gray-900">
												Satisfaction Guarantee
											</h4>
											<p className="text-gray-600 text-sm">
												100% satisfaction guarantee on all our services
											</p>
										</div>
									</div>
								</div>
							</div>

							<div className="bg-green-800 p-8 rounded-2xl text-white">
								<h3 className="text-2xl font-bold mb-4">
									Need Immediate Assistance?
								</h3>
								<p className="text-green-100 mb-6">
									For urgent inquiries or emergency plant care, call us
									directly.
								</p>
								<Button
									className="w-full md:w-max bg-white text-green-800 hover:bg-gray-100 font-semibold"
									onClick={() => (window.location.href = "tel:+15551234567")}
								>
									<Phone className="h-5 w-5 mr-2" />
									Call Now: (555) 123-4567
								</Button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section className="pb-20 bg-gray-50">
				<FAQs data={faqs} />
			</section>
			{/* CTA Section */}
			<section className="py-20 bg-green-800">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<div className="max-w-3xl mx-auto space-y-8">
						<h2 className="text-3xl sm:text-4xl font-bebas text-white">
							Ready to Get Started?
						</h2>
						<p className="text-xl text-green-100">
							Don&apos;t wait to transform your space. Contact us today and take
							the first step toward a greener, healthier environment.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button
								className="bg-white text-green-800 hover:bg-gray-100 px-8 py-3 font-semibold text-lg"
								onClick={() => document.getElementById("name")?.focus()}
							>
								Send Message
								<MessageSquare className="h-5 w-5 ml-2" />
							</Button>
							<Button
								variant="outline"
								className="border-white text-white hover:bg-white hover:text-green-800 px-8 py-3 font-semibold text-lg"
								onClick={() => (window.location.href = "tel:+15551234567")}
							>
								<Phone className="h-5 w-5 mr-2" />
								Call Now
							</Button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
