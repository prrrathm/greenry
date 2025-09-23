"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type CardType = "image" | "text" | "stat";

interface Card {
  type: CardType;
  content: string;
  gridClass: string;
  bgColor?: string;
  textColor?: string;
  title?: string;
  subtitle?: string;
  alt?: string;
  isGif?: boolean;
}

const technologyData: Card[] = [
  {
    type: "image",
    content:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/06135c6b-f034-46fe-9f2d-da18346f9e4c-flipspaces-com/assets/images/1646980088_083c8e9ccad6a3598702-14.gif",
    gridClass: "col-span-1 row-span-1",
    alt: "Technology Expertise Animation",
    isGif: true,
  },
  {
    type: "image",
    content:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/06135c6b-f034-46fe-9f2d-da18346f9e4c-flipspaces-com/assets/images/1698222836_aa0c5f9f14213f773acf-15.jpg",
    gridClass: "col-span-1 row-span-1",
    alt: "Small Office Interior Design - Flipspaces",
  },
  {
    type: "image",
    content:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/06135c6b-f034-46fe-9f2d-da18346f9e4c-flipspaces-com/assets/images/1698223150_8343de23351850f542dd-19.png",
    gridClass: "col-span-2 row-span-2",
    alt: "Modern Office Interior Design on Tablet - Flipspaces",
  },
  {
    type: "image",
    content:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/06135c6b-f034-46fe-9f2d-da18346f9e4c-flipspaces-com/assets/images/1698222904_fb41b1a015834c9945bb-16.jpg",
    gridClass: "col-span-1 row-span-2",
    alt: "Office Interior Designer - Flipspaces",
  },
  {
    type: "text",
    content: "Multi-module",
    title: "Multi-module",
    subtitle: "technology suite",
    gridClass: "col-span-1 row-span-1",
    bgColor: "bg-[#f0f0f0]",
    textColor: "text-dark-gray",
  },
  {
    type: "image",
    content:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/06135c6b-f034-46fe-9f2d-da18346f9e4c-flipspaces-com/assets/images/1646980102_85e338ff4d6e5d0b5681-17.gif",
    gridClass: "col-span-1 row-span-1",
    alt: "Technology Suite Icon Animation",
    isGif: true,
  },
  {
    type: "text",
    content: "Technology",
    title: "Technology",
    subtitle: "to structure supply chain and project management",
    gridClass: "col-span-1 row-span-1",
    bgColor: "bg-brand-orange",
    textColor: "text-black",
  },
  {
    type: "text",
    content: "VR enabled",
    title: "VR enabled",
    subtitle: "end to end space visualiser",
    gridClass: "col-span-1 row-span-1",
    bgColor: "bg-brand-accent",
    textColor: "text-dark-gray",
  },
  {
    type: "image",
    content:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/06135c6b-f034-46fe-9f2d-da18346f9e4c-flipspaces-com/assets/images/1698223138_f081aa9a9468f5bf6ba2-18.jpg",
    gridClass: "col-span-1 row-span-1",
    alt: "Modern Interior Design - Flipspaces",
  },
  {
    type: "image",
    content:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/06135c6b-f034-46fe-9f2d-da18346f9e4c-flipspaces-com/assets/images/1698223161_e533965ff3dcef5c7cbb-20.jpg",
    gridClass: "col-span-1 row-span-1",
    alt: "Office Room Design - Flipspaces",
  },
];

const processData: Card[] = [
  {
    type: "stat",
    content:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/06135c6b-f034-46fe-9f2d-da18346f9e4c-flipspaces-com/assets/images/1646980143_8cedb354969f058a74a5-25.gif",
    title: "1000+",
    subtitle: "Builders & Real Estate Partners network",
    gridClass: "col-span-2",
    isGif: true,
    bgColor: "bg-brand-primary",
  },
  {
    type: "image",
    content:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/06135c6b-f034-46fe-9f2d-da18346f9e4c-flipspaces-com/assets/images/1698223526_7948d0446b3433232044-22.jpg",
    gridClass: "col-span-1 row-span-1",
    alt: "Process Expertise Image 1",
  },
  {
    type: "image",
    content:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/06135c6b-f034-46fe-9f2d-da18346f9e4c-flipspaces-com/assets/images/1698223636_6a303d6c1b7de089c120-26.jpg",
    gridClass: "col-span-1 row-span-2",
    alt: "Process Expertise Image 2 Tall",
  },
  {
    type: "image",
    content:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/06135c6b-f034-46fe-9f2d-da18346f9e4c-flipspaces-com/assets/images/1698223560_4a34718397f77e1c1181-23.jpg",
    gridClass: "col-span-1 row-span-1",
    alt: "Process Expertise Image 3",
  },
  {
    type: "text",
    title: "200k",
    subtitle: "Interior products sourced + captive brands",
    gridClass: "col-span-2",
    bgColor: "bg-brand-accent",
    textColor: "text-dark-gray",
    content: "200k",
  },
  {
    type: "stat",
    content:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/06135c6b-f034-46fe-9f2d-da18346f9e4c-flipspaces-com/assets/images/1646980175_f7165d9ef514c20a334e-24.gif",
    title: "600+ Million",
    subtitle: "Sft of space designed and executed",
    gridClass: "col-span-2",
    isGif: true,
    bgColor: "bg-brand-orange",
  },
  {
    type: "image",
    content:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/06135c6b-f034-46fe-9f2d-da18346f9e4c-flipspaces-com/assets/images/1698223656_e4a7f2d0949f19bf2c41-27.jpg",
    gridClass: "col-span-1 row-span-1",
    alt: "Process Expertise Image 4",
  },
  {
    type: "image",
    content:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/06135c6b-f034-46fe-9f2d-da18346f9e4c-flipspaces-com/assets/images/1646980122_08de93cd14eefe150c69-21.gif",
    gridClass: "col-span-1 row-span-1",
    alt: "Process Expertise GIF",
    isGif: true,
  },
];

