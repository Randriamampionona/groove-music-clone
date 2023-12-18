import { SearchIcon } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Hint from "./Hint";

const Search = () => {
  return (
    <div className="w-full px-0 lg:px-4">
      <form
        action=""
        className="relative hidden lg:flex items-center justify-between"
      >
        <Input
          type="text"
          placeholder="Search"
          className="flex-1 text-zinc-900 px-2 py-1"
        />
        <SearchIcon
          size={18}
          className="absolute right-2 text-muted-foreground pointer-events-none"
        />
      </form>
      <Hint label="Search" side="right">
        <Button
          variant="ghost"
          className="flex items-center justify-center hover:bg-zinc-700 rounded-none hover:text-zinc-100 w-full h-14 lg:hidden"
        >
          <SearchIcon />
        </Button>
      </Hint>
    </div>
  );
};

export default Search;
