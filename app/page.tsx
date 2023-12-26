import Link from "next/link";
import { Button } from "@/components/ui/button";
import Blob from "@/components/Blob";
import { ArrowRight, Stars } from "lucide-react";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center h-dscreen p-4 lg:p-4">
      <div className="text-center max-w-2xl mt-20 lg:mt-28">
        <h2 className="flex items-center justify-center space-x-2 text-muted-foreground text-sm">
          <span>Unleash your musical potential with Groove 2.0</span>{" "}
          <Stars className="text-yellow-500" />
        </h2>
        <h1 className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent text-5xl font-bold">
          The Umtimate destination for Music Creators and Lovers
        </h1>
        <p className="mt-4">
          Goove 2.0 is a revolutionary music streaming platform that caters to
          your every musical need. Whether you're in the mood for some
          old-school classics or the latest chart-toppers, Goove 2.0 has got you
          covered. So sit back, relax, and let Goove 2.0 take you on a musical
          journey like never before!
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 mt-12">
        <Link href="/my-music">
          <Button className="space-x-2 font-bold">
            <span>Discover our latest tracks</span>
            <ArrowRight size={16} />
          </Button>
        </Link>

        <Link href="/auth/sign-in" prefetch={false} className="underline">
          <span>Sign In</span>
        </Link>
      </div>

      <Blob />

      <small className="absolute bottom-1">
        &copy;{new Date().getFullYear()} by{" "}
        <a
          href="http://toojrtn.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          toojrtn
        </a>
      </small>
    </main>
  );
}

// Goove 2.0 is a revolutionary music streaming platform that caters to
// your every musical need. With its user-friendly interface and advanced
// search algorithms, discovering new artists, songs, and genres has
// never been easier. Whether you're in the mood for some old-school
// classics or the latest chart-toppers, Goove 2.0 has got you covered.
// Our team of music enthusiasts is dedicated to curating the best
// playlists and recommendations to suit your unique tastes. So sit back,
// relax, and let Goove 2.0 take you on a musical journey like never
// before!
