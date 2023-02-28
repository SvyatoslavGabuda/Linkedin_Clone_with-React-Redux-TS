import { Row, Badge } from "react-bootstrap";
import { BsEyeFill } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { CiStreamOn } from "react-icons/ci";

export const ProfileResources = () => {
  return (
    <>
      <Row className="border border-1 rounded bg-white">
        <div className="px-4 pt-4 pb-3 border-bottom">
          <div className="mb-2">
            <div>
              <div>
                <h3 className="fs-4 mb-0">Risorse</h3>
              </div>
              <div className="d-flex">
                <span className="me-1">
                  <BsEyeFill />
                </span>
                <p>Solo per te</p>
              </div>
            </div>
          </div>
          <div className="d-flex border-bottom">
            <div className="me-1">
              <CiStreamOn className="fs-4" />
            </div>
            <div className="mb-3 Follower">
              <p>
                <a href="/">Modalità creazione di contenuti</a>
                <Badge bg="secondary" className="ms-1">
                  No
                </Badge>
              </p>
              <p>Fatti scoprire, metti in risalto i contenuti sul tuo profilo e accedi agli strumneti di creazione</p>
            </div>
          </div>
          <div className="d-flex mt-3">
            <div className="me-1">
              <FaUserFriends className="fs-4" />
            </div>
            <div className="Follower">
              <p>
                <a href="/">La mia rete</a>
              </p>
              <p>Salva e gestisci i tuoi collegamneti e interessi</p>
            </div>
          </div>
        </div>
        <div className="p-0">
          <button className="Button4">Mostra tutte le risorse {"->"} </button>
        </div>
      </Row>
    </>
  );
};
