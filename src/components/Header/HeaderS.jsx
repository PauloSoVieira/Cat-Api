import styled from "styled-components";
import Header from "./Header";

export const HeaderS = styled(Header)`
  width: 100%;
  height: 10vh;
  background-color: #d4e6d4;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2em;

  ul {
    width: 50%;
    align-items: center;
    justify-content: space-around;
    display: flex;
    padding: 20px;
    list-style: none;
  }

  li {
    padding: 20px;
  }

  li a {
    color: #5d4037;
    text-decoration: none;
    cursor: pointer;
  }

  li:hover {
    scale: 110%;
    transition: 0.4s ease-in-out;
  }
`;
