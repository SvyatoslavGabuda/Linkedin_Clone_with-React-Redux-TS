import { format, parseISO } from "date-fns";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { hidePutM } from "../../../../app/reducers/expPutModSlice";
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
  const [experience, setExperience] = useState<IexperiencePost>({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  });

  useEffect(() => {
    setExperience({
      role: user.experience[putStore.indexExp]?.role,
      company: user.experience[putStore.indexExp]?.company,
      startDate: user.experience[putStore.indexExp]?.startDate && format(new Date(user.experience[putStore.indexExp]?.startDate), "yyyy-MM-dd"),
      endDate: "",
      description: user.experience[putStore.indexExp]?.description,
      area: user.experience[putStore.indexExp]?.area,
    });
  }, [putStore.show]);

  //   Fetch to PUT an existing Experience
  const putExperience = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${myProfile._id}/experiences/${user.experience[putStore.indexExp]?._id}`,
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
      } else {
        console.log("Response PUT experience not okay");
      }
    } catch (error) {
      console.log("Fatal Error into Experience PUT");
    }
  };

  const deleteExperience = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${myProfile._id}/experiences/${user.experience[putStore.indexExp]?._id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: process.env.REACT_APP_BEARER || "nonandra",
          },
        }
      );
      if (response.ok) {
        console.log("DELETE Experience completed");
      } else {
        console.log("Response DELETE experience not okay");
      }
    } catch (error) {
      console.log("Fatal Error into Experience DELETE");
    }
  };

  return (
    <>
      <Modal show={putStore.show} onHide={() => dispatch(hidePutM())}>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            putExperience();
            // chiama funzione PUT
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title>Aggiungi esperienza</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {user?.experience?.length > 0 && (
              <>
                <Form.Group className="mb-3">
                  <Form.Label>Qualifica*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter role"
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
                  <Form.Label>Azienda</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter company name"
                    value={experience.company}
                    onChange={(e) => {
                      setExperience({
                        ...experience,
                        company: e.target.value,
                      });
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3 d-flex justify-content-around">
                  <span>
                    <Form.Label>Inizio esperienza</Form.Label>
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
                    <Form.Label>Termine esperienza</Form.Label>
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
                  <Form.Label>Descrizione</Form.Label>
                  <Form.Control
                    as={"textarea"}
                    placeholder="Enter description"
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
                  <Form.Label>Località</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Location"
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
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={(e) => {
                //Chiama funzione delete
                e.preventDefault();
                deleteExperience();
                dispatch(hidePutM());
              }}
            >
              Delete experience
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};
