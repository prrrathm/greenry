import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Calendar, Users, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import projectsData from "@/data/projects.json";

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

interface ProjectPageProps {
	params: Promise<{ id: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
	// Await the params in Next.js 15
	const { id } = await params;

	// Find the project by ID
	const project = projectsData.find((p: Project) => p.id === id);

	// If project not found, return 404
	if (!project) {
		notFound();
	}

	const projectJsonLd = {
		"@context": "https://schema.org",
		"@type": "CreativeWork",
		"name": project.title,
		"description": project.description,
		"image": `https://evergreenry.com${project.image}`,
		"dateCreated": project.year,
		"creator": {
			"@type": "Organization",
			"name": "Evergreenry",
			"url": "https://evergreenry.com"
		},
		"client": {
			"@type": "Organization", 
			"name": project.client
		},
		"locationCreated": {
			"@type": "Place",
			"name": project.location
		},
		"about": project.services,
		"result": project.results,
		"additionalType": "Case Study",
		"url": `https://evergreenry.com/projects/${project.id}`,
		"mainEntityOfPage": {
			"@type": "WebPage",
			"@id": `https://evergreenry.com/projects/${project.id}`
		}
	};

	const breadcrumbJsonLd = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		"itemListElement": [
			{
				"@type": "ListItem",
				"position": 1,
				"name": "Home",
				"item": "https://evergreenry.com"
			},
			{
				"@type": "ListItem", 
				"position": 2,
				"name": "Projects",
				"item": "https://evergreenry.com/projects"
			},
			{
				"@type": "ListItem",
				"position": 3,
				"name": project.title,
				"item": `https://evergreenry.com/projects/${project.id}`
			}
		]
	};

