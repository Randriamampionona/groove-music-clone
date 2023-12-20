type TProps = { tile: string };

const PageHeader = ({ tile }: TProps) => {
  return (
    <div className="sticky flex items-end top-0 w-fillAvailable h-12 lg:h-20 p-2 lg:px-8 z-10 bg-bgDark">
      <h1 className="text-2xl">{tile}</h1>
    </div>
  );
};

export default PageHeader;
