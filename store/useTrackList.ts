import { create } from "zustand";

type State = {
  tracks: Music[];
  playableMusic: (Music & { isPlay: boolean }) | null;
  setTracks: (payload: Music[]) => void;
  play: (id: string) => void;
  autoPlay: () => void;
  onControl: (id: string, key: "NEXT" | "PREV") => void;
};

export const useTrackList = create<State>((set) => ({
  tracks: [],

  playableMusic: null,

  setTracks: (payload: Music[]) => {
    set(() => ({
      tracks: payload,
      playableMusic: {
        ...payload[0],
        isPlay: true,
      },
    }));
  },

  play: (id: string) => {
    set((state) => {
      const targetedMusic = state.tracks.find((music) => music.id == id);

      if (!targetedMusic) {
        return {
          playableMusic: null,
        };
      }

      return {
        playableMusic: {
          ...targetedMusic,
          isPlay: true,
        },
      };
    });
  },

  autoPlay: () => {
    set((state) => {
      const defaultMusic = state.tracks[0];
      const lastPlayedMusicId = state.playableMusic?.id || defaultMusic.id;
      const lastPlayedMusicIndex = state.tracks.findIndex(
        (music) => music.id == lastPlayedMusicId
      );

      if (lastPlayedMusicIndex + 1 >= state.tracks.length) {
        return {
          playableMusic: {
            ...defaultMusic,
            isPlay: true,
          },
        };
      }

      const nextPlayableMusic =
        state.tracks.at(lastPlayedMusicIndex + 1) || defaultMusic;

      return {
        playableMusic: {
          ...nextPlayableMusic,
          isPlay: true,
        },
      };
    });
  },

  onControl: (id: string, key: "NEXT" | "PREV") => {
    if (key.toLocaleUpperCase() === "NEXT") {
      set((state) => {
        const defaultMusic = state.tracks[0];
        const lastMusicIndex = state.tracks.findIndex(
          (music) => music.id == id
        );
        const nextMusicIndex = lastMusicIndex + 1;

        if (nextMusicIndex > state.tracks.length) {
          return {
            playableMusic: {
              ...defaultMusic,
              isPlay: true,
            },
          };
        }

        const nextPlayableMusic =
          state.tracks.at(nextMusicIndex) || defaultMusic;

        return {
          playableMusic: {
            ...nextPlayableMusic,
            isPlay: true,
          },
        };
      });
    }

    if (key.toLocaleUpperCase() === "PREV") {
      set((state) => {
        const defaultMusic = state.tracks[0];
        const lastMusicIndex = state.tracks.findIndex(
          (music) => music.id == id
        );
        const nextMusicIndex = lastMusicIndex - 1;

        if (nextMusicIndex < 0) {
          return {
            playableMusic: {
              ...defaultMusic,
              isPlay: true,
            },
          };
        }

        const nextPlayableMusic =
          state.tracks.at(nextMusicIndex) || defaultMusic;

        return {
          playableMusic: {
            ...nextPlayableMusic,
            isPlay: true,
          },
        };
      });
    }
  },
}));
