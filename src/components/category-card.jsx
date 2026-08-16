'use client';

import React from 'react';
import Link from 'next/link';

const CategoryCard = ({ category }) => {
  // Safe URL slug generation for routing
  const slug = encodeURIComponent(
    category.toLowerCase().trim().replace(/\s+/g, '-')
  );

  return (
    <Link
      href={`/category/${slug}`}
      className="group relative flex items-center justify-between p-5 rounded-2xl bg-secondary/35 border border-accent/15 backdrop-blur-sm transition-all duration-300 hover:border-accent/45 hover:bg-secondary/60 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20"
    >
      {/* Category Info */}
      <div className="flex items-center gap-3.5 overflow-hidden">
        <span className="w-2 h-2 rounded-full bg-accent/60 group-hover:bg-accent group-hover:scale-125 transition-all duration-300 flex-shrink-0" />
        <h2 className="text-base font-bold text-accent group-hover:text-accent/90 tracking-wide truncate transition-colors">
          {category}
        </h2>
      </div>

      {/* Trailing Icon Indicator */}
      <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-primary/40 border border-accent/10 text-accent/70 group-hover:text-accent group-hover:border-accent/30 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 ml-3">
        <span className="text-sm font-bold">→</span>
      </div>
    </Link>
  );
};

export default CategoryCard;