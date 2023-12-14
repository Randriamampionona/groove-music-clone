import Link from "next/link";
import Search from "./Search";
import NavLinks from "./NavLinks";

const navLinks = [
  {
    text: "My music",
    slug: "/my-music",
    icon: null,
    action: false,
  },
  {
    text: "Genres",
    slug: "/genres",
    icon: null,
    action: false,
  },
  {
    text: "Recent plays",
    slug: "/recent-plays",
    icon: null,
    action: false,
  },
  {
    text: "Now playing",
    slug: "/now-playing",
    icon: null,
    action: false,
  },
  {
    text: "Playlists",
    slug: "/playlists",
    icon: null,
    action: true,
  },
];

const Sidebar = () => {
  return (
    <aside className="fixed top-0 flex flex-col space-y-4 w-72 h-full bg-zinc-800">
      <h1 className="text-2xl font-semibold my-3 px-4">
        <Link href={"/"}>
          <span className="text-blue-600">G</span>roove Music
        </Link>
      </h1>

      <Search />
      <NavLinks navLinks={navLinks} />
    </aside>
  );
};

export default Sidebar;
