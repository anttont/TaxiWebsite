import React, { useEffect } from "react";
import "./Modal.css";

const Modal = ({ toggleModal, isModalActive }) => {
  return (
    <>
      <div className={`modal ${isModalActive ? 'active' : 'inactive'}`}>
        <div className="overlay" onClick={toggleModal}></div>
        <div className="modal-content">
          <button className="close-modal" onClick={toggleModal}>X</button>
          <h1>Soita 050-67020</h1>
          <h3>Lähetä sähköpostia: taksi@firma.fi</h3>
          <h3>Voit myös lähettää viesti tai soittaa WhatsApin kautta.</h3>
        </div>
      </div>
    </>
  );
};

export default Modal;
