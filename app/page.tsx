import SplitText from "@/components/animations/SplitText";
import GalleryCarousel from "@/components/carousel/Gallery";
import FAQs from "@/components/FAQ";
import AutoPlayVideo from "@/components/VideoPlayer";
import { EmblaOptionsType } from "embla-carousel";
import { MoveRight } from "lucide-react";
import Image from "next/image";
// import { useRef } from "react";

export default function Home() {
	const bannerVideoURL = "videos/home-banner.mp4";
	// const videoRef = useRef<HTMLVideoElement>(null);
	// useEffect(() => {
	// 	videoRef.current.load();
	// 	const playPromise = videoRef.current.play();
	// 	if (playPromise !== undefined) {
	// 		playPromise.catch((error) => {
	// 			console.warn("Autoplay failed:", error);
	// 		});
	// 	}
	// }, []);
	const OPTIONS: EmblaOptionsType = { loop: true };
	const SLIDE_COUNT = 5;
	const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
	const faqs = [
		{
		  q: "What is Greenry?",
		  a: "Greenry is an environmental organization focused on biodiversity conservation and ecological restoration."
		},
		{
		  q: "What types of projects does Greenry undertake?",
		  a: "Greenry undertakes projects such as afforestation, wetland restoration, habitat creation, and native species reintroduction."
		},
		{
		  q: "How can I get involved with Greenry's initiatives?",
		  a: "You can get involved by volunteering, donating, or partnering with us through our website or outreach programs."
		},
		{
		  q: "Where does Greenry operate?",
		  a: "Greenry operates across multiple regions, particularly focusing on ecologically degraded areas that need urgent restoration."
		},
		{
		  q: "Why is biodiversity conservation important?",
		  a: "Biodiversity conservation ensures ecosystem stability, supports life-sustaining services, and helps combat climate change."
		}
	  ];
	  
	return (
		<div className="min-h-screen">
			<div className="h-screen relative mt-20 py-10 border border-amber-200 flex flex-col items-center gap-4">
				<div className="flex text-center text-5xl font-black">
					Create a Thriving Environment
					<br /> With Green Companions
				</div>
				<div className="text-center text-gray-500 text-sm">
					Plants reduce stress and improve your mood, so they are ideal <br />{" "}
					for use at home and in the workspace.
				</div>
				<div className="bg-green-800 px-4 py-1 text-white rounded-full font-bold text-lg my-5">
					Book a Demo
				</div>
				{/* <AutoPlayVideo src={bannerVideoURL} /> */}
				{/* <div className="w-full h-full absolute top-0 bg-black/40">hello</div> */}
			</div>
			<div className="min-h-screen bg-green-800/20 py-20 px-20 flex flex-col gap-10">
				<div className="flex gap-6">
					<div className="basis-1/2">
						<div className="w-[80%] pt-6">
							Greenry has undertaken numerous impactful projects focused on
							ecological restoration and biodiversity conservation. Through a
							combination of scientific expertise, community engagement, and
							sustainable practices.
						</div>
					</div>
					<div className="flex flex-col gap-6 basis-1/2">
						<div className="text-5xl font-black">
							We strive to provide the most calming workspace tailormade for
							you.
						</div>
						<div className="flex gap-4 items-center justify-start font-semibold text-lg">
							<div className="bg-green-800 text-white rounded-full px-4 py-1">
								About Us
							</div>
							<div className="flex gap-2 items-center">
								View Projects <MoveRight className="h-4 w-4" />
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-6">
					<div className="flex gap-5 items-center justify-between">
						<div className="text-5xl font-black basis-1/2">
							Events, Projects and Campaigns for Environment Sustanibility
						</div>
						<div className="basis-1/2 flex justify-around">
							<div className="w-[60%]">
								Collaborating for a sustainable world through events and
								impactful campaigns
							</div>
						</div>
					</div>
					<GalleryCarousel slides={SLIDES} options={OPTIONS} />
				</div>
				<div></div>
			</div>
			<div className="min-h-screen">
			</div>
			<div className="min-h-screen bg-green-800/20 flex justify-center items-center w-full">
				<FAQs data={faqs} />
			</div>
		</div>
	);
}
