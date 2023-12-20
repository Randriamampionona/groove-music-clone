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
        <Input type="text" placeholder="Search" className="bg-accent" />
        <SearchIcon
          size={18}
          className="absolute right-2 text-muted-foreground pointer-events-none"
        />
      </form>
      <Hint label="Search" side="right">
        <Button
          variant="ghost"
          className="flex items-center justify-center rounded-none w-full h-14 lg:hidden"
        >
          <SearchIcon />
        </Button>
      </Hint>
    </div>
  );
};

export default Search;
