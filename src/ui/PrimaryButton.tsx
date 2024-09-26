type TPrimaryButton = {
  onClick: () => void;
};

export default function PrimaryButton({
  children,
  onClick,
}: React.PropsWithChildren<TPrimaryButton>) {
  return (
    <button
      className="p-1 rounded-lg bg-black text-white text-center"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
