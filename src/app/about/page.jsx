import React, { Fragment } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata = {
  title: "About Us Page",
  description: "Learn more about Animix.",
};

const AboutPage = () => {
  return (
    <Fragment>
      <Header />
      <main className="h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://4kwallpapers.com/images/walls/thumbs_3t/13988.jpg')" }}>
        <section className="text-center text-white bg-primary bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-6xl font-bold mb-4">Welcome to Animix</h1>
          <p className="text-2xl">
            Discover your favorite anime characters and explore the world of anime like never before.
          </p>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
};

export default AboutPage;
