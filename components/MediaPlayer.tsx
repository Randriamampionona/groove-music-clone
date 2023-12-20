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

  useEffect(() => setTracks(musics), [musics, setTracks]);

  return playableMusic ? (
    <section className="sticky bottom-0 flex items-center justify-between gap-2 flex-wrap w-fillAvailable bg-black shadow-audioShadow p-2 lg:p-4">
      <div className="w-1/3 hidden lg:block">
        <h1
          title={`${playableMusic.title} - ${playableMusic.artist} - (${playableMusic.web})`}
          className="cursor-default line-clamp-2"
        >
          {`${playableMusic.title} - ${playableMusic.artist} - (${playableMusic.web})`}
        </h1>
        <p className="font-bold">~{playableMusic.genre}</p>
      </div>

      <div className="flex-1">
        <AudioTag
          music={playableMusic}
          onEnded={onEnded}
          className="!bg-transparent"
        />
      </div>
    </section>
  ) : null;
};

export default MediaPlayer;
