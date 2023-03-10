import { Form, Modal, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { Iprofile } from "../../Profile";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { hideM, showM, toogleM } from "../../../../app/reducers/upgrateModSlice";
import "./profileModale.scss";
import { Add } from "../../../../app/reducers/slicerForUpDate";

export const ProfileModale = () => {
  const url = "https://striveschool-api.herokuapp.com/api/profile/";
  //funzioni MODALE
  //const [show, setShow] = useState(false);
  //const handleClose = () => setShow(false);
  //const handleShow = () => setShow(true);
  const show = useAppSelector((state) => state.upGradeModale.show);
  const dispatch = useAppDispatch();
  const [modalValue, setModalValue] = useState<Iprofile>({
    _id: "",
    name: "",
    surname: "",
    email: "",
    username: "",
    title: "",
    bio: "",
    area: "",
    image: "",
    createdAt: new Date(),
    updatedAt: new Date(),
    __v: 0,
  });

  const myProfile = useAppSelector((state) => state.profile.myProfile);

  const putInfo = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(modalValue),
        headers: {
          "Content-Type": "application/json",
          Authorization: process.env.REACT_APP_BEARER || "nonandra",
        },
      });
      // console.log("respose modale", response);
      // console.log("valore modale", modalValue);
      if (response.ok) {
        console.log("tutto apposto");
      } else {
        console.log("qualcosa è andato storoto");
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(hideM());
      dispatch(Add());
    }
  };

  useEffect(() => {
    setModalValue(myProfile);
  }, [myProfile]);

  return (
    <>
      <Modal show={show} onHide={() => dispatch(hideM())} size="lg" id="profileEditModal">
        <Form
          onSubmit={(e) => {
            putInfo(e);
          }}
        >
          {" "}
          <Modal.Header closeButton>
            <Modal.Title>Modifica Introduzione</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p className="text-muted mb-4">*Indica che è obbligatorio</p>

            <Form.Group className="mb-3">
              <Form.Label>Nome*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                value={modalValue?.name}
                onChange={(e) => {
                  setModalValue({ ...modalValue, name: e.target.value });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Cognome*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Surname"
                value={modalValue?.surname}
                onChange={(e) => {
                  setModalValue({ ...modalValue, surname: e.target.value });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>URL Immagine Profilo*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter img url as a string"
                value={modalValue?.image}
                onChange={(e) => {
                  setModalValue({ ...modalValue, image: e.target.value });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Sommario*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                value={modalValue?.title}
                onChange={(e) => {
                  setModalValue({ ...modalValue, title: e.target.value });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Biografia*</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter Bio"
                value={modalValue?.bio}
                onChange={(e) => {
                  setModalValue({ ...modalValue, bio: e.target.value });
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Città*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Area"
                value={modalValue?.area}
                onChange={(e) => {
                  setModalValue({ ...modalValue, area: e.target.value });
                }}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button className="savePutButton px-4" type="submit">
              Salva
            </Button>
            {/*             <Button variant="secondary" onClick={() => dispatch(hideM())}>
              Close
            </Button> */}
          </Modal.Footer>{" "}
        </Form>
      </Modal>
    </>
  );
};
