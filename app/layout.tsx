import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/providers/theme-provider";
import Sidebar from "@/components/sidebar";

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
      <body className="relative flex w-full h-dscreen">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <Sidebar /> {/*width: 4rem na 16rem na 18rem */}
          <main className="relative h-fit ml-16 lg:ml-64 xl:ml-72 w-full">
            {children}
            <Toaster />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
