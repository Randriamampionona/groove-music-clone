import Image from "next/image";
import { Music4, AlbumIcon, Play, MoreHorizontal } from "lucide-react";
import { useCallback } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

type TdataType = "MUSIC" | "PLAYLIST";

type TProps = {
  type: TdataType;
  data: Music | Playlist;
};

export default function Card({ data, type }: TProps) {
  return (
    <div className="group flex flex-col items-center justify-start rounded-md w-40 h-auto hover:bg-zinc-900 px-2 py-1 cursor-default active:scale-95 transition-all">
      <div className="relative flex items-center justify-center w-[9.5rem] h-[9.5rem] border border-zinc-900 rounded-md overflow-hidden">
        <CardThumbnail thumbnail={data.thumbnail} type={type} />
        <CardAction />
      </div>
      <CardFooter data={data} type={type} />
    </div>
  );
}

// Card Thumbnail
type Tthumbnail = {
  type: TdataType;
  thumbnail: string | null;
};

const CardThumbnail = ({ thumbnail, type }: Tthumbnail) => {
  let cardThumbnail;

  const fallback = (t: TdataType) => (
    <div className="flex items-center justify-center w-full h-full bg-black/90">
      {t === "MUSIC" ? (
        <span className="text-zinc-700">
          <Music4 className="w-12 h-12" />
        </span>
      ) : (
        <span className="text-zinc-700">
          <AlbumIcon className="w-12 h-12" />
        </span>
      )}
    </div>
  );

  if (typeof thumbnail === "string") {
    cardThumbnail = (
      <img
        src={thumbnail}
        alt="card-thumbnail"
        className="w-full h-full object-cover"
      />
    );
  } else {
    cardThumbnail = fallback(type);
  }

  return cardThumbnail;
};

// Card footer
type TCardFooter = {
  type: TdataType;
  data: any;
};

const CardFooter = ({ data, type }: TCardFooter) => {
  return (
    <div className="flex flex-col w-full mt-1 mb-4">
      <h1 className="text-base font-medium line-clamp-2">{data.title}</h1>
      {type === "PLAYLIST" ? (
        <p className="text-xs text-muted-foreground">
          {data.elementCount} element{data.elementCount! > 1 && "s"}
        </p>
      ) : (
        <p className="text-xs text-muted-foreground">~{data.genre}</p>
      )}
    </div>
  );
};

// Card action
const CardAction = () => {
  return (
    <div className="absolute inset-0 flex-col hidden w-full h-full group-hover:flex group-hover:backdrop-blur-sm">
      <div className="flex items-center justify-start p-2">
        <Input
          type="checkbox"
          className="!w-6 !h-6 !accent-blue-600 !bg-zinc-950/70"
        />
      </div>

      <div className="flex items-center justify-between w-full p-2 mt-auto">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full text-zinc-100/50 border border-zinc-100/50 bg-zinc-950/70 w-8 h-8"
        >
          <Play className="pl-1" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full text-zinc-100/50 border border-zinc-100/50 bg-zinc-950/70 w-8 h-8"
        >
          <MoreHorizontal />
        </Button>
      </div>
    </div>
  );
};
