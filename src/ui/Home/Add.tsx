import { motion, AnimatePresence } from "framer-motion";
import { Dispatch, SetStateAction, useContext, useState } from "react";
import TextInput from "../TextInput";
import PrimaryButton from "../PrimaryButton";
import xmark from "../icons/x-mark";
import { child, push, ref, set } from "firebase/database";
import { db } from "@/lib/firebase";
import chevronupdown from "../icons/chevron-up-down";
import { ContextAdd } from "@/lib/context/ContextAdd";

type TAdd = {
  addTo: "tasks" | "picks";
  isCollapsed: boolean;
};

export default function Add({ addTo, isCollapsed }: TAdd) {
  const { handleToggleTask, handleTogglePick } = useContext(ContextAdd);
  const [newTask, setNewTask] = useState<string>("");
  const [addToPicks, setAddToPicks] = useState<string>("coffee");
  const handleOnSubmit = () => {
    if (newTask === "") return;
    if (addTo === "tasks") {
      const postData = {
        title: newTask,
        isCompleted: false,
      };

      const newPostRef = push(child(ref(db), "tasks"));

      set(newPostRef, postData);
    } else if (addTo === "picks") {
      const postData = {
        val: newTask,
      };
      const newPostRef = push(child(ref(db), "picks/" + addToPicks));

      set(newPostRef, postData);
    }
  };
  return (
    <AnimatePresence initial={false}>
      {!isCollapsed && (
        <motion.div
          initial={{ y: 0, x: "-50%" }}
          animate={{ y: -65, x: "-50%" }}
          exit={{ y: 100, x: "-50%" }}
          transition={{ type: "spring" }}
          className="absolute bottom-0 left-1/2 glass rounded-lg w-11/12 md:w-10/12 p-2"
        >
          <div className="relative">
            <span
              className="absolute flex items-center justify-center h-6 w-6 -top-4 -right-4 rounded-md cursor-pointer bg-black text-white"
              onClick={addTo === "tasks" ? handleToggleTask : handleTogglePick}
            >
              {xmark()}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <h2>&gt;&gt; adding to</h2>
            <div className="flex">
              {addTo === "tasks" ? (
                <div className="px-2 py-0 rounded-md bg-slate-200/50 dark:bg-slate-500/30">
                  tasks
                </div>
              ) : (
                <select
                  className="appearance-none px-2 py-0 rounded-md bg-slate-200/50 dark:bg-slate-500/30 outline-0"
                  onChange={(e) => setAddToPicks(e.currentTarget.value)}
                  defaultValue="coffee"
                >
                  <option value="coffee">coffee</option>
                  <option value="meal">meal</option>
                </select>
              )}
              {addTo !== "tasks" && chevronupdown()}
            </div>
          </div>
          <div className="flex justify-between items-center gap-2px-3 pt-5">
            <TextInput
              val={newTask}
              setVal={setNewTask}
              placeholder={
                addTo === "tasks" ? "Add new task..." : "Add new item..."
              }
            />
            <PrimaryButton type="text" onClick={handleOnSubmit}>
              &gt;&gt;&nbsp;add
            </PrimaryButton>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
