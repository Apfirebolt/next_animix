"use client";

import React, { useEffect, useState } from "react";
import MangaCard from "./manga-card";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "./loader";
import axiosInstance from "@/plugins/interceptor";
import {
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineBookOpen,
} from "react-icons/hi2";

const MangaSection = ({ mangas }) => {
  const [mangaList, setMangaList] = useState(mangas || {});
  const [loading, setLoading] = useState(!mangas);
  const [currentPage, setCurrentPage] = useState(1);
  const [isClient, setIsClient] = useState(false);

  const fetchMangaData = async (link, targetPage) => {
    if (!link) return;
    try {
      setLoading(true);
      const response = await axiosInstance.get(link);
      setMangaList(response.data);
      setCurrentPage(targetPage);
    } catch (error) {
      console.error("Error fetching manga data:", error);
    } finally {
      setLoading(false);
    }
  };

  const goToNextPage = () => {
    if (mangaList?.links?.next) {
      fetchMangaData(mangaList.links.next, currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (mangaList?.links?.prev && currentPage > 1) {
      fetchMangaData(mangaList.links.prev, currentPage - 1);
    }
  };

  useEffect(() => {
    setIsClient(true);
    if (mangas) {
      setMangaList(mangas);
      setLoading(false);
    }
  }, [mangas]);

  const mangaItems = mangaList?.data || [];
  const hasPrev = Boolean(mangaList?.links?.prev && currentPage > 1);
  const hasNext = Boolean(mangaList?.links?.next);

  return (
    <div className="w-full">
      {/* Top Pagination & Meta Header */}
      <div className="mb-8 flex flex-col items-start justify-between gap-4 border-b border-neutral-200 pb-5 sm:flex-row sm:items-center dark:border-neutral-800">
        <div>
          <h2 className="text-lg font-bold tracking-tight text-neutral-900 dark:text-white">
            Available Titles
          </h2>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            Showing serialized entries &middot; Page {currentPage}
          </p>
        </div>

        {/* Action Controls */}
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

      {/* Main Content Area */}
      {loading ? (
        <div className="flex min-h-[300px] items-center justify-center py-16">
          <Loader />
        </div>
      ) : mangaItems.length > 0 ? (
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="space-y-10"
        >
          {/* Card Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {mangaItems.map((mangaItem) => (
              <MangaCard key={mangaItem.id} manga={mangaItem} />
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
            <HiOutlineBookOpen className="h-5 w-5 text-neutral-400" />
          </div>
          <h3 className="mt-3 text-sm font-semibold text-neutral-900 dark:text-white">
            No manga found
          </h3>
          <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
            There are no active records returned for this category.
          </p>
        </div>
      )}
    </div>
  );
};

export default MangaSection;