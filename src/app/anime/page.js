import React, { Fragment } from "react";
import axiosInstance from "@/plugins/interceptor";
import Header from "@/components/header";
import Footer from "@/components/footer";
import AnimeCard from "@/components/anime-card";

async function getAnimeList() {
  try {
    const response = await axiosInstance.get("anime"); // Replace with your API endpoint
    
    const anime = response.data.data;
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
      <main>
        <section className="container mx-auto p-6">
          <h1 className="text-4xl font-bold mb-4">Anime List</h1>
          <p className="text-lg mb-4">
            On this page you can find a list of anime available on our website.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {anime.map((item) => (
              <AnimeCard key={item.id} anime={item} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
};

export default AnimePage;
