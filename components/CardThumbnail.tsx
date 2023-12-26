import Image from "next/image";
import { TdataType } from "./Card";
import { AlbumIcon, Music4 } from "lucide-react";

type Tthumbnail = {
  type: TdataType;
  thumbnail: string | null;
};

const CardThumbnail = ({ thumbnail, type }: Tthumbnail) => {
  let cardThumbnail;

  const fallback = (t: TdataType) => (
    <div className="flex items-center justify-center w-full h-full bg-black/90">
      {t === "MUSIC" ? (
        <span className="text-accent">
          <Music4 className="w-12 h-12" />
        </span>
      ) : (
        <span className="text-accent">
          <AlbumIcon className="w-12 h-12" />
        </span>
      )}
    </div>
  );

  if (typeof thumbnail === "string") {
    cardThumbnail = (
      <Image
        src={thumbnail}
        alt="card-thumbnail"
        width={152}
        height={152}
        className="w-full h-full object-cover !bg-black/90"
      />
    );
  } else {
    cardThumbnail = fallback(type);
  }

  return cardThumbnail;
};

export default CardThumbnail;
