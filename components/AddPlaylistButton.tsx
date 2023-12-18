"use client";

import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const AddPlaylistButton = () => {
  const [name, setName] = useState("");

  const createHandler = () => {
    console.log(name);
    setName("");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center justify-center w-full h-full rounded-none hover:text-zinc-100 hover:bg-transparent lg:hover:bg-zinc-700"
        >
          <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md border border-blue-600 bg-zinc-100">
        <DialogHeader>
          <DialogTitle className="text-zinc-950">
            Create a new playlist
          </DialogTitle>
          <DialogDescription>
            Add your favorites songs to one place to create a beautiful
            playlist.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Input
              type="text"
              autoFocus
              value={name}
              placeholder="Name this playlist"
              className="w-full bg-zinc-100 text-zinc-900 ring-1 ring-zinc-950 rounded-sm"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <div className="flex items-center justify-end space-x-4 w-full">
            <DialogClose asChild>
              <Button type="button" variant="ghost" className="text-blue-600">
                Cancel
              </Button>
            </DialogClose>
            <Button
              type="button"
              className="rounded-sm bg-blue-600 text-zinc-100"
              onClick={createHandler}
            >
              Create playlist
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddPlaylistButton;
