import getMusicList from "@/action/getMusicList";
import GroupAction from "@/components/GroupAction";
import MediaPlayer from "@/components/MediaPlayer";
import MobileMusicRow from "@/components/MobileMusicRow";
import MusicRow from "@/components/MusicRow";
import PageHeader from "@/components/PageHeader";

type TProps = {
  searchParams: {
    tracks?: string;
    index?: string;
  };
};

const MyMusicPage = async ({}: TProps) => {
  const musicList = await getMusicList();

  if (!musicList.length) {
    return <p>Empty list</p>;
  }

  return (
    <>
      <GroupAction onSelectAllData={musicList} canMultiSelect canDelete />

      <PageHeader tile="My music" />

      <div className="flex flex-col relative h-full">
        <div className="flex-1 p-2 lg:p-4">
          {musicList.map((music, index) => (
            <MusicRow key={music.id} music={{ index, ...music }} />
          ))}
          {musicList.map((music, index) => (
            <MobileMusicRow key={music.id} music={{ index, ...music }} />
          ))}
        </div>

        <MediaPlayer musics={musicList} />
      </div>
    </>
  );
};

export default MyMusicPage;
