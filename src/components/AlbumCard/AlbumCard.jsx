import React from "react";

const AlbumCard = ({ className, dataCat, onAdopt }) => {
  const getCatName = (cat) => {
    if (cat.breeds && cat.breeds.length > 0) {
      return cat.breeds[0].name;
    }
    if (cat.categories && cat.categories.length > 0 && cat.categories[0].name) {
      return cat.categories[0].name;
    }
    return "Fuffy cat";
  };

  return (
    <>
      {dataCat.map((cat) => (
        <div key={cat.id} className={className}>
          <div className="cat-card">
            <div className="cat-image">
              <img src={cat.url} alt={getCatName(cat)} />
            </div>
            <div className="cat-info">
              <h3>{getCatName(cat)}</h3>
            </div>
            <div className="cat-buttons">
              <button className="adopt-button" onClick={() => onAdopt(cat)}>
                Adopt Me!
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AlbumCard;
