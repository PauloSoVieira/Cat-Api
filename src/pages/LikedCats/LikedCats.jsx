import React, { useState, useEffect } from "react";
import { useUser } from "../User/User";
import Bookcard from "../CatList/CatCard/CatCard";

const LikedCats = ({ className }) => {
  const { user } = useUser();
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLikedCats = async () => {
      if (user && user.likedCats.length > 0) {
        try {
          const likedCats = user.likedCats.map(async (id) => {
            const response = await fetch(
              `https://api.thecatapi.com/v1/images/${id}`
            );
            if (!response.ok) {
              console.log(`Cat with ID ${id} not found`);
              return null;
            }
            return response.json();
          });

          const likedCatsData = await Promise.all(likedCats);
          const validLikedCats = likedCatsData.filter((cat) => cat !== null);
          setCats(validLikedCats);
        } catch (error) {
          console.error("Error fetching liked cats:", error);
          setCats([]);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchLikedCats();
  }, [user]);

  if (!user) {
    return <p>Please log in to see your liked cats.</p>;
  }

  if (loading) {
    return <p>Loading your liked cats...</p>;
  }
  return (
    <div className={`liked-cats-container ${className}`}>
      <h2>{user.username}'s Liked Cats</h2>
      {cats.length === 0 ? (
        <div>
          <p>No liked cats found.</p>
          <p>Total liked cats in user profile: {user.likedCats.length}</p>
          <p>User's liked cat IDs: {user.likedCats.join(", ")}</p>
        </div>
      ) : (
        <div className="liked-cats-grid">
          {cats.map((cat) => (
            <Bookcard
              key={cat.id}
              id={cat.id}
              imageUrl={cat.url}
              height={cat.height}
              className="bookcard"
            >
              <div className="cat-info">
                <p className="cat-name">Fluffy Cat</p>
                <button className="adopt-button">Adopt Me!</button>
              </div>
            </Bookcard>
          ))}
        </div>
      )}
    </div>
  );
};

export default LikedCats;
