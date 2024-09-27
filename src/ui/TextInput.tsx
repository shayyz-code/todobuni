import { SetStateAction } from "react";

type TTextInput = {
  val: string;
  placeholder: string;
  setVal: React.Dispatch<SetStateAction<string>>;
};

export default function TextInput({ val, placeholder, setVal }: TTextInput) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      autoFocus
      value={val}
      onChange={(e) => setVal(e.currentTarget.value)}
      className="px-3 py-2 rounded-lg w-full outline-none bg-transparent"
    />
  );
}
