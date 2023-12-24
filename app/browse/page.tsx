import PageHeader from "@/components/PageHeader";
import getMusicList from "@/action/getMusicList";
import Card from "@/components/Card";
import GroupAction from "@/components/GroupAction";

type TProps = {};

const BrowsePage = async ({}: TProps) => {
  const data = await getMusicList();

  return (
    <>
      <GroupAction />

      <PageHeader tile="Find all the best here" />

      <div className="flex flex-wrap justify-start gap-y-6 w-full h-auto p-2 lg:p-8">
        {data.map((item) => (
          <Card key={item.id} data={item} type="MUSIC" /> //10rem each
        ))}
      </div>
    </>
  );
};

export default BrowsePage;
