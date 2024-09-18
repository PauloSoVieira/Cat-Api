import React from "react";
import { CatListS } from "../CatList/CatListS";
import catBackImage from "../../assets/cat-back3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import CatWalk from "../../components/CatWalk/CatWalk";

const Home = ({ className }) => {
  return (
    <div className={className}>
      <div className="Home-image">
        <img src={catBackImage} alt="" />
      </div>
      <div className="Central-text-Home">
        <h1>
          <FontAwesomeIcon icon={faPaw} />
          <span>Paws for Love: Adopt a Cat</span>
          <FontAwesomeIcon icon={faPaw} />
        </h1>
        <div className="catWalkingContainer">
          <CatWalk></CatWalk>
        </div>
      </div>
      <div className="CatCarroselContainer">
        <CatListS />
      </div>
    </div>
  );
};

export default Home;
