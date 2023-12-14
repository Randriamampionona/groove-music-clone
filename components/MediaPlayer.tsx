"use client";

import { useTrackList } from "@/store/useTrackList";
import AudioTag from "./AudioTag";
import { useEffect } from "react";

type TProps = {
  musics: Music[];
};

const MediaPlayer = ({ musics }: TProps) => {
  const { playableMusic, setTracks, autoPlay } = useTrackList((state) => state);

  const onEnded = () => autoPlay();

  useEffect(() => setTracks(musics), [musics]);

  return playableMusic ? (
    <section className="sticky bottom-0 h-auto min-h-[5rem] w-fillAvailable bg-black/70 backdrop-blur-md shadow-audioShadow divide-y divide-zinc-800 text-zinc-100">
      <div className="flex items-center justify-between h-full p-4 space-x-6">
        <div className="w-80">
          <h1
            title="Roving Troubadours - (www.musicstore.com)"
            className="text-lg w-full overflow-hidden text-ellipsis whitespace-nowrap cursor-default"
          >
            {`${playableMusic.title} - ${playableMusic.artist} - (${playableMusic.web})}`}
          </h1>
          <p className="font-bold">~{playableMusic.genre}</p>
        </div>

        <div className="flex-1">
          <AudioTag music={playableMusic} onEnded={onEnded} />
        </div>
      </div>
    </section>
  ) : null;
};

export default MediaPlayer;
