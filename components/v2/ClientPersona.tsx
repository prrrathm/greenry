"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface Service {
  title: string;
  description: string;
  imageSrc: string;
  alt: string;
  link: string;
  bgColor: string;
}

const services: Service[] = [
  {
    title: "Corporate and MNC",
    description: `Complete Workspace Transformation
Bespoke Tech-Enabled Design 
Immersive Virtual 3-D Walkthroughs 
Integrated Supply Chain High-Quality Products 
Single Point Project Management `,
    imageSrc:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/06135c6b-f034-46fe-9f2d-da18346f9e4c-flipspaces-com/assets/images/interior_design-2.png",
    alt: "Design and Build - Corporate Office Interior Design",
    link: "/offering/design-and-build",
    bgColor: "bg-[#1e3a5f]",
  },
  {
    title: "Product Supply",
    description:
      "We are the largest global supply chain ecosystem of interior products and construction materials focused on commercial spaces. With over 200K products to choose from, our clients rely on us for our product diversity, quality and timely delivery. Our supply chain is fully integrated with tech to operate efficiently at scale.",
    imageSrc:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/06135c6b-f034-46fe-9f2d-da18346f9e4c-flipspaces-com/assets/images/product_supply-3.png",
    alt: "Product Supply - Flipspaces",
    link: "/offering/product-supply",
    bgColor: "bg-[#2d8659]",
  },
  {
    title: "Project Management",
    description:
      "Our experience of delivering complex projects combines innovative project management expertise with proprietary technology at every stage of project execution. With our innovative design expertise, proprietary technology, efficient site monitoring tools, review mechanism, and seasoned project managers, we offer a truly integrated solution that ensures a seamless and successful interior design experience.",
    imageSrc:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/06135c6b-f034-46fe-9f2d-da18346f9e4c-flipspaces-com/assets/images/project_mgmt-4.png",
    alt: "Project Management - Flipspaces",
    link: "#",
    bgColor: "bg-[#ec8857]",
  },
];

const ServiceCard = ({
  service,
  index,
}: {
  service: Service;
  index: number;
}) => {
  // top offset for sticky stacking
  const topBase = 60;
  const step = 40;
  const topOffset = topBase + index * step;

  const CardContent = (
    <motion.div
      className={`w-full grid grid-cols-1 md:grid-cols-2 ${service.bgColor} border border-[#303133] rounded-3xl min-h-[27.5rem] md:sticky md:overflow-hidden mt-5`}
      style={{ top: `${topOffset}px`, zIndex: 100 + index }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.08 }}
    >
      {/* TEXT */}
      <div className="p-8 md:p-12 text-white flex flex-col">
        <h3 className="text-2xl lg:text-3xl font-semibold mb-3">
          {service.title}
        </h3>
        <hr className="border-t border-white/30 my-4" />
        <p className="text-base text-white/90 leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* IMAGE */}
      <div className="p-8 md:p-12 flex items-center justify-center">
        <div className="w-full h-full max-h-[420px] flex items-center justify-center">
          <Image
            src={"/FlipSpaces.png"}
            alt={service.alt}
            width={520}
            height={320}
            className="object-contain"
          />
        </div>
      </div>
    </motion.div>
  );

  return service.link && service.link !== "#" ? (
    <Link href={service.link}>{CardContent}</Link>
  ) : (
    CardContent
  );
};

const ClientPersona = () => {
  return (
    <>
      <style jsx>{`
        :root {
          --card-height: 40vw;
          --card-margin: 4vw;
          --card-top-offset: 1em;
          --numcards: 4;
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
      <div className="w-full bg-[#f5f3ee] text-amber-100 text-center py-[20vh] px-5 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-700 mb-6">
            We are your one stop shop!
          </h2>
          <p className="text-xl md:text-2xl text-gray-700">
            Technology enabled Interior Design, Product Supply and Project
            Management all under one roof.
          </p>
        </div>
        <ul
          id="cards"
          className="list-none grid grid-cols-1 gap-[4vw] pb-[calc(4*1em)] mb-[4vw]"
          style={{
            gridTemplateRows: "repeat(var(--numcards), var(--card-height))",
          }}
        >
          <li className="card sticky top-20" id="card-4">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </li>
        </ul>
      </div>
    </>
  );
};

export default ClientPersona;
