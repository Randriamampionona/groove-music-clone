"use client";

import { useTrackList } from "@/store/useTrackList";
import {
  Play,
  Pause,
  FastForward,
  RefreshCwOff,
  RefreshCcw,
  Rewind,
  Volume2,
  VolumeX,
  ArrowLeftToLine,
  ArrowRightToLine,
} from "lucide-react";

import H5AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

import Hint from "./Hint";
import { cn } from "@/lib/utils";

type TProps = { music: Music; onEnded: () => void; className?: string };

const AudioTag = ({ music, onEnded, className = "!bg-black" }: TProps) => {
  const { onControl } = useTrackList((state) => state);

  const styles = "text-zinc-100 m-auto";

  const onNext = () => onControl(music.id, "NEXT");

  const onPrev = () => onControl(music.id, "PREV");

  return (
    <H5AudioPlayer
      autoPlay
      showSkipControls
      showJumpControls
      showFilledProgress
      autoPlayAfterSrcChange
      showFilledVolume
      volume={0.1}
      onEnded={onEnded}
      onClickNext={onNext}
      onClickPrevious={onPrev}
      src={music.src}
      customIcons={{
        play: (
          <Hint label="play">
            <Play className={styles} />
          </Hint>
        ),
        forward: (
          <Hint label="forward">
            <FastForward className={styles} />
          </Hint>
        ),
        loop: (
          <Hint label="loop">
            <RefreshCcw className={styles} />
          </Hint>
        ),
        loopOff: (
          <Hint label="loop Off">
            <RefreshCwOff className={styles} />
          </Hint>
        ),
        pause: (
          <Hint label="pause">
            <Pause className={styles} />
          </Hint>
        ),
        previous: (
          <Hint label="previous">
            <ArrowLeftToLine className={styles} />
          </Hint>
        ),
        next: (
          <Hint label="next">
            <ArrowRightToLine className={styles} />
          </Hint>
        ),
        rewind: (
          <Hint label="rewind">
            <Rewind className={styles} />
          </Hint>
        ),
        volume: (
          <Hint label="volume">
            <Volume2 className={styles} />
          </Hint>
        ),
        volumeMute: (
          <Hint label="volumeMute">
            <VolumeX className={styles} />
          </Hint>
        ),
      }}
      className={cn(className, "w-full")}
    />
  );
};

export default AudioTag;
