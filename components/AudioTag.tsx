"use client";

import { ChangeEvent, useEffect, useRef, useState } from "react";
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
  SkipBack,
  SkipForward,
} from "lucide-react";

import H5AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

import Hint from "./Hint";
import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

type TProps = { music: Music; onEnded: () => void; className?: string };

const AudioTag = ({ music, onEnded, className = "" }: TProps) => {
  const { onControl } = useTrackList((state) => state);
  const [volume, setVolume] = useState(0.1);
  const audioRef = useRef<H5AudioPlayer | null>(null);

  const onNext = () => onControl(music.id, "NEXT");

  const onPrev = () => onControl(music.id, "PREV");

  const onVolumeChange = (amount: number) => {
    setVolume(amount);
  };

  return (
    // <audio src="" onVolumeChange={s => s}></audio>
    <H5AudioPlayer
      ref={audioRef}
      autoPlay
      showSkipControls
      showJumpControls
      showFilledProgress
      autoPlayAfterSrcChange
      showFilledVolume
      // customVolumeControls={[CustomVolumeControls({ volume, onVolumeChange })]}
      volume={volume}
      onEnded={onEnded}
      onClickNext={onNext}
      onClickPrevious={onPrev}
      src={music.src}
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
};

export default AudioTag;

// Custom Volume Controls component
type TCustomVolumeControls = {
  volume: number;
  onVolumeChange: (amount: number) => void;
};

export const CustomVolumeControls = ({
  volume,
  onVolumeChange,
}: TCustomVolumeControls): JSX.Element => {
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const calculedVolume = Math.ceil(Number(e.target.value)) / 100;
    onVolumeChange(calculedVolume);
  };

  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute -top-36 flex flex-row-reverse items-center justify-center -rotate-90 bg-accent rounded w-56 h-auto">
        <Label className="rotate-90 p-3">50</Label>

        <div className="flex-1">
          <Input
            type="range"
            className="accent-primary_color"
            value={volume * 100}
            onChange={(e) => changeHandler(e)}
          />
        </div>

        <div className="p-3">
          {volume > 0 ? (
            <Volume2 className="rotate-90" />
          ) : (
            <VolumeX className="rotate-90" />
          )}
        </div>
      </div>

      <Hint label="volume">
        <button className="flex items-center justify-center rounded bg-transparent w-10 h-10 hover:bg-accent">
          <Volume2 />
        </button>
      </Hint>
    </div>
  );
};
