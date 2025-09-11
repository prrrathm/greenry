import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Users, Award, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "About Us - Growing a Greener Future",
	description:
		"Learn about Evergreenry's mission to transform spaces with sustainable plant solutions. Founded in 2020, we've helped 500+ businesses create healthier, more productive environments with biophilic design.",
	openGraph: {
		title: "About Evergreenry - Growing a Greener Future",
		description:
			"Learn about our mission to transform spaces with sustainable plant solutions. 500+ happy clients, 50k+ plants delivered, 100% satisfaction rate.",
		images: ["/og-about.jpg"],
		url: "https://evergreenry.com/about",
	},
	twitter: {
		card: "summary_large_image",
		title: "About Evergreenry - Growing a Greener Future",
		description:
			"Learn about our mission to transform spaces with sustainable plant solutions. 500+ happy clients, 50k+ plants delivered.",
		images: ["/og-about.jpg"],
	},
};
export default function AboutPage() {
	const values = [
		{
			icon: Leaf,
			title: "Plant Companionship",
			description:
				"We believe in fostering meaningful relationships between people and plants, creating opportunities for mindfulness and well-being in every workspace.",
		},
		{
			icon: Users,
			title: "Corporate Wellness",
			description:
				"Transforming corporate environments by integrating nature into every workspace, lobby, breakout zone, and boardroom to enhance employee well-being.",
		},
		{
			icon: Award,
			title: "Design Excellence",
			description:
				"From live installations to low-maintenance and faux options, we deliver stylish, calming environments that inspire creativity and productivity.",
		},
		{
			icon: Globe,
			title: "Sustainable Solutions",
			description:
				"Creating vibrant, peaceful spaces through sustainable green decor solutions that bring the natural world into everyday corporate environments.",
		},
	];

	const aboutPageJsonLd = {
		"@context": "https://schema.org",
		"@type": "AboutPage",
		name: "About Evergreenry",
		description:
			"Learn about Evergreenry's mission to transform spaces with sustainable plant solutions. Founded in 2020, serving 500+ businesses nationwide.",
		url: "https://evergreenry.com/about",
		mainEntity: {
			"@type": "Organization",
			name: "Evergreenry",
			foundingDate: "2020",
			description:
				"Environmental organization focused on biodiversity conservation and ecological restoration through premium plant solutions.",
			mission:
				"To bridge the gap between urban living and nature, bringing the benefits of green spaces to every workspace and home.",
			numberOfEmployees: "25-50",
			foundingLocation: {
				"@type": "Place",
				name: "Mumbai, Maharashtra, India",
			},
		},
	};

	return (
		<div className="min-h-screen">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageJsonLd) }}
			/>
			{/* Hero Section */}
			<section className="relative pt-32 pb-12 min-h-[40vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-50/10">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<div className="text-center space-y-8 max-w-4xl mx-auto">
						<div className="space-y-4">
							<div className="inline-flex items-center px-4 py-2 bg-secondary text-primary rounded-full text-sm font-medium">
								🌿 Formerly We Decor8 (2018–2025)
							</div>
							<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-roboto font-extrabold text-gray-900 leading-tight">
								Creating <span className="text-primary">Corporate</span>{" "}
								Wellness Through Nature
							</h1>
							<p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
								Founded by Ruchika Wadhwa Bhalla, Evergreenry transforms
								corporate environments across India with indoor plants, green
								walls, and sustainable green decor solutions that foster calm,
								boost creativity, and promote well-being.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Mission Section */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div className="space-y-6">
							<h2 className="text-3xl sm:text-4xl font-roboto font-extrabold text-gray-900">
								Our Mission
							</h2>
							<p className="text-lg text-gray-600 leading-relaxed">
								At Evergreenry, we envision a world where every workspace,
								lobby, breakout zone, and boardroom is enriched with nature —
								starting with something as simple as one plant on every desk.
							</p>
							<p className="text-lg text-gray-600 leading-relaxed">
								We believe plants are more than just aesthetic additions.
								They&apos;re living elements that foster calm, boost creativity,
								and promote overall well-being. In today&apos;s fast-paced
								corporate environments, a plant offers a small yet powerful
								pause — a moment to breathe, refocus, and reconnect with the
								natural world.
							</p>
							<p className="text-lg text-gray-600 leading-relaxed">
								Our mission is rooted in the idea of plant companionship. When
								employees care for a plant — even something as small as watering
								or adjusting its position — they engage in a quiet act of
								mindfulness. Over time, this relationship cultivates a more
								positive, present, and stress-resilient mindset.
							</p>
							<div className="bg-secondary/20 p-6 rounded-lg border-l-4 border-primary">
								<p className="text-lg text-primary font-medium italic">
									&ldquo;Because when you take care of a plant, it quietly takes
									care of you.&rdquo;
								</p>
							</div>
							<Link href="/contact">
								<Button className="bg-primary hover:bg-primary text-white px-8 py-3 font-semibold">
									Start Your Journey
									<ArrowRight className="h-5 w-5 ml-2" />
								</Button>
							</Link>
						</div>
						<div className="relative">
							<div className="aspect-square bg-gradient-to-br from-secondary to-secondary rounded-2xl flex items-center justify-center">
								<Leaf className="h-32 w-32 text-primary" />
								{/* <Image /> */}
								<Image
									src={"/image-content/indoor-terrarium.jpg"}
									fill
									alt={"about-1"}
									className="z-10 object-cover rounded-2xl"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Values Section */}
			<section className="py-20 bg-gray-50">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl sm:text-4xl font-roboto font-extrabold text-gray-900 mb-4">
							Our Core Principles
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							The foundational beliefs that drive our corporate wellness
							solutions
						</p>
					</div>
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{values.map((value, index) => (
							<div
								key={index}
								className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
							>
								<div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-6">
									<value.icon className="h-8 w-8 text-primary" />
								</div>
								<h3 className="text-xl font-roboto font-extrabold text-gray-900 mb-4">
									{value.title}
								</h3>
								<p className="text-gray-600 leading-relaxed">
									{value.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Story Section */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div className="relative">
							<div className="aspect-[4/3] bg-gradient-to-br from-secondary to-secondary rounded-2xl flex items-center justify-center">
								{/* <Globe className="h-24 w-24 text-primary" /> */}
								<Image
									src={"/projects/about-2.jpg"}
									fill
									alt={"about-1"}
									className="z-10 object-cover rounded-2xl"
								/>
							</div>
						</div>
						<div className="space-y-6">
							<h2 className="text-3xl sm:text-4xl font-roboto font-extrabold text-gray-900">
								Our Story
							</h2>
							<p className="text-lg text-gray-600 leading-relaxed">
								Formerly known as We Decor8 (2018–2025), Evergreenry was founded
								by
								<span className="font-semibold text-gray-800">
									{" "}
									Ruchika Wadhwa Bhalla
								</span>
								, who left behind corporate life to follow her passion for
								plants and design.
							</p>
							<p className="text-lg text-gray-600 leading-relaxed">
								What began with styling balconies soon grew into full-scale
								green decor projects for offices, commercial spaces, and
								hospitality clients across India. This organic evolution
								reflected our deep understanding of how nature can transform
								professional environments.
							</p>
							<p className="text-lg text-gray-600 leading-relaxed">
								Today, Evergreenry creates calming, stylish environments through
								indoor plants, green walls, and sustainable green decor
								solutions. From live installations to low-maintenance and faux
								options, we bring nature into everyday spaces, making them more
								vibrant, peaceful, and inspiring.
							</p>
							<div className="grid grid-cols-3 gap-8 pt-8">
								<div className="text-center">
									<div className="text-3xl font-bold text-primary">7+</div>
									<div className="text-sm text-gray-600">
										Years of Excellence
									</div>
								</div>
								<div className="text-center">
									<div className="text-3xl font-bold text-primary">200+</div>
									<div className="text-sm text-gray-600">
										Corporate Projects
									</div>
								</div>
								<div className="text-center">
									<div className="text-3xl font-bold text-primary">100%</div>
									<div className="text-sm text-gray-600">
										Client Satisfaction
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Founder Section */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="max-w-4xl mx-auto">
						<div className="text-center mb-16">
							<h2 className="text-3xl sm:text-4xl font-roboto font-extrabold text-gray-900 mb-4">
								Leadership
							</h2>
							<p className="text-xl text-gray-600 max-w-3xl mx-auto">
								Meet the visionary behind Evergreenry&apos;s corporate wellness
								revolution
							</p>
						</div>
						<div className="bg-gradient-to-r from-secondary/10 to-primary/10 p-8 md:p-12 rounded-2xl">
							<div className="grid md:grid-cols-3 gap-8 items-center">
								<div className="md:col-span-1 text-center">
									<div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
										<Users className="h-16 w-16 text-white" />
									</div>
									<h3 className="text-2xl font-roboto font-extrabold text-gray-900 mb-2">
										Ruchika Wadhwa Bhalla
									</h3>
									<p className="text-primary font-semibold mb-4">
										Founder & CEO
									</p>
								</div>
								<div className="md:col-span-2 space-y-4">
									<p className="text-lg text-gray-700 leading-relaxed">
										A corporate professional turned green entrepreneur, Ruchika
										founded Evergreenry with a vision to transform how
										businesses integrate nature into their work environments.
									</p>
									<p className="text-gray-600 leading-relaxed">
										Her journey from styling residential balconies to designing
										comprehensive green solutions for corporate India reflects
										her deep understanding of the therapeutic relationship
										between people and plants in professional settings.
									</p>
									<p className="text-gray-600 leading-relaxed">
										Under her leadership, Evergreenry has become a trusted
										partner for businesses seeking to enhance employee
										well-being through biophilic design and plant companionship
										programs.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 bg-primary">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<div className="max-w-3xl mx-auto space-y-8">
						<h2 className="text-3xl sm:text-4xl font-roboto font-extrabold text-white">
							Ready to Enhance Your Corporate Wellness?
						</h2>
						<p className="text-xl text-secondary">
							Join leading businesses across India who have transformed their
							workspaces with Evergreenry&apos;s plant companionship programs
							and biophilic design solutions.
						</p>
						<Link href="/contact">
							<Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 font-semibold text-lg">
								Schedule Corporate Consultation
								<ArrowRight className="h-5 w-5 ml-2" />
							</Button>
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
