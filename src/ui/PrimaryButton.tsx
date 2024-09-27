type TPrimaryButton = {
  type: "icon" | "text";
  onClick: () => void;
};

export default function PrimaryButton({
  children,
  type,
  onClick,
}: React.PropsWithChildren<TPrimaryButton>) {
  return (
    <button
      className={`${
        type === "icon" ? "p-1" : "px-3 py-1"
      } rounded-lg bg-black/70 text-white/70 text-center`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
