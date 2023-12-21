import { TdataType } from "./Card";

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

export default CardFooter;
