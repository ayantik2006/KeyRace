"use client";
import Link from "next/link";
import { Varela_Round } from "next/font/google";
import { motion } from "framer-motion";

const varela = Varela_Round({
  weight: "400",
  subsets: ["latin"],
});

function Navbar() {
  return (
    <motion.div
      className="fixed top-0 flex justify-between items-center w-full py-5 px-8 bg-[#171717] border-b-1 border-b-neutral-800 z-50"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <Link href="/" className="flex font-bold text-[1.3rem] font-extrabold">
        <p className="">Key</p>
        <p className="text-[#FF6500]">Race</p>
      </Link>
      <div className={`flex gap-6 ${varela.className}`}>
        <Link
          href=""
          className="text-neutral-400 hover:text-white duration-300 text-[0.9rem]"
        >
          Features
        </Link>
        <Link
          href=""
          className="text-neutral-400 hover:text-white duration-300 text-[0.9rem]"
        >
          Compete
        </Link>
        <Link
          href=""
          className="text-neutral-400 hover:text-white duration-300 text-[0.9rem]"
        >
          Analytics
        </Link>
        <Link
          href=""
          className="text-neutral-400 hover:text-white duration-300 text-[0.9rem]"
        >
          Log in
        </Link>
      </div>
    </motion.div>
  );
}

export default Navbar;
