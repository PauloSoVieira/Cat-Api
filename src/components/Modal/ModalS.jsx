import styled from "styled-components";
import Modal from "./Modal";

export const ModalS = styled(Modal)`
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    backdrop-filter: blur(5px);
    transition: all 0.3s ease-in-out;
  }

  .modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    max-width: 500px;
    width: 90%;
    max-height: 90vh;
    overflow-y: auto;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    transform: scale(0.7);
    opacity: 0;
    transition: all 0.3s ease-in-out;
  }

  &.open {
    .modal-overlay {
      opacity: 1;
    }

    .modal-content {
      transform: scale(1);
      opacity: 1;
    }
  }

  .modal-close {
    margin-top: 15px;
    padding: 8px 16px;
    background-color: #ff4d4d;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .modal-close:hover {
    background-color: #ff3333;
  }

  .adopt-modal {
    text-align: center;
  }

  .adopt-title {
    font-size: 24px;
    margin-bottom: 15px;
  }

  .adopt-image {
    max-width: 100%;
    height: auto;
    border-radius: 5px;
    margin-bottom: 15px;
  }

  .adopt-message {
    font-size: 18px;
    margin-bottom: 15px;
  }
`;

export default ModalS;
