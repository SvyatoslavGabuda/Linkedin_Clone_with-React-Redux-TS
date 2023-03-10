import { format } from "date-fns";
import React, { useState, ChangeEvent } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BsImage } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { expFetc } from "../../../../app/reducers/experienceSlice";
import { hideExpM } from "../../../../app/reducers/expModSlice";
import { Add } from "../../../../app/reducers/slicerForUpDate";

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

  const [expImage, setExpImage] = useState(new FormData());
  const [experienceId, setExperienceId] = useState(false);
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
      let existingExperience = await response.json();
      if (response.ok) {
        console.log("POST completata");
        if (experienceId) {
          fetchExperienceImage(existingExperience._id);
        } else {
          dispatch(expFetc(user?._id));
        }
        setExperience({
          role: "",
          company: "",
          startDate: "",
          endDate: "",
          description: "",
          area: "",
        });
      } else {
        console.log("Response POST experience not okay");
      }
    } catch (error) {
      console.log("Errore fatale nella POST");
    } finally {
      dispatch(Add());
    }
  };

  const fetchExperienceImage = async (expId: string) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${user._id}/experiences/${expId}/picture`,
        {
          method: "POST",
          body: expImage,
          headers: {
            Authorization: process.env.REACT_APP_BEARER || "nonandra",
          },
        }
      );
      if (response.ok) {
        console.log("POST experience image successfully uploaded");
        dispatch(expFetc(user?._id));
      } else {
        console.log("POST experience image failed in response");
      }
    } catch (error) {
      console.log("fatal error in POST experience image upload");
    }
  };

  const handleLoadFile = (e: ChangeEvent<HTMLInputElement>) => {
    setExperienceId(true);
    setExpImage((exp) => {
      exp.delete("experience");
      exp.append("experience", e.target.files![0]);
      return exp;
    });
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
              <div className="d-flex">
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
                <label className="inputLabelExp m-0 d-flex align-items-center">
                  <span className="px-2">Carica</span>
                  <BsImage className="mx-2" />
                  <input type="file" style={{ width: 60 + "%" }} onChange={handleLoadFile} />
                </label>
              </div>
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
            <Button className="savePutButton px-4" type="submit">
              Salva
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};
