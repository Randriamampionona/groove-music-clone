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
import Hint from "./Hint";
import { cn } from "@/lib/utils";

type TAddPlaylistDialog = {
  dialogTrigger?: JSX.Element;
  dialogType?: "new" | "exist";
  dialogData?: string[];
  hintLabel?: string;
  hintPosition?: "top" | "right" | "bottom" | "left";
};

const AddPlaylistDialog = ({
  dialogTrigger,
  dialogType = "new",
  dialogData = [],
  hintLabel,
  hintPosition,
}: TAddPlaylistDialog) => {
  const [name, setName] = useState("");

  const createNewPlaylistHandler = () => {
    console.log(name);
    setName("");
  };

  const addToPlaylistHandler = () => {};

  return (
    <Dialog>
      <Hint
        className={cn(!hintLabel && "hidden")}
        label={!!hintLabel ? hintLabel : ""}
        side={hintPosition ? hintPosition : "right"}
      >
        <DialogTrigger asChild>
          {!!dialogTrigger ? (
            dialogTrigger
          ) : (
            <Button
              variant="ghost"
              className="flex items-center justify-center w-full h-full rounded-none"
            >
              <Plus />
            </Button>
          )}
        </DialogTrigger>
      </Hint>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {dialogType === "new" ? "Create a new playlist" : "Add to playlist"}
          </DialogTitle>
          <DialogDescription>
            Add your favorites songs to one place to create a beautiful
            playlist.
          </DialogDescription>
        </DialogHeader>

        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-4">
            {dialogType === "exist" && (
              <select className="flex h-10 w-full rounded-md border border-input bg-accent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                <option defaultChecked value="default">
                  Select existing playlist
                </option>
                <option value="1">Playlist - 01</option>
                <option value="2">Playlist - 02</option>
                <option value="3">Playlist - 03</option>
              </select>
            )}

            <Input
              type="text"
              value={name}
              placeholder="Name this playlist"
              onChange={(e) => setName(e.target.value)}
              className="bg-accent"
            />
          </div>
        </div>

        <DialogFooter className="sm:justify-start">
          <div className="flex items-center justify-end space-x-4 w-full">
            <DialogClose asChild>
              <Button type="button" variant="ghost">
                Cancel
              </Button>
            </DialogClose>

            {dialogType === "new" ? (
              <Button
                variant="primary"
                type="button"
                onClick={createNewPlaylistHandler}
              >
                Create playlist
              </Button>
            ) : (
              <Button
                variant="primary"
                type="button"
                onClick={addToPlaylistHandler}
              >
                Add
              </Button>
            )}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddPlaylistDialog;
