import AlbumCard from "./AlbumCard";
import styled from "styled-components";

export const AlbumCardS = styled(AlbumCard)`
  background-color: #fff0f5;
  border: 2px solid #ffb6c1;
  border-radius: 15px;
  width: 350px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  margin: 0px 10px;

  &:hover {
    transform: translateY(-5px);
  }

  .cat-image {
    height: 200px;
    overflow: hidden;
  }
  .cat-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .cat-info {
    padding: 15px;
    text-align: center;
  }
  .cat-info p {
    margin: 10px 0;
    color: #696969;
    font-size: 1, 0.2em;
  }

  .adopt-button {
    background-color: #ff69b4;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s ease;
    margin-bottom: 15px;
    font-size: 1.2em;
  }
  .adopt-button:hover {
    background-color: #ff1493;
  }

  .cat-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
