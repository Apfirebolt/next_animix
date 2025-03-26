"use client";

import React, { useEffect, useState } from "react";
import MangaCard from "./manga-card";
import Loader from "./loader";
import axiosInstance from "@/plugins/interceptor";

const MangaSection = ({ mangas }) => {
  const [mangaList, setMangaList] = useState({});
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [isClient, setIsClient] = useState(false);

  const fetchMangaData = async (link) => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(link);
      setMangaList(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching manga data:", error);
      setLoading(false);
    }
  };

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
    fetchMangaData(mangaList.links.next);
  };

  const goToPreviousPage = () => {
    setCurrentPage(currentPage - 1);
    fetchMangaData(mangaList.links.prev);
  };

  useEffect(() => {
    setIsClient(true);
    if (mangas) {
      setMangaList(mangas);
      setLoading(false);
    }
  }, []);

  return (
    <div>
      {loading && <Loader />}
      {!loading && mangaList?.data?.length > 0 ? (
        <div>
          <div className="flex justify-center mt-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              disabled={currentPage === 1}
              onClick={goToPreviousPage}
            >
              Prev
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
              onClick={goToNextPage}
            >
              Next
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {mangaList.data.map((mangaItem) => (
              <MangaCard key={mangaItem.id} manga={mangaItem} />
            ))}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MangaSection;
