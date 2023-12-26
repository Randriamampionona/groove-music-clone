import "@/app/globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import type { Metadata } from "next";

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
      <body className="relative w-full h-dscreen">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
