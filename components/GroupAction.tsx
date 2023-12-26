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
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import AddPlaylistDialog from "./AddPlaylistDialog";

type TGroupAction = {
  onSelectAllData?: Music[];
  canMultiSelect?: boolean;
  canDelete?: boolean;
  className?: string | null;
};

export default function GroupAction({
  onSelectAllData = [],
  canMultiSelect = false,
  canDelete = false,
  className = null,
}: TGroupAction) {
  const router = useRouter();
  const pathname = usePathname();
  const {
    getColection,
    selectAll,
    cancel: unSelectAll,
  } = useSelect((state) => state);

  const colectionIDs = getColection(pathname).colectionIDs;

  const playSelectedMusic = () => {
    const dataString = colectionIDs.join(
      process.env.NEXT_PUBLIC_QUERY_STRING_SEPARATOR! as string
    );

    router.push(`/play/music/?tracks=${dataString}&index=0`);
  };

  const playOne = () => {
    router.push(`/play/music/${colectionIDs[0]}`);
  };

  const onselectAll = () => {
    canMultiSelect &&
      selectAll(
        onSelectAllData.map((m) => m.id),
        pathname
      );
  };

  const groupMenu = [
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
      action: colectionIDs.length === 1 ? playOne : playSelectedMusic,
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

  return colectionIDs.length ? (
    <section
      className={cn(
        "sticky top-0 w-fillAvailable bg-bgDark p-2 lg:p-4 space-y-2 lg:space-y-4 z-20",
        className && className
      )}
    >
      <div className="flex items-center justify-between bg-accent/50 rounded shadow-md p-2">
        <div className="flex items-center justify-center space-x-2">
          {canMultiSelect && (
            <Input
              type="checkbox"
              checked={colectionIDs.length === onSelectAllData.length}
              className="!w-5 !h-5 !accent-primary_color"
              onChange={() => {
                colectionIDs.length === onSelectAllData.length
                  ? unSelectAll(pathname)
                  : onselectAll();
              }}
            />
          )}
          <p className="font-bold whitespace-nowrap">
            {colectionIDs.length} selected
          </p>
        </div>

        <div className="hidden items-center justify-end space-x-4 lg:flex">
          {groupMenu.map(({ Icon, ...m }) => {
            if (!canDelete && m.id === "delete") return null;

            if (m.id === "add") {
              return (
                <AddPlaylistDialog
                  key={m.id}
                  dialogTrigger={
                    <Button
                      variant="ghost"
                      onClick={() => m.action(pathname)}
                      className={cn(
                        "flex items-center justify-center cursor-pointer list-none bg-accent space-x-2"
                      )}
                    >
                      <Icon size={18} />
                      <span>{m.text}</span>
                    </Button>
                  }
                  dialogType="exist"
                  dialogData={colectionIDs}
                />
              );
            } else {
              return (
                <Button
                  variant="ghost"
                  key={m.id}
                  onClick={() => m.action(pathname)}
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
                <p className="font-bold">{colectionIDs.length} selected</p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              {groupMenu.map(({ Icon, ...m }) => {
                if (!canDelete && m.id === "delete") return null;

                return (
                  <DropdownMenuItem
                    key={m.text}
                    className={cn("group")}
                    onClick={() => m.action(pathname)}
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
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </section>
  ) : null;
}
