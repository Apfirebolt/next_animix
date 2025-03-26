import React, { Fragment } from "react";
import axiosInstance from "@/plugins/interceptor";
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
      <main>
        <section className="container mx-auto p-6">
          <h1 className="text-4xl font-bold mb-4">Manga List</h1>
          <p className="text-lg mb-4">
            On this page you can find a list of mangas available on our website.
          </p>
          <MangaSection mangas={mangas} />
        </section>
      </main>
      <Footer />
    </Fragment>
  );
};

export default MangaPage;
