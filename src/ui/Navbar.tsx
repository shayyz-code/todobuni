"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import runningbuniblack from "../app/running-buni-black.gif";
import runningbunipurple from "../app/running-buni.gif";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState<"light" | "dark" | "">();
  useEffect(() => {
    window.matchMedia("(prefers-color-scheme: dark)")
      ? setTheme("dark")
      : setTheme("light");
  }, []);
  return (
    <motion.nav
      initial={{ y: -100, x: "-50%" }}
      animate={{ y: 0, x: "-50%" }}
      transition={{ type: "spring" }}
      className="absolute top-5 left-1/2 transform w-11/12 md:w-10/12 flex justify-between items-center px-3 py-2 glass rounded-xl"
    >
      <div className="flex items-center gap-3">
        <Image
          alt="icon"
          src={theme === "light" ? runningbuniblack : runningbunipurple}
          width={40}
          height={40}
        />
        <h1 className="text-lg">_todobuni</h1>
        <span className="bg-slate-200 dark:bg-neutral-700 px-1 py-0 rounded-md">
          v1.0.1
        </span>
      </div>
    </motion.nav>
  );
}
