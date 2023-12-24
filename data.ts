const host =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://groove-music-clone.vercel.app";

export const data = [
  {
    id: "cd70424244b8",
    title: "Midnight Groove",
    web: "www.musicstore.com",
    artist: "The Night Owls",
    genre: "Funk",
    duration: "3:55",
    album: "After Hours",
    src: `${host}/assets/audio/audio.mp3`,
    thumbnail: null,
  },
  {
    id: "461e2c5a4e5f",
    title: "Echoes in the Wind",
    web: "www.musicstore.com",
    artist: "Melancholy Breeze",
    genre: "Ambient",
    duration: "6:20",
    album: "Whispers of Nature",
    src: `${host}/assets/audio/audio-2.mp3`,
    thumbnail: null,
  },
  {
    id: "dd2b7a202384",
    title: "Summer Breeze",
    web: "www.musicstore.com",
    artist: "Sunny Days Band",
    genre: "Pop",
    duration: "4:10",
    album: "Sunshine Vibes",
    src: `${host}/assets/audio/audio-3.mp3`,
    thumbnail: `${host}/assets/img/card.jpg`,
  },
];

export const playlistData = [
  {
    id: "12sf4sfc",
    title: "Untitle playlist - 1",
    thumbnail: null,
    elementCount: 2,
    element: ["dd2b7a202384", "461e2c5a4e5f"],
  },
  {
    id: "khksq5ds",
    title: "My beautiful 2023 songs",
    thumbnail: null,
    elementCount: 0,
    element: [],
  },
];
