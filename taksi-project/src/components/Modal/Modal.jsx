import React from "react";
import "./Modal.css";

const Modal = ({ toggleModal }) => {  // Accept toggleModal as a prop
  return (
    <>
      <div className="modal">
        <div className="overlay" onClick={toggleModal}></div>
        <div className="modal-content">
          <h2>HEllo</h2>
          <p>ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ</p>
          <button className="close-modal" onClick={toggleModal}>
            X
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
