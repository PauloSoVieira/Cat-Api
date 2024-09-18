import styled from "styled-components";
import Home from "./Home";

export const HomeS = styled(Home)`
  background-color: #f6f1ee;
  height: 75vh;
  flex: 1;
  position: relative;

  .Home-image {
    display: flex;
    align-items: center;
    background-color: #f6f1ee;
    justify-content: center;
    width: 100%;
    height: 200px;
  }

  .CatCarroselContainer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
  }

  .Central-text-Home {
    font-size: 2em;
    text-align: center;
  }

  h1 span {
    margin: 20px;
  }
`;
