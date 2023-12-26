import { getMusicByIDs } from "@/action/getMusicByIDs";
import getPlaylistId from "@/action/getPlaylistbyId";
import GroupAction from "@/components/GroupAction";
import MediaPlayer from "@/components/MediaPlayer";
import MobileMusicRow from "@/components/MobileMusicRow";
import MusicRow from "@/components/MusicRow";
import PlaylistHeader from "@/components/PlaylistHeader";
import { AlertTriangle } from "lucide-react";
import { notFound } from "next/navigation";

type TProps = {
  params: {
    id?: string;
  };
  searchParams: {
    index?: string;
  };
};

const PlaylistIDPage = async ({ params, searchParams }: TProps) => {
  const playlist = await getPlaylistId(params.id!);

  if (!playlist) return notFound();

  const musicList = await getMusicByIDs(playlist.element);

  return (
    <>
      <PlaylistHeader playlist={playlist} />

      {musicList?.length && (
        <GroupAction
          onSelectAllData={musicList}
          canMultiSelect
          canDelete
          className={"top-44 md:top-56 lg:top-64"}
        />
      )}

      <div className="flex flex-col relative h-full">
        {musicList?.length ? (
          <div className="flex-1 p-2 lg:p-4">
            {musicList.map((music, index) => (
              <MusicRow key={music.id} music={{ index, ...music }} />
            ))}
            {musicList.map((music, index) => (
              <MobileMusicRow key={music.id} music={{ index, ...music }} />
            ))}
          </div>
        ) : (
          <section className="flex items-center justify-center w-full h-100%">
            <div className="flex flex-col items-center justify-center space-y-1 text-center px-2">
              <AlertTriangle size={40} className="text-yellow-600" />
              <h1>Empty playlist</h1>
            </div>
          </section>
        )}

        {musicList?.length && (
          <MediaPlayer
            musicIndex={searchParams.index || "0"}
            musics={musicList}
          />
        )}
      </div>
    </>
  );
};

export default PlaylistIDPage;
