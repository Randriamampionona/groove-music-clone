"use client";

import { SyntheticEvent, useRef, useState } from "react";
import { Button } from "./ui/button";
import { Grid2x2, List } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { newQueryParams } from "@/lib/newQueryParams";

type TProps = {
  sortingKeys?: {
    key: string;
    text: string;
  }[];
};

const defaultKeys = [
  {
    key: "title",
    text: "A-Z",
  },
  {
    key: "artist",
    text: "Artist",
  },
  {
    key: "genre",
    text: "Genre",
  },
];

const Sorting = ({ sortingKeys = defaultKeys }: TProps) => {
  const [view, setView] = useState<"grid" | "list">("list");
  const { push } = useRouter();
  const { toString, get } = useSearchParams();
  const pathname = usePathname();
  const selectRef = useRef<HTMLSelectElement | null>(null);

  const sortHandler = (e: SyntheticEvent<HTMLSelectElement, Event>) => {
    const URL =
      pathname + newQueryParams(toString(), { sort_by: e.currentTarget.value });

    push(URL);
  };

  return (
    <div className="flex items-center justify-between p-2 lg:p-4">
      <div className="flex space-x-2 p-2 rounded hover:bg-accent cursor-pointer">
        <p>Sort by:</p>
        <select
          ref={selectRef}
          className="outline-none bg-transparent"
          defaultValue={get("sort_by") || "title"}
          onChange={(e) => sortHandler(e)}
        >
          {sortingKeys.map((sortingKey) => (
            <option
              key={sortingKey.key}
              value={sortingKey.key}
              className="bg-bgDark"
            >
              {sortingKey.text}
            </option>
          ))}
        </select>
      </div>

      <div className="flex space-x-2">
        <Button
          variant="ghost"
          className={cn(view === "grid" && "!text-primary_color bg-accent")}
          onClick={() => setView("grid")}
        >
          <Grid2x2 />
        </Button>
        <Button
          variant="ghost"
          className={cn(view === "list" && "!text-primary_color bg-accent")}
          onClick={() => setView("list")}
        >
          <List />
        </Button>
      </div>
    </div>
  );
};

export default Sorting;
