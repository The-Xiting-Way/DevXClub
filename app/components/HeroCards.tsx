"use client"
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const projects = [
  {
    title: "Learn",
    description:
      "DevXClub is where you can learn and grow. We have a wide range of resources and tutorials to help you get started with your journey.",
    link: "https://algochurn.com",
  },
  {
    title: "Build",
    description:
      "We have a wide range of projects and hackathons to help you get started with your journey. We have a wide range of resources and tutorials to help you get started with your journey.",
    link: "https://algochurn.com",
  },
  {
    title: "Connect",
    description:
      "We have a wide range of projects and hackathons to help you get started with your journey. We have a wide range of resources and tutorials to help you get started with your journey.",
    link: "https://algochurn.com",
  },
  {
    title: "Learn",
    description:
      "DevXClub is where you can learn and grow. We have a wide range of resources and tutorials to help you get started with your journey.",
    link: "https://algochurn.com",
  },
  {
    title: "Build",
    description:
      "We have a wide range of projects and hackathons to help you get started with your journey. We have a wide range of resources and tutorials to help you get started with your journey.",
    link: "https://algochurn.com",
  },
  {
    title: "Connect",
    description:
      "We have a wide range of projects and hackathons to help you get started with your journey. We have a wide range of resources and tutorials to help you get started with your journey.",
    link: "https://algochurn.com",
  }
];

export const HoverEffect = () => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
    <div className="max-w-5xl mx-auto px-8">
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10">
        {projects.map((project, idx) => (
          <div
            key={project?.link}
            className="relative group  block p-2 h-full w-full "
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-slate-800/[0.8] block  rounded-3xl"
                  layoutId="hoverBackground" // required for the background to follow
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <div className=" rounded-2xl h-full w-full p-4 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-800/[0.2] border border-transparent group-hover:border-slate-700 relative z-50">
              <div className="relative z-50">
                <div className="p-4">
                  <h4 className="text-zinc-100 font-bold tracking-wide mt-4">
                    {project.title}
                  </h4>
                  <p className="mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

