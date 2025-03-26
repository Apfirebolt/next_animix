"use client";

import React, { useEffect, useState } from "react";
import AnimeCard from "./anime-card";
import Loader from "./loader";
import axiosInstance from "@/plugins/interceptor";

const AnimeSection = ({ anime }) => {
  const [animeList, setAnimeList] = useState({});
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [isClient, setIsClient] = useState(false);

  const fetchAnimeData = async (link) => {
    try {
      setLoading(true);  
      const response = await axiosInstance.get(link);
      setAnimeList(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching anime data:", error);
      setLoading(false);
    }
  };

  const goToNextPage = (page) => {
    setCurrentPage(currentPage + 1);
    fetchAnimeData(animeList.links.next);
  };

  const goToPreviousPage = (page) => {
    setCurrentPage(currentPage - 1);
    fetchAnimeData(animeList.links.prev);
  }

  useEffect(() => {
    setIsClient(true);
    if (anime) { 
      setAnimeList(anime);
      setLoading(false);
    }
  }, []);

  return (
    <div>
      {loading && <Loader />}
      {!loading && animeList?.data?.length > 0 ? (
        <div>
          <div className="flex justify-center mt-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              disabled={currentPage === 1}
              onClick={() => goToPreviousPage()}
            >
              Prev
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
              onClick={() => goToNextPage()}
            >
              Next
            </button>
          </div>    
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {animeList.data.map((animeItem) => (
              <AnimeCard key={animeItem.id} anime={animeItem} />
            ))}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default AnimeSection;
