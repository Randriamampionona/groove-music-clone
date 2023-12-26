import AudioTag from "./AudioTag";

type TProps = {
  musics: Music[];
  musicIndex: string;
};

const MediaPlayer = ({ musics, musicIndex }: TProps) => {
  const playableMusic = musics[Number(musicIndex)];

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
          musicIndex={musicIndex}
          trackLength={musics.length}
          className="!bg-transparent"
        />
      </div>
    </section>
  ) : null;
};

export default MediaPlayer;
