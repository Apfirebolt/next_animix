import React from "react";
import axiosInstance from "@/plugins/interceptor";
import Head from "next/head";
import Header from "@/components/header";
import Footer from "@/components/footer";
import AnimeSection from "@/components/anime-section";
import { HiOutlineTv, HiOutlineSparkles, HiOutlineFire } from "react-icons/hi2";

async function getAnimeList() {
  try {
    const response = await axiosInstance.get("anime");
    return response.data || [];
  } catch (error) {
    console.error("Error fetching anime data:", error);
    return [];
  }
}

const AnimePage = async () => {
  const anime = await getAnimeList();
  const animeCount = anime?.data?.length || (Array.isArray(anime) ? anime.length : 0);

  return (
    <>
      <Head>
        <title>Anime Catalog - Animix</title>
        <meta
          name="description"
          content="Discover your favorite anime series on Animix. Browse through a diverse collection of anime from various genres."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="anime, Animix, anime list, anime series, stream anime" />
        <meta name="author" content="Animix" />
        <meta property="og:title" content="Anime Catalog - Animix" />
        <meta
          property="og:description"
          content="Discover your favorite anime series on Animix. Browse through a diverse collection of anime from various genres."
        />
        <meta property="og:image" content="https://4kwallpapers.com/images/walls/thumbs_3t/13988.jpg" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="flex min-h-screen flex-col bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
        <Header />

        <main className="flex-1 py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            {/* Redesigned Hero Banner with Retained Background Image */}
            <section className="relative isolate overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-950 shadow-xl sm:rounded-3xl dark:border-neutral-800">
              <img
                src="https://4kwallpapers.com/images/walls/thumbs_3t/13988.jpg"
                alt="Anime Hero Background"
                className="absolute inset-0 -z-20 h-full w-full object-cover object-center brightness-75 transition-transform duration-700 hover:scale-105"
              />
              
              {/* Dual-layer Gradient for Readability */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-neutral-950/95 via-neutral-950/75 to-neutral-950/30" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />

              <div className="relative px-6 py-12 sm:px-12 sm:py-20 lg:py-24">
                <div className="max-w-2xl">
                  {/* Category Pill */}
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                    <HiOutlineSparkles className="h-3.5 w-3.5 text-amber-400" />
                    Stream & Explore
                  </div>

                  {/* Title & Description */}
                  <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                    Anime Catalog
                  </h1>
                  
                  <p className="mt-4 text-sm leading-relaxed text-neutral-300 sm:text-base">
                    Dive into the world of serialized animation. Stream the latest simulcasts, explore top-ranked classics, and filter through seasonal releases.
                  </p>

                  {/* Meta Indicators */}
                  <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-medium text-neutral-300">
                    <div className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-black/40 px-3 py-1.5 backdrop-blur-sm">
                      <HiOutlineTv className="h-4 w-4 text-neutral-200" />
                      <span>{animeCount > 0 ? `${animeCount} Releases Listed` : "Full Archive Access"}</span>
                    </div>

                    <div className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-black/40 px-3 py-1.5 backdrop-blur-sm">
                      <HiOutlineFire className="h-4 w-4 text-amber-400" />
                      <span>Active Broadcast Season</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Catalog Grid Section */}
            <section className="mt-10">
              <AnimeSection anime={anime} />
            </section>

          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AnimePage;