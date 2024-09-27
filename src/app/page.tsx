"use client";

import { ContextAdd } from "@/lib/context/ContextAdd";
import Add from "@/ui/Home/Add";
import List from "@/ui/Home/List";
import PickerList from "@/ui/Home/PickerList";
import { useContext } from "react";

export default function Home() {
  const { isCollapsedTasks } = useContext(ContextAdd);
  const { isCollapsedPicks } = useContext(ContextAdd);
  return (
    <div className="">
      <main>
        <div className="flex flex-col gap-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 md:w-10/12">
          <PickerList />
          <List />
        </div>
        <div>
          <Add addTo="tasks" isCollapsed={isCollapsedTasks} />
          <Add addTo="picks" isCollapsed={isCollapsedPicks} />
        </div>
      </main>
    </div>
  );
}
