import getMusicList from "@/action/getMusicList";
import GroupAction from "@/components/GroupAction";
import MediaPlayer from "@/components/MediaPlayer";
import MobileMusicRow from "@/components/MobileMusicRow";
import MusicRow from "@/components/MusicRow";
import PageHeader from "@/components/PageHeader";
import SelectAllButton from "@/components/SelectAllButton";

const MyMusicPage = async () => {
  const musicList = await getMusicList();

  return (
    <>
      <GroupAction />

      <PageHeader tile="My music" />

      <div className="p-2 mb-48 xl:mb-36 lg:px-8">
        <SelectAllButton musics={musicList} />
        {musicList.map((music) => (
          <MusicRow key={music.id} music={music} />
        ))}
        {musicList.map((music) => (
          <MobileMusicRow key={music.id} music={music} />
        ))}
      </div>

      <MediaPlayer musics={musicList} />
    </>
  );
};

export default MyMusicPage;
