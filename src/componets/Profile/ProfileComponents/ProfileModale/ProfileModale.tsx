import { Form, Modal, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { Iprofile } from "../../Profile";
import { useAppSelector } from "../../../../app/hooks";

export const ProfileModale = () => {
  const url = "https://striveschool-api.herokuapp.com/api/profile/";
  //funzioni MODALE
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [modalValue, setModalValue] = useState<Iprofile>({
    _id: "string",
    name: " string",
    surname: "trings",
    email: "string",
    username: " string",
    title: "string",
    bio: "string",
    area: "string",
    image: " string",
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
        headers: {
          "Content-Type": "application/json",
          Authorization: process.env.REACT_APP_BEARER || "nonandra",
          body: JSON.stringify(modalValue),
        },
      });
      console.log(response);
      console.log(modalValue);
      if (response.ok) {
        console.log("tutto apposto");
      } else {
        console.log("qualcosa è andato storoto");
      }
    } catch (error) {
      console.log(error);
    } finally {
      handleClose();
    }
  };

  useEffect(() => {
    setModalValue(myProfile);
  }, [myProfile]);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        add
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Aggiungi Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={(e) => {
              putInfo(e);
            }}
          >
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
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
              <Form.Label>surname</Form.Label>
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
              <Form.Label>img</Form.Label>
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
              <Form.Label>title</Form.Label>
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
              <Form.Label>Bio</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Bio"
                value={modalValue?.bio}
                onChange={(e) => {
                  setModalValue({ ...modalValue, bio: e.target.value });
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>area</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Area"
                value={modalValue?.area}
                onChange={(e) => {
                  setModalValue({ ...modalValue, area: e.target.value });
                }}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
