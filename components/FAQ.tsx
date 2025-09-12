"use client";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import DOMPurify from "isomorphic-dompurify";
// import { Separator } from "./ui/separator";
export type FAQsType = {
	q: string;
	a: string;
};

type FAQsProps = {
	data: FAQsType[];
};

export function FAQs({ data }: FAQsProps) {
	return (
		<div className="px-5 md:px-20 w-full">
			<div className="bg-zinc-100 w-full px-4 py-6 md:px-10 md:py-10 rounded-3xl flex flex-col gap-6 border ">
				<h2 className="text-2xl md:text-3xl font-bold text-green-900">
					Frequently Asked Questions
				</h2>
				<Accordion type="single" collapsible className="w-full">
					{data.map((item, index) => (
						<div key={index}>
							<AccordionItem value={`item-${index}`}>
								<AccordionTrigger className="text-sm md:text-base text-black cursor-pointer hover:no-underline font-semibold">
									{item.q}
								</AccordionTrigger>
								<AccordionContent className="text-green-900 font-normal text-sm md:text-base">
									<div
										dangerouslySetInnerHTML={{
											__html: DOMPurify.sanitize(item.a),
										}}
									/>
								</AccordionContent>
							</AccordionItem>
							{/* {index !== data.length - 1 && <Separator />} */}
						</div>
					))}
				</Accordion>
			</div>
		</div>
	);
}

export default FAQs;
