"use client";

import React from "react";
import { motion } from "framer-motion";

const ContactFormSection = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic can be added here
  };

  return (
    <section className="bg-primary-teal py-20 px-4 sm:px-6">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-16 items-start">
          <div className="lg:col-span-3">
            <motion.h2
              className="text-white font-bold text-4xl lg:text-5xl leading-tight"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Get In <br /> Touch
            </motion.h2>
          </div>
          <div className="lg:col-span-9 mt-12 lg:mt-0">
            <motion.form
              onSubmit={handleSubmit}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08 } },
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                <motion.input
                  name="name"
                  placeholder="Name"
                  className="bg-transparent border-b border-white/40 text-white w-full py-3 focus:outline-none focus:border-accent-yellow placeholder-white/70 transition-colors"
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
                <motion.input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="bg-transparent border-b border-white/40 text-white w-full py-3 focus:outline-none focus:border-accent-yellow placeholder-white/70 transition-colors"
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
                <motion.input
                  name="phone"
                  type="tel"
                  placeholder="Phone"
                  className="bg-transparent border-b border-white/40 text-white w-full py-3 focus:outline-none focus:border-accent-yellow placeholder-white/70 transition-colors"
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
                <motion.input
                  name="company"
                  placeholder="Company"
                  className="bg-transparent border-b border-white/40 text-white w-full py-3 focus:outline-none focus:border-accent-yellow placeholder-white/70 transition-colors"
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
                <motion.div
                  className="md:col-span-2"
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <textarea
                    name="message"
                    placeholder="Describe briefly as to how we can be of help?"
                    rows={3}
                    className="bg-transparent border-b border-white/40 text-white w-full py-3 focus:outline-none focus:border-accent-yellow placeholder-white/70 resize-none transition-colors"
                  ></textarea>
                </motion.div>
              </div>
              <motion.div
                className="text-center mt-12"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <button
                  type="submit"
                  className="bg-accent-yellow text-primary-teal text-base font-medium uppercase tracking-wider py-4 px-10 rounded-lg transition-colors hover:bg-yellow-500"
                >
                  Send Message
                </button>
              </motion.div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
