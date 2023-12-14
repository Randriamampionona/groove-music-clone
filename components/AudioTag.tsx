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

type TProps = { music: Music; onEnded: () => void };

const AudioTag = ({ music, onEnded }: TProps) => {
  const { onControl } = useTrackList((state) => state);

  const styles = "text-zinc-100 m-auto pointer-events-none";

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
      style={{ background: "black" }}
      src={music.src}
      customIcons={{
        play: (
          <span title="play">
            <Play className={styles} />
          </span>
        ),
        forward: (
          <span title="forward">
            <FastForward className={styles} />
          </span>
        ),
        loop: (
          <span title="loop">
            <RefreshCcw className={styles} />
          </span>
        ),
        loopOff: (
          <span title="loopOff">
            <RefreshCwOff className={styles} />
          </span>
        ),
        pause: (
          <span title="pause">
            <Pause className={styles} />
          </span>
        ),
        previous: (
          <span title="previous">
            <ArrowLeftToLine className={styles} />
          </span>
        ),
        next: (
          <span title="next">
            <ArrowRightToLine className={styles} />
          </span>
        ),
        rewind: (
          <span title="rewind">
            <Rewind className={styles} />
          </span>
        ),
        volume: (
          <span title="volume">
            <Volume2 className={styles} />
          </span>
        ),
        volumeMute: (
          <span title="volumeMute">
            <VolumeX className={styles} />
          </span>
        ),
      }}
    />
  );
};

export default AudioTag;
