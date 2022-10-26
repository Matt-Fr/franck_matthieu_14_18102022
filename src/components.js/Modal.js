import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ message }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  return (
    isModalOpen && (
      <div
        className="background"
        onClick={() => {
          setIsModalOpen(false);
        }}
      >
        <div
          className="background-Container"
          onClick={() => {
            setIsModalOpen(false);
          }}
        >
          <h3 className="background-Container-title">{message}</h3>
        </div>
      </div>
    )
  );
};

export default Modal;
