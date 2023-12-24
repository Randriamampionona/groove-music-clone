"use client";

import Link from "next/link";
import { MoreHorizontal, Play } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { TdataType } from "./Card";
import { useSelect } from "@/store/useSelect";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

type TCardAction = {
  type: TdataType;
  data: Music | Playlist;
};

const CardAction = ({ data, type }: TCardAction) => {
  const { select, getColection } = useSelect((state) => state);
  const pathname = usePathname();

  const colectionIDs = getColection(pathname).colectionIDs;

  return (
    <div
      className={cn(
        "absolute inset-0 flex flex-col opacity-0 w-full h-full group-hover:opacity-100 transition-all",
        colectionIDs.findIndex((id) => id == data.id) != -1 && "opacity-100"
      )}
    >
      {type === "MUSIC" && (
        <div className="flex items-center justify-start p-2">
          <Input
            type="checkbox"
            className="!w-5 !h-5 !accent-primary_color"
            checked={colectionIDs.findIndex((id) => id == data.id) != -1}
            onChange={(_e) => select(data.id, pathname)}
          />
        </div>
      )}

      <div className="flex items-center justify-between w-full p-2 mt-auto opacity-0 group-hover:opacity-100">
        <Link
          href={
            type === "MUSIC" ? `/play/music/${data.id}` : `/playlist/${data.id}`
          }
        >
          <Button size="icon" className="rounded-full w-8 h-8">
            <Play className="pl-1" />
          </Button>
        </Link>
        <Button size="icon" className="rounded-full w-8 h-8">
          <MoreHorizontal />
        </Button>
      </div>
    </div>
  );
};

export default CardAction;
