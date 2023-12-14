import "./globals.css";
import type { Metadata } from "next";
import Sidebar from "@/components/Sidebar";
import CreatePlaylistModal from "@/components/CreatePlaylistModal";
import { Toaster } from "@/components/ui/toaster";
import GroupAction from "@/components/GroupAction";

export const metadata: Metadata = {
  title: "Groove Music Clone",
  description: "Audio player app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative flex w-full h-screen bg-zinc-950 text-zinc-100">
        <CreatePlaylistModal />
        <Sidebar /> {/*width: 18rem */}
        <main className="relative h-fit ml-72 w-full">
          <GroupAction />
          {children}
          <Toaster />
        </main>
      </body>
    </html>
  );
}
