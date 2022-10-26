import React from "react";
import "./Modal.css";

const Modal = ({ message, openModal, setOpenModal }) => {
  return (
    openModal && (
      <div
        className="background"
        onClick={() => {
          setOpenModal(false);
        }}
      >
        <div
          className="background-Container"
          onClick={() => {
            setOpenModal(false);
          }}
        >
          <h3 className="background-Container-title">{message}</h3>
        </div>
      </div>
    )
  );
};

export default Modal;
