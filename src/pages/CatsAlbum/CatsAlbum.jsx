import React, { useEffect, useState } from "react";
import { AlbumCardS } from "../../components/AlbumCard/AlbumCardS";
import ModalS from "../../components/Modal/ModalS";

const CatsAlbum = ({ className }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const catsPerPage = 10;
  const [dataCat, setDataCat] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCat, setSelectedCat] = useState(null);
  const API_KEY =
    "live_LsolR8agvZSvIiGg8DZB63mrVHEZMLAvnritVP7OTHqOJLWKjLaYTRWMCuiq8t0X";

  const fetchData = async (page) => {
    try {
      const result = await fetch(
        `https://api.thecatapi.com/v1/images/search?limit=${catsPerPage}&page=${page}`,
        {
          headers: { "x-api-key": API_KEY },
        }
      );
      const data = await result.json();
      setDataCat(data);
      console.log(data);
      const totalCount = result.headers.get("pagination-count");
      console.log(totalCount);
      setTotalPages(Math.ceil(totalCount / catsPerPage));
    } catch (error) {
      console.error("Error fetching cat data:", error);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleAdopt = (cat) => {
    setSelectedCat(cat);
    setIsModalOpen(true);
  };

  return (
    <div className="container-content">
      <div className={className}>
        <AlbumCardS dataCat={dataCat} onAdopt={handleAdopt} />
        <div className="pagination">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
        <ModalS isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          {selectedCat && (
            <div className="adopt-modal">
              <h2 className="adopt-title">
                Adopt {selectedCat.breeds?.[0]?.name || "This Cat"}
              </h2>
              <img
                src={selectedCat.url}
                alt={selectedCat.breeds?.[0]?.name || "Cat"}
                className="adopt-image"
              />
              <p className="adopt-message">
                Are you sure you want to adopt this adorable cat?
              </p>
            </div>
          )}
        </ModalS>
      </div>
    </div>
  );
};

export default CatsAlbum;
