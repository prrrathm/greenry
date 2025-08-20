"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Mail,
	Phone,
	MapPin,
	Facebook,
	Twitter,
	Instagram,
	Linkedin,
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
							<Facebook className="h-5 w-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
							<Twitter className="h-5 w-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
							<Instagram className="h-5 w-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
							<Linkedin className="h-5 w-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
						</div>
					</div>

					{/* Services */}
					<div className="space-y-4">
						<h3 className="text-lg font-semibold text-green-900">Services</h3>
						<ul className="space-y-2 text-sm text-gray-400">
							<li>
								<Link href="#" className="hover:text-primary transition-colors">
									Corporate Offices
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:text-primary transition-colors">
									Home Spaces
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:text-primary transition-colors">
									Co-working Spaces
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:text-primary transition-colors">
									Event Installations
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:text-primary transition-colors">
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
								<Link href="#" className="hover:text-primary transition-colors">
									About Us
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:text-primary transition-colors">
									Our Team
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:text-primary transition-colors">
									Careers
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:text-primary transition-colors">
									Blog
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:text-primary transition-colors">
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
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
						<div className="flex items-center space-x-3">
							<Phone className="h-5 w-5 text-primary" />
							<span className="text-gray-400">+1 (555) 123-4567</span>
						</div>
						<div className="flex items-center space-x-3">
							<Mail className="h-5 w-5 text-primary" />
							<span className="text-gray-400">hello@Evergreenry.com</span>
						</div>
						<div className="flex items-center space-x-3">
							<MapPin className="h-5 w-5 text-primary" />
							<span className="text-gray-400">Available Nationwide</span>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
					<p>&copy; 2025 Evergreenry. All rights reserved.</p>
					<div className="flex space-x-6 mt-4 md:mt-0">
						<Link href="#" className="hover:text-primary transition-colors">
							Privacy Policy
						</Link>
						<Link href="#" className="hover:text-primary transition-colors">
							Terms of Service
						</Link>
						<Link href="#" className="hover:text-primary transition-colors">
							Cookie Policy
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
