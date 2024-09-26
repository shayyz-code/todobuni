import { SetStateAction } from "react";

type TTextInput = {
  val: string;
  setVal: React.Dispatch<SetStateAction<string>>;
};

export default function TextInput({ val, setVal }: TTextInput) {
  return (
    <input
      type="text"
      placeholder="Add new task..."
      autoFocus
      value={val}
      onChange={(e) => setVal(e.currentTarget.value)}
      className="px-3 py-2 rounded-lg w-full outline-none"
    />
  );
}
