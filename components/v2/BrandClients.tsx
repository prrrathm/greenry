"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const clientLogoUrls: string[] = [
  "https://www.flipspaces.com/assets/images/uploads/images/1645255842_d353c97a6b87129e15a3.png",
  "https://www.flipspaces.com/assets/images/uploads/images/1645255852_db26c063dc30d8d96581.png",
  "https://www.flipspaces.com/assets/images/uploads/images/1645255860_e5f87e2a044d850d2103.png",
  "https://www.flipspaces.com/assets/images/uploads/images/1645255870_717563b3a559f6ebd64f.png",
  "https://www.flipspaces.com/assets/images/uploads/images/1645255893_5cbac824183a87e6f3fb.png",
  // add more URLs if needed
];

const ClientLogos = () => {
  // Duplicate the logos array so we can create an infinite loop illusion
  const logos = [...clientLogoUrls, ...clientLogoUrls];

  return (
    <section className="bg-light-gray py-20">
      <div className="container">
        <motion.h5
          className="text-2xl font-semibold text-center text-dark-gray mb-16"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Delivering our promise to our esteemed clients
        </motion.h5>

        {/* Infinite horizontal scroll */}
        <div className="overflow-hidden">
          <motion.div
            className="flex space-x-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {logos.map((url, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex justify-center items-center h-20 w-[150px]"
              >
                <Image
                  src={"/BrandFile.webp"} // use the actual URL here
                  alt="company-logo"
                  width={150}
                  height={70}
                  className="object-contain grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
