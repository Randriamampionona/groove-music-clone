"use client";

import Link from "next/link";
import AddPlaylistButton from "./AddPlaylistButton";
import { usePathname } from "next/navigation";
import { LucideIcon, Settings2 } from "lucide-react";
import { cn } from "@/lib/utils";
import Hint from "./Hint";
import { useCallback } from "react";

type TProps = {
  navLinks: {
    text: string;
    slug: string;
    Icon: JSX.Element;
    action: boolean;
  }[];
};

const NavLinks = ({ navLinks }: TProps) => {
  const pathname = usePathname();

  const isActive = useCallback(
    (link: string) => {
      return pathname === link;
    },
    [pathname]
  );

  return (
    <nav className="flex-1 flex flex-col">
      <div className="flex-1">
        {navLinks.map(({ Icon, ...link }) => (
          <Hint
            key={link.slug}
            label={link.text}
            side="right"
            className="block lg:hidden"
          >
            <li
              className={cn(
                "flex flex-col lg:flex-row items-center list-none h-14 lg:h-12",
                link.slug === "/playlists" && "border-t",
                isActive(link.slug) && "border-l-4 border-l-blue-600 bg-accent"
              )}
            >
              <Link
                href={link.slug}
                className="flex items-center justify-center lg:justify-start flex-1 p-0 lg:pl-4 w-full h-full hover:bg-accent"
              >
                <span className="m-0 lg:mr-4">{Icon}</span>

                <span className="hidden lg:block">{link.text}</span>
              </Link>

              {link.action && (
                <Hint label="Create playlist" side="right">
                  <div className="hidden w-12 h-12 lg:block">
                    <AddPlaylistButton />
                  </div>
                </Hint>
              )}
            </li>
          </Hint>
        ))}

        <Hint label="Create playlist" side="right">
          <li className="lg:hidden flex items-center list-none h-12">
            <AddPlaylistButton />
          </li>
        </Hint>
      </div>

      <Hint label="Settings" side="right" className="block lg:hidden">
        <li
          className={cn(
            "flex items-center list-none h-12 border-t px-4 hover:bg-accent",
            isActive("/settings") && "border-l-4 border-l-blue-600 bg-accent"
          )}
        >
          <Link
            href={"/settings"}
            className="flex items-center justify-center lg:justify-start flex-1 h-full"
          >
            <Settings2 className="m-0 lg:mr-4" />
            <span className="hidden lg:block">Settings</span>
          </Link>
        </li>
      </Hint>
    </nav>
  );
};

export default NavLinks;
