import React, { Fragment } from "react";
import axiosInstance from "@/plugins/interceptor";
import { motion } from "framer-motion";
import Header from "@/components/header";
import Footer from "@/components/footer";
import MangaSection from "@/components/manga-section";

async function getMangaList() {
  try {
    const response = await axiosInstance.get("manga"); // Replace with your API endpoint

    const mangas = response.data;
    return mangas;
  } catch (error) {
    console.error("Error fetching manga data:", error);
    return [];
  }
}

const MangaPage = async () => {
  const mangas = await getMangaList();

  return (
    <Fragment>
      <Header />
      <main className="bg-accent text-black">
        <section className="container mx-auto p-6">
          <div className="relative bg-gray-800 text-white rounded-lg overflow-hidden">
            <img
              src="https://4kwallpapers.com/images/walls/thumbs_3t/13988.jpg"
              alt="Hero Background"
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
            <div className="relative z-10 p-8">
              <h1 className="text-5xl font-bold mb-4">Manga List</h1>
              <p className="text-lg mb-4">
                Explore a wide range of Manga available on our platform.
              </p>
            </div>
          </div>
          <MangaSection mangas={mangas} />
        </section>
      </main>
      <Footer />
    </Fragment>
  );
};

export default MangaPage;
