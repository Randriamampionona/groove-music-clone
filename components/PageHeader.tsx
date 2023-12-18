type TProps = { tile: string };

const PageHeader = ({ tile }: TProps) => {
  return (
    <div className="sticky flex items-end top-0 w-fillAvailable h-12 lg:h-20 p-2 lg:px-8 z-10 bg-zinc-950 border-b border-zinc-900">
      <h1 className="text-xl font-bold">{tile}</h1>
    </div>
  );
};

export default PageHeader;
