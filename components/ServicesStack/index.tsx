"use client";

import { Sprout, BrickWall, Flower, SprayCan } from "lucide-react";

const services = [
	{
		icon: Sprout,
		title: "Office Plants",
		image: "/projects/office-plants.jpg",
		description:
			"Office plants boost aesthetics and improve productivity. Their presence enhances mood, reduces stress, and purifies the air, creating a healthier, more focused environment. Add greenery to your workspace for a refreshing and productive atmosphere.",
		features: [
			"Air quality improvement",
			"Stress reduction",
			"Professional aesthetics",
			"Ongoing maintenance",
		],
	},
	{
		icon: BrickWall,
		title: "Green Walls",
		image: "/projects/green-walls.jpeg",
		description:
			"Enhance your space with stunning green walls and vertical gardens that bring nature indoors. These living walls purify the air, reduce noise, and create a refreshing, stylish ambiance. Perfect for homes and offices, they require minimal maintenance.",
		features: [
			"Personalized selection",
			"Easy care guidance",
			"Seasonal updates",
			"Health benefits",
		],
	},
	{
		icon: Flower,
		title: "Moss Walls",
		image: "/projects/moss-wall.jpeg",
		description:
			"Add elegance and tranquility to your space with premium moss walls. These maintenance-free, air-purifying installations enhance aesthetics while reducing stress and noise. A perfect blend of style and nature, they fit seamlessly into any setting.",
		features: [
			"Flexible arrangements",
			"Community benefits",
			"Brand enhancement",
			"Member satisfaction",
		],
	},
	{
		icon: SprayCan,
		title: "Plant Maintenance",
		image: "/projects/plant-maintenance.jpeg",
		description:
			"Plant maintenance keeps your office plants thriving. Regular watering, proper light, and pruning ensure they stay healthy, improve air quality, and create a positive work environment. Keep your plants in top shape for better focus and productivity.",
		features: [
			"Event planning",
			"Temporary setups",
			"Custom arrangements",
			"Professional service",
		],
	},
];

const ServicesStack = () => {
	return (
		<>
			<style jsx>{`
				:root {
					--card-height: 40vw;
					--card-margin: 4vw;
					--card-top-offset: 1em;
					--numcards: 4;
				}

				#service-card-1 {
					--index: 1;
				}

				#service-card-2 {
					--index: 2;
				}

				#service-card-3 {
					--index: 3;
				}

				#service-card-4 {
					--index: 4;
				}

				.service-card {
					padding-top: calc(var(--index) * var(--card-top-offset));
				}

				/* Animation */
				@supports (animation-timeline: works) {
					@scroll-timeline services-element-scrolls-in-body {
						source: selector(body);
						scroll-offsets: selector(#services-cards) start 1, selector(#services-cards) start 0;
						start: selector(#services-cards) start 1;
						end: selector(#services-cards) start 0;
						time-range: 4s;
					}

					.service-card {
						--index0: calc(var(--index) - 1);
						--reverse-index: calc(var(--numcards) - var(--index0));
						--reverse-index0: calc(var(--reverse-index) - 1);
					}

					.service-card__content {
						transform-origin: 50% 0%;
						will-change: transform;

						--duration: calc(var(--reverse-index0) * 1s);
						--delay: calc(var(--index0) * 1s);

						animation: var(--duration) linear scale var(--delay) forwards;
						animation-timeline: services-element-scrolls-in-body;
					}

					@keyframes scale {
						to {
							transform: scale(calc(1.1 - calc(0.1 * var(--reverse-index))));
						}
					}
				}
			`}</style>
			<div className="bg-gray-900 text-amber-100 text-center py-[20vh] px-20">
				<div className="mb-16">
					<h2 className="text-4xl md:text-6xl font-bold mb-4">Our Services</h2>
					<p className="text-xl text-amber-200">Professional plant solutions for your space</p>
				</div>
				<ul
					id="services-cards"
					className="list-none grid grid-cols-1 gap-[4vw] pb-[calc(4*1em)] mb-[4vw]"
					style={{
						gridTemplateRows: 'repeat(var(--numcards), var(--card-height))'
					}}
				>
					{services.map((service, index) => (
						<li key={index} className="service-card sticky top-20" id={`service-card-${index + 1}`}>
							<div className="service-card__content bg-orange-50 text-gray-900 rounded-[2rem] overflow-hidden grid grid-cols-2 items-stretch p-6 shadow-[0_0.2em_1em_rgba(0,0,0,0.1),0_1em_2em_rgba(0,0,0,0.1)]">
								<div className="w-[95%] max-w-[800px] justify-self-center text-left grid gap-4 place-items-start">
									<div className="flex items-center gap-3 mb-2">
										<service.icon className="h-8 w-8 text-green-600" />
										<h2 className="font-bold text-4xl m-0">{service.title}</h2>
									</div>
									<p className="font-light leading-[1.42] text-lg mb-4">
										{service.description}
									</p>
									<ul className="space-y-2">
										{service.features.map((feature, featureIndex) => (
											<li key={featureIndex} className="flex items-center text-sm">
												<span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
												{feature}
											</li>
										))}
									</ul>
								</div>
								<figure className="overflow-hidden">
									<img
										src={service.image}
										alt={service.title}
										className="w-full h-full object-cover rounded-lg"
									/>
								</figure>
							</div>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default ServicesStack;