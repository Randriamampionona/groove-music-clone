import { Toaster } from "@/components/ui/toaster";
import Sidebar from "@/components/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Sidebar /> {/*width: 4rem na 16rem na 18rem */}
      <main className="relative ml-16 lg:ml-64 xl:ml-72 w-fillAvailable h-full">
        {children}
        <Toaster />
      </main>
    </>
  );
}
