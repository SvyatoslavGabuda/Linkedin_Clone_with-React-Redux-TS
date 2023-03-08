import { format } from "date-fns";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BsImage } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { expFetc } from "../../../../app/reducers/experienceSlice";
import { hidePutM } from "../../../../app/reducers/expPutModSlice";
import { Add } from "../../../../app/reducers/slicerForUpDate";
import { ExpImagePUTMod } from "./Experience/ExpImagePUTMod";
import { IexperiencePost } from "./ExperienceModalComponenent";

export const ExperiencePutModalComponent = () => {
  // recover myProfile property
  const myProfile = useAppSelector((state) => state.profile.myProfile);
  // recover show property of the modal from the
  const putStore = useAppSelector((state) => state.experiencePutModale);
  // recover the specific experience to work with
  const user = useAppSelector((state) => state.experience);
  // define dispatch
  const dispatch = useAppDispatch();
  // create a internal state to store the value of the experience into the input to modify
  const [experience, setExperience] = useState<IexperiencePost>();

  useEffect(() => {
    if (myProfile) {
      setExperience({
        role: user.experience[putStore.indexExp]?.role,
        company: user.experience[putStore.indexExp]?.company,
        startDate:
          user.experience[putStore.indexExp]?.startDate &&
          format(new Date(user.experience[putStore.indexExp]?.startDate), "yyyy-MM-dd"),
        endDate: "",
        description: user.experience[putStore.indexExp]?.description,
        area: user.experience[putStore.indexExp]?.area,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //   Fetch to PUT an existing Experience
  const putExperience = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${myProfile._id}/experiences/${
          user.experience[putStore.indexExp]?._id
        }`,
        {
          method: "PUT",
          body: JSON.stringify(experience),
          headers: {
            Authorization: process.env.REACT_APP_BEARER || "nonandra",
            "content-type": "application/json",
          },
        }
      );
      if (response.ok) {
        console.log("PUT Experience completed");
        dispatch(expFetc(myProfile?._id));
      } else {
        console.log("Response PUT experience not okay");
      }
    } catch (error) {
      console.log("Fatal Error into Experience PUT");
    } finally {
      dispatch(Add());
    }
  };

  const deleteExperience = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${myProfile._id}/experiences/${
          user.experience[putStore.indexExp]?._id
        }`,
        {
          method: "DELETE",
          headers: {
            Authorization: process.env.REACT_APP_BEARER || "nonandra",
          },
        }
      );
      if (response.ok) {
        console.log("DELETE Experience completed");
        dispatch(expFetc(myProfile?._id));
      } else {
        console.log("Response DELETE experience not okay");
      }
    } catch (error) {
      console.log("Fatal Error into Experience DELETE");
    } finally {
      dispatch(Add());
    }
  };

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);

  return (
    <>
      {experience && user && myProfile && (
        <Modal
          show={putStore.show}
          onHide={() => dispatch(hidePutM())}
          size="lg"
          className={`modalExperience ${show === true ? "disappearModal" : ""}`}
        >
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              putExperience();
              // chiama funzione PUT
              dispatch(hidePutM());
            }}
          >
            <Modal.Header closeButton>
              <Modal.Title>Modifica esperienza</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {user?.experience?.length > 0 && (
                <>
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
                    <Form.Label>Azienda*</Form.Label>
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
                      <button
                        className="m-0 d-flex align-items-center "
                        type="button"
                        id="uploadExpButton"
                        onClick={() => {
                          handleShow();
                        }}
                      >
                        <span>Carica</span>
                        <BsImage className="mx-2" />
                      </button>
                    </div>
                  </Form.Group>
                  <Form.Group className="mb-3 d-flex justify-content-center justify-content-md-start">
                    <span className="startexperience">
                      <Form.Label>Data di inizio*</Form.Label>
                      <Form.Control
                        type="date"
                        placeholder=""
                        value={experience.startDate && experience.startDate.toString()}
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
                        value={experience.endDate && experience.endDate.toString()}
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
                      placeholder="Esempio: Milano, IT"
                      value={experience.area}
                      onChange={(e) => {
                        setExperience({
                          ...experience,
                          area: e.target.value,
                        });
                      }}
                    />
                  </Form.Group>
                </>
              )}
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-between">
              <Button
                variant="text"
                onClick={(e) => {
                  //Chiama funzione delete
                  e.preventDefault();
                  deleteExperience();
                  dispatch(hidePutM());
                }}
              >
                Elimina esperienza
              </Button>
              <Button variant="primary" type="submit">
                Salva
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      )}
      <ExpImagePUTMod show={show} handleShow={handleShow} />
    </>
  );
};
