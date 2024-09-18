import React, { useState } from "react";
import { Heart, Info } from "lucide-react";

const Bookcard = ({ className, id, imageUrl, height }) => {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (!isLiked) {
      setLikes(likes + 1);
      setIsLiked(false);
    } else {
      setLikes(likes - 1);
      setIsLiked(false);
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
            <span>{likes} likes</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookcard;
