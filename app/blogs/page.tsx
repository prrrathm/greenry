import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";

interface BlogPost {
	id: string;
	title: string;
	excerpt: string;
	image: string;
	author: string;
	date: string;
	readTime: string;
	category: string;
	slug: string;
}

const blogPosts: BlogPost[] = [
	{
		id: "1",
		title: "The Science Behind Plants and Productivity: How Greenery Boosts Workplace Performance",
		excerpt: "Discover the research-backed benefits of office plants and how they can transform your workspace into a productivity powerhouse.",
		image: "/projects/office-1.jpg",
		author: "Dr. Sarah Green",
		date: "December 15, 2024",
		readTime: "5 min read",
		category: "Workplace Wellness",
		slug: "plants-productivity-workplace-performance"
	},
	{
		id: "2",
		title: "Top 10 Low-Maintenance Office Plants That Thrive in Any Environment",
		excerpt: "From snake plants to pothos, explore the best plant varieties that require minimal care while maximizing air purification benefits.",
		image: "/projects/office-2.jpg",
		author: "Michael Chen",
		date: "December 12, 2024",
		readTime: "7 min read",
		category: "Plant Care",
		slug: "low-maintenance-office-plants-guide"
	},
	{
		id: "3",
		title: "Creating Stunning Green Walls: A Complete Design and Installation Guide",
		excerpt: "Learn the art and science of vertical gardens, from plant selection to irrigation systems and maintenance best practices.",
		image: "/projects/office-3.jpg",
		author: "Emily Rodriguez",
		date: "December 10, 2024",
		readTime: "8 min read",
		category: "Design & Installation",
		slug: "green-walls-design-installation-guide"
	},
	{
		id: "4",
		title: "Air Purification Champions: Plants That Clean Your Indoor Environment",
		excerpt: "Explore NASA'apos;s research on air-purifying plants and discover which species are most effective at removing toxins from your space.",
		image: "/projects/office-4.jpg",
		author: "Dr. James Wilson",
		date: "December 8, 2024",
		readTime: "6 min read",
		category: "Health & Wellness",
		slug: "air-purifying-plants-indoor-environment"
	},
	{
		id: "5",
		title: "Seasonal Plant Care: Keeping Your Office Greenery Healthy Year-Round",
		excerpt: "Master the art of seasonal plant maintenance with expert tips for watering, lighting, and care adjustments throughout the year.",
		image: "/projects/office-5.jpg",
		author: "Lisa Park",
		date: "December 5, 2024",
		readTime: "9 min read",
		category: "Plant Care",
		slug: "seasonal-plant-care-office-greenery"
	},
	{
		id: "6",
		title: "Biophilic Design Trends: The Future of Green Workspaces",
		excerpt: "Explore emerging trends in biophilic design and how forward-thinking companies are integrating nature into their office environments.",
		image: "/projects/office-1.jpg",
		author: "Robert Kim",
		date: "December 3, 2024",
		readTime: "10 min read",
		category: "Design Trends",
		slug: "biophilic-design-trends-green-workspaces"
	}
];

const categories = ["All", "Workplace Wellness", "Plant Care", "Design & Installation", "Health & Wellness", "Design Trends"];

export default function BlogsPage() {
	return (
		<div className="pt-32 min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50/40">
			{/* Hero Section */}
			<section className="py-16 px-4 sm:px-6 lg:px-8">
				<div className="container mx-auto text-center">
					<h1 className="text-4xl sm:text-6xl font-bebas text-gray-700 font-bold mb-4">
						Plant Care & Wellness Blog
					</h1>
					<p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
						Expert insights, care tips, and the latest trends in office plants and biophilic design. 
						Discover how to create healthier, more productive environments with our comprehensive guides.
					</p>
					
					{/* Category Filter */}
					<div className="flex flex-wrap justify-center gap-2 mb-12">
						{categories.map((category) => (
							<Button
								key={category}
								variant={category === "All" ? "default" : "outline"}
								size="sm"
								className={category === "All" 
									? "bg-green-800 hover:bg-green-700 text-white" 
									: "border-green-600 text-green-600 hover:bg-green-100"
								}
							>
								{category}
							</Button>
						))}
					</div>
				</div>
			</section>

			{/* Blog Grid */}
			<section className="pb-20 px-4 sm:px-6 lg:px-8">
				<div className="container mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{blogPosts.map((post) => (
							<Card key={post.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
								<div className="relative h-48 overflow-hidden">
									<Image
										src={post.image}
										alt={post.title}
										fill
										className="object-cover group-hover:scale-105 transition-transform duration-300"
									/>
									<div className="absolute top-4 left-4">
										<span className="bg-green-800 text-white px-3 py-1 rounded-full text-xs font-medium">
											{post.category}
										</span>
									</div>
								</div>
								
								<CardHeader className="pb-2">
									<CardTitle className="text-lg font-semibold text-gray-900 line-clamp-2 group-hover:text-green-800 transition-colors">
										{post.title}
									</CardTitle>
								</CardHeader>
								
								<CardContent className="space-y-4">
									<p className="text-gray-600 text-sm line-clamp-3">
										{post.excerpt}
									</p>
									
									<div className="flex items-center justify-between text-xs text-gray-500">
										<div className="flex items-center space-x-4">
											<div className="flex items-center">
												<User className="h-3 w-3 mr-1" />
												{post.author}
											</div>
											<div className="flex items-center">
												<Calendar className="h-3 w-3 mr-1" />
												{post.date}
											</div>
										</div>
										<div className="flex items-center">
											<Clock className="h-3 w-3 mr-1" />
											{post.readTime}
										</div>
									</div>
									
									<Link href={`/blogs/${post.slug}`}>
										<Button className="w-full bg-green-800 hover:bg-green-700 text-white group">
											Read More
											<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
										</Button>
									</Link>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Newsletter Signup */}
			<section className="py-16 bg-green-800 text-white">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="text-3xl font-bold mb-4">Stay Updated with Plant Care Tips</h2>
					<p className="text-lg mb-8 opacity-90">
						Get weekly insights on plant care, workplace wellness, and biophilic design trends.
					</p>
					<div className="max-w-md mx-auto flex gap-2">
						<input
							type="email"
							placeholder="Enter your email"
							className="flex-1 px-4 py-2 rounded-md text-gray-900"
						/>
						<Button className="bg-white text-green-800 hover:bg-gray-100">
							Subscribe
						</Button>
					</div>
				</div>
			</section>
		</div>
	);
}