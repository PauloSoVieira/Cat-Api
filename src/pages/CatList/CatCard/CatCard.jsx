import React from "react";
import { Heart, Info } from "lucide-react";
import { useUser } from "../../../pages/User/User";

const Bookcard = ({ className, id, imageUrl, height }) => {
  const { user, likeCat } = useUser();
  const isLiked = user && user.likedCats.includes(id);

  const handleLike = () => {
    if (user) {
      likeCat(id);
      console.log(`Cat ${id} ${isLiked ? "unliked" : "liked"}`);
    } else {
      alert("Please login to like cats");
    }
  };

  return (
    <div className={className}>
      <div className="bookcard-image-div">
        <img src={imageUrl} alt="" />
      </div>
      <div className="bookcard-content">
        <div className="bookcard-description"></div>
        <div className="bookcard-text">
          <span>
            <Info size={16} /> ID: {id}
          </span>
          <span>
            <Info size={16} /> Height: {height}
          </span>
          <div className="book-heart">
            <Heart
              onClick={handleLike}
              className={`heart-icon ${isLiked ? "liked" : ""}`}
              size={24}
              color={isLiked ? "red" : "currentColor"}
            />
            <span>{isLiked ? "Liked" : "Like"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookcard;
