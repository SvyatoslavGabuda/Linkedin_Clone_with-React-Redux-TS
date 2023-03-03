import "./profileExperience.scss";
import { Row, Spinner } from "react-bootstrap";
import { GrAdd } from "react-icons/gr";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { useEffect } from "react";
import { expFetc } from "../../../../app/reducers/experienceSlice";
import { ExpCard } from "./Experience/ExpCard";
import { showExpM } from "../../../../app/reducers/expModSlice";
import { useParams } from "react-router-dom";

export const ProfileExperience = () => {
  const dispatch = useAppDispatch();
  const myProfile = useAppSelector((state) => state.profile.myProfile);
  const generalProfile = useAppSelector((state) => state.profile.generalProfile);
  const params = useParams();
  const experience = useAppSelector((state) => state.experience.experience);
  const loadingState = useAppSelector((state) => state.experience.status);
  const upDateState = useAppSelector((state) => state.upDate.numberOfUpdate);
  useEffect(() => {
    if (myProfile?._id || generalProfile?._id) {
      params.id === "me"
        ? dispatch(expFetc(myProfile?._id))
        : dispatch(expFetc(generalProfile?._id));
    }
  }, [params.id, generalProfile?._id, upDateState]);

  return (
    <Row className="border-1 border border-1 rounded mb-2 bg-white">
      <div className="px-4 pt-4 pb-3 border-bottom">
        <div className="mb-2">
          <div className="d-flex justify-content-between">
            <h3 className="fs-4 mb-3">Esperienze</h3>{" "}
            {loadingState === "loading" && <Spinner animation="grow" variant="info" />}
            {params.id === "me" && (
              <div style={{ cursor: "pointer" }} onClick={() => dispatch(showExpM())}>
                <GrAdd className="IconPen" />
              </div>
            )}
          </div>
        </div>
        {experience && experience?.map((exp, i) => <ExpCard key={exp._id} myExp={exp} index={i} />)}

        <div className="d-flex">
          {experience?.length < 1 && params.id !== "me" && (
            <h6>Non ci sono Esperienze da mostrare</h6>
          )}
          {experience?.length < 1 && params.id === "me" && (
            <h6 onClick={() => dispatch(showExpM())} style={{ cursor: "pointer" }}>
              Aggiungi una nuova esperienza...
            </h6>
          )}
        </div>
      </div>
    </Row>
  );
};
