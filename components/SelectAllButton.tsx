"use client";

import { useSelect } from "@/store/useSelect";
import { Button } from "./ui/button";

type TProps = {
  musics: Music[];
  isShown?: boolean;
};

const SelectAllButton = ({ musics, isShown = false }: TProps) => {
  const { selectedMusicIDs, selectAll, cancel } = useSelect((state) => state);

  return selectedMusicIDs.length > 0 && !!isShown ? (
    <div className="flex items-center justify-start space-x-4 w-full">
      {selectedMusicIDs.length === musics.length ? (
        <Button variant="gostOutline" onClick={cancel} className="uppercase">
          Unselect All
        </Button>
      ) : (
        <Button
          variant="gostOutline"
          onClick={() => selectAll(musics.map((m) => m.id))}
          className="uppercase"
        >
          Select All
        </Button>
      )}

      <Button
        variant="destructive"
        onClick={() => selectAll(musics.map((m) => m.id))}
        className="uppercase"
      >
        Delete ({selectedMusicIDs.length})
      </Button>
    </div>
  ) : null;
};

export default SelectAllButton;
