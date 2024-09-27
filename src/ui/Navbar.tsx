"use client";

import Image from "next/image";
import PrimaryButton from "./PrimaryButton";
import { useContext } from "react";
import { ContextAdd } from "@/lib/context/ContextAdd";
import plus from "./icons/plus";

export default function Navbar() {
  const { setIsCollapsed } = useContext(ContextAdd);
  return (
    <nav className="absolute top-5 left-1/2 transform -translate-x-1/2 w-10/12 flex justify-between items-center px-3 py-2 glass rounded-xl">
      <div className="flex items-center gap-3">
        <Image alt="icon" src="/icon.png" width={40} height={40} />
        <h1 className="text-lg">_todobuni</h1>
      </div>
      <ul className="flex">
        <li>
          <PrimaryButton onClick={() => setIsCollapsed(false)}>
            {plus()}
          </PrimaryButton>
        </li>
      </ul>
    </nav>
  );
}
