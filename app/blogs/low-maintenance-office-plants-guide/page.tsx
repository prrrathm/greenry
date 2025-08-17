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
							Plant Care
						</span>
					</div>

					<h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
						Top 10 Low-Maintenance Office Plants That Thrive in Any Environment
					</h1>

					<div className="flex flex-wrap items-center justify-between text-sm text-gray-600 mb-8">
						<div className="flex items-center space-x-6">
							<div className="flex items-center">
								<User className="h-4 w-4 mr-2" />
								Michael Chen
							</div>
							<div className="flex items-center">
								<Calendar className="h-4 w-4 mr-2" />
								December 12, 2024
							</div>
							<div className="flex items-center">
								<Clock className="h-4 w-4 mr-2" />7 min read
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
						src="/projects/office-2.jpg"
						alt="Low maintenance office plants"
						fill
						className="object-cover"
					/>
				</div>

				<div className="prose prose-lg max-w-none">
					<p className="text-xl text-gray-700 mb-6 leading-relaxed">
						Creating a green office environment doesn&apos;t have to be
						complicated or time-consuming. The key is choosing the right plants
						that can thrive with minimal care while still providing maximum
						benefits. Here are our top 10 recommendations for low-maintenance
						office plants that will transform your workspace without
						overwhelming your schedule.
					</p>

					<h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
						1. Snake Plant (Sansevieria trifasciata)
					</h2>
					<p className="mb-6">
						Often called the &quot;mother-in-law&apos;s tongue,&quot; the snake
						plant is virtually indestructible. It tolerates low light,
						infrequent watering, and poor air quality while actively purifying
						the air. Water only when the soil is completely dry, typically every
						2-3 weeks.
					</p>

					<h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
						2. ZZ Plant (Zamioculcas zamiifolia)
					</h2>
					<p className="mb-6">
						The ZZ plant is perfect for busy offices. Its glossy leaves and
						upright growth make it attractive, while its ability to survive in
						low light and with minimal water makes it practical. Water monthly
						or when leaves start to droop slightly.
					</p>

					<h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
						3. Pothos (Epipremnum aureum)
					</h2>
					<p className="mb-6">
						Known as &quot;devil&apos;s ivy,&quot; pothos is incredibly
						forgiving and grows quickly. It thrives in various lighting
						conditions and can be trained to climb or trail. Water when the top
						inch of soil feels dry, usually weekly.
					</p>

					<h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
						4. Spider Plant (Chlorophytum comosum)
					</h2>
					<p className="mb-6">
						Spider plants are excellent air purifiers and produce small
						plantlets that can be propagated easily. They prefer bright,
						indirect light but adapt to various conditions. Water when the soil
						surface is dry.
					</p>

					<h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
						5. Peace Lily (Spathiphyllum)
					</h2>
					<p className="mb-6">
						Peace lilies are beautiful flowering plants that indicate when they
						need water by drooping slightly. They prefer low to medium light and
						help remove harmful toxins from the air. Water when leaves begin to
						droop.
					</p>

					<h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
						Care Tips for Success
					</h2>
					<ul className="list-disc pl-6 mb-6 space-y-2">
						<li>
							Choose plants based on your office&apos;s lighting conditions
						</li>
						<li>Use pots with drainage holes to prevent root rot</li>
						<li>Group plants together to create humidity</li>
						<li>Rotate plants occasionally for even growth</li>
						<li>Clean leaves monthly to maximize photosynthesis</li>
					</ul>

					<h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
						Common Mistakes to Avoid
					</h2>
					<p className="mb-4">
						Even low-maintenance plants can suffer from these common errors:
					</p>
					<ul className="list-disc pl-6 mb-6 space-y-2">
						<li>
							<strong>Overwatering:</strong> More plants die from too much water
							than too little
						</li>
						<li>
							<strong>Wrong pot size:</strong> Choose pots that allow for growth
							but aren&apos;t too large
						</li>
						<li>
							<strong>Ignoring light needs:</strong> Even low-light plants need
							some natural light
						</li>
						<li>
							<strong>Inconsistent care:</strong> Establish a simple routine and
							stick to it
						</li>
					</ul>

					<div className="bg-secondary p-6 rounded-lg my-8">
						<h3 className="text-lg font-semibold text-green-900 mb-2">
							Professional Plant Services
						</h3>
						<p className="text-primary mb-4">
							Want the benefits of office plants without any of the maintenance?
							Our expert team handles everything from selection to ongoing care,
							ensuring your plants always look their best.
						</p>
						<Link href="/#book-demo">
							<Button className="bg-primary hover:bg-primary text-white">
								Learn About Our Services
							</Button>
						</Link>
					</div>
				</div>
			</article>

			<CTA />
		</div>
	);
}
