import React, { useState, FormEvent, ChangeEvent } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BsImage } from "react-icons/bs";
import { MdVisibility } from "react-icons/md";
import { useAppSelector } from "../../../../../app/hooks";

interface ExperienceImageProp {
  show: boolean;
  handleShow: () => void;
}

export const ExpImagePUTMod = (props: ExperienceImageProp) => {
  const myProfile = useAppSelector((state) => state.profile.myProfile);
  const thisExperience = useAppSelector((state) => state.experiencePutModale.currentExperience);
  const [image, setImage] = useState(new FormData());

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${myProfile._id}/experiences/${thisExperience._id}/picture`,
        {
          method: "POST",
          body: image,
          headers: {
            Authorization: process.env.REACT_APP_BEARER || "nonandra",
          },
        }
      );
      if (response.ok) {
        console.log("experience image uploaded");
      } else {
        console.log("experience image upload failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoadFile = (e: ChangeEvent<HTMLInputElement>) => {
    setImage((ex) => {
      ex.delete("experience");
      ex.append("experience", e.target.files![0]);
      return ex;
    });
  };

  return (
    <>
      <Modal show={props.show} onHide={props.handleShow} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Carica una foto della tua esperienza</Modal.Title>
        </Modal.Header>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Modal.Body className="px-0 text-center">
            <h5>L'immagine attuale è:</h5>
            <div className="d-flex flex-column align-items-center justify-content-center modalExpImgContent">
              {thisExperience?.image?.length > 0 ? (
                <img src={thisExperience.image} alt="experience img" className="currentExpImage" />
              ) : (
                <img src="../Assets/no-image.jpg" alt="experience img" className="currentExpImage" />
              )}
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center imageInputExp">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <label className="inputLabelExp m-0 py-2 px-5 d-flex align-items-center">
                  <span className="px-2">Carica</span>
                  <BsImage className="mx-2" />
                  <input type="file" style={{ width: 60 + "%" }} onChange={handleLoadFile} />
                </label>
              </Form.Group>
            </div>
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-between">
            <Button variant="outline-secondary" type="button" className="d-flex align-items-center rounded-pill">
              <MdVisibility className="me-1" />
              <p className="allUsersButton">tutti gli utenti di LinkedIn</p>
            </Button>
            <Button className="rounded-pill expPutSubmitButton" type="submit" onClick={() => props.handleShow()}>
              Imposta immagine
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};
