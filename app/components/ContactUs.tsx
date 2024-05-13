"use client";
import React from "react";
import { motion } from "framer-motion";

const ContactUs = () => {
  const handelContactUs = () => {
    // Coming soon
  };
  return (
    <div className="h-[40rem] w-full rounded-md relative flex flex-col items-center justify-center antialiased">
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
      <div
        className="absolute inset-x-0 top-[calc(100%-19rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-43rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
};

export default ContactUs;
