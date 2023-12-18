type TProps = {};

const Dvd = ({}: TProps) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center bg-white/10 w-48 h-48 lg:w-60 lg:h-60 rounded-full backdrop-blur-sm z-10">
      <div
        className="
        spin100
        duration-1000
        absolute
        flex
        items-center
        justify-center
        bg-black
        w-44
        h-44
        lg:w-56
        lg:h-56
        rounded-full
        pointer-events-none
        z-20
        
        before:content-['']
        before:absolute
        before:w-16
        before:h-10
        before:lg:w-20
        before:lg:h-14
        before:bottom-[8%]
        before:rounded-[40%,60%,49%,44%,/,40%,35%,65%,60%]
        before:blur-md
        before:bg-[linear-gradient(180deg,transparent,#ffffff0a,#ffffff0f)]
        
        after:content-['']
        after:absolute
        after:w-16
        after:h-10
        after:lg:w-20
        after:lg:h-14
        after:top-[8%]
        after:rounded-[40%,60%,49%,44%,/,40%,35%,65%,60%]
        after:blur-md
        after:bg-[linear-gradient(0deg,transparent,#ffffff0a,#ffffff0f)]"
      >
        <div className="absolute flex items-center justify-center bg-white/10 w-12 h-12 lg:w-16 lg:h-16 rounded-full backdrop-blur-sm z-30">
          <div className="w-4 h-4 rounded-full bg-black" />
        </div>
      </div>
    </div>
  );
};

export default Dvd;
