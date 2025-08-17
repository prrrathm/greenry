import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react";
import CTA from "@/components/CTA";

export default function BlogPost() {
	return (
		<div className="pt-32 min-h-screen bg-white">
			{/* Back Button */}
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<Link href="/blogs">
					<Button variant="outline" className="mb-8">
						<ArrowLeft className="mr-2 h-4 w-4" />
						Back to Blog
					</Button>
				</Link>
			</div>

			{/* Article Header */}
			<article className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
				<header className="mb-8">
					<div className="mb-4">
						<span className="bg-secondary text-primary px-3 py-1 rounded-full text-sm font-medium">
							Workplace Wellness
						</span>
					</div>

					<h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
						The Science Behind Plants and Productivity: How Greenery Boosts
						Workplace Performance
					</h1>

					<div className="flex flex-wrap items-center justify-between text-sm text-gray-600 mb-8">
						<div className="flex items-center space-x-6">
							<div className="flex items-center">
								<User className="h-4 w-4 mr-2" />
								Dr. Sarah Green
							</div>
							<div className="flex items-center">
								<Calendar className="h-4 w-4 mr-2" />
								December 15, 2024
							</div>
							<div className="flex items-center">
								<Clock className="h-4 w-4 mr-2" />5 min read
							</div>
						</div>
						<Button variant="outline" size="sm">
							<Share2 className="h-4 w-4 mr-2" />
							Share
						</Button>
					</div>
				</header>

				{/* Featured Image */}
				<div className="relative h-64 md:h-96 mb-8 rounded-xl overflow-hidden">
					<Image
						src="/projects/office-1.jpg"
						alt="Office with plants boosting productivity"
						fill
						className="object-cover"
					/>
				</div>

				{/* Article Content */}
				<div className="prose prose-lg max-w-none">
					<p className="text-xl text-gray-700 mb-6 leading-relaxed">
						In today&apos;s fast-paced work environment, companies are
						constantly seeking ways to boost employee productivity and
						well-being. One surprisingly effective solution has been hiding in
						plain sight: plants. Recent scientific research reveals that
						incorporating greenery into office spaces can significantly enhance
						workplace performance, creativity, and overall job satisfaction.
					</p>

					<h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
						The Research Speaks Volumes
					</h2>
					<p className="mb-6">
						A groundbreaking study by the University of Exeter found that
						employees working in environments with plants showed a
						<strong> 15% increase in productivity</strong> compared to those in
						sparse, plant-free offices. The research, which examined over 450
						office workers across multiple countries, demonstrated that the
						presence of plants led to improved concentration, enhanced
						creativity, and increased overall well-being.
					</p>

					<h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
						How Plants Enhance Cognitive Function
					</h2>
					<p className="mb-4">
						Plants contribute to workplace productivity through several
						mechanisms:
					</p>
					<ul className="list-disc pl-6 mb-6 space-y-2">
						<li>
							<strong>Improved Air Quality:</strong> Plants naturally filter
							toxins and increase oxygen levels, leading to better brain
							function
						</li>
						<li>
							<strong>Stress Reduction:</strong> The presence of greenery has
							been shown to lower cortisol levels by up to 37%
						</li>
						<li>
							<strong>Enhanced Focus:</strong> Natural elements help restore
							attention and reduce mental fatigue
						</li>
						<li>
							<strong>Noise Reduction:</strong> Plants can absorb sound,
							creating a more peaceful work environment
						</li>
					</ul>

					<h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
						The NASA Connection
					</h2>
					<p className="mb-6">
						NASA&apos;s Clean Air Study identified specific plants that excel at
						removing common indoor air pollutants. Plants like snake plants,
						peace lilies, and spider plants can remove up to 87% of air toxins
						within 24 hours. When employees breathe cleaner air, they experience
						fewer headaches, less fatigue, and improved cognitive performance.
					</p>

					<h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
						Implementing Plants in Your Workspace
					</h2>
					<p className="mb-4">
						To maximize the productivity benefits of office plants, consider
						these strategies:
					</p>
					<ul className="list-disc pl-6 mb-6 space-y-2">
						<li>Place larger plants in common areas and meeting rooms</li>
						<li>Add small desk plants for individual workstations</li>
						<li>Install green walls in high-traffic areas</li>
						<li>
							Choose low-maintenance varieties for busy office environments
						</li>
						<li>Ensure proper lighting and care for optimal plant health</li>
					</ul>

					<h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
						The Bottom Line
					</h2>
					<p className="mb-6">
						The evidence is clear: plants are not just decorative elements but
						powerful tools for enhancing workplace productivity. Companies that
						invest in biophilic design see measurable returns through increased
						employee performance, reduced sick days, and improved job
						satisfaction. In an era where attracting and retaining top talent is
						crucial, creating a green, healthy workspace is no longer
						optional—it&apos;s essential.
					</p>

					<div className="bg-secondary p-6 rounded-lg my-8">
						<h3 className="text-lg font-semibold text-green-900 mb-2">
							Ready to Transform Your Workspace?
						</h3>
						<p className="text-primary mb-4">
							Discover how Evergreenry can help you create a more productive,
							healthier work environment with our expert plant solutions.
						</p>
						<Link href="/#book-demo">
							<Button className="bg-primary hover:bg-primary text-white">
								Schedule a Free Consultation
							</Button>
						</Link>
					</div>
				</div>
			</article>

			<CTA />
		</div>
	);
}
