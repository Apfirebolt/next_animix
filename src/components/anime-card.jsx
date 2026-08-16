"use client";

import React, { useState } from "react";
import {
  HiOutlineFilm,
  HiOutlineTv,
  HiOutlineStar,
  HiOutlineShieldExclamation,
} from "react-icons/hi2";

const AnimeCard = ({ anime }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const attributes = anime?.attributes || {};

  const {
    canonicalTitle = "Untitled Anime",
    synopsis = "No synopsis available for this title.",
    posterImage,
    subtype,
    status,
    episodeCount,
    averageRating,
    ageRating,
    ageRatingGuide,
  } = attributes;

  // Format status badge color
  const getStatusColor = (currentStatus) => {
    switch (currentStatus?.toLowerCase()) {
      case "current":
      case "airing":
      case "ongoing":
        return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20";
      case "finished":
      case "completed":
        return "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20";
      case "upcoming":
      case "unreleased":
        return "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20";
      default:
        return "bg-neutral-500/10 text-neutral-600 dark:text-neutral-400 border-neutral-500/20";
    }
  };

  const formattedRating = averageRating
    ? (parseFloat(averageRating) / 10).toFixed(1)
    : null;
  const imageUrl = posterImage?.medium || posterImage?.original;

  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900/60 dark:hover:border-neutral-700 dark:hover:shadow-neutral-950/40">
      
      {/* Poster Image Container */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={canonicalTitle}
            onLoad={() => setImageLoaded(true)}
            className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-neutral-400">
            <HiOutlineFilm className="h-10 w-10 stroke-1" />
          </div>
        )}

        {/* Rating Badge */}
        {formattedRating && (
          <div className="absolute top-2.5 right-2.5 flex items-center gap-1 rounded-md border border-neutral-800/20 bg-black/60 px-2 py-1 text-xs font-semibold text-white backdrop-blur-md">
            <HiOutlineStar className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
            <span>{formattedRating}</span>
          </div>
        )}

        {/* Age Rating Pill */}
        {ageRating && (
          <div
            title={ageRatingGuide || `Rated ${ageRating}`}
            className="absolute top-2.5 left-2.5 flex items-center gap-1 rounded-md border border-neutral-800/20 bg-black/60 px-2 py-1 text-[10px] font-semibold text-neutral-200 backdrop-blur-md"
          >
            <HiOutlineShieldExclamation className="h-3 w-3 text-neutral-300" />
            <span>{ageRating}</span>
          </div>
        )}

        {/* Format / Subtype Pill */}
        {subtype && (
          <div className="absolute bottom-2.5 left-2.5 rounded-md border border-white/20 bg-neutral-900/70 px-2 py-0.5 text-[10px] font-medium tracking-wide text-neutral-200 uppercase backdrop-blur-sm">
            {subtype}
          </div>
        )}
      </div>

      {/* Details Container */}
      <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
        <div>
          <h3 className="line-clamp-1 text-sm font-bold text-neutral-900 transition-colors group-hover:text-neutral-600 sm:text-base dark:text-white dark:group-hover:text-neutral-300">
            {canonicalTitle}
          </h3>

          <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
            {synopsis}
          </p>
        </div>

        {/* Meta Bar */}
        <div className="mt-4 flex items-center justify-between border-t border-neutral-100 pt-3 text-xs dark:border-neutral-800/80">
          <div className="flex items-center gap-1.5 text-neutral-600 dark:text-neutral-400">
            <HiOutlineTv className="h-3.5 w-3.5" />
            <span className="font-medium text-neutral-900 dark:text-neutral-200">
              {episodeCount ? `${episodeCount} eps` : "Ongoing"}
            </span>
          </div>

          <span
            className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${getStatusColor(
              status
            )}`}
          >
            {status || "Unknown"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;