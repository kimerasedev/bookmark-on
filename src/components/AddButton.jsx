import { PlusIcon } from "@phosphor-icons/react";

export default function AddButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center justify-center gap-2 bg-primary px-4 py-2 rounded-md text-sidebar hover:brightness-110"
    >
      <PlusIcon size={16} weight="bold" />
      <span className="font-semibold text-[15px]">새 북마크</span>
    </button>
  );
}
