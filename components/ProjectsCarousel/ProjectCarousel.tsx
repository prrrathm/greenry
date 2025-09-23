"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import projects from "@/data/projects.json";

interface Project {
	id: string;
	title: string;
	client: string;
	location: string;
	year: string;
	image: string;
	description: string;
	services: string[];
	results: string[];
	bgColor: string;
	link: string;
}

// Add background colors to featured projects
const featuredProjects: Project[] = projects
	.sort((a, b) => Number(b.year) - Number(a.year))
	.slice(0, 6)
	.map((project, index) => {
		const colors = [
			"bg-[#1e3a5f]", // Navy Blue
			"bg-[#2d8659]", // Forest Green
			"bg-[#ec8857]", // Warm Orange
			"bg-[#8b5a3c]", // Earthy Brown
			"bg-[#4a6741]", // Sage Green
			"bg-[#6366f1]", // Indigo Purple
		];
		return {
			...project,
			bgColor: colors[index % colors.length],
			link: `/projects/${project.id}`,
		};
	});

const ProjectCard = ({
	project,
	index,
}: {
	project: Project;
	index: number;
}) => {
	// top offset for sticky stacking
	const topBase = 200;
	const step = 40;
	const topOffset = topBase + index * step;

	const CardContent = (
		<motion.div
			className={`w-full grid grid-cols-1 md:grid-cols-2 ${project.bgColor} border border-[#303133] rounded-3xl min-h-[27.5rem] md:sticky md:overflow-hidden mt-5 relative`}
			style={{ top: `${topOffset}px`, zIndex: 100 + index }}
			initial={{ opacity: 0, y: 24 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.08 }}
		>
			{/* TEXT */}
			<div className="p-8 md:p-12 text-white flex flex-col">
				<h3 className="text-2xl lg:text-3xl font-semibold mb-3">
					{project.title}
				</h3>
				<div className="text-sm text-white/80 mb-2">
					{project.client} • {project.location}
				</div>
				<hr className="border-t border-white/30 my-4" />
				<p className="text-base text-white/90 leading-relaxed mb-6">
					{project.description}
				</p>
				<div className="mt-auto">
					<Link
						href={project.link}
						aria-label={`View ${project.title} project case study`}
					>
						<Button className="bg-white text-gray-900 hover:bg-white/90 font-semibold flex gap-2 px-6 py-3">
							View Project
							<ArrowRight className="h-4 w-4" />
						</Button>
					</Link>
				</div>
			</div>

			{/* IMAGE */}
			<div className="p-8 md:p-12 flex items-center justify-center">
				<div className="w-full h-full max-h-[420px] flex items-center justify-center">
					<Image
						src={project.image}
						alt={project.title}
						width={520}
						height={320}
						className="object-cover rounded-xl"
					/>
				</div>
			</div>
		</motion.div>
	);

	return CardContent;
};

const ProjectCarouselBeta: React.FC = () => {
	return (
		<>
			<style jsx>{`
				:root {
					--card-height: 40vw;
					--card-margin: 4vw;
					--card-top-offset: 3em;
					--numcards: 6;
				}

				#card-1 {
					--index: 1;
				}

				#card-2 {
					--index: 2;
				}

				#card-3 {
					--index: 3;
				}

				#card-4 {
					--index: 4;
				}

				#card-5 {
					--index: 5;
				}

				#card-6 {
					--index: 6;
				}

				.card {
					padding-top: calc(var(--index) * var(--card-top-offset));
				}

				/* Animation */
				@supports (animation-timeline: works) {
					@scroll-timeline cards-element-scrolls-in-body {
						source: selector(body);
						scroll-offsets: selector(#cards) start 1, selector(#cards) start 0;
						start: selector(#cards) start 1;
						end: selector(#cards) start 0;
						time-range: 4s;
					}

					.card {
						--index0: calc(var(--index) - 1);
						--reverse-index: calc(var(--numcards) - var(--index0));
						--reverse-index0: calc(var(--reverse-index) - 1);
					}

					.card__content {
						transform-origin: 50% 0%;
						will-change: transform;

						--duration: calc(var(--reverse-index0) * 1s);
						--delay: calc(var(--index0) * 1s);

						animation: var(--duration) linear scale var(--delay) forwards;
						animation-timeline: cards-element-scrolls-in-body;
					}

					@keyframes scale {
						to {
							transform: scale(calc(1.1 - calc(0.1 * var(--reverse-index))));
						}
					}
				}
			`}</style>
			<div className="bg-[var(--color-background-primary)] text-amber-100 text-center py-[20vh] px-5 md:px-20">
				<div className="max-w-7xl mx-auto text-center sticky top-20">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-700 mb-6">
						Recent Projects
					</h2>
					<div className="flex items-center justify-center w-full mx-auto gap-6">
						<p className="text-xl text-gray-600">
							Discover how we&apos;ve transformed workspaces and homes with our
							sustainable plant solutions.
						</p>
						<Link
							href="/projects"
							className="inline-flex items-center gap-2 text-primary font-semibold underline hover:no-underline transition-all duration-300"
						>
							View All Projects
							<ArrowRight className="h-4 w-4" />
						</Link>
					</div>
				</div>
				<ul
					id="cards"
					className="list-none grid grid-cols-1 gap-[4vw] pb-[calc(6*1em)] mb-[4vw]"
					style={{
						gridTemplateRows: "repeat(var(--numcards), var(--card-height))",
					}}
				>
					<li className="card sticky top-60" id="card-projects">
						{featuredProjects.map((project, index) => (
							<ProjectCard key={project.id} project={project} index={index} />
						))}
					</li>
				</ul>
			</div>
		</>
	);
};

export default ProjectCarouselBeta;
