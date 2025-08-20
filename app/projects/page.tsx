"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Users } from "lucide-react";
import CTA from "@/components/CTA";
import projects from "@/data/projects.json";
interface Project {
	id: string;
	title: string;
	client: string;
	location: string;
	year: string;
	image: string;
	description: string;
	services: string[];
	results: string[];
	slug: string;
}

export default function ProjectsPage() {
	return (
		<div className="pt-32 min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50/40">
			{/* Hero Section */}
			<section className="py-16 px-4 sm:px-6 lg:px-8">
				<div className="container mx-auto text-center">
					<h1 className="text-2xl sm:text-4xl font-roboto font-extrabold text-gray-700 font-bold mb-4">
						Our Project Portfolio
					</h1>
					<p className="text-sm md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
						Discover how we&apos;ve transformed workspaces for leading companies
						worldwide. From corporate headquarters to creative studios, see the
						impact of our biophilic design solutions.
					</p>

					<div className="flex flex-nowrap justify-center gap-2 md:gap-4 mb-12">
						<div className="text-center">
							<div className="text-xl md:text-3xl font-bold text-primary">
								50+
							</div>
							<div className="text-xs md:text-sm text-gray-600">
								Projects Completed
							</div>
						</div>
						<div className="text-center">
							<div className="text-xl md:text-3xl font-bold text-primary">
								25+
							</div>
							<div className="text-xs md:text-sm text-gray-600">
								Fortune 500 Clients
							</div>
						</div>
						<div className="text-center">
							<div className="text-xl md:text-3xl font-bold text-primary">
								10k+
							</div>
							<div className="text-xs md:text-sm text-gray-600">
								Plants Installed
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Projects Grid */}
			<section className="pb-20 px-4 sm:px-6 lg:px-8">
				<div className="container mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{projects.map((project) => (
							<Card
								key={project.id}
								className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
							>
								<div className="relative h-48 overflow-hidden">
									<Image
										src={project.image}
										alt={project.title}
										fill
										className="object-cover group-hover:scale-105 transition-transform duration-300"
									/>
									<div className="absolute top-4 left-4">
										<span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
											{project.year}
										</span>
									</div>
								</div>

								<CardHeader className="pb-2">
									<CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
										{project.title}
									</CardTitle>
									<div className="flex items-center text-sm text-gray-600 space-x-4">
										<div className="flex items-center">
											<Users className="h-3 w-3 mr-1" />
											{project.client}
										</div>
										<div className="flex items-center">
											<MapPin className="h-3 w-3 mr-1" />
											{project.location}
										</div>
									</div>
								</CardHeader>

								<CardContent className="space-y-4">
									<p className="text-gray-600 text-sm line-clamp-3">
										{project.description}
									</p>

									<div className="space-y-2">
										<h4 className="font-semibold text-sm text-gray-900">
											Services Provided:
										</h4>
										<div className="flex flex-wrap gap-1">
											{project.services.slice(0, 3).map((service, index) => (
												<span
													key={index}
													className="bg-secondary text-primary px-2 py-1 rounded text-xs"
												>
													{service}
												</span>
											))}
											{project.services.length > 3 && (
												<span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
													+{project.services.length - 3} more
												</span>
											)}
										</div>
									</div>

									<Link href={`/projects/${project.slug}`}>
										<Button className="w-full bg-primary hover:bg-primary text-white group">
											View Case Study
											<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
										</Button>
									</Link>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Results Section */}
			<section className="py-16 text-primary ">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="text-3xl font-bold mb-8">
						Proven Results Across Industries
					</h2>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
						<div>
							<div className="text-4xl font-bold mb-2">95%</div>
							<div className="text-lg opacity-90">Client Satisfaction</div>
						</div>
						<div>
							<div className="text-4xl font-bold mb-2">18%</div>
							<div className="text-lg opacity-90">
								Average Productivity Increase
							</div>
						</div>
						<div>
							<div className="text-4xl font-bold mb-2">40%</div>
							<div className="text-lg opacity-90">Stress Reduction</div>
						</div>
						<div>
							<div className="text-4xl font-bold mb-2">60%</div>
							<div className="text-lg opacity-90">Air Quality Improvement</div>
						</div>
					</div>
				</div>
			</section>

			<CTA />
		</div>
	);
}
