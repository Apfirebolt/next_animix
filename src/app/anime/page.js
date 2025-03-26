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
      <main>
        <section className="container mx-auto p-6">
          <h1 className="text-4xl font-bold mb-4">Anime List</h1>
          <p className="text-lg mb-4">
            On this page you can find a list of anime available on our website.
          </p>
          <AnimeSection anime={anime} />
        </section>
      </main>
      <Footer />
    </Fragment>
  );
};

export default AnimePage;
