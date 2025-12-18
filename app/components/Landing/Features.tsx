"use client";

import { ChartNoAxesCombined, Check, Radio, Target } from "lucide-react";
import { Varela_Round } from "next/font/google";
import { motion } from "framer-motion";

const varela = Varela_Round({
  weight: "400",
  subsets: ["latin"],
});

function Features() {
  return (
    <div
      className={`min-h-[60rem] bg-[#151516] flex flex-col gap-[4rem] items-center ${varela.className}`}
    >
      <div className="flex gap-5 items-center justify-between mt-30 w-full px-50">
        <motion.div
          className="flex items-center gap-5"
          initial={{ opacity: 0, x: -44 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <Radio
            className="rounded-full bg-[#a8480448] p-[0.5rem] stroke-[#FF6500]"
            size={43}
          />{" "}
          <p className="text-[1.5rem] font-extrabold mt-[0.2rem] text-neutral-300">
            Real-Time Typing Races
          </p>
        </motion.div>
        <motion.div
          className="w-[40rem] text-2xl text-neutral-400 leading-[2.5rem] flex flex-col"
          initial={{ opacity: 0, x: 44 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 text-[1.1rem]">
            <Check className="stroke-green-800" />
            <p>Race against real people in real time</p>
          </div>
          <div className="flex items-center gap-3 text-[1.1rem]">
            <Check className="stroke-green-800" />
            <p>Every participant types the same text, with live progress</p>
          </div>
          <div className="flex items-center gap-3 text-[1.1rem]">
            <Check className="stroke-green-800" />
            <p>
              No delays, no fake sync — what you see is exactly what’s
              happening.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-row-reverse gap-5 items-center justify-between mt-30 w-full px-50">
        <motion.div
          className="flex items-center gap-5"
          initial={{ opacity: 0, x: 44 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <ChartNoAxesCombined
            className="rounded-full bg-[#a8480448] p-[0.5rem] stroke-[#FF6500]"
            size={43}
          />{" "}
          <p className="text-[1.5rem] font-extrabold mt-[0.2rem] text-neutral-300">
            Advanced Typing Analytics
          </p>
        </motion.div>
        <motion.div
          className="w-[40rem] text-2xl text-neutral-400 leading-[2.5rem] flex flex-col"
          initial={{ opacity: 0, x: -44 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 text-[1.1rem]">
            <Check className="stroke-green-800" />
            <p>KeyRace doesn’t just show your WPM and call it a day</p>
          </div>
          <div className="flex items-center gap-3 text-[1.1rem]">
            <Check className="stroke-green-800" />
            <p>
              Every session is broken down into accuracy, raw speed, error
              patterns
            </p>
          </div>
          <div className="flex items-center gap-3 text-[1.1rem]">
            <Check className="stroke-green-800" />
            <p>You know exactly why you’re fast or slow.</p>
          </div>
        </motion.div>
      </div>

      <div className="flex gap-5 items-center justify-between mt-30 w-full px-50">
        <motion.div
          className="flex items-center gap-5"
          initial={{ opacity: 0, x: -1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <Target
            className="rounded-full bg-[#a8480448] p-[0.5rem] stroke-[#FF6500]"
            size={43}
          />{" "}
          <p className="text-[1.5rem] font-extrabold mt-[0.2rem] text-neutral-300">
            Accuracy & Consistency Tracking
          </p>
        </motion.div>
        <motion.div
          className="w-[40rem] text-2xl text-neutral-400 leading-[2.5rem] flex flex-col"
          initial={{ opacity: 0, x: 44 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 text-[1.1rem]">
            <Check className="stroke-green-800" />
            <p>KeyRace doesn’t just show your WPM and call it a day</p>
          </div>
          <div className="flex items-center gap-3 text-[1.1rem]">
            <Check className="stroke-green-800" />
            <p>
              Every session is broken down into accuracy, raw speed, error
              patterns
            </p>
          </div>
          <div className="flex items-center gap-3 text-[1.1rem]">
            <Check className="stroke-green-800" />
            <p>You know exactly why you’re fast or slow.</p>
          </div>
        </motion.div>
      </div>    

    </div>
  );
}

export default Features;
