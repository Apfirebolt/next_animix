import React, { Fragment } from "react";
import Image from "next/image";
import axiosInstance from "@/plugins/interceptor";
import Header from "@/components/header";
import Footer from "@/components/footer";
import CharacterSection from "@/components/character-section";

export const metadata = {
  title: "Character Vault | Next Animix",
  description: "Explore comprehensive profiles, lore, and abilities of your favorite anime characters.",
};

async function getCharacterList() {
  try {
    const response = await axiosInstance.get("characters");
    return response.data || [];
  } catch (error) {
    console.error("Error fetching character data:", error);
    return [];
  }
}

const CharacterPage = async () => {
  const characters = await getCharacterList();

  return (
    <Fragment>
      <Header />
      <main className="min-h-screen bg-primary text-accent">
        {/* Page Container */}
        <div className="max-w-7xl mx-auto px-6 py-10 space-y-10">
          {/* Hero Banner Card */}
          <section className="relative overflow-hidden rounded-3xl border border-accent/20 bg-secondary/30 p-8 sm:p-12 shadow-2xl backdrop-blur-md">
            {/* Background Image & Gradient Overlay */}
            <div className="absolute inset-0 z-0">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOtjz9VcQf9x_SeNojWaktXycNGWzsETzqaA&s"
                alt="Character Banner"
                fill
                priority
                className="object-cover opacity-20"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
            </div>

            {/* Banner Content */}
            <div className="relative z-10 max-w-2xl space-y-4">
              <div className="inline-flex items-center gap-2">
                <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent bg-accent/10 border border-accent/20 rounded-full">
                  Archives & Lore
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-accent leading-tight">
                Character Directory
              </h1>
              <p className="text-sm sm:text-base text-accent/80 leading-relaxed">
                Explore deep profiles, backstories, voice actors, and signature abilities from classic arcs to latest season debuts.
              </p>
            </div>
          </section>

          {/* Character Content Section */}
          <section className="relative">
            <CharacterSection characters={characters} />
          </section>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};

export default CharacterPage;