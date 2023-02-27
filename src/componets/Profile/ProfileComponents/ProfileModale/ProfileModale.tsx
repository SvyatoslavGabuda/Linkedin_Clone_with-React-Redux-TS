import { Form, Modal, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { Iprofile } from "../../Profile";
import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import { useAppSelector } from "../../../../app/hooks";
import { AllProfile } from "../../../../app/reducers/allProfileReduce";
export const ProfileModale = () => {
  const url = "https://striveschool-api.herokuapp.com/api/profile/";
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [modalValue, setModalValue] = useState<Iprofile>();

  const myProfile = useAppSelector((state: { profile: AllProfile }) => state.profile.myProfile);
  console.log(myProfile);
  //const myProfile = useSelector((state:RootState) => state.profile.myProfile);

  const putInfo = async () => {
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
      if (response.ok) {
        console.log("tutto apposto");
      } else {
        console.log("qualcosa è andato storoto");
      }
    } catch (error) {}
  };
  // console.log("my profile", myProfile);
  // useEffect(() => {
  //   console.log(myProfile);
  // }, [myProfile]);

  return (
    <>
      <h2>sarei un modale</h2>
      <Button variant="primary" onClick={handleShow}>
        add
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Aggiungi Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={() => {
              putInfo();
            }}
          >
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                value={modalValue?.name}
                onChange={(e) => {
                  //setModalValue(...modalValue, modalValue?.name);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>surname</Form.Label>
              <Form.Control type="text" placeholder="Enter Surname" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>img</Form.Label>
              <Form.Control type="text" placeholder="Enter img url as a string" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>title</Form.Label>
              <Form.Control type="text" placeholder="Enter title" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Bio</Form.Label>
              <Form.Control type="text" placeholder="Enter Bio" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>area</Form.Label>
              <Form.Control type="text" placeholder="Enter Area" />
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
