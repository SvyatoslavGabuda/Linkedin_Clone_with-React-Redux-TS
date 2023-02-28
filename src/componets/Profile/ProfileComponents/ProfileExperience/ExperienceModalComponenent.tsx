import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { hideExpM } from "../../../../app/reducers/expModSlice";

export const ExperienceModalComponent = () => {
  const showExpM = useAppSelector((state) => state.experienceModale.show);
  const dispatch = useAppDispatch();
  return (
    <>
      <Modal show={showExpM} onHide={() => dispatch(hideExpM())}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => dispatch(hideExpM())}>
            Close
          </Button>
          <Button variant="primary">Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
