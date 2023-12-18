import Link from "next/link";
import Search from "./Search";
import NavLinks from "./NavLinks";

import {
  Music4,
  AudioWaveformIcon,
  ListMusic,
  FileMusicIcon,
  ListChecks,
  AppWindowIcon,
} from "lucide-react";

const navLinks = [
  {
    text: "Browse",
    slug: "/browse",
    Icon: <AppWindowIcon />,
    action: false,
  },
  {
    text: "My music",
    slug: "/my-music",
    Icon: <Music4 />,
    action: false,
  },
  {
    text: "Genres",
    slug: "/genres",
    Icon: <AudioWaveformIcon />,
    action: false,
  },
  {
    text: "Recent plays",
    slug: "/recent-plays",
    Icon: <ListMusic />,
    action: false,
  },
  {
    text: "Now playing",
    slug: "/now-playing",
    Icon: <FileMusicIcon />,
    action: false,
  },
  {
    text: "Playlists",
    slug: "/playlists",
    Icon: <ListChecks />,
    action: true,
  },
];

const Sidebar = () => {
  return (
    <aside className="fixed top-0 flex flex-col space-y-0 lg:space-y-4 w-16 lg:w-64 xl:w-72 h-full bg-zinc-800 z-20">
      <Link href={"/"} className="w-auto">
        <h1 className="hidden lg:block text-2xl font-semibold my-3 px-4 w-full">
          <span className="text-blue-600">G</span>roove Music
        </h1>
        <h1
          className="flex items-center justify-center font-bold text-zinc-100 text-center text-2xl p-2 m-2 rounded-sm bg-blue-600 lg:hidden"
          style={{ fontFamily: "cursive" }}
        >
          G
        </h1>
      </Link>

      <Search />
      <NavLinks navLinks={navLinks} />
    </aside>
  );
};

export default Sidebar;
