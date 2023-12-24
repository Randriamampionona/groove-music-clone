"use client";

import AudioTag from "./AudioTag";
import { useSearchParams } from "next/navigation";

type TProps = {
  musics: Music[];
};

const MediaPlayer = ({ musics }: TProps) => {
  const searchParams = useSearchParams();

  const index = searchParams.get("index") || 0;

  const playableMusic = !!musics ? musics[Number(index)] : null;

  const nextUrlIndex = Number(index) + 1;
  const prevUrlIndex = Number(index) - 1;

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
          queries={{
            next: [{ index: nextUrlIndex }],
            prev: [{ index: prevUrlIndex }],
          }}
          nextUrlIndex={nextUrlIndex}
          prevUrlIndex={prevUrlIndex}
          trackLength={musics.length}
          className="!bg-transparent"
        />
      </div>
    </section>
  ) : null;
};

export default MediaPlayer;
