"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

import { Edit2, Play, Trash2 } from "lucide-react";

type TProps = {
  playlistId: string;
};

const PlaylistHeaderActions = ({ playlistId }: TProps) => {
  const { push } = useRouter();

  const playAll = () => {
    push(`/play/playlist/${playlistId}`);
  };

  return (
    <div className="flex flex-wrap items-center justify-start gap-4">
      <Button
        variant="primary"
        className="flex items-center justify-center cursor-pointer space-x-2"
        onClick={playAll}
      >
        <Play size={18} />
        <span>Play</span>
      </Button>

      <Button
        variant="ghost"
        className="flex items-center justify-center cursor-pointer list-none bg-accent space-x-2"
      >
        <Edit2 size={18} />
        <span className="hidden md:block">Rename</span>
      </Button>

      <Button
        variant="ghost"
        className="flex items-center justify-center cursor-pointer list-none bg-accent space-x-2 hover:text-destructive"
      >
        <Trash2 size={18} />
        <span className="hidden md:block">Delete</span>
      </Button>
    </div>
  );
};

export default PlaylistHeaderActions;
