import React, { Fragment } from "react";
import axiosInstance from "@/plugins/interceptor";
import Header from "@/components/header";
import Footer from "@/components/footer";
import CharacterSection from "@/components/character-section";

async function getCharacterList() {
  try {
    const response = await axiosInstance.get("characters"); // Replace with your API endpoint
    
    const character = response.data;
    return character;
  } catch (error) {
    console.error("Error fetching anime data:", error);
    return [];
  }
}

const CharacterPage = async () => {
  const characters = await getCharacterList();

  return (
    <Fragment>
      <Header />
      <main>
        <section className="container mx-auto p-6">
          <h1 className="text-4xl font-bold mb-4">Character List</h1>
          <p className="text-lg mb-4">
            On this page you can find a list of characters available on our website.
          </p>
          <CharacterSection characters={characters} />
        </section>
      </main>
      <Footer />
    </Fragment>
  );
};

export default CharacterPage;
