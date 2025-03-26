import React, { Fragment } from "react";
import axiosInstance from "@/plugins/interceptor";
import Header from "@/components/header";
import Footer from "@/components/footer";
import CategoryCard from "@/components/category-card";

async function getCategories() {
  try {
    const response = await axiosInstance.get("categories"); // Replace with your API endpoint
    
    const categories = response.data.data;
    return categories;
  } catch (error) {
    console.error("Error fetching anime category data:", error);
    return [];
  }
}

const CategoryPage = async () => {
  const categories = await getCategories();

  return (
    <Fragment>
      <Header />
      <main>
        <section className="container mx-auto p-6">
          <h1 className="text-4xl font-bold mb-4">Anime Category</h1>
          <p className="text-lg mb-4">
            Welcome to our website! We are dedicated to providing the best
            service possible.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category.attributes.title} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
};

export default CategoryPage;
