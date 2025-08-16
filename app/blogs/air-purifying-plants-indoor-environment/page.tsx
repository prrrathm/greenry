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
							Health & Wellness
						</span>
					</div>

					<h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
						Air Purification Champions: Plants That Clean Your Indoor
						Environment
					</h1>

					<div className="flex flex-wrap items-center justify-between text-sm text-gray-600 mb-8">
						<div className="flex items-center space-x-6">
							<div className="flex items-center">
								<User className="h-4 w-4 mr-2" />
								Dr. James Wilson
							</div>
							<div className="flex items-center">
								<Calendar className="h-4 w-4 mr-2" />
								December 8, 2024
							</div>
							<div className="flex items-center">
								<Clock className="h-4 w-4 mr-2" />6 min read
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
						src="/projects/office-4.jpg"
						alt="Air purifying plants in office environment"
						fill
						className="object-cover"
					/>
				</div>

				<div className="prose prose-lg max-w-none">
					<p className="text-xl text-gray-700 mb-6 leading-relaxed">
						Indoor air quality is often 2-5 times more polluted than outdoor
						air, according to the EPA. Fortunately, nature provides us with
						powerful allies in the fight against indoor air pollution.
						NASA&apos;s groundbreaking Clean Air Study identified specific
						plants that excel at removing harmful toxins from our indoor
						environments.
					</p>

					<h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
						The NASA Clean Air Study
					</h2>
					<p className="mb-6">
						In the late 1980s, NASA conducted extensive research to find ways to
						clean air in space stations. The study revealed that certain
						houseplants could remove up to 87% of air toxins within 24 hours.
						These findings have profound implications for creating healthier
						indoor environments on Earth.
					</p>

					<h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
						Top Air-Purifying Plants
					</h2>

					<h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
						Snake Plant (Sansevieria trifasciata)
					</h3>
					<p className="mb-4">
						<strong>Removes:</strong> Formaldehyde, xylene, benzene, toluene
						<br />
						<strong>Special ability:</strong> Releases oxygen at night, making
						it perfect for bedrooms and 24/7 air cleaning.
					</p>

					<h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
						Peace Lily (Spathiphyllum)
					</h3>
					<p className="mb-4">
						<strong>Removes:</strong> Ammonia, benzene, formaldehyde,
						trichloroethylene
						<br />
						<strong>Special ability:</strong> Increases humidity levels while
						purifying air, perfect for dry office environments.
					</p>

					<h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
						Spider Plant (Chlorophytum comosum)
					</h3>
					<p className="mb-4">
						<strong>Removes:</strong> Carbon monoxide, formaldehyde, xylene
						<br />
						<strong>Special ability:</strong> Extremely effective at removing
						carbon monoxide, crucial for urban environments.
					</p>

					<h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
						Common Indoor Air Pollutants
					</h2>
					<p className="mb-4">
						Understanding what we&apos;re fighting helps us choose the right
						plants:
					</p>
					<ul className="list-disc pl-6 mb-6 space-y-2">
						<li>
							<strong>Formaldehyde:</strong> Found in furniture, carpets, and
							cleaning products
						</li>
						<li>
							<strong>Benzene:</strong> Present in plastics, synthetic fibers,
							and detergents
						</li>
						<li>
							<strong>Xylene:</strong> Common in paints, adhesives, and printing
							inks
						</li>
						<li>
							<strong>Ammonia:</strong> Found in cleaning products and computer
							equipment
						</li>
						<li>
							<strong>Trichloroethylene:</strong> Present in adhesives, spot
							removers, and rug cleaners
						</li>
					</ul>

					<h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
						Maximizing Air Purification
					</h2>
					<p className="mb-4">To optimize air cleaning benefits:</p>
					<ul className="list-disc pl-6 mb-6 space-y-2">
						<li>Use 1 plant per 100 square feet of space</li>
						<li>
							Choose plants with large leaf surfaces for maximum air contact
						</li>
						<li>Keep plants healthy with proper care and lighting</li>
						<li>
							Clean leaves regularly to maintain photosynthesis efficiency
						</li>
						<li>
							Combine different species for comprehensive pollutant removal
						</li>
					</ul>

					<h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
						Health Benefits Beyond Air Cleaning
					</h2>
					<p className="mb-6">
						Air-purifying plants provide additional wellness benefits including
						stress reduction, improved concentration, better sleep quality, and
						enhanced overall mood. Studies show that employees in offices with
						plants report fewer headaches, less fatigue, and improved
						respiratory health.
					</p>

					<div className="bg-green-50 p-6 rounded-lg mt-8">
						<h3 className="text-lg font-semibold text-green-900 mb-2">
							Create Your Clean Air Sanctuary
						</h3>
						<p className="text-primary mb-4">
							Transform your workspace into a healthy, productive environment
							with our expertly selected air-purifying plants. Our team ensures
							optimal placement and care for maximum air cleaning benefits.
						</p>
						<Link href="/#book-demo">
							<Button className="bg-primary hover:bg-primary text-white">
								Start Your Air Purification Journey
							</Button>
						</Link>
					</div>
				</div>
			</article>

			<CTA />
		</div>
	);
}
