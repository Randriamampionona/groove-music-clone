type TProps = { tile: string };

const PageHeader = ({ tile }: TProps) => {
  return (
    <div className="sticky top-0 p-4 lg:px-8 w-full z-10 bg-zinc-950 border-b border-zinc-900">
      <h1 className="mt-12 text-xl font-bold">{tile}</h1>
    </div>
  );
};

export default PageHeader;
