import { motion } from "framer-motion";
import Picker, { TPickItem } from "./Picker";
import PrimaryButton from "../PrimaryButton";
import { useContext, useEffect, useState } from "react";
import { ContextAdd } from "@/lib/context/ContextAdd";
import plus from "../icons/plus";
import { onValue, ref } from "firebase/database";
import { db } from "@/lib/firebase";

type TPickListData = TPickItem[];

export default function PickerList() {
  const { handleTogglePick } = useContext(ContextAdd);
  const [coffeeListData, setCoffeeListData] = useState<TPickListData>([]);
  const [mealListData, setMealListData] = useState<TPickListData>([]);
  useEffect(() => {
    const coffeeRef = ref(db, "picks/coffee/");
    onValue(coffeeRef, (snapshots) => {
      if (snapshots.exists()) {
        const data: TPickListData = [];
        snapshots.forEach((snapshot) => {
          const { val } = snapshot.val();
          data.push({
            key: snapshot.key,
            val: val,
          });
        });
        setCoffeeListData(data);
      } else {
        setCoffeeListData([]);
      }
    });

    const mealRef = ref(db, "picks/meal/");
    onValue(mealRef, (snapshots) => {
      if (snapshots.exists()) {
        const data: TPickListData = [];
        snapshots.forEach((snapshot) => {
          const { val } = snapshot.val();
          data.push({
            key: snapshot.key,
            val: val,
          });
        });
        setMealListData(data);
      } else {
        setMealListData([]);
      }
    });
  }, []);
  return (
    <motion.div
      initial={{ scale: 0.7 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring" }}
      className="glass p-2"
    >
      <div className="flex items-center justify-between">
        <h2>&gt;&gt; buni&apos;s picks for today:</h2>
        <PrimaryButton type="icon" onClick={handleTogglePick}>
          {plus()}
        </PrimaryButton>
      </div>
      <ul className="flex overflow-x-auto gap-2 py-1">
        <Picker kind="coffee" pickListData={coffeeListData} />
        <Picker kind="meal" pickListData={mealListData} />
      </ul>
    </motion.div>
  );
}
