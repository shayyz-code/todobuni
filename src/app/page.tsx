"use client";

import Add from "@/ui/Home/Add";
import List from "@/ui/Home/List";

export default function Home() {
  return (
    <div className="">
      <main>
        <div>
          <List />
        </div>
        <div>
          <Add />
        </div>
      </main>
    </div>
  );
}
