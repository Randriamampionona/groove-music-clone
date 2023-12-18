"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { X, Play, ListChecks, Trash2, MoreVertical } from "lucide-react";

import { useSelect } from "@/store/useSelect";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useTrackList } from "@/store/useTrackList";
import { getMusicBySelectedIDs } from "@/action/getMusicBySelectedIDs";

const GroupAction = () => {
  const router = useRouter();
  const { selectedMusicIDs, cancel } = useSelect((state) => state);
  const { setTracks } = useTrackList((state) => state);

  const playSelectedMusic = async () => {
    const results = await getMusicBySelectedIDs(selectedMusicIDs);
    setTracks(results);
    router.push("/play");
  };

  const menu = [
    {
      text: "Cancel",
      Icon: X,
      action: cancel,
    },
    {
      text: "Play",
      Icon: Play,
      action: playSelectedMusic,
    },
    {
      text: "Add to playlist",
      Icon: ListChecks,
      action: () => {},
    },
    {
      text: "Delete",
      Icon: Trash2,
      action: () => {},
    },
  ];

  return selectedMusicIDs.length ? (
    <section className="fixed top-0 flex items-center justify-between w-fillAvailable p-2 lg:p-8 h-12 lg:h-20 bg-black border-b border-zinc-900 z-20">
      <p className="font-bold">{selectedMusicIDs.length} selected</p>

      <div className="hidden items-center justify-end space-x-6 lg:flex">
        {menu.map(({ Icon, ...m }) => (
          <li
            key={m.text}
            onClick={m.action}
            className={cn(
              "flex flex-col items-center justify-center w-20 hover:text-blue-600 cursor-pointer list-none",
              m.text === "Delete" && "hover:text-red-600"
            )}
          >
            <Icon />
            <span className="text-center w-full truncate">{m.text}</span>
          </li>
        ))}
      </div>

      <div className="block lg:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <MoreVertical />
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
                      "text-red-600 group-hover:text-red-600"
                  )}
                />
                <span
                  className={cn(
                    m.text === "Delete" &&
                      "text-red-600 group-hover:text-red-600"
                  )}
                >
                  {m.text}
                </span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </section>
  ) : null;
};

export default GroupAction;
