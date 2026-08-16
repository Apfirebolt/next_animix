import React, { Fragment } from "react";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata = {
  title: "About Us | Next Animix",
  description: "Discover the mission, lore, and platform features behind Next Animix.",
};

const FEATURES = [
  {
    title: "Deep Lore & Profiles",
    desc: "Comprehensive character arcs, voice cast details, power breakdowns, and trivia.",
    tag: "Characters",
  },
  {
    title: "Manga Database",
    desc: "Curated reading lists, chapter releases, volume guides, and author spotlights.",
    tag: "Manga",
  },
  {
    title: "Seasonal Tracking",
    desc: "Up-to-date broadcast schedules, studio insights, and community-driven ratings.",
    tag: "Anime",
  },
];

const AboutPage = () => {
  return (
    <Fragment>
      <Header />
      <main className="min-h-screen bg-primary text-accent">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16 px-6 border-b border-accent/15">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-15"
            style={{
              backgroundImage:
                "url('https://4kwallpapers.com/images/walls/thumbs_3t/13988.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/90 to-primary" />

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
            <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-accent/10 border border-accent/20 text-accent">
              About Animix
            </span>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-accent leading-tight">
              Crafted for Anime Enthusiasts, by Fans.
            </h1>
            <p className="text-base sm:text-lg text-accent/80 max-w-2xl mx-auto leading-relaxed">
              We built Animix to serve as a fast, beautiful, and ad-free portal for discovering rich anime lore, manga releases, and character histories.
            </p>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-accent">
                Our Mission
              </h2>
              <p className="text-sm sm:text-base text-accent/80 leading-relaxed">
                The anime and manga universe is vast and continuously expanding. Finding reliable character lore, episode timelines, and high-fidelity visuals should be seamless and immersive.
              </p>
              <p className="text-sm sm:text-base text-accent/80 leading-relaxed">
                Animix organizes complex story arcs, seasonal broadcasts, and curated art in an accessible, distraction-free environment.
              </p>
            </div>

            <div className="bg-secondary/40 border border-accent/20 rounded-3xl p-8 backdrop-blur-sm shadow-xl space-y-6">
              <h3 className="text-lg font-bold text-accent border-b border-accent/15 pb-3">
                Platform Highlights
              </h3>
              <ul className="space-y-4 text-sm text-accent/85">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                  <span><strong>Lightning Fast:</strong> Optimized Next.js server components with zero clutter.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                  <span><strong>Rich Artworks:</strong> High-definition lightbox galleries and visuals.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                  <span><strong>Community Driven:</strong> Constantly growing database of classic and seasonal releases.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Core Offerings Grid */}
        <section className="max-w-6xl mx-auto px-6 pb-20">
          <h2 className="text-xl sm:text-2xl font-bold text-accent mb-8 text-center sm:text-left">
            What You Can Explore
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURES.map((item) => (
              <div
                key={item.title}
                className="bg-secondary/30 border border-accent/15 p-6 rounded-2xl backdrop-blur-sm hover:border-accent/40 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent/70 bg-accent/10 px-2.5 py-1 rounded-md inline-block">
                    {item.tag}
                  </span>
                  <h3 className="text-lg font-bold text-accent">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-accent/75 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Card */}
        <section className="max-w-4xl mx-auto px-6 pb-20 text-center">
          <div className="bg-secondary/40 border border-accent/25 rounded-3xl p-8 sm:p-10 shadow-2xl space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-accent">
              Ready to start your journey?
            </h2>
            <p className="text-sm text-accent/80 max-w-md mx-auto">
              Dive into our extensive character database and seasonal recommendations today.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/anime"
                className="px-6 py-3 bg-accent text-primary font-bold text-sm rounded-xl hover:opacity-90 transition-all hover:scale-105"
              >
                Explore Database
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
};

export default AboutPage;