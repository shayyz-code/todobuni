import { db } from "@/lib/firebase";
import { ref, remove, set } from "firebase/database";
import { useState } from "react";
import trash from "../icons/trash";

export type TItem = {
  key: string;
  title: string;
  isCompleted: boolean;
};

export default function Item({ itemData }: { itemData: TItem }) {
  const [isCompleted, setIsCompleted] = useState<boolean>(itemData.isCompleted);

  const handleOnDelete = () => {
    const deleteRef = ref(db, "tasks/" + itemData.key);
    remove(deleteRef);
  };

  const handleOnCheck = () => {
    const updateRef = ref(db, "tasks/" + itemData.key);
    set(updateRef, {
      key: itemData.key,
      title: itemData.title,
      isCompleted: !isCompleted,
    });

    setIsCompleted(!isCompleted);
  };
  return (
    <li
      className={`flex justify-between items-center px-3 py-2 ${
        isCompleted && "line-through"
      }`}
    >
      <div>{itemData.title}</div>
      <div className="flex justify-center items-center gap-5">
        <span>
          <button
            className="p-2 hover:bg-slate-200 dark:hover:bg-neutral-600 rounded-md cursor-pointer transition-all ease-out"
            onClick={handleOnDelete}
          >
            {trash()}
          </button>
        </span>
        <span>
          <input
            type="checkbox"
            checked={isCompleted}
            onClick={handleOnCheck}
            className="accent-black"
          />
        </span>
      </div>
    </li>
  );
}
