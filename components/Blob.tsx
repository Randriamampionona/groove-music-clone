type TProps = {};

const Blog = ({}: TProps) => {
  return (
    <div className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-10 pointer-events-none">
      <div className="w-72 h-60 rounded-full bg-rose-600/30 filter blur-[90px] before:rounded-[40%,60%,49%,64%,/,41%,25%,45%,65%]" />
      <div className="w-96 h-80 rounded-full bg-primary_color/30 filter blur-[90px] before:rounded-[40%,60%,59%,14%,/,40%,35%,55%,48%]" />
      <div className="w-72 h-56 rounded-full bg-purple-600/30 filter blur-[90px] before:rounded-[40%,60%,19%,44%,/,40%,65%,5%,70%]" />
    </div>
  );
};

export default Blog;
