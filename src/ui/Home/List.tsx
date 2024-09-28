import { useContext, useEffect, useState } from "react";
import Item, { TItem } from "./Item";
import { onValue, ref } from "firebase/database";
import { db } from "@/lib/firebase";
import { motion } from "framer-motion";
import PrimaryButton from "../PrimaryButton";
import plus from "../icons/plus";
import { ContextAdd } from "@/lib/context/ContextAdd";
import reorderList from "@/lib/reorderList";

type TList = TItem[];

export default function List() {
  const { handleToggleTask } = useContext(ContextAdd);
  const [listData, setListData] = useState<TList | []>([]);
  useEffect(() => {
    const tasksRef = ref(db, "tasks");

    onValue(tasksRef, (snapshots) => {
      if (snapshots.exists()) {
        const data: TList = [];
        snapshots.forEach((snapshot) => {
          const { title, isCompleted } = snapshot.val();
          data.push({
            key: snapshot.key,
            title: title,
            isCompleted: isCompleted,
          });
        });

        setListData(reorderList(data));
      } else {
        setListData([]);
      }
    });
  }, []);
  return (
    <motion.div
      initial={{ scale: 0.7 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring" }}
      className="flex flex-col rounded-lg glass p-2"
    >
      <div className="flex items-center justify-between">
        <h2>&gt;&gt; todo-tasks:</h2>
        <PrimaryButton type="icon" onClick={handleToggleTask}>
          {plus()}
        </PrimaryButton>
      </div>
      <ul className="flex-col divide-y-[1px] divide-slate-300  max-h-[400px] overflow-y-scroll">
        {listData.length === 0 && (
          <li className="flex justify-between px-3 py-2">
            <p>🐰 Ooops! Looks like no task yet. Add your new task now.</p>
          </li>
        )}
        {listData.length !== 0 &&
          listData.map((item) => <Item key={item.key} itemData={item} />)}
      </ul>
    </motion.div>
  );
}
