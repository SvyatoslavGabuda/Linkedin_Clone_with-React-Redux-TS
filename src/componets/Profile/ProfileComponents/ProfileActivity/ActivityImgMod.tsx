import { Modal, Button, Form } from "react-bootstrap";
import { FormEvent, ChangeEvent, useState } from "react";
import { Iposts } from "../../../../app/reducers/postsSlice";

interface ProfileImageMod {
  show: boolean;
  handleShow: () => void;
  lastpost: Iposts[];
}

export const ActivityImgMod = (props: ProfileImageMod) => {
  const [image, setImage] = useState(new FormData());

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/posts/" + props.lastpost[0]._id, {
        method: "POST",
        body: image,
        headers: {
          Authorization: process.env.REACT_APP_BEARER || "nonandra",
        },
      });
      if (response.ok) {
        console.log("immagine Caricata");
      } else {
        console.log("Errore nel caricamneto");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoadFile = (e: ChangeEvent<HTMLInputElement>) => {
    setImage((pr) => {
      pr.delete("post");
      pr.append("post", e.target.files![0]);
      return pr;
    });
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
            <Form.Control type="file" placeholder="" onChange={handleLoadFile} />
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
