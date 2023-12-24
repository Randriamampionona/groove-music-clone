import Link from "next/link";

import {
  Music4,
  Blocks,
  History,
  ListChecks,
  AppWindowIcon,
} from "lucide-react";
import Search from "./Search";
import NavLinks from "./NavLinks";

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
    Icon: <Blocks />,
    action: false,
  },
  {
    text: "Recent plays",
    slug: "/recent-plays",
    Icon: <History />,
    action: false,
  },
  {
    text: "Playlists",
    slug: "/playlist",
    Icon: <ListChecks />,
    action: true,
  },
];

const Sidebar = () => {
  return (
    <aside className="fixed top-0 flex flex-col space-y-0 border-r lg:space-y-4 w-16 lg:w-64 xl:w-72 h-full bg-card z-20">
      <Link href={"/"} as={"/"} className="w-auto">
        <h1 className="hidden lg:block text-2xl font-semibold my-3 px-4 w-full first-letter:text-primary_color">
          Groove Music
        </h1>
        <h1
          className="flex items-center justify-center font-bold text-zinc-100 text-center text-2xl p-2 m-2 rounded-sm bg-primary_color lg:hidden"
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
