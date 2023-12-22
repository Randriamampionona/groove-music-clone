"use client";

import { useEffect, useState } from "react";
import { Play, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { useSelect } from "@/store/useSelect";
import { cn } from "@/lib/utils";
import { useTrackList } from "@/store/useTrackList";
import Hint from "./Hint";
import { Input } from "./ui/input";
import AddPlaylistDialog from "./AddPlaylistDialog";

const MusicRow = ({ music }: { music: Music }) => {
  const { selectedMusicIDs, select } = useSelect((state) => state);
  const { play, playableMusic } = useTrackList((state) => state);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(selectedMusicIDs.filter((id) => id == music.id).length > 0);
  }, [selectedMusicIDs, music.id]);

  return (
    <li
      onDoubleClick={() => select(music.id)}
      className={cn(
        "group hidden md:flex items-center list-none px-4 h-12 odd:bg-accent/50 rounded",
        selectedMusicIDs.length > 0 && "first:mt-12 lg:first:mt-0",
        playableMusic?.id === music.id && "text-primary_color"
      )}
    >
      <Input
        type="checkbox"
        checked={isChecked}
        onChange={() => select(music.id)}
        className={cn(
          "w-5 h-5 opacity-0 group-hover:opacity-100 accent-primary_color mr-2",
          isChecked && "opacity-100"
        )}
      />

      <div className="flex-1 flex items-center h-full px-2">
        <h1 title={music.title} className="flex-1 cursor-default line-clamp-1">
          {music.title}
        </h1>
        {!isChecked && (
          <div className="hidden h-full group-hover:flex">
            {playableMusic?.id !== music.id && (
              <Hint label="Play">
                <Button
                  asChild
                  variant="ghost"
                  className="flex items-center justify-center h-full w-12 rounded-none"
                  onClick={() => play(music.id)}
                >
                  <Play className="text-zinc-100" />
                </Button>
              </Hint>
            )}

            <AddPlaylistDialog
              dialogTrigger={
                <Button
                  asChild
                  variant="ghost"
                  className="h-full w-12 text-2xl rounded-none"
                >
                  <Plus className="text-zinc-100" />
                </Button>
              }
              hintLabel="Add to playlist"
              hintPosition="top"
              dialogType="exist"
              dialogData={[music.id]}
            />
          </div>
        )}
      </div>

      <p className="flex-1 px-2 line-clamp-1">{music.artist}</p>
      <p className="flex-1 px-2 line-clamp-1">{music.genre}</p>
      <p className="flex-1 px-2 line-clamp-1">{music.web}</p>
      <p className="w-auto line-clamp-1">{music.duration}</p>
    </li>
  );
};

export default MusicRow;
