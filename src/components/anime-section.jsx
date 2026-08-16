"use client";

import React, { useEffect, useState } from "react";
import AnimeCard from "./anime-card";
import { motion } from "framer-motion";
import Loader from "./loader";
import axiosInstance from "@/plugins/interceptor";
import {
  HiOutlineMagnifyingGlass,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineFilm,
  HiOutlineXMark,
} from "react-icons/hi2";

const AnimeSection = ({ anime }) => {
  const [animeList, setAnimeList] = useState(anime || {});
  const [loading, setLoading] = useState(!anime);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [activeQuery, setActiveQuery] = useState("");

  const fetchAnimeData = async (link, targetPage) => {
    if (!link) return;
    try {
      setLoading(true);
      const response = await axiosInstance.get(link);
      setAnimeList(response.data);
      setCurrentPage(targetPage);
    } catch (error) {
      console.error("Error fetching anime data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (e) => {
    if (e) e.preventDefault();
    try {
      setLoading(true);
      const endpoint = searchText.trim()
        ? `/anime?filter[text]=${encodeURIComponent(searchText.trim())}`
        : "/anime";
      const response = await axiosInstance.get(endpoint);
      setAnimeList(response.data);
      setActiveQuery(searchText.trim());
      setCurrentPage(1);
    } catch (error) {
      console.error("Error searching anime data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleClearSearch = async () => {
    setSearchText("");
    setActiveQuery("");
    try {
      setLoading(true);
      const response = await axiosInstance.get("/anime");
      setAnimeList(response.data);
      setCurrentPage(1);
    } catch (error) {
      console.error("Error resetting anime list:", error);
    } finally {
      setLoading(false);
    }
  };

  const goToNextPage = () => {
    if (animeList?.links?.next) {
      fetchAnimeData(animeList.links.next, currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (animeList?.links?.prev && currentPage > 1) {
      fetchAnimeData(animeList.links.prev, currentPage - 1);
    }
  };

  useEffect(() => {
    if (anime) {
      setAnimeList(anime);
      setLoading(false);
    }
  }, [anime]);

  const animeItems = animeList?.data || [];
  const hasPrev = Boolean(animeList?.links?.prev && currentPage > 1);
  const hasNext = Boolean(animeList?.links?.next);

  return (
    <div className="w-full">
      {/* Search & Filter Header Bar */}
      <div className="mb-8 flex flex-col gap-4 border-b border-neutral-200 pb-6 sm:flex-row sm:items-center sm:justify-between dark:border-neutral-800">
        
        {/* Search Input Box */}
        <form onSubmit={handleSearch} className="relative w-full max-w-md">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-neutral-400">
            <HiOutlineMagnifyingGlass className="h-4 w-4" />
          </div>
          <input
            type="text"
            placeholder="Search anime titles..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full rounded-lg border border-neutral-300 bg-transparent py-2 pl-10 pr-20 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900 dark:border-neutral-800 dark:text-white dark:placeholder:text-neutral-500 dark:focus:border-neutral-100 dark:focus:ring-neutral-100"
          />
          {searchText && (
            <button
              type="button"
              onClick={handleClearSearch}
              className="absolute inset-y-0 right-14 flex items-center pr-2 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200"
            >
              <HiOutlineXMark className="h-4 w-4" />
            </button>
          )}
          <button
            type="submit"
            className="absolute inset-y-1 right-1 flex items-center rounded-md bg-neutral-900 px-3 text-xs font-medium text-white transition-colors hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
          >
            Search
          </button>
        </form>

        {/* Top Pagination Controls */}
        <div className="flex items-center justify-between gap-2 sm:justify-end">
          {activeQuery && (
            <span className="text-xs text-neutral-500 dark:text-neutral-400 mr-2">
              Results for &ldquo;{activeQuery}&rdquo;
            </span>
          )}
          <div className="flex items-center gap-2">
            <button
              onClick={goToPreviousPage}
              disabled={!hasPrev || loading}
              className="flex items-center gap-1 rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800"
            >
              <HiOutlineChevronLeft className="h-3.5 w-3.5" />
              <span>Previous</span>
            </button>

            <span className="min-w-[50px] text-center font-mono text-xs text-neutral-500 dark:text-neutral-400">
              Pg {currentPage}
            </span>

            <button
              onClick={goToNextPage}
              disabled={!hasNext || loading}
              className="flex items-center gap-1 rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800"
            >
              <span>Next</span>
              <HiOutlineChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      {loading ? (
        <div className="flex min-h-[350px] items-center justify-center py-16">
          <Loader />
        </div>
      ) : animeItems.length > 0 ? (
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="space-y-10"
        >
          {/* Card Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {animeItems.map((animeItem) => (
              <AnimeCard key={animeItem.id} anime={animeItem} />
            ))}
          </div>

          {/* Bottom Pagination Bar */}
          <div className="flex items-center justify-center gap-3 border-t border-neutral-200 pt-8 dark:border-neutral-800">
            <button
              onClick={goToPreviousPage}
              disabled={!hasPrev || loading}
              className="flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-white px-4 py-2 text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800"
            >
              <HiOutlineChevronLeft className="h-4 w-4" />
              <span>Previous Page</span>
            </button>

            <button
              onClick={goToNextPage}
              disabled={!hasNext || loading}
              className="flex items-center gap-1.5 rounded-lg bg-neutral-900 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
            >
              <span>Next Page</span>
              <HiOutlineChevronRight className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      ) : (
        /* Empty State */
        <div className="flex min-h-[260px] flex-col items-center justify-center rounded-2xl border border-dashed border-neutral-300 p-8 text-center dark:border-neutral-800">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-900">
            <HiOutlineFilm className="h-5 w-5 text-neutral-400" />
          </div>
          <h3 className="mt-3 text-sm font-semibold text-neutral-900 dark:text-white">
            No anime found
          </h3>
          <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
            {activeQuery
              ? `No results matched "${activeQuery}". Try adjusting your keywords.`
              : "There are no anime records available to display."}
          </p>
          {activeQuery && (
            <button
              onClick={handleClearSearch}
              className="mt-4 text-xs font-medium text-neutral-900 underline underline-offset-4 hover:opacity-80 dark:text-white"
            >
              Clear search filter
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default AnimeSection;