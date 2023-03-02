import { Modal, Button, Form } from "react-bootstrap";

import { FormEvent } from "react";

interface ProfileImageMod {
  show: boolean;
  handleShow: () => void;
}

export const ActivityImgMod = (props: ProfileImageMod) => {
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(
        " https://striveschool-api.herokuapp.com/api/profile/" + "myProfile._id" + "/picture",
        {
          method: "POST",
          body: "image",
          headers: {
            Authorization: process.env.REACT_APP_BEARER || "nonandra",
          },
        }
      );
      if (response.ok) {
        console.log("immagine Caricata");
      } else {
        console.log("Errore nel caricamneto");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal show={props.show} onHide={props.handleShow} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Cambia Foto Post</Modal.Title>
      </Modal.Header>
      <Form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="file" placeholder="" />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit" className="rounded-pill">
            Modifica Foto
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};
