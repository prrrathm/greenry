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
							Plant Care
						</span>
					</div>
					
					<h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
						Seasonal Plant Care: Keeping Your Office Greenery Healthy Year-Round
					</h1>
					
					<div className="flex flex-wrap items-center justify-between text-sm text-gray-600 mb-8">
						<div className="flex items-center space-x-6">
							<div className="flex items-center">
								<User className="h-4 w-4 mr-2" />
								Lisa Park
							</div>
							<div className="flex items-center">
								<Calendar className="h-4 w-4 mr-2" />
								December 5, 2024
							</div>
							<div className="flex items-center">
								<Clock className="h-4 w-4 mr-2" />
								9 min read
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
						src="/projects/office-5.jpg"
						alt="Seasonal office plant care"
						fill
						className="object-cover"
					/>
				</div>

				<div className="prose prose-lg max-w-none">
					<p className="text-xl text-gray-700 mb-6 leading-relaxed">
						Just like outdoor gardens, office plants have changing needs throughout the year. Understanding these seasonal 
						variations is key to maintaining healthy, thriving greenery that continues to provide air purification and 
						wellness benefits regardless of the weather outside.
					</p>

					<h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Spring: The Growing Season Begins</h2>
					<p className="mb-4">Spring brings renewed growth and increased activity for most plants:</p>
					<ul className="list-disc pl-6 mb-6 space-y-2">
						<li><strong>Increase watering frequency</strong> as plants begin active growth</li>
						<li><strong>Resume fertilizing</strong> with a balanced, diluted fertilizer monthly</li>
						<li><strong>Repot plants</strong> that have outgrown their containers</li>
						<li><strong>Prune and shape</strong> plants to encourage healthy new growth</li>
						<li><strong>Check for pests</strong> that may have developed during winter dormancy</li>
					</ul>

					<h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Summer: Peak Growth and Maintenance</h2>
					<p className="mb-6">
						Summer is the most active growing season for office plants. Higher temperatures and longer days mean 
						increased water needs and more frequent maintenance. Monitor soil moisture closely and provide adequate 
						humidity in air-conditioned environments.
					</p>

					<p className="mb-4">Key summer care tasks:</p>
					<ul className="list-disc pl-6 mb-6 space-y-2">
						<li><strong>Water more frequently</strong> but avoid overwatering</li>
						<li><strong>Provide extra humidity</strong> with pebble trays or humidifiers</li>
						<li><strong>Protect from direct sunlight</strong> that may be too intense</li>
						<li><strong>Continue monthly fertilizing</strong> to support active growth</li>
						<li><strong>Regular grooming</strong> to remove dead leaves and spent flowers</li>
					</ul>

					<h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Fall: Preparing for Dormancy</h2>
					<p className="mb-6">
						As daylight hours decrease and temperatures drop, plants begin to slow their growth in preparation for winter. 
						This is the time to adjust care routines and prepare plants for the less active months ahead.
					</p>

					<p className="mb-4">Fall preparation includes:</p>
					<ul className="list-disc pl-6 mb-6 space-y-2">
						<li><strong>Gradually reduce watering</strong> as growth slows</li>
						<li><strong>Stop fertilizing</strong> by late fall to allow plants to rest</li>
						<li><strong>Move plants closer to windows</strong> to maximize available light</li>
						<li><strong>Clean leaves thoroughly</strong> to prepare for lower light conditions</li>
						<li><strong>Check heating systems</strong> to avoid placing plants near heat sources</li>
					</ul>

					<h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Winter: Dormancy and Reduced Care</h2>
					<p className="mb-6">
						Winter is the most challenging season for office plants. Reduced light, dry air from heating systems, 
						and cooler temperatures all affect plant health. The key is to provide consistent, gentle care without 
						overwhelming dormant plants.
					</p>

					<p className="mb-4">Winter care essentials:</p>
					<ul className="list-disc pl-6 mb-6 space-y-2">
						<li><strong>Water sparingly</strong> - only when soil is dry several inches down</li>
						<li><strong>Avoid fertilizing</strong> during dormant period</li>
						<li><strong>Increase humidity</strong> to combat dry indoor air</li>
						<li><strong>Maximize light exposure</strong> by cleaning windows and rotating plants</li>
						<li><strong>Monitor for stress signs</strong> like leaf drop or yellowing</li>
					</ul>

					<h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Year-Round Best Practices</h2>
					<p className="mb-4">Regardless of season, these practices ensure healthy plants:</p>
					<ul className="list-disc pl-6 mb-6 space-y-2">
						<li>Maintain consistent temperatures between 65-75°F</li>
						<li>Provide adequate air circulation without direct drafts</li>
						<li>Use room-temperature water for watering</li>
						<li>Monitor plants weekly for changes in health or appearance</li>
						<li>Keep a care log to track watering and maintenance schedules</li>
					</ul>

					<h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Signs of Seasonal Stress</h2>
					<p className="mb-4">Watch for these indicators that plants need seasonal care adjustments:</p>
					<ul className="list-disc pl-6 mb-6 space-y-2">
						<li><strong>Leaf yellowing:</strong> Often indicates overwatering in cooler months</li>
						<li><strong>Brown leaf tips:</strong> Usually caused by low humidity or fluoride in water</li>
						<li><strong>Slow growth:</strong> Normal in fall/winter, concerning in spring/summer</li>
						<li><strong>Pest problems:</strong> More common in winter when plants are stressed</li>
					</ul>

					<div className="bg-green-50 p-6 rounded-lg mt-8">
						<h3 className="text-lg font-semibold text-green-900 mb-2">Professional Seasonal Care</h3>
						<p className="text-green-800 mb-4">
							Take the guesswork out of seasonal plant care with our professional maintenance services. 
							Our experts adjust care routines throughout the year to keep your office plants healthy and beautiful.
						</p>
						<Link href="/#book-demo">
							<Button className="bg-green-800 hover:bg-green-700 text-white">
								Learn About Maintenance Services
							</Button>
						</Link>
					</div>
				</div>
			</article>

			<CTA />
		</div>
	);
}