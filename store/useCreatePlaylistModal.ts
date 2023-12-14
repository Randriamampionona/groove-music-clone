import { create } from "zustand";

type TStore = {
  isOpen: boolean;
  toogle: () => void;
};

export const useCreatePlaylistModal = create<TStore>((set) => ({
  isOpen: false,
  toogle: () => {
    set((state) => ({ isOpen: !state.isOpen }));
  },
}));
