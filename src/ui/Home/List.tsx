import { useEffect, useState } from "react";
import Item, { TItem } from "./Item";
import { onValue, ref } from "firebase/database";
import { db } from "@/lib/firebase";

type TList = TItem[];

export default function List() {
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
        setListData(data);
      } else {
        setListData([]);
      }
    });
  }, []);
  return (
    <ul className="rounded-lg glass divide-y-[1px] w-10/12 divide-slate-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-h-[400px] overflow-y-scroll">
      {listData.length !== 0 ? (
        listData.map((item, index) => <Item key={index} itemData={item} />)
      ) : (
        <li className="flex justify-between px-3 py-2">
          <p>🐰 Ooops! No task yet. Add your new task now.</p>
        </li>
      )}
    </ul>
  );
}
