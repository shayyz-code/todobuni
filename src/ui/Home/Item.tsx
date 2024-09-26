import { db } from "@/lib/firebase";
import { ref, set } from "firebase/database";
import { useState } from "react";

export type TItem = {
  key: string;
  title: string;
  isCompleted: boolean;
};

export default function Item({ itemData }: { itemData: TItem }) {
  const [isCompleted, setIsCompleted] = useState<boolean>(itemData.isCompleted);

  const handleOnClick = () => {
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
      className={`flex justify-between px-3 py-2 ${
        isCompleted && "line-through"
      }`}
    >
      <p>{itemData.title}</p>
      <span>
        <input
          type="checkbox"
          checked={isCompleted}
          onClick={handleOnClick}
          className="accent-black"
        />
      </span>
    </li>
  );
}
