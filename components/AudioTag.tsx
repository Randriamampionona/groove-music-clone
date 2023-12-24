"use client";

import { useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
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

type TProps = {
  music: Music;
  queries?: {
    next: Object[]; // e,g: [{foo: "45"}, {bar: "ok"}]
    prev: Object[]; // e,g: [{foo: "45"}, {bar: "ok"}]
  };
  nextUrlIndex?: string | number;
  prevUrlIndex?: string | number;
  trackLength?: number;
  className?: string;
};

export default function AudioTag({
  music,
  queries,
  trackLength = 1,
  nextUrlIndex,
  prevUrlIndex,
  className = "",
}: TProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [volume] = useState(0.1);
  const audioRef = useRef<H5AudioPlayer | null>(null);

  const hasNext = Number(nextUrlIndex) <= trackLength - 1;
  const hasPrev = Number(prevUrlIndex) >= 0;

  // e,g: [{foo: "45"}, {bar: "ok"}] => 'foo=45&bar=ok'
  const q = {
    next: !!queries
      ? `?${queries.next
          .map((n) => `${Object.keys(n)}=${Object.values(n)}`)
          .join("&")}`
      : "",
    prev: !!queries
      ? `?${queries.prev
          .map((n) => `${Object.keys(n)}=${Object.values(n)}`)
          .join("&")}`
      : "",
  };
  const URL = {
    next: `${pathname}${q.next}`,
    prev: `${pathname}${q.prev}`,
  };

  const onEndedHandler = () => {
    if (hasNext) {
      router.push(URL.next);
    }
  };

  const nextAndPrecHandler = (key: "next" | "prev") => {
    if (key === "next" && hasNext) {
      router.push(URL.next);
    }

    if (key === "prev" && hasPrev) {
      router.push(URL.prev);
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
