import CardThumbnail from "./CardThumbnail";
import CardAction from "./CardAction";
import CardFooter from "./CardFooter";

export type TdataType = "MUSIC" | "PLAYLIST";

type TProps = {
  type: TdataType;
  data: Music | Playlist;
};

export default function Card({ data, type }: TProps) {
  return (
    <div className="group flex flex-col items-center justify-start rounded-md w-40 h-fit hover:bg-accent px-2 py-1 cursor-default active:scale-95 transition-all">
      <div className="relative flex items-center justify-center w-[9.5rem] h-[9.5rem] border-1 rounded-md overflow-hidden">
        <CardThumbnail thumbnail={data.thumbnail} type={type} />
        <CardAction data={data} type={type} />
      </div>
      <CardFooter data={data} type={type} />
    </div>
  );
}
