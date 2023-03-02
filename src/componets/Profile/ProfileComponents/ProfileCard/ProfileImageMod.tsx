import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState, FormEvent, ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { Row } from "react-bootstrap";
import { Add } from "../../../../app/reducers/slicerForUpDate";
interface ProfileImageMod {
  show: boolean;
  handleShow: () => void;
}
export const ProfileImageMod = (props: ProfileImageMod) => {
  //   const [show, setShow] = useState(false);

  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);

  const myProfile = useAppSelector((state) => state.profile.myProfile);
  const dispatch = useAppDispatch();
  const [image, setImage] = useState(new FormData());
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(
        " https://striveschool-api.herokuapp.com/api/profile/" + myProfile._id + "/picture",
        {
          method: "POST",
          body: image,
          headers: {
            Authorization: process.env.REACT_APP_BEARER || "nonandra",
          },
        }
      );
      if (response.ok) {
        console.log("immagine Caricata");
      } else {
        console.log("non caricata l'immagine");
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(Add());
    }
  };
  const handleLoadFile = (e: ChangeEvent<HTMLInputElement>) => {
    setImage((pr) => {
      pr.delete("profile");
      pr.append("profile", e.target.files![0]);
      return pr;
    });
  };
  return (
    <>
      <Modal show={props.show} onHide={props.handleShow} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Cambia Foto</Modal.Title>
        </Modal.Header>
        <Form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <Modal.Body>
            {myProfile && (
              <Row className="flex-column  align-items-center my-3">
                <h5 className="text-center mb-3">
                  {myProfile.name}, aiuta gli altri a riconoscerti!
                </h5>
                <img
                  src={myProfile.image}
                  style={{
                    width: 150,
                    height: 150,
                    borderRadius: "50%",
                    padding: 0,
                    objectFit: "cover",
                  }}
                  alt="profileimg"
                />
                <p className="text-center mt-3" style={{ color: "gray" }}>
                  Chiediamo agli utenti di LinkedIn di utilizzare le loro vere identità, quindi
                  scatta o carica una tua foto. Poi ritagliala, applica dei filtri e perfezionala
                  come vuoi.{" "}
                </p>
              </Row>
            )}

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="file" placeholder="Enter email" onChange={handleLoadFile} />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="outline-primary"
              type="button"
              className="rounded-pill"
              onClick={() => {
                alert("foto scattata ahaha");
              }}
            >
              Usa fotocamera
            </Button>
            <Button variant="primary" type="submit" className="rounded-pill">
              Carica Foto
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};
