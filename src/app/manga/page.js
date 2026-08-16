import React from "react";
import axiosInstance from "@/plugins/interceptor";
import Header from "@/components/header";
import Footer from "@/components/footer";
import MangaSection from "@/components/manga-section";
import { HiOutlineBookOpen, HiOutlineSparkles, HiOutlineFire } from "react-icons/hi2";

async function getMangaList() {
  try {
    const response = await axiosInstance.get("manga");
    return response.data || [];
  } catch (error) {
    console.error("Error fetching manga data:", error);
    return [];
  }
}

const MangaPage = async () => {
  const mangas = await getMangaList();

  return (
    <div className="flex min-h-screen flex-col bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <Header />

      <main className="flex-1 py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Header Banner */}
          <section className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-900 px-6 py-12 text-white shadow-xl sm:px-12 sm:py-16 dark:border-neutral-800">
            {/* Subtle Gradient Backdrop */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-900 to-neutral-950 opacity-90" />
            
            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-neutral-800/80 px-3 py-1 text-xs font-medium text-neutral-300">
                <HiOutlineSparkles className="h-3.5 w-3.5 text-amber-400" />
                Curated Collection
              </div>

              <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
                Manga Archive
              </h1>
              
              <p className="mt-3 text-sm text-neutral-400 sm:text-base">
                Browse our complete index of serialized releases, trending chapters, and archival scans.
              </p>

              {/* Quick Info Badges */}
              <div className="mt-6 flex flex-wrap gap-4 text-xs text-neutral-400">
                <div className="flex items-center gap-1.5">
                  <HiOutlineBookOpen className="h-4 w-4 text-neutral-300" />
                  <span>{mangas.length} Available Titles</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <HiOutlineFire className="h-4 w-4 text-amber-400" />
                  <span>Updated Daily</span>
                </div>
              </div>
            </div>
          </section>

          {/* Catalog Section */}
          <section className="mt-10">
            <MangaSection mangas={mangas} />
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MangaPage;