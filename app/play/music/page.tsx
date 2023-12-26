import AudioTag from "@/components/AudioTag";
import Dvd from "@/components/Dvd";
import { AlertTriangle, Heart, ListPlusIcon } from "lucide-react";
import Blog from "@/components/Blob";
import { getMusicByIDs } from "@/action/getMusicByIDs";
import { notFound } from "next/navigation";

type TProps = {
  searchParams: {
    tracks?: string;
    index?: string;
  };
};

const PlayPage = async ({ searchParams: { tracks, index = "0" } }: TProps) => {
  const IDs = tracks?.split(
    process.env.NEXT_PUBLIC_QUERY_STRING_SEPARATOR! as string
  );

  if (!IDs?.length) return notFound();

  if (IDs.length && Number(index) > IDs.length) return notFound();

  const musics = await getMusicByIDs(IDs);

  const playableMusic = !!musics ? musics[Number(index)] : null;

  return !!playableMusic ? (
    <section className="relative w-full h-dscreen ">
      <main className="relative flex flex-col h-full ">
        <header className="w-full h-20 lg:h-12 p-2 lg:p-8">
          <h1 className="font-bold">{`${playableMusic.title} - ${playableMusic.artist}`}</h1>
          <p className="text-muted-foreground">~{playableMusic.genre}</p>
        </header>

        <div className="relative flex-1 flex items-end justify-center mb-12 px-2 lg:px-8">
          <div className="flex items-center justify-center space-x-4">
            <div className="flex flex-col items-center justify-start w-20 hover:bg-transparent hover:text-primary_color cursor-default">
              <Heart className="" />
              <p className="text-xs text-center">Like</p>
            </div>
            <div className="flex flex-col items-center justify-start w-20 hover:bg-transparent hover:text-primary_color cursor-default">
              <ListPlusIcon className="" />
              <p className="text-xs text-center">Add to</p>
            </div>
          </div>
        </div>

        <AudioTag
          music={playableMusic}
          musicIndex={index}
          trackLength={musics?.length || 0}
          className="!bg-transparent"
        />

        <Dvd />
        <Blog />
      </main>
    </section>
  ) : (
    <section className="flex items-center justify-center w-full h-dscreen">
      <div className="flex flex-col items-center justify-center space-y-1 text-center px-2">
        <AlertTriangle size={40} className="text-yellow-600" />
        <h1>Track list not found</h1>
      </div>
    </section>
  );
};

export default PlayPage;
