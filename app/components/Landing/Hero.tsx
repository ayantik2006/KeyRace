"use client";
import { ChevronRight, ChevronsDown, ChevronUp, HandFist, Keyboard } from "lucide-react";
import { Anta } from "next/font/google";
import { Varela_Round } from "next/font/google";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const anta = Anta({
  weight: "400",
  subsets: ["latin"],
});

const varela = Varela_Round({
  weight: "400",
  subsets: ["latin"],
});

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};


function Hero() {
  return (
    <div className="flex flex-col items-center gap- text-center ">
      <div className="flex flex-col items-center gap-10">
        <motion.h1
          className={`font-bold text-5xl ${anta.className} [@media(max-width:862px)_and_(min-width:547px)]:text-3xl [@media(max-width:547px)]:text-2xl mx-3`}
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          Built for{" "}
          <span className="text-[#FF6500] drop-shadow-[0_0_24px_rgba(234,118,63,0.25)]">
            Speed.
          </span>{" "}
          Proven by Precision
        </motion.h1>
        <h2 className="text-xl text-center text-neutral-300 leading-15 mx-3 [@media(max-width:862px)]:text-[1rem]">
          <p
            className={`[word-spacing:0.1rem] ${varela.className} text-white/70 tracking-wide`}
          >
            {" "}
            A real-time typing competition platform with deep performance
            analytics.
          </p>{" "}
          <p
            className={`text-[1rem] [word-spacing:0.08rem] ${varela.className} text-white/50 tracking-wider [@media(max-width:862px)]:text-[0.9rem]`}
          >
            Built for speed. Designed for accuracy.
          </p>
        </h2>
      </div>
      <div className={`flex gap-5 ${varela.className}`}>
        <button className="bg-[#FF6500] px-5 py-2 rounded-lg font-semibold hover:opacity-90 hover:-translate-y-1 duration-300 cursor-pointer flex items-center gap-2 group [@media(max-width:862px)]:px-3">
          <Keyboard
            size={18}
            className="rotate-180 group-hover:rotate-0 duration-300 [@media(max-width:862px)]:size-4"
          />
          <p className="[@media(max-width:862px)]:text-[0.9rem]">Start Typing</p>
        </button>
        <button className="bg-neutral-800 px-5 py-2 rounded-lg font-semibold hover:opacity-90 hover:-translate-y-1 duration-300 cursor-pointer border border-neutral-700 flex items-center gap-2 group [@media(max-width:862px)]:px-3">
          <ChevronUp size={18} className="group-hover:rotate-90 duration-300 [@media(max-width:862px)]:size-4" />
          <p>Create Room</p>
        </button>
      </div>
      <div className="relative top-55 flex items-center gap-2 text-neutral-600">
        <ChevronsDown className="animate-bounce mt-[0.3rem]"/>
      </div>
    </div>
  );
}

export default Hero;
