"use client";

import projectsData from "@/data/projects.json";

// Select first 4 projects for the stack
const projects = projectsData.slice(0, 4);

const ProjectsStack = () => {
	return (
		<>
			<style jsx>{`
				:root {
					--card-height: 40vw;
					--card-margin: 4vw;
					--card-top-offset: 1em;
					--numcards: 4;
				}

				#project-card-1 {
					--index: 1;
				}

				#project-card-2 {
					--index: 2;
				}

				#project-card-3 {
					--index: 3;
				}

				#project-card-4 {
					--index: 4;
				}

				.project-card {
					padding-top: calc(var(--index) * var(--card-top-offset));
				}

				/* Animation */
				@supports (animation-timeline: works) {
					@scroll-timeline projects-element-scrolls-in-body {
						source: selector(body);
						scroll-offsets: selector(#projects-cards) start 1, selector(#projects-cards) start 0;
						start: selector(#projects-cards) start 1;
						end: selector(#projects-cards) start 0;
						time-range: 4s;
					}

					.project-card {
						--index0: calc(var(--index) - 1);
						--reverse-index: calc(var(--numcards) - var(--index0));
						--reverse-index0: calc(var(--reverse-index) - 1);
					}

					.project-card__content {
						transform-origin: 50% 0%;
						will-change: transform;

						--duration: calc(var(--reverse-index0) * 1s);
						--delay: calc(var(--index0) * 1s);

						animation: var(--duration) linear scale var(--delay) forwards;
						animation-timeline: projects-element-scrolls-in-body;
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
					<h2 className="text-4xl md:text-6xl font-bold mb-4">Featured Projects</h2>
					<p className="text-xl text-amber-200">Transforming spaces with nature</p>
				</div>
				<ul
					id="projects-cards"
					className="list-none grid grid-cols-1 gap-[4vw] pb-[calc(4*1em)] mb-[4vw]"
					style={{
						gridTemplateRows: 'repeat(var(--numcards), var(--card-height))'
					}}
				>
					{projects.map((project, index) => (
						<li key={project.id} className="project-card sticky top-20" id={`project-card-${index + 1}`}>
							<div className="project-card__content bg-orange-50 text-gray-900 rounded-[2rem] overflow-hidden grid grid-cols-2 items-stretch p-6 shadow-[0_0.2em_1em_rgba(0,0,0,0.1),0_1em_2em_rgba(0,0,0,0.1)]">
								<div className="w-[95%] max-w-[800px] justify-self-center text-left grid gap-4 place-items-start">
									<div className="mb-2">
										<h2 className="font-bold text-4xl m-0 mb-2">{project.title}</h2>
										<div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
											<span className="font-medium">{project.client}</span>
											<span>•</span>
											<span>{project.location}</span>
											<span>•</span>
											<span>{project.year}</span>
										</div>
									</div>
									<p className="font-light leading-[1.42] text-lg mb-4">
										{project.description}
									</p>
									<div>
										<h4 className="font-semibold text-lg mb-2">Services:</h4>
										<ul className="space-y-1">
											{project.services.slice(0, 3).map((service, serviceIndex) => (
												<li key={serviceIndex} className="flex items-center text-sm">
													<span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
													{service}
												</li>
											))}
											{project.services.length > 3 && (
												<li className="text-sm text-gray-500 ml-5">
													+{project.services.length - 3} more services
												</li>
											)}
										</ul>
									</div>
								</div>
								<figure className="overflow-hidden">
									<img
										src={project.image}
										alt={project.title}
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

export default ProjectsStack;