import styled from "styled-components";
import Login from "./Login";

export const LoginS = styled(Login)`
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    border-radius: 50%;
    background-color: #f16079;
    color: white;
    font-size: 20px;
    padding: 50px 80px;
    cursor: pointer;
    border: none;

    &:hover {
      background-color: #ed15b4;
    }
  }

  .loginForm {
    width: 300px;
    padding: 20px;
    background-color: #f8f4f1;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .loginForm input[type="text"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #d3c0b2;
    border-radius: 5px;
    font-size: 16px;
  }

  .loginForm button[type="submit"] {
    width: 100%;
    padding: 10px;
    background-color: #c2e6d8;
    color: #4a4a4a;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .loginForm button[type="submit"]:hover {
    background-color: #a8d8c4;
  }
`;
