import getMusicById from "@/action/getMusicById";
import AudioTag from "@/components/AudioTag";
import Blog from "@/components/Blob";
import Dvd from "@/components/Dvd";
import { Heart, ListPlusIcon } from "lucide-react";

type TProps = {
  params: {
    id: string;
  };
};

const ID = async ({ params }: TProps) => {
  const music = await getMusicById(params.id);

  return (
    <section className="relative w-full h-dscreen ">
      <main className="relative flex flex-col h-full ">
        <header className="w-full h-20 lg:h-12 p-2 lg:p-8">
          <h1 className="font-bold">{`${music?.title} - ${music?.artist}`}</h1>
          <p className="text-muted-foreground">~{music?.genre}</p>
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

        <AudioTag music={music} className="!bg-transparent" />

        <Dvd />
        <Blog />
      </main>
    </section>
  );
};

export default ID;
