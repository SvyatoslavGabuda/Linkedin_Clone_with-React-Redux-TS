import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { MdVisibility } from "react-icons/md";

export const ExpImageMod = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Carica una foto della tua esperienza</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column align-items-center justify-content-center">
          <h5>L'immagine attuale è:</h5>
          <img src="" alt="experience img" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            <MdVisibility />
            <p>tutti gli utenti di LinkedIn</p>
          </Button>
          <Button variant="primary">Imposta immagine</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
