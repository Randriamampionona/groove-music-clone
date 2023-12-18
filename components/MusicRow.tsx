"use client";

import { useEffect, useState } from "react";
import { Play, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { useSelect } from "@/store/useSelect";
import { cn } from "@/lib/utils";
import { useTrackList } from "@/store/useTrackList";
import Hint from "./Hint";

const MusicRow = ({ music }: { music: Music }) => {
  const { selectedMusicIDs, select } = useSelect((state) => state);
  const { play, playableMusic } = useTrackList((state) => state);

  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(selectedMusicIDs.filter((id) => id == music.id).length > 0);
  }, [selectedMusicIDs, music.id]);

  return (
    <li
      className={cn(
        "group hidden md:grid grid-cols-[auto,1fr,1fr,1fr,1fr,auto] items-center list-none px-4 h-12 space-x-4 odd:bg-zinc-900 even:bg-zinc-950 hover:bg-zinc-700/70",
        selectedMusicIDs.length > 0 && "first:mt-12 lg:first:mt-0",
        playableMusic?.id === music.id && "text-blue-600 bg-zinc-700/70"
      )}
      onDoubleClick={() => select(music.id)}
    >
      <input
        className={cn(
          "border-zinc-100 w-5 h-5 accent-blue-600 outline-none opacity-0 group-hover:opacity-100 ",
          isChecked && "opacity-100"
        )}
        type="checkbox"
        checked={isChecked}
        onChange={() => select(music.id)}
      />
      <div className="flex items-center h-full">
        <h1
          title={music.title}
          className="flex-1 flex-shrink w-2 truncate cursor-default"
        >
          {music.title}
        </h1>
        {!isChecked && (
          <div className="hidden h-full group-hover:flex">
            {playableMusic?.id !== music.id && (
              <Hint label="Play">
                <Button
                  variant="ghost"
                  className="flex items-center justify-center h-full w-12 hover:bg-zinc-700 rounded-none"
                  onClick={() => play(music.id)}
                >
                  <Play className="text-zinc-100" />
                </Button>
              </Hint>
            )}

            <Hint label="Add to playlist">
              <Button
                variant="ghost"
                className="h-full w-12 hover:bg-zinc-700 text-2xl rounded-none"
              >
                <Plus className="text-zinc-100" />
              </Button>
            </Hint>
          </div>
        )}
      </div>
      <p className="w-full truncate">{music.artist}</p>
      <p className="w-full truncate">{music.genre}</p>
      <p className="w-full truncate">{music.web}</p>
      <p className="w-full truncate">{music.duration}</p>
    </li>
  );
};

export default MusicRow;
