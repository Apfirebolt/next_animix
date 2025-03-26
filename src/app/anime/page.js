import React, { Fragment } from "react";
import axiosInstance from "@/plugins/interceptor";
import Header from "@/components/header";
import Footer from "@/components/footer";
import AnimeSection from "@/components/anime-section";

async function getAnimeList() {
  try {
    const response = await axiosInstance.get("anime"); // Replace with your API endpoint
    
    const anime = response.data;
    return anime;
  } catch (error) {
    console.error("Error fetching anime data:", error);
    return [];
  }
}

const AnimePage = async () => {
  const anime = await getAnimeList();

  return (
    <Fragment>
      <Header />
      <main className="bg-gradient-to-r from-green-700 to-blue-900">
        <section className="container mx-auto p-6">
          <div className="relative bg-gray-800 text-white rounded-lg overflow-hidden">
            <img
              src="https://static.wikia.nocookie.net/dragonball/images/2/23/Migatte_no_Gokui_Kizashi.png/revision/latest/scale-to-width-down/1200?cb=20181017065922"
              alt="Hero Background"
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
            <div className="relative z-10 p-8">
              <h1 className="text-5xl font-bold mb-4">Anime List</h1>
              <p className="text-lg mb-4">
                Explore a wide range of anime series available on our platform.
              </p>
            </div>
          </div>
          <AnimeSection anime={anime} />
        </section>
      </main>
      <Footer />
    </Fragment>
  );
};

export default AnimePage;
