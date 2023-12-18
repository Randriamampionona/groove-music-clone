import getPlaylist from "@/action/getPlaylist";
import Card from "@/components/Card";
import PageHeader from "@/components/PageHeader";

type TProps = {};

const PlaylistsPage = async ({}: TProps) => {
  const data = await getPlaylist();

  return (
    <>
      <PageHeader tile="Playlist" />

      <div className="justify-center flex flex-wrap sm:justify-start gap-y-6 w-full p-2 lg:p-8">
        {data.map((item) => (
          <Card key={item.id} data={item} type="PLAYLIST" /> //10rem each
        ))}
      </div>
    </>
  );
};

export default PlaylistsPage;