const peopleData: Card[] = [
  {
    type: "image",
    content:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/06135c6b-f034-46fe-9f2d-da18346f9e4c-flipspaces-com/assets/images/1698223733_119b8ce793782a1a6cbb-29.jpg",
    gridClass: "col-span-1",
    alt: "People Expertise Image",
  },
  {
    type: "text",
    title: "Global",
    subtitle: "presence",
    gridClass: "col-span-1",
    bgColor: "bg-[#f0f0f0]",
    textColor: "text-dark-gray",
    content: "Global",
  },
  {
    type: "text",
    title: "High",
    subtitle: "pedigree founding team!",
    gridClass: "col-span-2",
    bgColor: "bg-brand-orange",
    textColor: "text-black",
    content: "High",
  },
  {
    type: "image",
    content:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/06135c6b-f034-46fe-9f2d-da18346f9e4c-flipspaces-com/assets/images/1698223754_a021ca37e41c9858531d-30.jpg",
    gridClass: "col-span-1 row-span-2",
    alt: "People Expertise Image Tall",
  },
  {
    type: "text",
    title: "100+",
    subtitle: "Experienced interior designers",
    gridClass: "col-span-1",
    bgColor: "bg-brand-primary",
    textColor: "text-black",
    content: "100+",
  },
  {
    type: "stat",
    content:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/06135c6b-f034-46fe-9f2d-da18346f9e4c-flipspaces-com/assets/images/1646980163_41080af861a9015869d8-28.gif",
    title: "300",
    subtitle: "Years of combined leadership expertise",
    gridClass: "col-span-2",
    isGif: true,
    bgColor: "bg-brand-accent",
    textColor: "text-dark-gray",
  },
];

const TabButton = ({
  label,
  activeTab,
  setActiveTab,
}: {
  label: string;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) => {
  const tabKey = label.split(" ")[0].toLowerCase();
  const isActive = activeTab === tabKey;
  return (
    <button
      onClick={() => setActiveTab(tabKey)}
      className={cn(
        "px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 ease-in-out",
        isActive
          ? "bg-brand-primary text-black shadow-md"
          : "text-neutral-gray hover:bg-gray-300"
      )}
    >
      {label}
    </button>
  );
};

const CardItem = ({ item }: { item: Card }) => {
  const commonClasses = "rounded-xl overflow-hidden h-full";
  if (item.type === "image" || item.type === "stat") {
    return (
      <div
        className={cn(commonClasses, "relative", item.gridClass, item.bgColor)}
      >
        <Image
          src={"/WhyUs.gif"}
          alt={item.alt || ""}
          fill
          className="absolute inset-0 z-0 object-cover"
          unoptimized={item.isGif}
        />
        {item.type === "stat" && (
          <div
            className={cn(
              "relative z-10 flex h-full flex-col items-center justify-center p-4 text-center",
              item.textColor
            )}
          >
            <h3 className="text-4xl lg:text-5xl font-bold">{item.title}</h3>
            <p className="mt-2 text-sm lg:text-base">{item.subtitle}</p>
          </div>
        )}
      </div>
    );
  }

  if (item.type === "text") {
    return (
      <div
        className={cn(
          commonClasses,
          item.gridClass,
          item.bgColor,
          item.textColor,
          "p-6 flex flex-col justify-center"
        )}
      >
        <h5 className="text-xl font-semibold">{item.title}</h5>
        <p className="text-base">{item.subtitle}</p>
      </div>
    );
  }

  return null;
};

const WhyChooseFlipspaces = () => {
  const [activeTab, setActiveTab] = useState("technology");

  const renderContent = () => {
    let data;
    let gridClasses =
      "grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-4 auto-rows-[160px] md:auto-rows-[180px] grid-flow-dense";
    switch (activeTab) {
      case "technology":
        data = technologyData;
        break;
      case "process":
        data = processData;
        gridClasses =
          "grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[160px] md:auto-rows-[180px] grid-flow-dense";
        break;
      case "people":
        data = peopleData;
        gridClasses =
          "grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[160px] md:auto-rows-[180px] grid-flow-dense";
        break;
      default:
        return null;
    }
    return (
      <div className={gridClasses}>
        {data.map((item, index) => (
          <motion.div
            key={`${activeTab}-${index}`}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: (index % 4) * 0.05,
            }}
          >
            <CardItem item={item} />
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-dark-gray mb-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Why choose Flipspaces?
        </motion.h2>
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
        >
          <div className="flex space-x-1 bg-gray-200/70 rounded-full p-1 w-full max-w-md sm:max-w-lg">
            <TabButton
              label="Technology Expertise"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <TabButton
              label="Process Expertise"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <TabButton
              label="People Expertise"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>
        </motion.div>
        {renderContent()}
      </div>
    </section>
  );
};

export default WhyChooseFlipspaces;
