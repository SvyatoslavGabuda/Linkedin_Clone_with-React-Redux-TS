import { format, formatISO } from "date-fns";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { expFetc } from "../../../../app/reducers/experienceSlice";
import { hideExpM } from "../../../../app/reducers/expModSlice";
import { hidePutM } from "../../../../app/reducers/expPutModSlice";

export interface IexperiencePost {
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  area: string;
}

export const ExperienceModalComponent = () => {
  const showExpM = useAppSelector((state) => state.experienceModale.show);
  const user = useAppSelector((state) => state.profile?.myProfile);
  const dispatch = useAppDispatch();
  const [experience, setExperience] = useState<IexperiencePost>({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  });

  // Fetch to POST a new Experience
  const postNewExperience = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${user?._id}/experiences`, {
        method: "POST",
        body: JSON.stringify(experience),
        headers: {
          Authorization: process.env.REACT_APP_BEARER || "nonandra",
          "content-type": "application/json",
        },
      });
      if (response.ok) {
        console.log("POST completata");
        dispatch(expFetc(user?._id));
      } else {
        console.log("Response POST experience not okay");
      }
    } catch (error) {
      console.log("Errore fatale nella POST");
    }
  };

  return (
    <>
      <Modal show={showExpM} onHide={() => dispatch(hideExpM())} size="lg" className="modalExperience">
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            postNewExperience();
            dispatch(hideExpM());
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title>Aggiungi esperienza</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Qualifica*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Esempio: Retail Sales Manager"
                value={experience.role}
                onChange={(e) => {
                  setExperience({
                    ...experience,
                    role: e.target.value,
                  });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Nome azienda*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Esempio: Microsoft"
                value={experience.company}
                onChange={(e) => {
                  setExperience({
                    ...experience,
                    company: e.target.value,
                  });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3 d-flex flex-wrap justify-content-between justify-content-sm-start">
              <span className="startexperience">
                <Form.Label>Data di inizio*</Form.Label>
                <Form.Control
                  type="date"
                  placeholder=""
                  value={experience.startDate.toString()}
                  onChange={(e) => {
                    setExperience({
                      ...experience,
                      startDate: format(new Date(e.target.value), "yyyy-MM-dd"),
                    });
                  }}
                />
              </span>
              <span>
                <Form.Label>Data di fine</Form.Label>
                <Form.Control
                  type="date"
                  placeholder=""
                  value={experience.endDate.toString()}
                  onChange={(e) => {
                    setExperience({
                      ...experience,
                      endDate: format(new Date(e.target.value), "yyyy-MM-dd"),
                    });
                  }}
                />
              </span>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Descrizione*</Form.Label>
              <Form.Control
                as={"textarea"}
                placeholder="Inserisci una descrizione che rispecchi le competenze acquisite e il tuo ruolo"
                value={experience.description}
                onChange={(e) => {
                  setExperience({
                    ...experience,
                    description: e.target.value,
                  });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Località*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Esempio: Milano, Italia"
                value={experience.area}
                onChange={(e) => {
                  setExperience({
                    ...experience,
                    area: e.target.value,
                  });
                }}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit">
              Salva
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};
