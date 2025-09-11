import { CheckCircle, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import FAQs from "@/components/FAQ";
import CTA from "@/components/CTA";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact Us - Get Your Free Plant Consultation",
	description: "Contact Evergreenry for your free plant consultation. Transform your workspace with our expert biophilic design solutions. Call +91-9891347119 or fill out our contact form for 24-hour response.",
	keywords: [
		"contact evergreenry",
		"free plant consultation",
		"office plants quote",
		"biophilic design consultation",
		"plant installation contact",
		"green wall consultation"
	],
	openGraph: {
		title: "Contact Us - Get Your Free Plant Consultation | Evergreenry",
		description: "Contact Evergreenry for your free plant consultation. Expert biophilic design solutions. Call +91-9891347119 or get 24-hour response via contact form.",
		images: ["/og-contact.jpg"],
		url: "https://evergreenry.com/contact",
	},
	twitter: {
		card: "summary_large_image",
		title: "Contact Us - Get Your Free Plant Consultation | Evergreenry",
		description: "Contact Evergreenry for your free plant consultation. Expert biophilic design solutions.",
		images: ["/og-contact.jpg"],
	},
};

export default function ContactPage() {
	const faqs = [
		{
			q: "What is Evergreenry?",
			a: "We add biophilia! Evergreenry, established in 2018 with the former name We Decor8, has been greening up corporates in India with the help of plants, planters, green walls, moss walls, gardens and other landscape design elements.",
		},
		{
			q: "What type of projects does Evergreenry undertake?",
			a: "Evergreenry greens up corporates, commercial buildings, hospitality spaces in India with the help of plants, planters, green walls, moss walls, gardens and other landscape design elements. We provide landscape design and execution services for both indoor & outdoor work to Architects, Designers, end clients, commercial and hospitality clients and farm houses.",
		},
		{
			q: "Where does Evergreenry operate?",
			a: "Evergreenry has full fledged design as well as execution offices in Delhi NCR and Bangalore from where we serve North as well as South India clients respectively.",
		},
		{
			q: "What is Biophilia?",
			a: "Biophilia means connection to nature. Biophilic design in architecture is based on the belief that humans have an innate connection to nature, and that by bringing elements of the natural world into our built environment, we can improve our health, happiness, and overall quality of life. Evergreenry does this with the help of plants, green walls, moss walls and other plant elements in office spaces.",
		},
		{
			q: "Would you have a quick planting solution for my office?",
			a: "Yes, Evergreenry has set packages of quick planting service in planters, where you place an order and relax. We deliver to you in stipulated time period based on the quantity of plants & planters required.",
		},
		{
			q: "Does Evergreenry add only natural greenery or even faux plants are an option?",
			a: "Greenery in any form is good. We add biophilia in natural, artificial (faux) as well as preserved form. You get plants, green walls, moss walls – in all natural, artificial and preserved way.",
		},
	];

	const contactJsonLd = {
		"@context": "https://schema.org",
		"@type": "ContactPage",
		"name": "Contact Evergreenry",
		"description": "Contact Evergreenry for your free plant consultation and transform your workspace with expert biophilic design solutions.",
		"url": "https://evergreenry.com/contact",
		"mainEntity": {
			"@type": "Organization",
			"name": "Evergreenry",
			"contactPoint": {
				"@type": "ContactPoint",
				"telephone": "+91-9891347119",
				"contactType": "customer service",
				"areaServed": "IN",
				"availableLanguage": ["English", "Hindi"],
				"contactOption": "TollFree"
			}
		}
	};

	const faqJsonLd = {
		"@context": "https://schema.org", 
		"@type": "FAQPage",
		"mainEntity": faqs.map(faq => ({
			"@type": "Question",
			"name": faq.q,
			"acceptedAnswer": {
				"@type": "Answer",
				"text": faq.a
			}
		}))
	};

	return (
		<div className="min-h-screen">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
			/>
			{/* Hero Section */}
			<section className="relative pt-32 pb-12 min-h-[40vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-50/40">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<div className="text-center space-y-8 max-w-4xl mx-auto">
						<div className="space-y-4">
							<div className="inline-flex items-center px-4 py-2 bg-secondary text-primary rounded-full text-sm font-medium">
								📞 Get In Touch
							</div>
							<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-roboto font-extrabold text-gray-900 leading-tight">
								Let&apos;s <span className="text-primary">Connect</span>
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
						<ContactForm />

						{/* Additional Info */}
						<div className="space-y-8">
							<div className="bg-white p-8 rounded-2xl shadow-sm">
								<h3 className="text-2xl sm:text-4xl font-roboto font-extrabold text-gray-900 mb-6">
									Why Choose Evergreenry?
								</h3>
								<div className="space-y-4">
									<div className="flex items-start space-x-4">
										<div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
											<CheckCircle className="h-5 w-5 text-primary" />
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
										<div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
											<CheckCircle className="h-5 w-5 text-primary" />
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
										<div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
											<CheckCircle className="h-5 w-5 text-primary" />
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
										<div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
											<CheckCircle className="h-5 w-5 text-primary" />
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

							<div className="bg-primary p-8 rounded-2xl text-white">
								<h3 className="text-2xl font-bold mb-4">
									Need Immediate Assistance?
								</h3>
								<p className="text-secondary mb-6">
									For urgent inquiries or emergency plant care, call us
									directly.
								</p>
								<Link 
								href="tel:+919891347119"
								aria-label="Call Evergreenry at +91 9891347119 for immediate plant consultation"
								title="Call us now for immediate assistance and plant consultation"
							>
									<Button className="w-full md:w-max bg-white text-primary hover:bg-gray-100 font-semibold">
										<Phone className="h-5 w-5 mr-2" />
										Call Now: +91 9891347119
									</Button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section className="pb-20 bg-gray-50">
				<FAQs data={faqs} />
			</section>
			<CTA />

			{/* CTA Section */}
			<section className="hidden py-20 bg-primary">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<div className="max-w-3xl mx-auto space-y-8">
						<h2 className="text-3xl sm:text-4xl font-roboto font-extrabold text-white">
							Ready to Get Started?
						</h2>
						<p className="text-xl text-secondary">
							Don&apos;t wait to transform your space. Contact us today and take
							the first step toward a greener, healthier environment.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link 
							href="#contact-form"
							aria-label="Scroll to contact form - Send us a detailed message about your plant needs"
							title="Fill out our contact form for detailed plant consultation inquiries"
						>
								<Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 font-semibold text-lg">
									Send Message
									<MessageSquare className="h-5 w-5 ml-2" />
								</Button>
							</Link>
							<Link 
								href="tel:+919891347119"
								aria-label="Call Evergreenry at +91 9891347119 for immediate plant consultation"
								title="Call us now for immediate assistance and plant consultation"
							>
								<Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 font-semibold text-lg">
									<Phone className="h-5 w-5 mr-2" />
									Call Now
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
