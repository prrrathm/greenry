import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function GoogleProject() {
	return (
		<div>
			{/* Hero Section */}
			<div
				className="relative h-96 bg-cover bg-center"
				style={{ backgroundImage: "url(/images/google-office-plants.jpg)" }}
			>
				<div className="absolute inset-0 bg-black opacity-50"></div>
				<div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
					<h1 className="text-4xl md:text-5xl font-bold text-center">
						Transforming Google&apos;s Workspace with Evergreen
					</h1>
					<p className="text-xl md:text-2xl mt-2 text-center">
						Creating a healthier, more productive environment for Google&apos;s
						employees.
					</p>
				</div>
			</div>

			{/* Project Overview */}
			<section className="py-12 px-4 md:px-0">
				<h2 className="text-3xl font-bold text-center mb-6">
					Project Overview
				</h2>
				<p className="text-lg text-center max-w-3xl mx-auto">
					Evergreen partnered with Google to integrate nature into their
					innovative workspace at their headquarters. Our team installed over
					500 carefully selected plants across key areas, including
					workstations, meeting rooms, and communal spaces. The goal was to
					enhance air quality, reduce employee stress, and boost productivity.
					This collaboration transformed Google&apos;s office into a vibrant,
					green environment that reflects their commitment to employee
					well-being and sustainability.
				</p>
			</section>

			{/* Solutions Provided */}
			<section className="py-12 bg-gray-100 px-4 md:px-0">
				<h2 className="text-3xl font-bold text-center mb-6">
					Solutions Provided
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
					<Card>
						<CardHeader>
							<CardTitle>Snake Plants</CardTitle>
						</CardHeader>
						<CardContent>
							<Image
								src="/images/snake-plant.jpg"
								alt="Snake Plant"
								width={300}
								height={200}
								className="rounded-md"
							/>
							<p className="mt-2">
								Excellent for filtering toxins like formaldehyde and benzene,
								requiring minimal care—perfect for busy office environments.
							</p>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle>Peace Lilies</CardTitle>
						</CardHeader>
						<CardContent>
							<Image
								src="/images/peace-lily.jpg"
								alt="Peace Lily"
								width={300}
								height={200}
								className="rounded-md"
							/>
							<p className="mt-2">
								Known for removing mold spores and improving humidity, adding
								both beauty and function to workspaces.
							</p>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle>Spider Plants</CardTitle>
						</CardHeader>
						<CardContent>
							<Image
								src="/images/spider-plant.jpg"
								alt="Spider Plant"
								width={300}
								height={200}
								className="rounded-md"
							/>
							<p className="mt-2">
								Effective at reducing carbon monoxide and other impurities,
								thriving in various lighting conditions.
							</p>
						</CardContent>
					</Card>
				</div>
				<p className="text-lg text-center mt-6 max-w-3xl mx-auto">
					In addition to individual plant placements, we installed a
					breathtaking green wall in Google&apos;s lobby. This living feature
					not only serves as a stunning focal point but also contributes to air
					purification and a welcoming atmosphere for employees and visitors.
				</p>
			</section>

			{/* Benefits Achieved */}
			<section className="py-12 px-4 md:px-0">
				<h2 className="text-3xl font-bold text-center mb-6">
					Benefits Achieved
				</h2>
				<div className="flex flex-col md:flex-row justify-center items-center gap-8">
					<div className="text-center">
						<h3 className="text-2xl font-bold text-primary">20%</h3>
						<p className="mt-2">
							Increase in employee satisfaction scores, reflecting a more
							enjoyable work environment.
						</p>
					</div>
					<div className="text-center">
						<h3 className="text-2xl font-bold text-primary">15%</h3>
						<p className="mt-2">
							Boost in productivity, as employees report higher focus and energy
							levels.
						</p>
					</div>
					<div className="text-center">
						<h3 className="text-2xl font-bold text-primary">50%</h3>
						<p className="mt-2">
							Reduction in harmful toxins, creating a cleaner and healthier
							workspace.
						</p>
					</div>
				</div>
			</section>

			{/* Testimonials */}
			<section className="py-12 bg-gray-100 px-4 md:px-0">
				<h2 className="text-3xl font-bold text-center mb-6">
					What Google Says
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
					<Card>
						<CardContent className="pt-6">
							<p className="italic text-gray-700">
								&quot;The plants have transformed our office into a vibrant,
								refreshing space. The air feels cleaner, and it’s a pleasure to
								work surrounded by greenery.&quot;
							</p>
							<p className="mt-4 font-bold text-gray-900">
								- John Doe, Software Engineer at Google
							</p>
						</CardContent>
					</Card>
					<Card>
						<CardContent className="pt-6">
							<p className="italic text-gray-700">
								&quot;Evergreen’s professionalism and attention to detail were
								outstanding. Their ongoing support keeps our plants thriving,
								enhancing our office every day.&quot;
							</p>
							<p className="mt-4 font-bold text-gray-900">
								- Jane Smith, Facilities Manager at Google
							</p>
						</CardContent>
					</Card>
				</div>
			</section>

			{/* Maintenance Services */}
			<section className="py-12 px-4 md:px-0">
				<h2 className="text-3xl font-bold text-center mb-6">
					Ongoing Maintenance Services
				</h2>
				<p className="text-lg text-center max-w-3xl mx-auto">
					Evergreen ensures the longevity of Google’s green workspace with our
					comprehensive maintenance services. Our team conducts regular visits
					to water, prune, and care for the plants, keeping them healthy and
					vibrant. We also provide plant replacement guarantees and expert
					advice, allowing Google to enjoy the benefits of greenery without any
					hassle.
				</p>
			</section>

			{/* Call to Action */}
			<section className="py-12 bg-primary text-white text-center px-4 md:px-0">
				<h2 className="text-3xl font-bold mb-4">
					Ready to Transform Your Workspace?
				</h2>
				<p className="text-lg mb-6 max-w-2xl mx-auto">
					Contact Evergreen today for a free consultation and discover how we
					can bring the power of nature to your office, just like we did for
					Google.
				</p>
				<Button className="bg-white text-primary hover:bg-gray-100 text-lg py-2 px-6">
					Schedule a Consultation
				</Button>
			</section>
		</div>
	);
}
