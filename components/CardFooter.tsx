import Link from "next/link";
import { TdataType } from "./Card";

type TCardFooter = {
  type: TdataType;
  data: any;
};

const CardFooter = ({ data, type }: TCardFooter) => {
  return (
    <div className="flex flex-col w-full mt-1 mb-4">
      <Link
        prefetch={false}
        title={data.title}
        href={
          type === "MUSIC" ? `/play/music/${data.id}` : `/playlist/${data.id}`
        }
        className="text-base font-medium line-clamp-1"
      >
        {data.title}
      </Link>
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

export default CardFooter;
