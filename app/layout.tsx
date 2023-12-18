import "./globals.css";
import type { Metadata } from "next";
import Sidebar from "@/components/Sidebar";
import { Toaster } from "@/components/ui/toaster";

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
        <Sidebar /> {/*width: 4rem na 16rem na 18rem */}
        <main className="relative h-fit ml-16 lg:ml-64 xl:ml-72 w-full">
          {children}
          <Toaster />
        </main>
      </body>
    </html>
  );
}
