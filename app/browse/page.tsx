import PageHeader from "@/components/PageHeader";
import getMusicList from "@/action/getMusicList";
import Card from "@/components/Card";

type TProps = {};

const BrowsePage = async ({}: TProps) => {
  const data = await getMusicList();

  return (
    <>
      <PageHeader tile="Find all the best here" />

      <div className="justify-center flex flex-wrap sm:justify-start gap-y-6 w-full p-2 lg:p-8">
        {data.map((item) => (
          <Card key={item.id} data={item} type="MUSIC" /> //10rem each
        ))}
      </div>
    </>
  );
};

export default BrowsePage;
