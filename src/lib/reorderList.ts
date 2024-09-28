import { TItem } from "@/ui/Home/Item";

type TList = TItem[];

export default function reorderList(list: TList) {
  const reversedList = list.reverse();

  return reversedList;
}
