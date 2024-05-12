"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { motion } from "framer-motion";

const ContactUs = () => {
  const handelContactUs = () => {
    // Coming soon
  };
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <motion.div
          initial={{
            opacity: 0,
            x: -80,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <h1 className="relative z-10 text-lg md:text-7xl  text-gradient bg-gradient-to-r from-purple-500 to-green-300 bg-clip-text text-transparent text-center font-sans font-bold">
            Contact-Us
          </h1>
        </motion.div>
        <input
          type="text"
          placeholder="Name"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 p-3 mt-5"
        />
        <input
          type="email"
          placeholder="Email"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 p-3"
        />
        <textarea
          placeholder="Description"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 p-3"
        />
      </div>
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
        <button
          onClick={handelContactUs}
          className="px-4 py-2 backdrop-blur-sm border text-gradient bg-gradient-to-r from-purple-500 to-green-300 bg-clip-text text-transparent mx-auto text-center rounded-full relative mt-4"
        >
          <span>And Why The Delay →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-mediumVioletRed-500 to-transparent" />
        </button>
      </motion.div>
      <BackgroundBeams />
    </div>
  );
};

export default ContactUs;
