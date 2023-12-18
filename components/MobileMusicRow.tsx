"use client";

import { cn } from "@/lib/utils";
import { useSelect } from "@/store/useSelect";
import { useTrackList } from "@/store/useTrackList";
import { useEffect, useState } from "react";

type TProps = {
  music: Music;
};

const MobileMusicRow = ({ music }: TProps) => {
  const { selectedMusicIDs, select } = useSelect((state) => state);
  const { play, playableMusic } = useTrackList((state) => state);

  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(selectedMusicIDs.filter((id) => id == music.id).length > 0);
  }, [selectedMusicIDs, music.id]);

  return (
    <div
      onClick={() => play(music.id)}
      onDoubleClick={(e) => {
        select(music.id);
        e.stopPropagation();
      }}
      className={cn(
        "flex items-center justify-between md:hidden p-2 space-x-4 select-none cursor-default hover:bg-zinc-700/70",
        playableMusic?.id === music.id && "bg-zinc-900"
      )}
    >
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h1
            className={cn(
              "flex-1 w-2 truncate",
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
        <input
          className={cn("border-zinc-100 w-5 h-5 accent-blue-600 outline-none")}
          type="checkbox"
          checked={isChecked}
          onChange={() => select(music.id)}
        />
      )}
    </div>
  );
};

export default MobileMusicRow;
