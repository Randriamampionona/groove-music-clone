import getMusicList from "@/action/getMusicList";
import GroupAction from "@/components/GroupAction";
import MediaPlayer from "@/components/MediaPlayer";
import MobileMusicRow from "@/components/MobileMusicRow";
import MusicRow from "@/components/MusicRow";
import PageHeader from "@/components/PageHeader";

const MyMusicPage = async () => {
  const musicList = await getMusicList();

  return (
    <>
      <GroupAction musicList={musicList} />

      <PageHeader tile="My music" />

      <div className="relative">
        <div className="p-2 lg:p-4">
          {musicList.map((music) => (
            <MusicRow key={music.id} music={music} />
          ))}
          {musicList.map((music) => (
            <MobileMusicRow key={music.id} music={music} />
          ))}
        </div>

        <MediaPlayer musics={musicList} />
      </div>
    </>
  );
};

export default MyMusicPage;
