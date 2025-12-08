import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="about-me" />

        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 font-mono text-gray-300 leading-relaxed"
          >
            <p className="mb-6">
              Hello! I’m Mantu, a developer focused on building scalable digital
              products with clean engineering and purposeful design. My
              interests lie in AI-powered systems, automation workflows, and
              real-time platforms that solve practical problems.
            </p>

            <p className="mb-6">
              From job portals and AI interview assistants to e-commerce
              platforms and DSA visualization tools, I build products that
              combine intuitive user experiences with strong backend
              architecture. These projects have sharpened my skills in React,
              Next.js, Node.js, Spring Boot, and modern API ecosystems.
            </p>

            <p className="mb-8">
              I view development as architecting complete products—not just
              writing code. Through hands-on builds and continuous learning, I
              ensure every system I create is functional, scalable, and
              performance-ready.
            </p>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 flex justify-center md:justify-end"
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* Decoration Border */}
              <div className="absolute inset-0 border-2 border-neon translate-x-4 translate-y-4 rounded-sm z-0"></div>

              {/* Image */}
              <img
                src="/asset3.png"
                alt="Workspace"
                className="relative z-10 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-sm"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
