import React, { Fragment } from "react";
// Removed unused Head import
import axiosInstance from "@/plugins/interceptor";
import Header from "@/components/header"; // Ensure this is a default export
import Footer from "@/components/footer"; // Ensure this is a default export
import CharacterSection from "@/components/character-section"; // Ensure this is a default export

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
      <main
        className="bg-secondary text-secondary"
      >
        <section className="relative container mx-auto p-6">
          <div className="relative bg-gray-800 text-white rounded-lg overflow-hidden">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOtjz9VcQf9x_SeNojWaktXycNGWzsETzqaA&s"
              alt="Hero Background"
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
            <div className="relative z-10 p-8">
              <h1 className="text-5xl font-bold mb-4">Character List</h1>
              <p className="text-lg mb-4">
                Explore a wide range of characters available on our platform.
              </p>
            </div>
          </div>
          <div className="mt-6">
            <CharacterSection characters={characters} />
          </div>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
};

export default CharacterPage;
