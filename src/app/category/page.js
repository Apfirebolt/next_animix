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
      <main className="bg-background">
        <section className="container mx-auto p-6">
          <div className="relative bg-gray-800 text-white rounded-lg overflow-hidden">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOtjz9VcQf9x_SeNojWaktXycNGWzsETzqaA&s"
              alt="Hero Background"
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
            <div className="relative z-10 p-8">
              <h1 className="text-5xl font-bold mb-4">Category List</h1>
              <p className="text-lg mb-4">
                Explore a wide range of categories available on our platform.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category.attributes.title}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
};

export default CategoryPage;
