"use client";

import { MoreHorizontal, Play } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { TdataType } from "./Card";
import { useSelect } from "@/store/useSelect";
import { cn } from "@/lib/utils";

type TCardAction = {
  type: TdataType;
  data: Music | Playlist;
};

const CardAction = ({ data, type }: TCardAction) => {
  const { select, selectedMusicIDs } = useSelect((state) => state);

  return (
    <div
      className={cn(
        "absolute inset-0 flex flex-col opacity-0 w-full h-full group-hover:opacity-100 transition-all",
        selectedMusicIDs.findIndex((id) => id == data.id) != -1 && "opacity-100"
      )}
    >
      <div className="flex items-center justify-start p-2">
        <Input
          type="checkbox"
          className="!w-5 !h-5 !accent-blue-600"
          checked={selectedMusicIDs.findIndex((id) => id == data.id) != -1}
          onChange={(_e) => select(data.id)}
        />
      </div>

      <div className="flex items-center justify-between w-full p-2 mt-auto opacity-0 group-hover:opacity-100">
        <Button size="icon" className="rounded-full w-8 h-8">
          <Play className="pl-1" />
        </Button>
        <Button size="icon" className="rounded-full w-8 h-8">
          <MoreHorizontal />
        </Button>
      </div>
    </div>
  );
};

export default CardAction;
