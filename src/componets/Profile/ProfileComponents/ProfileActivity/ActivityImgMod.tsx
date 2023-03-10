import { Modal, Button, Form } from "react-bootstrap";
import { FormEvent, ChangeEvent, useState } from "react";
import { Iposts, postsFetc } from "../../../../app/reducers/postsSlice";
import { Add } from "../../../../app/reducers/slicerForUpDate";
import { useAppDispatch } from "../../../../app/hooks";
import { BsImage } from "react-icons/bs";

interface ProfileImageMod {
  show: boolean;
  handleShow: () => void;
  lastpost: Iposts[];
}

export const ActivityImgMod = (props: ProfileImageMod) => {
  const [image, setImage] = useState(new FormData());
  const dispatch = useAppDispatch();
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
    } finally {
      dispatch(Add());
      dispatch(postsFetc());
      props.handleShow();
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
        <Modal.Body className="d-flex flex-column align-items-center pb-0">
          {props.lastpost[0]?.image && (
            <div>
              <h6 className="mb-3">Immagine attuale: </h6>
              <img src={props.lastpost[0].image} style={{ width: "100%" }} alt="Active Post" className="mb-3" />
            </div>
          )}
          <Form.Group className="mb-3 text-center" controlId="formBasicEmail">
            <label className="inputLabelExp d-flex align-items-center justify-content-center py-2 px-5">
              <span>Carica</span>
              <BsImage className="mx-2" />
              <Form.Control type="file" placeholder="" onChange={handleLoadFile} style={{ display: "none" }} />
            </label>
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
