"use client";

import React, { useState } from "react";
import Image from "next/image";


const CharacterCard = ({ character }) => {
  const { attributes } = character;
  const [imgSrc, setImgSrc] = useState(
    attributes.image?.original || "/placeholder-character.png"
  );

  return (
    <article className="group flex flex-col h-full overflow-hidden rounded-2xl bg-secondary/35 border border-accent/15 backdrop-blur-sm transition-all duration-300 hover:border-accent/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20">
      {/* Thumbnail Banner */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-primary/50">
        <Image
          src={imgSrc}
          alt={attributes.canonicalName || "Anime Character"}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          onError={() => setImgSrc("/placeholder-character.png")}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/20 to-transparent" />

        {/* Gender Badge Overlay */}
        {attributes.gender && (
          <span className="absolute top-3 right-3 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent bg-primary/80 border border-accent/20 rounded-lg backdrop-blur-md">
            {attributes.gender}
          </span>
        )}
      </div>

      {/* Content Body */}
      <div className="flex flex-col flex-1 p-5 justify-between space-y-4">
        <div className="space-y-2">
          <h2 className="text-lg font-bold text-accent leading-snug group-hover:text-accent/90 transition-colors line-clamp-1">
            {attributes.canonicalName}
          </h2>

          <p className="text-xs sm:text-sm text-accent/75 leading-relaxed line-clamp-3">
            {attributes.description
              ? attributes.description.replace(/<\/?[^>]+(>|$)/g, "")
              : "No lore summary available for this character profile."}
          </p>
        </div>

        {/* Structured Metadata Badges */}
        <div className="pt-3 border-t border-accent/10 grid grid-cols-2 gap-2 text-xs">
          <div className="bg-primary/40 border border-accent/10 rounded-xl p-2">
            <span className="text-[10px] uppercase font-semibold text-accent/60 block">Age</span>
            <p className="font-semibold text-accent truncate">
              {attributes.age || "Unknown"}
            </p>
          </div>

          <div className="bg-primary/40 border border-accent/10 rounded-xl p-2">
            <span className="text-[10px] uppercase font-semibold text-accent/60 block">Role</span>
            <p className="font-semibold text-accent truncate">
              {attributes.role || "Main / Cast"}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CharacterCard;