import coffee from "../icons/coffee";
import food from "../icons/food";

export type TPickItem = {
  key: string;
  val: string;
};
type TPicker = {
  kind: "coffee" | "meal";
  pickListData: TPickItem[];
};

export default function Picker({ kind, pickListData }: TPicker) {
  const getRandomItem = () => {
    if (pickListData.length === 0) return;
    const pickedItem =
      pickListData[Math.floor(Math.random() * pickListData.length)];
    return pickedItem.val;
  };

  if (kind === "coffee")
    return (
      <li className="flex gap-2 px-3 min-w-fit py-1 glass !rounded-md">
        <span>{coffee()}</span>
        <div>coffee &gt;&gt;</div>
        {pickListData.length === 0 ? (
          <div>empty</div>
        ) : (
          <div className="text-pink-600">{getRandomItem()}</div>
        )}
      </li>
    );
  else if (kind === "meal")
    return (
      <li className="flex gap-2 px-3 min-w-fit py-1 glass !rounded-md">
        <span>{food()}</span>
        <div>meal &gt;&gt;</div>
        {pickListData.length === 0 ? (
          <div>empty</div>
        ) : (
          <div className="text-sky-600">{getRandomItem()}</div>
        )}
      </li>
    );
}
