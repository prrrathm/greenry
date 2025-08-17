"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Users, Award, Globe } from "lucide-react";
import Image from "next/image";
export default function AboutPage() {
	const scrollToBooking = () => {
		document
			.getElementById("book-demo")
			?.scrollIntoView({ behavior: "smooth" });
	};

	const values = [
		{
			icon: Leaf,
			title: "Sustainability First",
			description:
				"We believe in creating green solutions that benefit both people and the planet, ensuring every project contributes to environmental conservation.",
		},
		{
			icon: Users,
			title: "Community Focused",
			description:
				"Building healthier communities through accessible plant solutions that improve air quality and mental well-being for everyone.",
		},
		{
			icon: Award,
			title: "Excellence in Service",
			description:
				"Delivering premium quality plants and exceptional service with ongoing support to ensure your green spaces thrive.",
		},
		{
			icon: Globe,
			title: "Environmental Impact",
			description:
				"Committed to biodiversity conservation and creating sustainable ecosystems that support local wildlife and plant diversity.",
		},
	];

	const team = [
		{
			name: "Sarah Johnson",
			role: "Founder & CEO",
			image: "/team/sarah.jpg",
			bio: "Environmental scientist with 15+ years experience in sustainable design and plant ecology.",
		},
		{
			name: "Michael Chen",
			role: "Head of Operations",
			image: "/team/michael.jpg",
			bio: "Expert in urban agriculture and sustainable business practices with a passion for community development.",
		},
		{
			name: "Emily Rodriguez",
			role: "Lead Horticulturist",
			image: "/team/emily.jpg",
			bio: "Certified plant specialist with expertise in indoor plant care and environmental optimization.",
		},
	];

	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="relative pt-32 pb-12 min-h-[40vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-50/10">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<div className="text-center space-y-8 max-w-4xl mx-auto">
						<div className="space-y-4">
							<div className="inline-flex items-center px-4 py-2 bg-secondary text-primary rounded-full text-sm font-medium">
								🌱 About Evergreen
							</div>
							<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-roboto font-extrabold text-gray-900 leading-tight">
								Growing a <span className="text-primary">Greener</span> Future
							</h1>
							<p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
								We&apos;re passionate about transforming spaces with sustainable
								plant solutions that enhance well-being, boost productivity, and
								contribute to environmental conservation.
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
								At Evergreen, we&apos;re dedicated to creating healthier, more
								productive environments through sustainable plant solutions. Our
								mission is to bridge the gap between urban living and nature,
								bringing the benefits of green spaces to every workspace and
								home.
							</p>
							<p className="text-lg text-gray-600 leading-relaxed">
								We believe that access to nature shouldn&apos;t be limited by
								location or circumstance. Through our expert-curated plant
								solutions, we help businesses and individuals create thriving
								environments that support both human well-being and
								environmental sustainability.
							</p>
							<Button
								className="bg-primary hover:bg-primary text-white px-8 py-3 font-semibold"
								onClick={scrollToBooking}
							>
								Start Your Journey
								<ArrowRight className="h-5 w-5 ml-2" />
							</Button>
						</div>
						<div className="relative">
							<div className="aspect-square bg-gradient-to-br from-secondary to-secondary rounded-2xl flex items-center justify-center">
								<Leaf className="h-32 w-32 text-primary" />
								{/* <Image /> */}
								<Image
									src={"/projects/about-1.jpg"}
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
							Our Values
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							The principles that guide everything we do at Evergreen
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
								Founded in 2020, Evergreen began with a simple vision: to make
								the benefits of nature accessible to everyone, regardless of
								where they live or work. What started as a small team of
								environmental enthusiasts has grown into a comprehensive plant
								solutions company.
							</p>
							<p className="text-lg text-gray-600 leading-relaxed">
								Today, we&apos;ve helped over 500 businesses and thousands of
								individuals create healthier, more productive environments. Our
								commitment to sustainability, quality, and customer satisfaction
								remains at the heart of everything we do.
							</p>
							<div className="grid grid-cols-3 gap-8 pt-8">
								<div className="text-center">
									<div className="text-3xl font-bold text-primary">500+</div>
									<div className="text-sm text-gray-600">Happy Clients</div>
								</div>
								<div className="text-center">
									<div className="text-3xl font-bold text-primary">50k+</div>
									<div className="text-sm text-gray-600">Plants Delivered</div>
								</div>
								<div className="text-center">
									<div className="text-3xl font-bold text-primary">100%</div>
									<div className="text-sm text-gray-600">Satisfaction Rate</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Team Section */}
			<section className="py-20 bg-gray-50 hidden">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl sm:text-4xl font-roboto font-extrabold text-gray-900 mb-4">
							Meet Our Team
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							The passionate experts behind Evergreen&apos;s success
						</p>
					</div>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{team.map((member, index) => (
							<div
								key={index}
								className="bg-white p-8 rounded-2xl shadow-sm text-center"
							>
								<div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
									<Users className="h-12 w-12 text-primary" />
								</div>
								<h3 className="text-xl font-roboto font-extrabold text-gray-900 mb-2">
									{member.name}
								</h3>
								<p className="text-primary font-semibold mb-4">{member.role}</p>
								<p className="text-gray-600 leading-relaxed">{member.bio}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 bg-primary">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<div className="max-w-3xl mx-auto space-y-8">
						<h2 className="text-3xl sm:text-4xl font-roboto font-extrabold text-white">
							Ready to Transform Your Space?
						</h2>
						<p className="text-xl text-secondary">
							Join hundreds of satisfied clients who have already created
							healthier, more productive environments with Evergreen.
						</p>
						<Button
							className="bg-white text-primary hover:bg-gray-100 px-8 py-3 font-semibold text-lg"
							onClick={scrollToBooking}
						>
							Book Free Consultation
							<ArrowRight className="h-5 w-5 ml-2" />
						</Button>
					</div>
				</div>
			</section>
		</div>
	);
}
