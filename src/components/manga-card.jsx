"use client";

import React from "react";

const MangaCard = ({ manga }) => {
  return (
    <div className="category-card bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow">
      <img
        src={manga.attributes.posterImage?.original}
        alt={manga.attributes.canonicalTitle}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h2 className="text-lg font-bold mb-2">
        {manga.attributes.canonicalTitle}
      </h2>
      <p className="text-sm text-gray-600 mb-2">
        {manga.attributes.synopsis?.substring(0, 100)}...
      </p>
      <div className="text-sm text-gray-800">
        <p>
          <strong>Type:</strong> {manga.attributes.subtype || "N/A"}
        </p>
        <p>
          <strong>Status:</strong> {manga.attributes.status || "N/A"}
        </p>
        <p>
          <strong>Chapters:</strong> {manga.attributes.chapterCount || "N/A"}
        </p>
      </div>
    </div>
  );
};

export default MangaCard;
