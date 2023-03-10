import { Row } from "react-bootstrap";
import { BsEyeFill } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import "./profileAlalisis.scss";

export const ProfileAnalisis = () => {
  return (
    <>
      <Row className="p-4 border border-1 rounded mb-2 bg-white">
        <div className="mb-2 p-0">
          <div>
            <div>
              <h3 className="fs-4 mb-0">Analisi</h3>
            </div>
            <div className="d-flex">
              <span className="me-1">
                <BsEyeFill />
              </span>
              <p>Solo per te</p>
            </div>
          </div>
        </div>
        <div className="d-flex p-0">
          <div className="me-1">
            <FaUserFriends className="fs-4" />
          </div>
          <div className="Follower">
            <p>
              <a href="/">10 visualizzazioni del profilo</a>
            </p>
            <p>Scopri chi ha visitato il tou profilo</p>
          </div>
        </div>
      </Row>
    </>
  );
};
