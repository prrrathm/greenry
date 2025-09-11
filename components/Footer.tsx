"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Mail,
	Phone,
	// MapPin,
	Facebook,
	Twitter,
	Instagram,
	Linkedin,
	UserRound,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="bg-gray-50">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Company Info */}
					<div className="space-y-4">
						<div className="flex items-center space-x-2">
							<Image
								src="/logo/logo-bold.png"
								alt="Snake Plant"
								width={50}
								height={50}
								className="rounded-md"
							/>
							{/* <Leaf className="h-8 w-8 text-primary" /> */}
							<span className="text-2xl font-bold">Evergreenry</span>
						</div>
						<p className="text-gray-400 text-sm">
							Transforming spaces with premium plant solutions. Creating
							healthier, more productive environments for businesses and homes.
						</p>
						<div className="flex space-x-4">
							<Link href="https://facebook.com/evergreenry" aria-label="Follow Evergreenry on Facebook for plant tips and updates" title="Visit our Facebook page">
								<Facebook className="h-5 w-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
							</Link>
							<Link href="https://twitter.com/evergreenry" aria-label="Follow Evergreenry on Twitter for latest plant news" title="Visit our Twitter profile">
								<Twitter className="h-5 w-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
							</Link>
							<Link href="https://instagram.com/evergreenry" aria-label="Follow Evergreenry on Instagram for plant inspiration and project photos" title="Visit our Instagram profile">
								<Instagram className="h-5 w-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
							</Link>
							<Link href="https://linkedin.com/company/evergreenry" aria-label="Connect with Evergreenry on LinkedIn for business updates" title="Visit our LinkedIn company page">
								<Linkedin className="h-5 w-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
							</Link>
						</div>
					</div>

					{/* Services */}
					<div className="space-y-4">
						<h3 className="text-lg font-semibold text-green-900">Services</h3>
						<ul className="space-y-2 text-sm text-gray-400">
							<li>
								<Link 
									href="/services#corporate-offices" 
									aria-label="Corporate office plant services - Professional workplace greenery solutions"
									title="Transform your corporate office with professional plant installations"
									className="hover:text-primary transition-colors"
								>
									Corporate Offices
								</Link>
							</li>
							<li>
								<Link 
									href="/services#home-spaces" 
									aria-label="Home plant services - Residential greenery and indoor plant solutions"
									title="Beautiful plant solutions for your home and living spaces"
									className="hover:text-primary transition-colors"
								>
									Home Spaces
								</Link>
							</li>
							<li>
								<Link 
									href="/services#coworking-spaces" 
									aria-label="Co-working space plant services - Collaborative workspace greenery solutions"
									title="Enhance co-working spaces with productive plant environments"
									className="hover:text-primary transition-colors"
								>
									Co-working Spaces
								</Link>
							</li>
							<li>
								<Link 
									href="/services#event-installations" 
									aria-label="Event plant installations - Temporary and permanent event greenery services"
									title="Professional plant installations for corporate events and special occasions"
									className="hover:text-primary transition-colors"
								>
									Event Installations
								</Link>
							</li>
							<li>
								<Link 
									href="/services#plant-maintenance" 
									aria-label="Plant maintenance services - Professional ongoing plant care and health monitoring"
									title="Expert plant maintenance services to keep your greenery healthy and thriving"
									className="hover:text-primary transition-colors"
								>
									Plant Maintenance
								</Link>
							</li>
						</ul>
					</div>

					{/* Company */}
					<div className="space-y-4">
						<h3 className="text-lg font-semibold text-green-900">Company</h3>
						<ul className="space-y-2 text-sm text-gray-400">
							<li>
								<Link 
									href="/about" 
									aria-label="About Evergreenry - Learn our mission, values, and plant expertise"
									title="Discover Evergreenry's story and commitment to green living"
									className="hover:text-primary transition-colors"
								>
									About Us
								</Link>
							</li>
							<li>
								<Link 
									href="/about#team" 
									aria-label="Meet our team - Plant experts and green workspace specialists"
									title="Get to know the plant professionals behind Evergreenry"
									className="hover:text-primary transition-colors"
								>
									Our Team
								</Link>
							</li>
							<li>
								<Link 
									href="/careers" 
									aria-label="Careers at Evergreenry - Join our team of plant professionals"
									title="Explore career opportunities in the green workspace industry"
									className="hover:text-primary transition-colors"
								>
									Careers
								</Link>
							</li>
							<li>
								<Link 
									href="/blogs" 
									aria-label="Evergreenry blog - Plant care tips, workspace design, and green living insights"
									title="Read our latest articles on plant care and green workspace design"
									className="hover:text-primary transition-colors"
								>
									Blog
								</Link>
							</li>
							<li>
								<Link 
									href="/contact" 
									aria-label="Contact Evergreenry - Get in touch for plant consultation and services"
									title="Contact us for plant consultation, quotes, and service inquiries"
									className="hover:text-primary transition-colors"
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>

					{/* Newsletter */}
					<div className="space-y-4">
						<h3 className="text-lg font-semibold text-green-900">
							Stay Updated
						</h3>
						<p className="text-sm text-gray-400">
							Subscribe to our newsletter for plant care tips and special
							offers.
						</p>
						<div className="space-y-2">
							<Input
								placeholder="Enter your email"
								className="bg-gray-200 border-gray-700 text-gray-800 placeholder-gray-400"
							/>
							<Button className="w-full bg-primary hover:bg-primary font-semibold">
								Subscribe
							</Button>
						</div>
					</div>
				</div>

				{/* Contact Info */}
				<div className="border-t border-gray-800 mt-12 pt-8">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
						<div className="space-y-2">
							<div className="font-semibold text-gray-700">North Office:</div>
							<Link
								href="tel:+919891347119"
								aria-label="Call Evergreenry North Office in Gurgaon at +91 9891347119"
								title="Call our North Office for plant services in North India region"
								className="flex items-center space-x-3"
							>
								<Phone className="h-5 w-5 text-primary" />
								<span className="text-gray-400">+91 9891347119</span>
							</Link>
							<div className="text-gray-400 text-xs ml-8">376, Udyog Vihar, Phase 2, Gurgaon Haryana 122016</div>
						</div>
						<div className="space-y-2">
							<div className="font-semibold text-gray-700">South Office:</div>
							<Link
								href="tel:+919606130700"
								aria-label="Call Evergreenry South Office in Bangalore at +91 9606130700"
								title="Call our South Office for plant services in South India region"
								className="flex items-center space-x-3"
							>
								<Phone className="h-5 w-5 text-primary" />
								<span className="text-gray-400">+91 9606130700</span>
							</Link>
							<div className="text-gray-400 text-xs ml-8">Bhive Platinum, No.271, 6th main road, 100ft road, Indiranagar, Bengaluru, Karnataka 560038</div>
						</div>
						<div className="space-y-2">
							<div className="font-semibold text-gray-700">General Inquiries:</div>
							<Link
								href="mailto:green@evergreenry.com"
								aria-label="Email Evergreenry general inquiries at green@evergreenry.com"
								title="Send general inquiries, quotes, and service requests"
								className="flex items-center space-x-3"
							>
								<Mail className="h-5 w-5 text-primary" />
								<span className="text-gray-400">green@evergreenry.com</span>
							</Link>
						</div>
						<div className="space-y-2">
							<div className="font-semibold text-gray-700">Talk to the CEO:</div>
							<Link
								href="mailto:ruchika@evergreenry.com"
								aria-label="Email CEO Ruchika at ruchika@evergreenry.com for executive inquiries"
								title="Contact our CEO directly for business partnerships and executive decisions"
								className="flex items-center space-x-3"
							>
								<UserRound className="h-5 w-5 text-primary" />
								<span className="text-gray-400">ruchika@evergreenry.com</span>
							</Link>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
					<p>&copy; 2025 Evergreenry. All rights reserved.</p>
					<div className="flex space-x-6 mt-4 md:mt-0">
						<Link 
							href="/privacy-policy" 
							aria-label="Read Evergreenry's privacy policy - How we protect your personal information"
							title="Learn about our data protection and privacy practices"
							className="hover:text-primary transition-colors"
						>
							Privacy Policy
						</Link>
						<Link 
							href="/terms-of-service" 
							aria-label="Read Evergreenry's terms of service - Service agreements and user terms"
							title="Review our service terms and conditions"
							className="hover:text-primary transition-colors"
						>
							Terms of Service
						</Link>
						{/* <Link href="#" className="hover:text-primary transition-colors">
							Cookie Policy
						</Link> */}
					</div>
				</div>
			</div>
		</footer>
	);
}
