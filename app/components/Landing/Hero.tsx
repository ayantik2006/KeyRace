"use client";
import { HandFist, Keyboard } from "lucide-react";
import { Anta } from "next/font/google";
import { Varela_Round } from "next/font/google";
import { motion } from "framer-motion";

const anta = Anta({
  weight: "400",
  subsets: ["latin"],
});

const varela = Varela_Round({
  weight: "400",
  subsets: ["latin"],
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function Hero() {
  return (
    <div className="flex flex-col items-center gap-5 text-center ">
      <div className="flex flex-col items-center gap-10">
        <motion.h1
          className={`font-bold text-5xl ${anta.className}`}
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
        <h2 className="text-xl text-center text-neutral-300 leading-15">
          <p
            className={`[word-spacing:0.1rem] ${varela.className} text-white/70 tracking-wide`}
          >
            {" "}
            A real-time typing competition platform with deep performance
            analytics.
          </p>{" "}
          <p
            className={`text-[1rem] [word-spacing:0.08rem] ${varela.className} text-white/50 tracking-wider`}
          >
            Built for speed. Designed for accuracy.
          </p>
        </h2>
      </div>
      <div className={`flex gap-5 ${varela.className}`}>
        <button className="bg-[#FF6500] px-5 py-2 rounded-lg font-semibold hover:opacity-90 hover:-translate-y-1 duration-300 cursor-pointer flex items-center gap-2 group">
          <Keyboard
            size={18}
            className="rotate-180 group-hover:rotate-0 duration-300"
          />
          <p className="">Start Typing</p>
        </button>
        <button className="bg-neutral-800 px-5 py-2 rounded-lg font-semibold hover:opacity-90 hover:-translate-y-1 duration-300 cursor-pointer border border-neutral-700 flex items-center gap-2 group">
          <HandFist size={18} className="group-hover:rotate-90 duration-300" />
          <p>Join Room</p>
        </button>
      </div>
    </div>
  );
}

export default Hero;
