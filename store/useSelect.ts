import { create } from "zustand";

type State = {
  musics: Music[];
  cancel: () => void;
  play: () => void;
  select: (payload: Music) => void;
  deleteMusic: () => void;
  addToPlaylist: () => void;
};

export const useSelect = create<State>((set) => ({
  musics: [],

  cancel: () => {
    set(() => ({
      musics: [],
    }));
  },

  play: () => {},

  select: (music: Music) => {
    set((state) => ({
      musics:
        state.musics.filter((n) => n.id == music.id).length > 0 // means already there
          ? state.musics.filter((n) => n.id !== music.id)
          : [...state.musics, music],
    }));
  },

  deleteMusic: () => {},

  addToPlaylist: () => {},
}));
