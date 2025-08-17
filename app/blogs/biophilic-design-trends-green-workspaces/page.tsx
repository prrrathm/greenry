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
						<span className="bg-secondary text-primary px-3 py-1 rounded-full text-sm font-medium">
							Design Trends
						</span>
					</div>

					<h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
						Biophilic Design Trends: The Future of Green Workspaces
					</h1>

					<div className="flex flex-wrap items-center justify-between text-sm text-gray-600 mb-8">
						<div className="flex items-center space-x-6">
							<div className="flex items-center">
								<User className="h-4 w-4 mr-2" />
								Robert Kim
							</div>
							<div className="flex items-center">
								<Calendar className="h-4 w-4 mr-2" />
								December 3, 2024
							</div>
							<div className="flex items-center">
								<Clock className="h-4 w-4 mr-2" />
								10 min read
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
						src="/projects/office-1.jpg"
						alt="Modern biophilic office design"
						fill
						className="object-cover"
					/>
				</div>

				<div className="prose prose-lg max-w-none">
					<p className="text-xl text-gray-700 mb-6 leading-relaxed">
						Biophilic design—the practice of incorporating natural elements into
						built environments—is revolutionizing modern workspaces. As
						companies recognize the profound impact of nature on employee
						well-being and productivity, innovative design trends are emerging
						that go far beyond traditional potted plants.
					</p>

					<h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
						The Evolution of Biophilic Design
					</h2>
					<p className="mb-6">
						Biophilic design has evolved from simple plant placement to
						sophisticated integration of natural elements throughout the
						workspace. Today&apos;s approach considers lighting, materials,
						spatial layout, and sensory experiences to create environments that
						truly connect occupants with nature.
					</p>

					<h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
						Emerging Trends in Green Workspaces
					</h2>

					<h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
						1. Living Architecture Integration
					</h3>
					<p className="mb-6">
						Modern offices are incorporating plants as architectural elements
						rather than decorative additions. This includes structural green
						walls, plant-integrated room dividers, and ceiling-mounted gardens
						that serve both functional and aesthetic purposes.
					</p>

					<h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
						2. Smart Plant Systems
					</h3>
					<p className="mb-6">
						Technology is revolutionizing plant care with IoT sensors that
						monitor soil moisture, light levels, and air quality. Automated
						irrigation systems and app-controlled lighting ensure optimal plant
						health while minimizing maintenance requirements.
					</p>

					<h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
						3. Multi-Sensory Nature Experiences
					</h3>
					<p className="mb-6">
						Beyond visual elements, designers are incorporating natural sounds,
						textures, and even scents. Water features provide soothing sounds,
						natural materials offer tactile experiences, and aromatic plants
						engage the sense of smell.
					</p>

					<h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
						Innovative Plant Applications
					</h2>
					<p className="mb-4">
						Forward-thinking companies are exploring creative ways to integrate
						plants:
					</p>
					<ul className="list-disc pl-6 mb-6 space-y-2">
						<li>
							<strong>Modular Green Systems:</strong> Flexible plant
							installations that can be reconfigured as needs change
						</li>
						<li>
							<strong>Edible Office Gardens:</strong> Herb and vegetable gardens
							that provide fresh ingredients for office kitchens
						</li>
						<li>
							<strong>Therapeutic Plant Spaces:</strong> Dedicated quiet zones
							with specific plants chosen for stress reduction
						</li>
						<li>
							<strong>Seasonal Rotation Programs:</strong> Regular plant changes
							to maintain visual interest and seasonal connection
						</li>
					</ul>

					<h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
						The Science Behind the Trends
					</h2>
					<p className="mb-6">
						Research continues to validate biophilic design benefits. Recent
						studies show that employees in biophilically designed offices report
						15% increase in well-being, 6% increase in productivity, and 15%
						increase in creativity. These findings are driving widespread
						adoption across industries.
					</p>

					<h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
						Sustainability and Wellness Integration
					</h2>
					<p className="mb-6">
						Modern biophilic design emphasizes sustainability alongside
						wellness. This includes using locally sourced plants, implementing
						water recycling systems, and choosing species that contribute to
						carbon sequestration and air purification.
					</p>

					<h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
						Future Predictions
					</h2>
					<p className="mb-4">
						Looking ahead, we anticipate several exciting developments:
					</p>
					<ul className="list-disc pl-6 mb-6 space-y-2">
						<li>
							<strong>AI-Powered Plant Care:</strong> Machine learning systems
							that predict and prevent plant health issues
						</li>
						<li>
							<strong>Biophilic Lighting:</strong> LED systems that mimic
							natural light patterns and support plant growth
						</li>
						<li>
							<strong>Integrated Air Systems:</strong> Plants working in
							conjunction with HVAC systems for optimal air quality
						</li>
						<li>
							<strong>Virtual Nature Integration:</strong> Combining live plants
							with digital nature displays for enhanced experiences
						</li>
					</ul>

					<h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
						Implementation Strategies
					</h2>
					<p className="mb-4">
						To successfully implement biophilic design trends:
					</p>
					<ul className="list-disc pl-6 mb-6 space-y-2">
						<li>
							Start with a comprehensive space assessment and employee needs
							analysis
						</li>
						<li>
							Develop a phased implementation plan that allows for gradual
							integration
						</li>
						<li>
							Choose plant species and systems that align with maintenance
							capabilities
						</li>
						<li>
							Monitor and measure the impact on employee satisfaction and
							productivity
						</li>
						<li>
							Plan for ongoing evolution and adaptation of the biophilic
							elements
						</li>
					</ul>

					<div className="bg-secondary p-6 rounded-lg my-8">
						<h3 className="text-lg font-semibold text-green-900 mb-2">
							Design Your Future Workspace
						</h3>
						<p className="text-primary mb-4">
							Ready to embrace the future of biophilic design? Our team stays at
							the forefront of green workspace trends, helping companies create
							innovative, nature-integrated environments that inspire and
							energize employees.
						</p>
						<Link href="/#book-demo">
							<Button className="bg-primary hover:bg-primary text-white">
								Explore Biophilic Design Solutions
							</Button>
						</Link>
					</div>
				</div>
			</article>

			<CTA />
		</div>
	);
}
