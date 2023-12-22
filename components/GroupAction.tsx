"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { X, Play, ListChecks, Trash2, MoreHorizontal } from "lucide-react";

import { useSelect } from "@/store/useSelect";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useTrackList } from "@/store/useTrackList";
import { getMusicBySelectedIDs } from "@/action/getMusicBySelectedIDs";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import AddPlaylistDialog from "./AddPlaylistDialog";

type TGroupAction = {
  musicList: Music[];
};

const GroupAction = ({ musicList }: TGroupAction) => {
  const router = useRouter();
  const {
    selectedMusicIDs,
    selectAll,
    cancel: unSelectAll,
  } = useSelect((state) => state);

  const { setTracks } = useTrackList((state) => state);

  const playSelectedMusic = async () => {
    const results = await getMusicBySelectedIDs(selectedMusicIDs);
    setTracks(results);
    router.push("/play");
  };

  const onselectAll = () => {
    selectAll(musicList.map((m) => m.id));
  };

  const menu = [
    {
      id: "cancel",
      text: "Cancel",
      Icon: X,
      action: unSelectAll,
    },
    {
      id: "play",
      text: "Play",
      Icon: Play,
      action: playSelectedMusic,
    },
    {
      id: "add",
      text: "Add to playlist",
      Icon: ListChecks,
      action: () => {},
    },
    {
      id: "delete",
      text: "Delete",
      Icon: Trash2,
      action: () => {},
    },
  ];

  return selectedMusicIDs.length ? (
    <section className="sticky top-0 w-fillAvailable bg-bgDark p-2 lg:p-4 space-y-2 lg:space-y-4 z-20">
      <div className="flex items-center justify-between bg-accent/50 rounded shadow-md p-2">
        <div className="flex items-center justify-center space-x-2">
          <Input
            type="checkbox"
            checked={selectedMusicIDs.length === musicList.length}
            className="!w-5 !h-5 !accent-primary_color"
            onChange={() => {
              selectedMusicIDs.length === musicList.length
                ? unSelectAll()
                : onselectAll();
            }}
          />
          <p className="font-bold whitespace-nowrap">
            {selectedMusicIDs.length} selected
          </p>
        </div>

        <div className="hidden items-center justify-end space-x-4 lg:flex">
          {menu.map(({ Icon, ...m }) => {
            if (m.id === "add") {
              return (
                <AddPlaylistDialog
                  dialogTrigger={
                    <Button
                      variant="ghost"
                      key={m.id}
                      onClick={m.action}
                      className={cn(
                        "flex items-center justify-center cursor-pointer list-none bg-accent space-x-2"
                      )}
                    >
                      <Icon size={18} />
                      <span>{m.text}</span>
                    </Button>
                  }
                  dialogType="exist"
                  dialogData={selectedMusicIDs}
                />
              );
            } else {
              return (
                <Button
                  variant="ghost"
                  key={m.id}
                  onClick={m.action}
                  className={cn(
                    "flex items-center justify-center cursor-pointer list-none bg-accent space-x-2",
                    m.id === "delete" && "hover:text-destructive"
                  )}
                >
                  <Icon size={18} />
                  <span>{m.text}</span>
                </Button>
              );
            }
          })}
        </div>

        <div className="block lg:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center justify-center">
              <Button variant="ghost">
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="mr-2">
              <DropdownMenuLabel>
                <p className="font-bold">{selectedMusicIDs.length} selected</p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              {menu.map(({ Icon, ...m }) => (
                <DropdownMenuItem
                  key={m.text}
                  className={cn("group")}
                  onClick={m.action}
                >
                  <Icon
                    className={cn(
                      "mr-2 h-4 w-4",
                      m.text === "Delete" &&
                        "text-destructive group-hover:text-destructive"
                    )}
                  />
                  <span
                    className={cn(
                      m.text === "Delete" &&
                        "text-destructive group-hover:text-destructive"
                    )}
                  >
                    {m.text}
                  </span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </section>
  ) : null;
};

export default GroupAction;
