"use client";

import useLongPress from "@/hooks/useLongPress";
import { cn } from "@/lib/utils";
import { useSelect } from "@/store/useSelect";
import { useTrackList } from "@/store/useTrackList";
import { useEffect, useState } from "react";
import { Input } from "./ui/input";

type TProps = {
  music: Music;
};

const MobileMusicRow = ({ music }: TProps) => {
  const { selectedMusicIDs, select } = useSelect((state) => state);
  const { play, playableMusic } = useTrackList((state) => state);

  const { bind } = useLongPress({
    onLongPress: () => {
      select(music.id);
    },
  });

  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(selectedMusicIDs.filter((id) => id == music.id).length > 0);
  }, [selectedMusicIDs, music.id]);

  return (
    <div
      {...bind}
      onClick={() => play(music.id)}
      onDoubleClick={(e) => {
        select(music.id);
        e.stopPropagation();
      }}
      className={cn(
        "flex items-center justify-between md:hidden p-2 space-x-4 select-none cursor-default hover:bg-accent/50",
        playableMusic?.id === music.id && "bg-accent/50"
      )}
    >
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h1
            className={cn(
              "flex-1 line-clamp-1",
              playableMusic?.id === music.id && "font-bold"
            )}
          >
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
          onChange={() => select(music.id)}
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
