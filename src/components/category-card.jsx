'use client';

import React from 'react';

const CategoryCard = ({ category }) => {
    console.log('CategoryCard:', category);
    return (
        <div className="category-card bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow">
            <div className="card-content">
                <h2 className="category-title text-xl font-bold text-gray-800 mb-2">{category}</h2>
            </div>
        </div>
    );
};

export default CategoryCard;