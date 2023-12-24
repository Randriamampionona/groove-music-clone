"use client";

import useLongPress from "@/hooks/useLongPress";
import { cn } from "@/lib/utils";
import { useSelect } from "@/store/useSelect";
import { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type TMobileMusicRow = {
  music: Music & { index?: number };
};

const MobileMusicRow = ({ music }: TMobileMusicRow) => {
  const { getColection, select } = useSelect((state) => state);
  const [isChecked, setIsChecked] = useState(false);
  const { get } = useSearchParams();
  const { push } = useRouter();
  const pathname = usePathname();
  const { bind } = useLongPress({
    onLongPress: () => {
      select(music.id, pathname);
    },
  });

  const colectionIDs = getColection(pathname).colectionIDs;

  const isPlaying = Number(get("index")) === music.index;

  const clickHandler = () => {
    push(`${pathname}?index=${music.index}`);
  };

  useEffect(() => {
    setIsChecked(colectionIDs.filter((id) => id == music.id).length > 0);
  }, [colectionIDs, music.id]);

  return (
    <div
      {...bind}
      onClick={clickHandler}
      onDoubleClick={(e) => {
        select(music.id, pathname);
        e.stopPropagation();
      }}
      className={cn(
        "flex items-center justify-between md:hidden p-2 space-x-4 select-none cursor-default hover:bg-accent/50",
        isPlaying && "bg-accent/50"
      )}
    >
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h1 className={cn("flex-1 line-clamp-1", isPlaying && "font-bold")}>
            {music.title} - ({music.artist})
          </h1>
          <span className="text-muted-foreground text-xs ml-2">
            {music.duration}
          </span>
        </div>
        <span className="text-muted-foreground text-xs">~{music.genre}</span>
      </div>

      {isChecked && (
        <Input
          type="checkbox"
          checked={isChecked}
          onChange={() => select(music.id, pathname)}
          className={cn(
            "w-5 h-5 opacity-0 group-hover:opacity-100 accent-primary_color mr-2",
            isChecked && "opacity-100"
          )}
        />
      )}
    </div>
  );
};

export default MobileMusicRow;
