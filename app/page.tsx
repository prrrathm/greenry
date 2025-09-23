import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
// import GalleryCarousel from "@/components/carousel/Gallery";
import Testimonials from "@/components/Testimonials";
import BookingForm from "@/components/BookingForm";
import CTA from "@/components/CTA";
import FAQs from "@/components/FAQ";
// import { EmblaOptionsType } from "embla-carousel";
import ClientsMarquee from "@/components/ClientsMarquee";
// import ProjectsCarousel from "@/components/ProjectsCarousel";
import ProjectCarouselBeta from "@/components/ProjectsCarousel/ProjectCarousel";
// import AutoPlayVideo from "@/components/VideoPlayer";
// import { ProjectsCarousel } from "@/components/carousel/ProjectsCarousel";
import { Metadata } from "next";
// import Stacker from "@/components/Stacker";
import MainTagline from "@/components/v2/maintagline";

export const metadata: Metadata = {
	title: "Evergreenry - Premium Office Plants & Biophilic Design Solutions",
	description:
		"Transform your workspace with Evergreenry's premium office plants, green walls, moss walls, and biophilic design solutions. Expert installation and maintenance services nationwide. Boost productivity by 15% and improve air quality naturally.",
	openGraph: {
		title: "Premium Office Plants & Biophilic Design Solutions | Evergreenry",
		description:
			"Transform your workspace with premium office plants, green walls & biophilic design. NASA-approved air purifying plants that boost productivity by 15%.",
		images: ["/og-home.jpg"],
		url: "https://evergreenry.com",
	},
	twitter: {
		card: "summary_large_image",
		title: "Premium Office Plants & Biophilic Design Solutions | Evergreenry",
		description:
			"Transform your workspace with premium office plants, green walls & biophilic design. NASA-approved air purifying plants that boost productivity by 15%.",
		images: ["/og-home.jpg"],
	},
};

export default function Home() {
	// const OPTIONS: EmblaOptionsType = { loop: true, };
	// const SLIDE_COUNT = 5;
	// const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

	const faqs = [
		{
			q: "What is Evergreenry?",
			a: "Evergreenry is an environmental organization focused on biodiversity conservation and ecological restoration through premium plant solutions for businesses and homes.",
		},
		{
			q: "What types of projects does Evergreenry undertake?",
			a: "We specialize in corporate office installations, home plant solutions, co-working space transformations, and event space arrangements with ongoing maintenance support.",
		},
		{
			q: "How can I get involved with Evergreenry'apos;s initiatives?",
			a: "You can book a free consultation through our website, call us directly, or reach out via email. We offer customized solutions for every space and budget.",
		},
		{
			q: "Where does Evergreenry operate?",
			a: "Evergreenry operates nationwide, providing professional plant installation and maintenance services across multiple regions with local expert support.",
		},
		{
			q: "Why is biodiversity conservation important?",
			a: "Biodiversity conservation ensures ecosystem stability, supports life-sustaining services, helps combat climate change, and creates healthier indoor environments that boost productivity and well-being.",
		},
	];

	const websiteJsonLd = {
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: "Evergreenry",
		url: "https://evergreenry.com",
		description:
			"Premium office plants, biophilic design solutions, green walls, and plant maintenance services for businesses nationwide.",
		potentialAction: {
			"@type": "SearchAction",
			target: "https://evergreenry.com/search?q={search_term_string}",
			"query-input": "required name=search_term_string",
		},
	};

	const faqJsonLd = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: faqs.map((faq) => ({
			"@type": "Question",
			name: faq.q,
			acceptedAnswer: {
				"@type": "Answer",
				text: faq.a,
			},
		})),
	};

	const serviceJsonLd = {
		"@context": "https://schema.org",
		"@type": "Service",
		name: "Office Plants & Biophilic Design Services",
		description:
			"Premium office plants, green walls, moss walls, zen gardens, and biophilic design solutions for businesses.",
		provider: {
			"@type": "Organization",
			name: "Evergreenry",
			url: "https://evergreenry.com",
		},
		areaServed: "India",
		serviceType: "Landscaping and Plant Installation",
		offers: [
			{
				"@type": "Offer",
				name: "Office Plants Installation",
				description:
					"Custom plant selection and installation for office environments",
			},
			{
				"@type": "Offer",
				name: "Green Wall Design",
				description: "Living wall installation with irrigation systems",
			},
			{
				"@type": "Offer",
				name: "Plant Maintenance",
				description: "Regular care and maintenance services for office plants",
			},
		],
	};

	return (
		<div className="min-h-screen relative">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
			/>
			{/* <Stacker /> */}
			<Hero />
			<MainTagline />
			<Services />
			{/* <ProjectsCarousel slides={[1,2,3,4]} /> */}
			{/* <section className="min-h-[60vh] h-[50vh] sm:h-[70vh] md:h-screen px-4 sm:px-8 md:px-20 rounded-xl flex items-center">
				<AutoPlayVideo src="/videos/home-banner.mp4" />
			</section> */}
			<ClientsMarquee />

			{/* Projects Gallery Section */}
			{/* <section className="py-20 bg-green-50">
				<div className="">
					<div className="text-center mb-16">
						<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
							Our Recent Projects
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Discover how we&apos;ve transformed workspaces and homes with our
							sustainable plant solutions.
						</p>
					</div>
			<ProjectsCarousel />
				</div>
			</section> */}

			<ProjectCarouselBeta />
			<BookingForm />
			<Testimonials />
			<Features />

			{/* FAQ Section */}
			<section className="py-20 bg-gray-50">
				<div className="container mx-auto px-0 sm:px-6 lg:px-8">
					<FAQs data={faqs} />
				</div>
			</section>
			<CTA />
		</div>
	);
}
