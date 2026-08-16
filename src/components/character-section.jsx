"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CharacterCard from "./character-card";
import Loader from "./loader";
import axiosInstance from "@/plugins/interceptor";

const CharacterSection = ({ characters }) => {
  const [characterList, setCharacterList] = useState({});
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchCharacterData = async (link) => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(link);
      setCharacterList(response.data);
      setLoading(false);
      // Smooth scroll to top of section on page change
      window.scrollTo({ top: 300, behavior: "smooth" });
    } catch (error) {
      console.error("Error fetching character data:", error);
      setLoading(false);
    }
  };

  const goToNextPage = () => {
    if (characterList?.links?.next) {
      setCurrentPage((prev) => prev + 1);
      fetchCharacterData(characterList.links.next);
    }
  };

  const goToPreviousPage = () => {
    if (characterList?.links?.prev && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      fetchCharacterData(characterList.links.prev);
    }
  };

  useEffect(() => {
    if (characters) {
      setCharacterList(characters);
      setLoading(false);
    }
  }, [characters]);

  return (
    <div className="w-full space-y-8">
      {/* Top Header Bar / Pagination Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-secondary/30 border border-accent/15 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-accent">
            Page <span className="text-accent font-bold px-2 py-0.5 rounded-md bg-accent/10 border border-accent/20">{currentPage}</span>
          </span>
          {characterList?.meta?.total && (
            <span className="text-xs text-accent/60">
              ({characterList.meta.total} characters total)
            </span>
          )}
        </div>

        {/* Pagination Navigation */}
        <div className="flex items-center gap-3">
          <button
            className="px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl bg-secondary/60 text-accent border border-accent/20 hover:bg-secondary hover:border-accent/40 disabled:opacity-40 disabled:pointer-events-none transition-all duration-200 cursor-pointer"
            disabled={currentPage === 1 || !characterList?.links?.prev || loading}
            onClick={goToPreviousPage}
          >
            ← Previous
          </button>
          <button
            className="px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl bg-accent text-primary hover:opacity-90 disabled:opacity-40 disabled:pointer-events-none transition-all duration-200 shadow-md shadow-accent/10 cursor-pointer"
            disabled={!characterList?.links?.next || loading}
            onClick={goToNextPage}
          >
            Next →
          </button>
        </div>
      </div>

      {/* Content State: Loading */}
      {loading && (
        <div className="min-h-[350px] flex items-center justify-center py-16">
          <Loader />
        </div>
      )}

      {/* Content State: Grid */}
      {!loading && characterList?.data?.length > 0 && (
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {characterList.data.map((characterItem, index) => (
              <motion.div
                key={characterItem.id || index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <CharacterCard character={characterItem} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}

      {/* Content State: Empty */}
      {!loading && (!characterList?.data || characterList.data.length === 0) && (
        <div className="text-center py-20 bg-secondary/20 border border-accent/15 rounded-3xl p-8">
          <p className="text-lg font-bold text-accent mb-2">No characters found</p>
          <p className="text-xs sm:text-sm text-accent/70">
            Check back later or try refreshing the directory.
          </p>
        </div>
      )}

      {/* Bottom Pagination Bar (for easy navigation after scrolling through the grid) */}
      {!loading && characterList?.data?.length > 0 && (
        <div className="flex justify-center items-center gap-4 pt-6 border-t border-accent/10">
          <button
            className="px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-xl bg-secondary/60 text-accent border border-accent/20 hover:bg-secondary hover:border-accent/40 disabled:opacity-40 disabled:pointer-events-none transition-all cursor-pointer"
            disabled={currentPage === 1 || !characterList?.links?.prev || loading}
            onClick={goToPreviousPage}
          >
            ← Previous Page
          </button>
          <span className="text-xs font-mono text-accent/70">
            Page {currentPage}
          </span>
          <button
            className="px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-xl bg-accent text-primary hover:opacity-90 disabled:opacity-40 disabled:pointer-events-none transition-all shadow-md shadow-accent/10 cursor-pointer"
            disabled={!characterList?.links?.next || loading}
            onClick={goToNextPage}
          >
            Next Page →
          </button>
        </div>
      )}
    </div>
  );
};

export default CharacterSection;