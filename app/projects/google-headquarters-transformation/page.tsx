import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	ArrowLeft,
	Calendar,
	MapPin,
	Users,
	CheckCircle,
	TrendingUp,
} from "lucide-react";
import CTA from "@/components/CTA";

export default function GoogleProjectPage() {
	return (
		<div className="pt-32 min-h-screen bg-white">
			{/* Back Button */}
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<Link href="/projects">
					<Button variant="outline" className="mb-8">
						<ArrowLeft className="mr-2 h-4 w-4" />
						Back to Projects
					</Button>
				</Link>
			</div>

			{/* Hero Section */}
			<section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					<div>
						<div className="flex items-center space-x-4 mb-6">
							<div className="flex items-center text-sm text-gray-600">
								<Users className="h-4 w-4 mr-2" />
								Google
							</div>
							<div className="flex items-center text-sm text-gray-600">
								<MapPin className="h-4 w-4 mr-2" />
								Mountain View, CA
							</div>
							<div className="flex items-center text-sm text-gray-600">
								<Calendar className="h-4 w-4 mr-2" />
								2024
							</div>
						</div>

						<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
							Corporate Headquarters Transformation
						</h1>

						<p className="text-xl text-gray-700 mb-8">
							Complete biophilic redesign of Google&apos;s main campus,
							featuring over 500 plants across multiple floors, innovative green
							walls, and state-of-the-art air purification systems that
							transformed the workspace into a thriving, productive environment.
						</p>

						<div className="flex flex-wrap gap-2">
							{[
								"Office Plants",
								"Green Walls",
								"Air Purification",
								"Maintenance",
							].map((service) => (
								<span
									key={service}
									className="bg-secondary text-primary px-3 py-1 rounded-full text-sm font-medium"
								>
									{service}
								</span>
							))}
						</div>
					</div>

					<div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
						<Image
							src="/projects/office-1.jpg"
							alt="Google headquarters plant installation"
							fill
							className="object-cover"
						/>
					</div>
				</div>
			</section>

			{/* Challenge & Solution */}
			<section className="bg-gray-50 py-16">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-12">
						<div>
							<h2 className="text-3xl font-bold text-gray-900 mb-6">
								The Challenge
							</h2>
							<p className="text-gray-700 mb-4">
								Google&apos;s Mountain View campus housed over 3,000 employees
								in a sterile, technology-focused environment that lacked natural
								elements. Employee surveys revealed concerns about air quality,
								stress levels, and the need for more inspiring workspaces.
							</p>
							<p className="text-gray-700">
								The challenge was to integrate nature throughout the campus
								without disrupting daily operations or compromising the
								high-tech aesthetic that defines Google&apos;s brand identity.
							</p>
						</div>

						<div>
							<h2 className="text-3xl font-bold text-gray-900 mb-6">
								Our Solution
							</h2>
							<p className="text-gray-700 mb-4">
								We developed a comprehensive biophilic design strategy that
								seamlessly integrated plants into Google&apos;s existing
								architecture. Our approach included strategic plant placement,
								custom green walls, and an intelligent maintenance system.
							</p>
							<p className="text-gray-700">
								The installation was completed in phases to minimize disruption,
								with each area carefully designed to complement Google&apos;s
								innovative culture while providing maximum wellness benefits.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Implementation Details */}
			<section className="py-16">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
						Implementation Highlights
					</h2>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						<Card className="shadow-lg">
							<CardHeader>
								<CardTitle className="text-primary">
									Living Reception Wall
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-gray-700 mb-4">
									A stunning 20-foot green wall welcomes visitors and employees,
									featuring over 200 plants including pothos, philodendrons, and
									ferns with an integrated irrigation system.
								</p>
								<div className="relative h-32 rounded-lg overflow-hidden">
									<Image
										src="/projects/office-2.jpg"
										alt="Reception green wall"
										fill
										className="object-cover"
									/>
								</div>
							</CardContent>
						</Card>

						<Card className="shadow-lg">
							<CardHeader>
								<CardTitle className="text-primary">
									Collaborative Spaces
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-gray-700 mb-4">
									Strategic placement of air-purifying plants in meeting rooms
									and collaborative areas, including snake plants, peace lilies,
									and rubber trees to enhance creativity and focus.
								</p>
								<div className="relative h-32 rounded-lg overflow-hidden">
									<Image
										src="/projects/office-3.jpg"
										alt="Collaborative spaces with plants"
										fill
										className="object-cover"
									/>
								</div>
							</CardContent>
						</Card>

						<Card className="shadow-lg">
							<CardHeader>
								<CardTitle className="text-primary">Cafeteria Garden</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-gray-700 mb-4">
									An indoor herb garden in the main cafeteria provides fresh
									ingredients while creating a natural, calming environment for
									employees during meal breaks.
								</p>
								<div className="relative h-32 rounded-lg overflow-hidden">
									<Image
										src="/projects/office-4.jpg"
										alt="Cafeteria garden"
										fill
										className="object-cover"
									/>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Results */}
			<section className="bg-green-50 py-16">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
						Measurable Results
					</h2>

					<div className="grid md:grid-cols-3 gap-8 mb-12">
						<div className="text-center">
							<div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
								<TrendingUp className="h-8 w-8" />
							</div>
							<div className="text-3xl font-bold text-primary mb-2">20%</div>
							<div className="text-gray-700">
								Increase in Employee Satisfaction
							</div>
						</div>

						<div className="text-center">
							<div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
								<CheckCircle className="h-8 w-8" />
							</div>
							<div className="text-3xl font-bold text-primary mb-2">15%</div>
							<div className="text-gray-700">Boost in Productivity Metrics</div>
						</div>

						<div className="text-center">
							<div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
								<CheckCircle className="h-8 w-8" />
							</div>
							<div className="text-3xl font-bold text-primary mb-2">50%</div>
							<div className="text-gray-700">Reduction in Air Toxins</div>
						</div>
					</div>

					<div className="bg-white p-8 rounded-xl shadow-lg">
						<blockquote className="text-xl italic text-gray-700 mb-6">
							&quot;The transformation of our workspace has been remarkable.
							Employees consistently comment on the improved air quality and the
							calming effect of the plants. It&apos;s created a more inspiring
							environment that truly reflects our commitment to innovation and
							employee well-being.&quot;
						</blockquote>
						<div className="flex items-center">
							<div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
							<div>
								<div className="font-semibold text-gray-900">Sarah Johnson</div>
								<div className="text-gray-600">Facilities Director, Google</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Maintenance & Ongoing Support */}
			<section className="py-16">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-3xl font-bold text-gray-900 mb-6">
								Ongoing Partnership
							</h2>
							<p className="text-gray-700 mb-4">
								Our relationship with Google extends beyond installation. We
								provide comprehensive maintenance services, including weekly
								plant care, seasonal rotations, and system monitoring to ensure
								optimal plant health and continued benefits.
							</p>
							<p className="text-gray-700 mb-6">
								Our smart monitoring system tracks plant health, air quality
								improvements, and maintenance schedules, providing Google with
								detailed reports on the environmental impact of their biophilic
								investment.
							</p>
							<ul className="space-y-2">
								<li className="flex items-center text-gray-700">
									<CheckCircle className="h-5 w-5 text-primary mr-2" />
									Weekly professional maintenance visits
								</li>
								<li className="flex items-center text-gray-700">
									<CheckCircle className="h-5 w-5 text-primary mr-2" />
									Seasonal plant rotations and updates
								</li>
								<li className="flex items-center text-gray-700">
									<CheckCircle className="h-5 w-5 text-primary mr-2" />
									24/7 monitoring and support system
								</li>
								<li className="flex items-center text-gray-700">
									<CheckCircle className="h-5 w-5 text-primary mr-2" />
									Quarterly environmental impact reports
								</li>
							</ul>
						</div>

						<div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
							<Image
								src="/projects/office-5.jpg"
								alt="Maintenance team at work"
								fill
								className="object-cover"
							/>
						</div>
					</div>
				</div>
			</section>

			<CTA />
		</div>
	);
}
