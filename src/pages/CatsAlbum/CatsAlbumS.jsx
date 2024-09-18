import styled from "styled-components";
import CatsAlbum from "./CatsAlbum";

export const CatsAlbumS = styled(CatsAlbum)`
  width: 80%;
  background-color: none;
  height: 75vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;

  .pagination {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .pagination button {
    font-size: 1.5em;
    margin: 10px 0px;
    border-radius: 50%;
    padding: 10px 20px;
    background-color: #ff69b4;
    color: white;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: #ff1493;
    }
  }

  .pagination span {
    font-size: 1.7em;
    color: #696969;
    margin: 0px 20px;
  }
`;
