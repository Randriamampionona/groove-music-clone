type Music = {
  id: string;
  title: string;
  web: string;
  artist: string;
  genre: string;
  duration: string;
  album: string;
  src: string;
  thumbnail: string | null;
};

type Playlist = {
  id: string;
  title: string;
  thumbnail: string | null;
  elementCount: number;
  element: string[];
};
