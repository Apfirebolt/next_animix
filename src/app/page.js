'use client'

import Image from "next/image";
import React, { Fragment } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <main>
      <Image
          className="dark:invert mt-10 mx-auto"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <section className="container mx-auto p-6">
          <h1 className="text-4xl font-bold mb-4">About Animix</h1>
          <p className="text-lg mb-4">
            Welcome to Animix! Your ultimate destination for everything related to anime.
          </p>
          <p className="text-lg mb-4">
            Dive into a vast collection of anime series, explore detailed character profiles, and stay updated with the latest news in the anime world.
          </p>
          <p className="text-lg mb-4">
            Whether you're a long-time fan or just starting your anime journey, Animix is here to provide you with all the information and resources you need.
          </p>
          <p className="text-lg">
            Thank you for visiting Animix. We hope you enjoy exploring the fascinating world of anime with us!
          </p>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
};

export default Home;

