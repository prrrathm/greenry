// app/case-studies/octopus-energy/page.tsx
"use client";

import Image from "next/image";
// import { ChevronRight } from "lucide-react";
import CTA from "@/components/CTA";

export default function OctopusEnergyCaseStudy() {
	return (
		<main className="pt-40 ">
			{/* Hero */}
			<section className="relative max-h-[60vh] flex items-center justify-center">
				<div className="relative z-10 text-center px-4">
					<h1 className="text-4xl md:text-8xl font-bebas text-gray-700 font-bold mb-4">
						Netflix
					</h1>
					<p className="text-lg  max-w-2xl mx-auto">
						Netflix’s Coventry office at Friargate integrates biophilic design
						across five floors, creating a fun, lively workspace that lives and
						breathes the company’s brand and culture.
					</p>
				</div>
			</section>
			<div className="flex justify-center py-20">
				<Image
					src="/projects/office-1.jpg"
					alt="Netflix Canteen Planting"
					width={800}
					height={200}
					className="rounded-xl shadow-lg"
				/>
			</div>

			<div className="container mx-auto px-4 pb-12 space-y-16">
				{/* Client Overview & Brief */}
				<section className="grid  gap-10 items-start">
					<div className="space-y-6">
						<h2 className="text-4xl tracking-wide font-bebas text-gray-700 font-semibold">
							Client Overview
						</h2>
						<p>
							Netflix, the renewable energy folk whose brightly coloured vans
							you just can&apos;t miss, relocated their office to Friargate,
							Coventry. They were miserable with their current planting and
							wanted to have a fresh start for their new offices. Their fun
							ideas and playful nature meant they matched perfectly with our
							cheekiest rep.
						</p>

						<h2 className="text-4xl tracking-wide font-bebas text-gray-700 font-semibold">
							The Brief
						</h2>
						<p>
							Working closely with the Octopi and fit-out contractors Maris, we
							worked on a brief that made planting a central element, immersing
							staff and visitors in greenery. We recommended a mix of live,
							replica, and preserved planting to balance greenery with
							maintenance needs.
						</p>

						<h2 className="text-4xl tracking-wide font-bebas text-gray-700 font-semibold">
							Challenges
						</h2>
						<p>
							The under-stair planters were a unique addition to the
							project—something we hadn’t done before—but worked out really
							well, brightening up what would otherwise be a dull space in a
							bright pink stairwell!
						</p>
					</div>
				</section>

				{/* What We Did */}
				<section className="space-y-10">
					<h2 className="text-6xl font-semibold text-center font-bebas text-gray-700">
						What We Did
					</h2>
					<div className="space-y-8">
						<article>
							<h3 className="text-4xl tracking-wide font-bebas text-gray-700 font-medium">
								Stairwell Planting
							</h3>
							<p>
								The under-stair areas are dark and lack either natural or
								artificial light. This meant our best bet was high-quality
								replica planting. As most of the planting is seen through glass,
								it&apos;s less obvious that it&apos;s not live. We used larger specimens
								including Strelitzia, Monstera, and Dracaena, along with some
								Sansevieria.
							</p>
						</article>

						<article>
							<h3 className="text-4xl tracking-wide font-bebas text-gray-700 font-medium">
								Coffee Bar & Tea Point
							</h3>
							<p>
								There are several large coffee bars throughout the space. For
								these, we used our Ceiling Raft system with 100% foliage
								coverage. Again, for these we used replica planting due to
								loading weights and maintenance. We used trailing plants such as
								Scindapsus, Pothos, and ferns so the planting cascaded down from
								the grids. At the tea points, we planted pots of Chamaedorea
								Elegans and Scindapsus Aureum.
							</p>
						</article>

						<article>
							<h3 className="text-4xl tracking-wide font-bebas text-gray-700 font-medium">
								Palisade Planting
							</h3>
							<p>
								The palisade planting is one of the first things you almost hit
								as you walk in. You&apos;re greeted by a giant pink neon floor number
								on a reindeer moss backing and the shelving is filled with
								fluffy octopi. On these shelves, we also have troughs of
								Aglaonema, Asplenium, and Dracaena Lemon Lime softening the
								vibrant pink with some greenery.
							</p>
						</article>

						<article>
							<h3 className="text-4xl tracking-wide font-bebas text-gray-700 font-medium">
								Snug Spaces & Relaxation Area
							</h3>
							<p>
								In snug corners we created vertical ceiling rafts to hang on
								walls and above seating to offer calm, peaceful areas. The
								relaxation area has views across the city, separated from the
								main offices by vertical planters and ceiling rafts offering
								both prospect and refuge.
							</p>
						</article>

						<article>
							<h3 className="text-4xl tracking-wide font-bebas text-gray-700 font-medium">
								Floorstanding Planters
							</h3>
							<p>
								Dotted around the space, clusters of Kentia Palm, Ficus Lyrata,
								and Aglaonema Silver Bay soften desk-focussed areas.
							</p>
						</article>

						{/* Image Gallery */}
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
							{[
								"snug-planting.jpg",
								"floor-level-moss-sign.jpg",
								"coffee-bar-planting.jpg",
								"relaxation-space.jpg",
								"understair-planting.jpg",
								"floorstanding-planting.jpg",
							].map((file) => (
								<div key={file} className="overflow-hidden rounded-xl shadow">
									<Image
										src={`/case-studies/octopus-energy/${file}`}
										alt={file.replace(/[-.]/g, " ")}
										width={400}
										height={300}
										className="object-cover w-full h-48"
									/>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Outcome & Testimonial */}
				<section className="space-y-8">
					<h2 className="text-4xl tracking-wide font-bebas text-gray-700 font-semibold">
						Outcome
					</h2>
					<p>
						When you step into Octopus&apos; new offices, you feel like you&apos;ve been
						enveloped by the octopus&apos; tentacles and pulled right into their
						culture. The purples, pinks and neon lights give a playful, fun vibe
						whilst the greenery brings a calming, relaxed feel.
					</p>
					<blockquote className="border-l-4 border-green-500 pl-4 italic">
						“I had the pleasure of working with Plant Plan on a recent project,
						and I can confidently say they are a standout in the industry… Their
						attention to detail, exceptional service, and passion for what they
						do make them an invaluable partner for any business looking to
						elevate their environment with plants.”
					</blockquote>
					<div className="flex items-center space-x-4">
						<Image
							src="/case-studies/octopus-energy/sharron-bentley.jpg"
							alt="Sharron Bentley"
							width={80}
							height={80}
							className="rounded-full"
						/>
						<div>
							<p className="font-semibold">Sharron Bentley</p>
							<p className="text-sm text-gray-600">Office Manager, Coventry</p>
						</div>
					</div>
				</section>
			</div>
			<CTA />
		</main>
	);
}
