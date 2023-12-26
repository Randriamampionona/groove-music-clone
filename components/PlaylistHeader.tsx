import { AlbumIcon } from "lucide-react";
import Image from "next/image";
import PlaylistHeaderActions from "./PlaylistHeaderActions";

type TProps = {
  playlist: Playlist;
};

const PlaylistHeader = ({ playlist }: TProps) => {
  return (
    <section className="sticky top-0 w-fillAvailable bg-bgDark p-2 lg:p-4 z-30">
      <div className="flex justify-between bg-accent/50 rounded-md p-4 space-x-4">
        <div className="relative flex items-center justify-center w-32 h-32 md:w-44 md:h-44 lg:w-48 lg:h-48 border-1 rounded-md overflow-hidden">
          {playlist.thumbnail ? (
            <Image
              src={playlist.thumbnail}
              alt="playlist-thumbnail"
              width={152}
              height={152}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full bg-black/90">
              <span className="text-accent">
                <AlbumIcon className="w-12 h-12" />
              </span>
            </div>
          )}
        </div>

        <div className="flex-grow flex-shrink space-y-4">
          <h1 className="text-2xl font-bold leading-none line-clamp-1 lg:line-clamp-2">
            {playlist.title}
          </h1>
          <p className="text-sm text-muted-foreground">
            {playlist.elementCount} element{playlist.elementCount! > 1 && "s"}
          </p>
          <PlaylistHeaderActions playlistId={playlist.id} />
        </div>
      </div>
    </section>
  );
};

export default PlaylistHeader;
