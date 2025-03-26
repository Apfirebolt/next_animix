"use client";

import React from "react";

const CharacterCard = ({ character }) => {
  return (
    <div className="category-card bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow">
      <img
        src={character.attributes.image?.original}
        alt={character.attributes.canonicalName}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h2 className="text-lg font-bold mb-2">
        {character.attributes.canonicalName}
      </h2>
      <p className="text-sm text-gray-600 mb-2">
        {character.attributes.description?.substring(0, 100)}...
      </p>
      <div className="text-sm text-gray-800">
        <p>
          <strong>Gender:</strong> {character.attributes.gender}
        </p>
        <p>
          <strong>Age:</strong> {character.attributes.age || "N/A"}
        </p>
        <p>
          <strong>Role:</strong> {character.attributes.role || "N/A"}
        </p>
      </div>
    </div>
  );
};

export default CharacterCard;
