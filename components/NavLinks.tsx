"use client";

import Link from "next/link";
import AddPlaylistButton from "./AddPlaylistButton";
import { usePathname } from "next/navigation";
import { LucideIcon, Settings2 } from "lucide-react";
import { cn } from "@/lib/utils";
import Hint from "./Hint";

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
                "flex flex-col lg:flex-row items-center list-none h-14 lg:h-12 hover:bg-zinc-700 lg:hover:bg-transparent",
                link.action && "border-t border-zinc-700",
                pathname === link.slug &&
                  "border-l-4 border-l-blue-600 bg-zinc-700"
              )}
            >
              <Link
                href={link.slug}
                className="flex items-center justify-center lg:justify-start flex-1 p-0 lg:pl-4 w-full h-full hover:bg-zinc-700"
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
          <li className="lg:hidden flex items-center list-none h-12 border-zinc-700 hover:bg-zinc-700">
            <AddPlaylistButton />
          </li>
        </Hint>
      </div>

      <Hint label="Settings" side="right" className="block lg:hidden">
        <li
          className={cn(
            "flex items-center list-none h-12 border-t px-4 border-zinc-700 hover:bg-zinc-700",
            pathname === "/settings" &&
              "border-l-4 border-l-blue-600 bg-zinc-700"
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
