import { ContextAdd } from "@/lib/context/ContextAdd";
import { motion, AnimatePresence } from "framer-motion";
import { useContext, useState } from "react";
import TextInput from "../TextInput";
import PrimaryButton from "../PrimaryButton";
import xmark from "../icons/x-mark";
import plus from "../icons/plus";
import { child, push, ref, set } from "firebase/database";
import { db } from "@/lib/firebase";

export default function Add() {
  const { isCollapsed, setIsCollapsed } = useContext(ContextAdd);
  const [newTask, setNewTask] = useState<string>("");
  const handleOnSubmit = () => {
    if (newTask === "") return;

    const postData = {
      title: newTask,
      isCompleted: false,
    };

    const newPostRef = push(child(ref(db), "tasks"));

    set(newPostRef, postData);
  };
  return (
    <AnimatePresence initial={false}>
      {!isCollapsed && (
        <motion.div
          initial={{ y: 0, x: "-50%" }}
          animate={{ y: -65, x: "-50%" }}
          exit={{ y: 100, x: "-50%" }}
          transition={{ type: "spring" }}
          className="absolute bottom-0 left-1/2 glass rounded-lg w-10/12"
        >
          <div className="relative">
            <span
              className="absolute flex items-center justify-center h-6 w-6 -top-2 -right-2 rounded-md cursor-pointer bg-black text-white"
              onClick={() => setIsCollapsed(true)}
            >
              {xmark()}
            </span>
          </div>
          <div className="flex justify-between items-center gap-2 py-4 px-3 pt-5">
            <TextInput val={newTask} setVal={setNewTask} />
            <PrimaryButton onClick={handleOnSubmit}>{plus()}</PrimaryButton>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
