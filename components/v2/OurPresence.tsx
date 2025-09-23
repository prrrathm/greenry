"use client";

import React from "react";
import { motion } from "framer-motion";

const locations = [
  {
    city: "New York",
    address: "261W 35th, NY, 10001, United States",
  },
  {
    city: "Mumbai",
    address:
      "Eureka Towers, Rajan Pada, Mindspace, Malad West, Mumbai, Maharashtra 400064",
  },
  {
    city: "Noida",
    address:
      "Work Hub A 14/15, Third Floor, sector 59 Noida Uttar Pradesh - 201309",
  },
  {
    city: "Bangalore",
    address:
      "2nd floor, Nandana Plaza, 242 17th cross road, Sector 7, HSR layout, Bengaluru, Karnataka 560102",
  },
  {
    city: "Hyderabad",
    address:
      "3rd floor, Lorven Tiara Building Kothaguda Junction, Kondapur Hyderabad 500084",
  },
];

const OfficeLocations = () => {
  return (
    <section className="bg-[#fdfbf5] py-20 ">
      <div className="container m-10">
        <div className="text-center">
          <motion.h2
            className="text-4xl font-bold text-text-primary"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Our Presence
          </motion.h2>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-y-12 text-center sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-3 xl:grid-cols-3">
          {locations.map((location, idx) => (
            <motion.div
              key={location.city}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
                delay: (idx % 5) * 0.05,
              }}
            >
              <div className="bg-[#eeebe3] pt-10 w-80 h-60 rounded-xl">
                <h5 className="text-2xl font-semibold text-gray-800">
                  {location.city}
                </h5>
                <p className="mt-2 text-base text-gray-700">
                  {location.address}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfficeLocations;