	return (
		<div className="min-h-screen mt-32">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
			/>
			{/* Navigation */}
			<div className="container mx-auto px-4 py-6">
				{/* Hero Section */}
				<div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
					{/* Image */}
					<div className="relative">
						<div className="aspect-[4/3] overflow-hidden shadow-2xl rounded-2xl">
							<Image
								src={project.image}
								alt={project.title}
								fill
								className="object-cover hover:scale-105 transition-transform duration-700 rounded-2xl"
								priority
							/>
						</div>
						{/* <div className="absolute -bottom-6 -right-6 bg-primary text-white px-6 py-3 rounded-xl shadow-lg">
							<span className="font-semibold">{project.year}</span>
						</div> */}
					</div>

					{/* Project Info */}
					<div className="space-y-6">
						<div>
							<Badge
								variant="secondary"
								className="mb-4 bg-secondary text-primary"
							>
								{project.year}
							</Badge>
							<h1 className="text-2xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
								{project.title}
							</h1>
							<p className="text-base md:text-xl text-gray-600 leading-relaxed">
								{project.description}
							</p>
						</div>

						{/* Project Details */}
						<div className="grid sm:grid-cols-2 gap-4">
							<Card className="border-l-4 border-l-primary">
								<CardContent className="p-4">
									<div className="flex items-center space-x-3">
										<Users className="w-5 h-5 text-primary" />
										<div>
											<p className="text-sm text-gray-500">Client</p>
											<p className="font-semibold text-gray-900">
												{project.client}
											</p>
										</div>
									</div>
								</CardContent>
							</Card>

							<Card className="border-l-4 border-l-secondary">
								<CardContent className="p-4">
									<div className="flex items-center space-x-3">
										<MapPin className="w-5 h-5 text-primary" />
										<div>
											<p className="text-sm text-gray-500">Location</p>
											<p className="font-semibold text-gray-900">
												{project.location}
											</p>
										</div>
									</div>
								</CardContent>
							</Card>

							<Card className="border-l-4 border-l-primary">
								<CardContent className="p-4">
									<div className="flex items-center space-x-3">
										<Calendar className="w-5 h-5 text-primary" />
										<div>
											<p className="text-sm text-gray-500">Completed</p>
											<p className="font-semibold text-gray-900">
												{project.year}
											</p>
										</div>
									</div>
								</CardContent>
							</Card>

							<Card className="border-l-4 border-l-secondary">
								<CardContent className="p-4">
									<div className="flex items-center space-x-3">
										<CheckCircle className="w-5 h-5 text-primary" />
										<div>
											<p className="text-sm text-gray-500">Status</p>
											<p className="font-semibold text-primary">Completed</p>
										</div>
									</div>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>

				{/* Services & Results Section */}
				<div className="grid lg:grid-cols-2 gap-12">
					{/* Services */}
					<Card className="shadow-lg border-0 bg-white/70 backdrop-blur-sm">
						<CardContent className="p-8">
							<h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
								<div className="w-2 h-8 bg-primary rounded-full mr-4"></div>
								Services Provided
							</h2>
							<div className="space-y-4">
								{project.services.map((service, index) => (
									<div
										key={index}
										className="flex items-center space-x-3 p-3 rounded-lg hover:bg-secondary/20 transition-colors"
									>
										<div className="w-2 h-2 bg-primary rounded-full"></div>
										<span className="text-gray-700 font-medium">{service}</span>
									</div>
								))}
							</div>
						</CardContent>
					</Card>

					{/* Results */}
					<Card className="shadow-lg border-0 bg-white/70 backdrop-blur-sm">
						<CardContent className="p-8">
							<h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
								<div className="w-2 h-8 bg-secondary rounded-full mr-4"></div>
								Project Results
							</h2>
							<div className="space-y-4">
								{project.results.map((result, index) => (
									<div
										key={index}
										className="flex items-start space-x-3 p-3 rounded-lg hover:bg-primary/5 transition-colors"
									>
										<CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
										<span className="text-gray-700 font-medium">{result}</span>
									</div>
								))}
							</div>
						</CardContent>
					</Card>
				</div>

				{/* Call to Action */}
				<div className="mt-16 text-center">
					<Card className="shadow-xl border-0 bg-gradient-to-r from-primary to-primary/90 text-white">
						<CardContent className="p-12">
							<h3 className="text-2xl font-bold mb-4">
								Interested in a Similar Project?
							</h3>
							<p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
								Let&apos;s discuss how we can transform your space with our expertise
								in sustainable interior design.
							</p>
							<div className="space-x-4 flex flex-col md:flex-row items-center justify-center gap-4">
								<Link href="/projects">
									<Button
										size="lg"
										variant="secondary"
										className="bg-white text-primary hover:bg-gray-50 cursor-pointer"
									>
										Get a Quote
									</Button>
								</Link>
								<Link href="/projects">
									<Button
										size="lg"
										variant="outline"
										className="border-white text-primary hover:bg-white hover:text-primary cursor-pointer"
									>
										View More Projects
									</Button>
								</Link>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}

// Generate static params for better performance (optional)
export async function generateStaticParams() {
	return projectsData.map((project: Project) => ({
		id: project.id,
	}));
}

// Generate metadata for each project page
export async function generateMetadata({ params }: ProjectPageProps) {
	const { id } = await params;
	const project = projectsData.find((p: Project) => p.id === id);

	if (!project) {
		return {
			title: "Project Not Found",
		};
	}

	return {
		title: `${project.title} - ${project.client} | Evergreenry Case Study`,
		description: `${project.description} See how Evergreenry transformed ${project.client}'s ${project.location} workspace with our biophilic design solutions in ${project.year}.`,
		keywords: [
			`${project.client} project`,
			`${project.location} office plants`,
			`${project.title.toLowerCase()}`,
			...project.services.map(service => service.toLowerCase()),
			"corporate plant installation case study",
			"biophilic design transformation"
		],
		openGraph: {
			title: `${project.title} - ${project.client} Case Study | Evergreenry`,
			description: `See how Evergreenry transformed ${project.client}'s workspace with biophilic design solutions in ${project.location}.`,
			images: [
				{
					url: `https://evergreenry.com${project.image}`,
					width: 1200,
					height: 630,
					alt: `${project.title} - ${project.client} transformation by Evergreenry`,
				}
			],
			url: `https://evergreenry.com/projects/${project.id}`,
			type: "article",
		},
		twitter: {
			card: "summary_large_image",
			title: `${project.title} - ${project.client} Case Study | Evergreenry`,
			description: `See how Evergreenry transformed ${project.client}'s workspace with biophilic design solutions.`,
			images: [`https://evergreenry.com${project.image}`],
		},
	};
}
