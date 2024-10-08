import styled from "styled-components";
import Bookcard from "./CatCard";

export const BookcardS = styled(Bookcard)`
  margin: 20px;
  width: 300px;
  height: 400px;
  border-radius: 20px;
  background-color: #ffffff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }

  .bookcard-image-div {
    position: relative;
    height: 60%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    &:hover img {
      transform: scale(1.05);
    }
  }
  .heart-icon {
    color: #ff4757;
    cursor: pointer;
    text-align: end;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.2);
      fill: #ff4757;
    }
  }

  .bookcard-content {
    padding: 20px;
  }

  .bookcard-description {
    font-size: 1.5em;
    color: #2d3436;
    margin-bottom: 10px;
  }

  .book-heart {
    width: 100%;
    display: flex;
    align-items: end;
    justify-content: end;
  }

  .bookcard-text {
    display: flex;
    flex-direction: column;
    font-size: 1em;
    color: #636e72;

    span {
      display: flex;
      align-items: center;
      margin-top: 5px;

      svg {
        margin-right: 5px;
      }
    }
  }

  @media (max-width: 1024px) {
    width: 250px;
    height: 350px;

    .bookcard-description {
      font-size: 1.3em;
    }

    .bookcard-text {
      font-size: 0.9em;
    }
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 300px;

    .bookcard-description {
      font-size: 1.1em;
    }

    .bookcard-text {
      font-size: 0.8em;
    }
  }
`;
