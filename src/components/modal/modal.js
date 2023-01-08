//import React from "react";
import Carousel from "../carousel/carousel";
import CloseButton from 'react-bootstrap/CloseButton';
import "./modal.css";


export default function Modal({open, onClose }) {

  if(open) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  return (
    <>

      {open && (
        <div className="modalx">
          <div onClick={onClose} className="overlayx"></div>
          <div className="modal-contentx">
            <h1>kebucci</h1>
            <Carousel></Carousel>
            <CloseButton className="close-modal" onClick={onClose}>

            </CloseButton>
          </div>
        </div>
      )}
      
    </>
  );
}