"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { SearchIcon } from "lucide-react";
import Hint from "./Hint";

type TProps = {
  dialogTrigger: JSX.Element;
};

const SearchDialog = ({ dialogTrigger }: TProps) => {
  return (
    <Dialog>
      <Hint label="Search" side="right">
        <DialogTrigger asChild className="w-full">
          {dialogTrigger}
        </DialogTrigger>
      </Hint>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Search</DialogTitle>
          <DialogDescription>
            Discover anything you want here by searching on it :)
          </DialogDescription>
        </DialogHeader>

        <div className="flex items-center space-x-2">
          <form
            action=""
            className="relative flex items-center justify-between w-full"
          >
            <Input type="text" placeholder="Search" className="bg-accent" />
            <SearchIcon
              size={18}
              className="absolute right-2 text-muted-foreground pointer-events-none"
            />
          </form>
        </div>

        <DialogFooter className="sm:justify-start">
          <div className="flex items-center justify-end space-x-4 w-full">
            <DialogClose asChild>
              <Button type="button" variant="ghost">
                Cancel
              </Button>
            </DialogClose>

            <Button variant="primary" type="button">
              Search
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
