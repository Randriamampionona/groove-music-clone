"use client";

import { useEffect, useState } from "react";
import { Play, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { useSelect } from "@/store/useSelect";
import { cn } from "@/lib/utils";
import { useTrackList } from "@/store/useTrackList";

const MusicRow = ({ music }: { music: Music }) => {
  const { musics: list, select } = useSelect((state) => state);
  const { play, playableMusic } = useTrackList((state) => state);

  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(list.filter((n) => n.id == music.id).length > 0);
  }, [list]);

  return (
    <li
      className={cn(
        "group grid grid-cols-[auto,1fr,1fr,1fr,1fr,auto] items-center list-none px-4 h-12 space-x-4 odd:bg-zinc-900 even:bg-zinc-950 hover:bg-zinc-700/70",
        isChecked && "!bg-blue-600 !text-zinc-100",
        playableMusic?.id === music.id && "text-blue-600 bg-zinc-700/70"
      )}
      onDoubleClick={() => select(music)}
    >
      <input
        className={cn(
          "border-zinc-100 w-5 h-5 accent-blue-600 outline-none opacity-0 group-hover:opacity-100",
          isChecked && "opacity-100"
        )}
        type="checkbox"
        checked={isChecked}
        onChange={() => select(music)}
      />
      <div className="flex items-center h-full">
        <h1
          title={music.title}
          className="flex-1 flex-shrink w-4 overflow-hidden text-ellipsis whitespace-nowrap cursor-default"
        >
          {music.title}
        </h1>
        {!isChecked && (
          <div className="hidden h-full group-hover:flex">
            {playableMusic?.id !== music.id && (
              <Button
                variant="ghost"
                title="Play"
                className="flex items-center justify-center h-full w-12 hover:bg-zinc-700 rounded-none"
                onClick={() => play(music.id)}
              >
                <Play className="text-zinc-100" />
              </Button>
            )}

            <Button
              variant="ghost"
              title="Add to playlist"
              className="h-full w-12 hover:bg-zinc-700 text-2xl rounded-none"
            >
              <Plus className="text-zinc-100" />
            </Button>
          </div>
        )}
      </div>
      <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
        {music.artist}
      </p>
      <p>{music.genre}</p>
      <p>{music.web}</p>
      <p>{music.duration}</p>
    </li>
  );
};

export default MusicRow;
