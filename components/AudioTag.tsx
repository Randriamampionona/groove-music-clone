"use client";

import { useRef, useState } from "react";
import {
  Play,
  Pause,
  FastForward,
  RefreshCwOff,
  RefreshCcw,
  Rewind,
  Volume2,
  VolumeX,
  SkipBack,
  SkipForward,
} from "lucide-react";

import H5AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

import Hint from "./Hint";
import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { newQueryParams } from "@/lib/newQueryParams";

type TProps = {
  music: Music;
  musicIndex: string;
  trackLength: number;
  className?: string;
};

export default function AudioTag({
  music,
  musicIndex,
  trackLength,
  className = "",
}: TProps) {
  const [volume] = useState(0.1);
  const audioRef = useRef<H5AudioPlayer | null>(null);
  const router = useRouter();
  const pathname = usePathname();
  const { toString } = useSearchParams();

  const hasNext = +musicIndex + 1 < trackLength;
  const hasPrev = +musicIndex - 1 >= 0;

  const onEndedHandler = () => {
    if (hasNext) {
      const URL =
        pathname + newQueryParams(toString(), { index: +musicIndex - 1 });

      router.push(URL);
    }
  };

  const nextAndPrecHandler = (key: "next" | "prev") => {
    if (key === "next" && hasNext) {
      const URL =
        pathname + newQueryParams(toString(), { index: +musicIndex + 1 });

      router.push(URL);
    }

    if (key === "prev" && hasPrev) {
      const URL =
        pathname + newQueryParams(toString(), { index: +musicIndex - 1 });

      router.push(URL);
    }
  };

  return (
    <H5AudioPlayer
      ref={audioRef}
      src={music.src}
      autoPlay
      showSkipControls
      showJumpControls
      showFilledProgress
      autoPlayAfterSrcChange
      showFilledVolume
      volume={volume}
      onEnded={onEndedHandler}
      onClickNext={() => nextAndPrecHandler("next")}
      onClickPrevious={() => nextAndPrecHandler("prev")}
      customIcons={{
        loop: (
          <Hint label="loop">
            <RefreshCcw />
          </Hint>
        ),
        loopOff: (
          <Hint label="loop Off">
            <RefreshCwOff />
          </Hint>
        ),
        previous: (
          <Hint label="previous">
            <Rewind />
          </Hint>
        ),
        rewind: (
          <Hint label="rewind">
            <SkipBack />
          </Hint>
        ),
        play: (
          <Hint label="play">
            <Play />
          </Hint>
        ),
        pause: (
          <Hint label="pause">
            <Pause />
          </Hint>
        ),
        forward: (
          <Hint label="forward">
            <SkipForward />
          </Hint>
        ),
        next: (
          <Hint label="next">
            <FastForward />
          </Hint>
        ),

        volume: (
          <Hint label="volume">
            <Volume2 />
          </Hint>
        ),
        volumeMute: (
          <Hint label="volumeMute">
            <VolumeX />
          </Hint>
        ),
      }}
      className={cn(className)}
    />
  );
}
