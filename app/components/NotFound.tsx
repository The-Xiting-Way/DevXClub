"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp-container";
import Link from "next/link";

const NotFoundComponent = () => {
  return (
    <div>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-5xl"
        >
          What are you looking for <br /> It is not there.?
        </motion.h1>
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col justify-center items-center"
        >
          <Link href="/">
            <button className="px-4 py-2 backdrop-blur-sm border text-gradient bg-gradient-to-r from-purple-500 to-green-300 bg-clip-text text-transparent mx-auto text-center rounded-full relative mt-4">
              <span>Wait, Go & Explore More →</span>
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-mediumVioletRed-500 to-transparent" />
            </button>
          </Link>
        </motion.div>
      </LampContainer>
    </div>
  );
};

export default NotFoundComponent;
