"use client";

import { useCreatePlaylistModal } from "@/store/useCreatePlaylistModal";
import { Plus } from "lucide-react";

const AddPlaylistButton = () => {
  const { toogle } = useCreatePlaylistModal((state) => state);

  return (
    <button
      className="flex items-center justify-center w-12 h-full text-2xl hover:bg-zinc-700"
      onClick={toogle}
    >
      <Plus size={18} />
    </button>
  );
};

export default AddPlaylistButton;
