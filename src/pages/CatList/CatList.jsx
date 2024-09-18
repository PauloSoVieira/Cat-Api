import React, { useEffect, useState } from "react";

import CatCarousel from "./CatCarousel";
const CatList = ({ className }) => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const API_KEY =
        "live_LsolR8agvZSvIiGg8DZB63mrVHEZMLAvnritVP7OTHqOJLWKjLaYTRWMCuiq8t0X";
      try {
        const response = await fetch(
          "https://api.thecatapi.com/v1/images/search?limit=10",
          {
            method: "GET",
            headers: {
              "x-api-key": API_KEY,
            },
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        setCats(data);
      } catch (error) {
        console.error("Error fetching cat data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={className}>
      <CatCarousel cats={cats} />
    </div>
  );
};

export default CatList;
