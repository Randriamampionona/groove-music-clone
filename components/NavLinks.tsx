"use client";

import Link from "next/link";
import AddPlaylistButton from "./AddPlaylistButton";
import { usePathname } from "next/navigation";
import { Settings2 } from "lucide-react";
import { cn } from "@/lib/utils";

type TProps = {
  navLinks: {
    text: string;
    slug: string;
    icon: JSX.Element | null;
    action: boolean;
  }[];
};

const NavLinks = ({ navLinks }: TProps) => {
  const pathname = usePathname();

  return (
    <nav className="flex-1 flex flex-col">
      <div className="flex-1">
        {navLinks.map(({ icon: Icon, ...link }) => (
          <li
            key={link.slug}
            className={`flex items-center list-none h-12 ${
              link.action && "border-t border-zinc-700"
            } ${
              pathname === link.slug &&
              "border-l-4 border-l-blue-600 bg-zinc-700"
            }`}
          >
            <Link
              href={link.slug}
              className="flex items-center flex-1 pl-4 h-full hover:bg-zinc-700"
            >
              {link.text}
            </Link>
            {link.action && <AddPlaylistButton />}
          </li>
        ))}
      </div>

      <li
        className={cn(
          "flex items-center list-none h-12 border-t px-4 border-zinc-700 hover:bg-zinc-700",
          pathname === "/settings" && "border-l-4 border-l-blue-600 bg-zinc-700"
        )}
      >
        <Link href={"/settings"} className="flex items-center flex-1 h-full">
          <Settings2 className="mr-4" />
          <span>Settings</span>
        </Link>
      </li>
    </nav>
  );
};

export default NavLinks;
