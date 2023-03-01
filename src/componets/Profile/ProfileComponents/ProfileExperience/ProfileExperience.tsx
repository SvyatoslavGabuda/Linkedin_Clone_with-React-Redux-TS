import "./profileExperience.scss";
import { Row } from "react-bootstrap";
import { HiOutlinePencil } from "react-icons/hi2";
import { GrAdd } from "react-icons/gr";
import Logo from "./Assets/original.png";
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
  useEffect(() => {
    params.id === "me" ? dispatch(expFetc(myProfile?._id)) : dispatch(expFetc(generalProfile?._id));
  }, [params.id, generalProfile?._id]);
  return (
    <Row className="border-1 border border-1 rounded mb-2 bg-white">
      <div className="px-4 pt-4 pb-3 border-bottom">
        <div className="mb-2">
          <div className="d-flex justify-content-between">
            <h3 className="fs-4 mb-3">Esperienze</h3>{" "}
            {params.id === "me" && (
              <div style={{ cursor: "pointer" }} onClick={() => dispatch(showExpM())}>
                <GrAdd className="IconPen" />
              </div>
            )}
          </div>
        </div>
        {experience && experience?.map((exp, i) => <ExpCard key={exp._id} myExp={exp} index={i} />)}

        <div className="d-flex">
          {experience?.length < 1 && params.id !== "me" && <h6>Non ci sono Esperienze da mostrare</h6>}
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
