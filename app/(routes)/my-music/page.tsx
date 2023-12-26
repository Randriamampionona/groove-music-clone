import getMusicList from "@/action/getMusicList";
import PageHeader from "@/components/PageHeader";
import GroupAction from "@/components/GroupAction";
import Sorting from "@/components/Sorting";
import MusicRow from "@/components/MusicRow";
import MobileMusicRow from "@/components/MobileMusicRow";
import MediaPlayer from "@/components/MediaPlayer";

type TProps = {
  searchParams: {
    index?: string;
    sort_by?: "title" | "genre" | "artist";
  };
};

const MyMusicPage = async ({ searchParams }: TProps) => {
  const musicList = await getMusicList(searchParams.sort_by);

  if (!musicList.length) {
    return <p>Empty list</p>;
  }

  return (
    <>
      <PageHeader tile="My music" />

      <GroupAction onSelectAllData={musicList} canMultiSelect canDelete />

      <div className="flex flex-col relative h-full">
        <Sorting />

        <div className="flex-1 p-2 lg:p-4">
          {musicList.map((music, index) => (
            <MusicRow key={music.id} music={{ index, ...music }} />
          ))}
          {musicList.map((music, index) => (
            <MobileMusicRow key={music.id} music={{ index, ...music }} />
          ))}
        </div>

        <MediaPlayer
          musicIndex={searchParams.index || "0"}
          musics={musicList}
        />
      </div>
    </>
  );
};

export default MyMusicPage;
