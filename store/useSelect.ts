import { create } from "zustand";

type Colection = {
  pathname: string;
  _IDs: string[];
};

type State = {
  colectionIDsByPathname: Colection[];
  getColection: (pathname: string) => { colectionIDs: string[] };
  cancel: (pathname: string) => void;
  select: (selectedID: string, pathname: string) => void;
  selectAll: (selectedIDs: string[], pathname: string) => void;
};

export const useSelect = create<State>((set, get) => ({
  colectionIDsByPathname: [],

  getColection: (pathname: string) => {
    const state = get();

    return {
      colectionIDs:
        state.colectionIDsByPathname.find(
          (colection) => colection.pathname === pathname
        )?._IDs || [],
    };
  },

  cancel: (pathname: string) => {
    set((state) => {
      if (!pathname) return { ...state };

      const isExistPath =
        state.colectionIDsByPathname.findIndex(
          (colection) => colection.pathname === pathname
        ) > -1;

      if (!isExistPath) return { ...state };

      return {
        ...state,
        colectionIDsByPathname: state.colectionIDsByPathname.map(
          (colection) => {
            if (colection.pathname === pathname) {
              return {
                pathname: colection.pathname,
                _IDs: [],
              };
            }

            return colection;
          }
        ),
      };
    });
  },

  select: (selectedID: string, pathname: string) => {
    set((state) => {
      if (!pathname) return { ...state };

      const isExistPath =
        state.colectionIDsByPathname.findIndex(
          (colection) => colection.pathname === pathname
        ) > -1;

      if (isExistPath) {
        return {
          ...state,
          colectionIDsByPathname: state.colectionIDsByPathname.map(
            (colection) => {
              if (colection.pathname === pathname) {
                const isExistID =
                  colection._IDs.findIndex((id) => id === selectedID) > -1;

                return {
                  pathname: colection.pathname,
                  _IDs: isExistID
                    ? colection._IDs.filter((id) => id !== selectedID) // means unselect
                    : [selectedID, ...colection._IDs], // means select
                };
              }

              return colection;
            }
          ),
        };
      }

      const newColection = {
        pathname,
        _IDs: [selectedID],
      };

      return {
        ...state,
        colectionIDsByPathname: [...state.colectionIDsByPathname, newColection],
      };
    });
  },

  selectAll: (selectedIDs: string[], pathname: string) => {
    set((state) => {
      if (!pathname) return { ...state };

      const isExistPath =
        state.colectionIDsByPathname.findIndex(
          (colection) => colection.pathname === pathname
        ) > -1;

      if (isExistPath) {
        return {
          ...state,
          colectionIDsByPathname: state.colectionIDsByPathname.map(
            (colection) => {
              if (colection.pathname === pathname) {
                return {
                  pathname: colection.pathname,
                  _IDs: [...selectedIDs],
                };
              }

              return colection;
            }
          ),
        };
      }

      const newColection = {
        pathname,
        _IDs: [...selectedIDs],
      };

      return {
        ...state,
        colectionIDsByPathname: [...state.colectionIDsByPathname, newColection],
      };
    });
  },
}));
