"use client";

import React, { Fragment } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const Home = () => {
  return (
    <Fragment>
      <Header />
      <main className="min-h-screen bg-primary text-accent">
        {/* Hero Section */}
        <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden px-6 py-20">
          {/* Background Image with Gradient Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-1000"
            style={{
              backgroundImage:
                "url('https://4kwallpapers.com/images/walls/thumbs_3t/13988.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/85 to-primary" />

          {/* Hero Content Card */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10 max-w-3xl w-full mx-auto text-center bg-secondary/30 backdrop-blur-xl border border-accent/20 rounded-3xl p-8 sm:p-12 shadow-2xl"
          >
            {/* Pill Tag */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
              <span className="px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-accent bg-accent/10 border border-accent/25 rounded-full">
                The Ultimate Anime & Manga Vault
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-6xl font-black tracking-tight text-accent mb-6 leading-tight"
            >
              Discover the Universe of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent/80 to-accent/60">
                Animix
              </span>
            </motion.h1>

            {/* Refined Punchy Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-accent/80 font-normal leading-relaxed mb-8 max-w-xl mx-auto"
            >
              Explore curated character backstories, trending seasonal anime drops, and comprehensive manga arc guides in one unified hub.
            </motion.p>

            {/* Quick Stat Highlights */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-3 max-w-md mx-auto mb-8 p-3 rounded-2xl bg-primary/40 border border-accent/10 text-center"
            >
              <div>
                <p className="text-lg font-bold text-accent">10k+</p>
                <p className="text-[11px] text-accent/70 uppercase tracking-wider">Entries</p>
              </div>
              <div className="border-x border-accent/10">
                <p className="text-lg font-bold text-accent">Daily</p>
                <p className="text-[11px] text-accent/70 uppercase tracking-wider">Updates</p>
              </div>
              <div>
                <p className="text-lg font-bold text-accent">HD</p>
                <p className="text-[11px] text-accent/70 uppercase tracking-wider">Galleries</p>
              </div>
            </motion.div>

            {/* Call to Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/anime"
                className="w-full sm:w-auto px-8 py-3.5 bg-accent text-primary font-bold text-sm rounded-xl hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-accent/10 text-center"
              >
                Explore Database
              </Link>
              <Link
                href="/character"
                className="w-full sm:w-auto px-8 py-3.5 bg-secondary/40 text-accent font-semibold text-sm rounded-xl border border-accent/25 hover:bg-secondary/70 hover:border-accent/40 transition-all text-center"
              >
                Character Profiles
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
};

export default Home;