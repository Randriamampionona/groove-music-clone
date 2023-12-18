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
    <section className="fixed lg:block bottom-0 h-auto min-h-[5rem] w-fillAvailable bg-black/70 backdrop-blur-md shadow-audioShadow divide-y divide-zinc-800 text-zinc-100">
      <div className="flex flex-wrap md:flex-nowrap w-full items-center justify-between h-full p-4">
        <div className="w-full md:w-1/3 mb-4 mr-0 md:mr-4 md:mb-0">
          <h1
            title={`${playableMusic.title} - ${playableMusic.artist} - (${playableMusic.web})`}
            className="text-lg cursor-default truncate"
          >
            {`${playableMusic.title} - ${playableMusic.artist} - (${playableMusic.web})`}
          </h1>
          <p className="font-bold">~{playableMusic.genre}</p>
        </div>

        <div className="flex-1 flex-shrink">
          <AudioTag music={playableMusic} onEnded={onEnded} />
        </div>
      </div>
    </section>
  ) : null;
};

export default MediaPlayer;
