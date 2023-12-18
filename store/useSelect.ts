import { create } from "zustand";

type State = {
  selectedMusicIDs: string[];
  cancel: () => void;
  select: (selectedMusicID: string) => void;
  selectAll: (groupIDs: string[]) => void;
  deleteMusic: () => void;
  addToPlaylist: () => void;
};

export const useSelect = create<State>((set) => ({
  selectedMusicIDs: [],

  cancel: () => {
    set(() => ({
      selectedMusicIDs: [],
    }));
  },

  select: (selectedMusicID: string) => {
    set((state) => ({
      selectedMusicIDs:
        state.selectedMusicIDs.filter((id) => id == selectedMusicID).length > 0 // means already there
          ? state.selectedMusicIDs.filter((id) => id !== selectedMusicID)
          : [...state.selectedMusicIDs, selectedMusicID],
    }));
  },

  selectAll: (groupIDs: string[]) => {
    set((_state) => ({
      selectedMusicIDs: groupIDs,
    }));
  },

  deleteMusic: () => {},

  addToPlaylist: () => {},
}));
