import styled from "styled-components";
import LikedCats from "./LikedCats";

export const LikedCatsS = styled(LikedCats)`
  .liked-cats-container {
    width: 80%;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff6f1;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  h2 {
    color: #4a4a4a;
    text-align: center;
    margin-bottom: 20px;
    font-size: 24px;
  }

  .liked-cats-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }

  .bookcard {
    flex: 0 1 200px;
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }

    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
  }

  .cat-info {
    padding: 10px;
    text-align: center;
  }

  .cat-name {
    color: #4a4a4a;
    font-weight: bold;
    margin-bottom: 5px;
  }

  .adopt-button {
    background-color: #ff69b4;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #ff1493;
    }
  }


`;
