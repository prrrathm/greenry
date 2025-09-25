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
	link: string;
}

// Function to generate progressively lighter shades from the primary color
const generateCardColors = (primaryColor: string, totalCards: number) => {
	const colors = [];
	for (let i = 0; i < totalCards; i++) {
		// Convert hex to RGB
		const hex = primaryColor.replace("#", "");
		const r = parseInt(hex.substr(0, 2), 16);
		const g = parseInt(hex.substr(2, 2), 16);
		const b = parseInt(hex.substr(4, 2), 16);

		// Calculate lightness factor (0 for first card, increasing for subsequent cards)
		const lightenFactor = i * 0.15; // Adjust this value to control how much lighter each card gets

		// Lighten the color
		const newR = Math.min(255, Math.round(r + (255 - r) * lightenFactor));
		const newG = Math.min(255, Math.round(g + (255 - g) * lightenFactor));
		const newB = Math.min(255, Math.round(b + (255 - b) * lightenFactor));

		colors.push(`rgb(${newR}, ${newG}, ${newB})`);
	}
	return colors;
};

// Function to determine if text should be light or dark based on background
const getTextColor = (index: number) => {
	// For darker cards (index 0-2), use white text
	// For lighter cards (index 3-5), use dark text
	return index < 3 ? "#ffffff" : "#1a1a1a";
};

// Function to get icon and button colors
const getAccentColors = (index: number) => {
	if (index < 3) {
		return {
			buttonBg: "#ffffff",
			buttonText: "#1a1a1a",
			buttonHover: "rgba(255, 255, 255, 0.9)",
			hrColor: "rgba(255, 255, 255, 0.3)",
		};
	} else {
		return {
			buttonBg: "#1a1a1a",
			buttonText: "#ffffff",
			buttonHover: "rgba(26, 26, 26, 0.8)",
			hrColor: "rgba(26, 26, 26, 0.2)",
		};
	}
};

const primaryColor = "#418833";
const cardColors = generateCardColors(primaryColor, 6);

// Get featured projects
const featuredProjects: Project[] = projects
	.sort((a, b) => Number(b.year) - Number(a.year))
	.slice(0, 6)
	.map((project) => ({
		...project,
		link: `/projects/${project.id}`,
	}));

const ProjectCard = ({
	project,
	index,
}: {
	project: Project;
	index: number;
}) => {
	// top offset for sticky stacking
	const topBase = 120;
	const step = 20;
	const topOffset = topBase + index * step;

	const textColor = getTextColor(index);
	const accentColors = getAccentColors(index);

	const CardContent = (
		<div
			className="w-full grid grid-cols-1 md:grid-cols-2 border border-[#303133] rounded-3xl min-h-[27.5rem] md:sticky md:overflow-hidden mt-5 relative"
			style={{
				backgroundColor: cardColors[index],
				top: `${topOffset}px`,
				zIndex: 100 + index,
			}}
		>
			{/* TEXT */}
			<div className="p-8 md:p-12 flex flex-col" style={{ color: textColor }}>
				<h3 className="text-2xl lg:text-3xl font-semibold mb-3">
					{project.title}
				</h3>
				<div className="text-sm mb-2" style={{ opacity: 0.8 }}>
					{project.client} • {project.location}
				</div>
				<hr
					className="border-t my-4"
					style={{ borderColor: accentColors.hrColor }}
				/>
				<p className="text-base leading-relaxed mb-6" style={{ opacity: 0.9 }}>
					{project.description}
				</p>
				<div className="mt-auto">
					<Link
						href={project.link}
						aria-label={`View ${project.title} project case study`}
					>
						<Button
							className="font-semibold flex gap-2 px-6 py-3 transition-colors duration-200"
							style={{
								backgroundColor: accentColors.buttonBg,
								color: accentColors.buttonText,
							}}
							onMouseEnter={(e) => {
								e.currentTarget.style.backgroundColor =
									accentColors.buttonHover;
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.backgroundColor = accentColors.buttonBg;
							}}
						>
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
		</div>
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
				<div className="max-w-7xl mx-auto text-center">
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
