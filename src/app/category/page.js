import React, { Fragment } from "react";
import Image from "next/image";
import axiosInstance from "@/plugins/interceptor";
import Header from "@/components/header";
import Footer from "@/components/footer";
import CategoryCard from "@/components/category-card";

async function getCategories() {
  try {
    const response = await axiosInstance.get("categories");
    return response.data?.data || [];
  } catch (error) {
    console.error("Error fetching anime category data:", error);
    return [];
  }
}

export async function generateMetadata() {
  const categories = await getCategories();
  const sampleTitles = categories
    .slice(0, 5)
    .map((cat) => cat.attributes.title)
    .join(", ");

  return {
    title: "Categories & Genres | Next Animix",
    description: `Explore anime and manga categories including ${sampleTitles}, and more on Next Animix.`,
  };
}

const CategoryPage = async () => {
  const categories = await getCategories();

  return (
    <Fragment>
      <Header />
      <main className="min-h-screen bg-primary text-accent">
        <div className="max-w-7xl mx-auto px-6 py-10 space-y-10">
          {/* Hero Banner */}
          <section className="relative overflow-hidden rounded-3xl border border-accent/20 bg-secondary/30 p-8 sm:p-12 shadow-2xl backdrop-blur-md">
            {/* Background Image & Gradient */}
            <div className="absolute inset-0 z-0">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOtjz9VcQf9x_SeNojWaktXycNGWzsETzqaA&s"
                alt="Category Vault Banner"
                fill
                priority
                className="object-cover opacity-20"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
            </div>

            {/* Banner Header Text */}
            <div className="relative z-10 max-w-2xl space-y-4">
              <div className="inline-flex items-center gap-2">
                <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent bg-accent/10 border border-accent/20 rounded-full">
                  Genre Explorer
                </span>
                <span className="text-xs text-accent/70 font-mono">
                  {categories.length} Categories
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-accent leading-tight">
                Browse by Category
              </h1>
              <p className="text-sm sm:text-base text-accent/80 leading-relaxed">
                Filter through classic shonen, psychological thrillers, slice of life, and niche genres tailored to your taste.
              </p>
            </div>
          </section>

          {/* Category Grid */}
          <section>
            {categories.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {categories.map((category) => (
                  <CategoryCard
                    key={category.id}
                    category={category.attributes.title}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-secondary/20 border border-accent/15 rounded-3xl p-8">
                <p className="text-lg font-bold text-accent mb-2">No categories found</p>
                <p className="text-xs sm:text-sm text-accent/70">
                  Unable to load categories. Please try again later.
                </p>
              </div>
            )}
          </section>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};

export default CategoryPage;