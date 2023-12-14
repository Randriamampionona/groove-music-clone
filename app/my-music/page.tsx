import getMusicList from "@/action/getMusicList";
import MediaPlayer from "@/components/MediaPlayer";
import MusicRow from "@/components/MusicRow";
import PageHeader from "@/components/PageHeader";

const MyMusicPage = async () => {
  const musicList = await getMusicList();

  return (
    <>
      <PageHeader tile="My music" />

      <div className="p-4 lg:px-8">
        {musicList.map((music) => (
          <MusicRow key={music.id} music={music} />
        ))}
      </div>
      <MediaPlayer musics={musicList} />
    </>
  );
};

export default MyMusicPage;
