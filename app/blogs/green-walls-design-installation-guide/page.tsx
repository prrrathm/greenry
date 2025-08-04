import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react";
import CTA from "@/components/CTA";

export default function BlogPost() {
	return (
		<div className="pt-32 min-h-screen bg-white">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<Link href="/blogs">
					<Button variant="outline" className="mb-8">
						<ArrowLeft className="mr-2 h-4 w-4" />
						Back to Blog
					</Button>
				</Link>
			</div>

			<article className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
				<header className="mb-8">
					<div className="mb-4">
						<span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
							Design & Installation
						</span>
					</div>
					
					<h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
						Creating Stunning Green Walls: A Complete Design and Installation Guide
					</h1>
					
					<div className="flex flex-wrap items-center justify-between text-sm text-gray-600 mb-8">
						<div className="flex items-center space-x-6">
							<div className="flex items-center">
								<User className="h-4 w-4 mr-2" />
								Emily Rodriguez
							</div>
							<div className="flex items-center">
								<Calendar className="h-4 w-4 mr-2" />
								December 10, 2024
							</div>
							<div className="flex items-center">
								<Clock className="h-4 w-4 mr-2" />
								8 min read
							</div>
						</div>
						<Button variant="outline" size="sm">
							<Share2 className="h-4 w-4 mr-2" />
							Share
						</Button>
					</div>
				</header>

				<div className="relative h-64 md:h-96 mb-8 rounded-xl overflow-hidden">
					<Image
						src="/projects/office-3.jpg"
						alt="Beautiful green wall installation"
						fill
						className="object-cover"
					/>
				</div>

				<div className="prose prose-lg max-w-none">
					<p className="text-xl text-gray-700 mb-6 leading-relaxed">
						Green walls, also known as living walls or vertical gardens, represent the pinnacle of biophilic design. 
						These stunning installations not only serve as breathtaking focal points but also provide significant environmental 
						and wellness benefits. Here&apos;s everything you need to know about creating your own green wall masterpiece.
					</p>

					<h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Planning Your Green Wall</h2>
					<p className="mb-4">Before installation begins, several key factors must be considered:</p>
					<ul className="list-disc pl-6 mb-6 space-y-2">
						<li><strong>Location Assessment:</strong> Evaluate lighting, humidity, and temperature conditions</li>
						<li><strong>Structural Support:</strong> Ensure the wall can support the additional weight</li>
						<li><strong>Water Access:</strong> Plan for irrigation system installation and drainage</li>
						<li><strong>Maintenance Access:</strong> Design for easy plant care and system maintenance</li>
					</ul>

					<h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Design Principles</h2>
					<p className="mb-6">
						Successful green walls follow key design principles that ensure both aesthetic appeal and plant health. 
						Consider plant size at maturity, growth patterns, and color combinations. Mix textures and forms to create 
						visual interest while ensuring compatible growing requirements.
					</p>

					<h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Plant Selection Strategies</h2>
					<p className="mb-4">Choose plants based on these criteria:</p>
					<ul className="list-disc pl-6 mb-6 space-y-2">
						<li><strong>Light Requirements:</strong> Match plants to available light conditions</li>
						<li><strong>Growth Habits:</strong> Consider mature size and spreading patterns</li>
						<li><strong>Root Systems:</strong> Select plants with compact, non-invasive roots</li>
						<li><strong>Maintenance Needs:</strong> Balance beauty with practical care requirements</li>
					</ul>

					<h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Installation Process</h2>
					<p className="mb-4">Professional installation follows these key steps:</p>
					<ol className="list-decimal pl-6 mb-6 space-y-2">
						<li>Structural assessment and reinforcement if needed</li>
						<li>Installation of support framework and backing material</li>
						<li>Irrigation system setup with timers and sensors</li>
						<li>Growing medium preparation and installation</li>
						<li>Plant installation following design layout</li>
						<li>System testing and initial care establishment</li>
					</ol>

					<h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Maintenance Requirements</h2>
					<p className="mb-6">
						Green walls require regular maintenance to thrive. This includes monitoring irrigation systems, 
						pruning and trimming plants, replacing any failed specimens, and adjusting care based on seasonal changes. 
						Professional maintenance ensures optimal health and appearance.
					</p>

					<h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Benefits Beyond Beauty</h2>
					<p className="mb-4">Green walls provide numerous advantages:</p>
					<ul className="list-disc pl-6 mb-6 space-y-2">
						<li>Significant air purification and oxygen production</li>
						<li>Natural sound absorption and noise reduction</li>
						<li>Temperature regulation and energy savings</li>
						<li>Improved mental health and stress reduction</li>
						<li>Enhanced property value and brand image</li>
					</ul>

					<div className="bg-green-50 p-6 rounded-lg mt-8">
						<h3 className="text-lg font-semibold text-green-900 mb-2">Professional Green Wall Services</h3>
						<p className="text-green-800 mb-4">
							Creating a successful green wall requires expertise in design, installation, and ongoing maintenance. 
							Our team handles every aspect from concept to completion, ensuring your living wall thrives for years to come.
						</p>
						<Link href="/#book-demo">
							<Button className="bg-green-800 hover:bg-green-700 text-white">
								Discuss Your Green Wall Project
							</Button>
						</Link>
					</div>
				</div>
			</article>

			<CTA />
		</div>
	);
}