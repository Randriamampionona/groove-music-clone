"use client";

import { useEffect, useState } from "react";
import AudioTag from "@/components/AudioTag";
import Dvd from "@/components/Dvd";
import { useTrackList } from "@/store/useTrackList";
import { AlertTriangle, Heart, ListPlusIcon } from "lucide-react";
import { redirect } from "next/navigation";
import Blog from "@/components/Blob";

type TProps = {};

const PlayPage = ({}: TProps) => {
  const { playableMusic, autoPlay } = useTrackList((state) => state);
  const [music, setMusic] = useState<Music | null>(null);

  const onEnded = () => autoPlay();

  useEffect(() => {
    if (playableMusic?.id) {
      const { isPlay, ...rest } = playableMusic;
      const modifiedMusic = rest;
      setMusic(modifiedMusic);
    } else {
      redirect("/my-music");
    }
  }, [playableMusic]);

  return music ? (
    <section className="relative w-full h-dscreen ">
      <div className="fixed w-full h-full -z-10" />

      <main className="relative flex flex-col h-full ">
        <header className="w-full h-20 lg:h-12 p-2 lg:p-8">
          <h1 className="font-bold">{`${music?.title} - ${music?.artist}`}</h1>
          <p className="text-muted-foreground">~{music?.genre}</p>
        </header>

        <div className="relative flex-1 flex items-end justify-center mb-12 px-2 lg:px-8">
          <div className="flex items-center justify-center space-x-4">
            <div className="flex flex-col items-center justify-start w-20 hover:bg-transparent hover:text-blue-600 cursor-default">
              <Heart className="" />
              <p className="text-xs text-center">Like</p>
            </div>
            <div className="flex flex-col items-center justify-start w-20 hover:bg-transparent hover:text-blue-600 cursor-default">
              <ListPlusIcon className="" />
              <p className="text-xs text-center">Add to</p>
            </div>
          </div>
        </div>

        <AudioTag music={music} onEnded={onEnded} className="!bg-transparent" />

        <Dvd />
        <Blog />
      </main>
    </section>
  ) : (
    <section className="flex items-center justify-center w-full h-dscreen">
      <div className="flex flex-col items-center justify-center space-y-1 text-center px-2">
        <AlertTriangle size={40} className="text-yellow-600" />
        <h1>Empty track list</h1>
      </div>
    </section>
  );
};

export default PlayPage;
