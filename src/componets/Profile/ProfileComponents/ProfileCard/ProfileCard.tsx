import "./profileCard.scss";
import { Row, Button } from "react-bootstrap";
import { AiFillCamera } from "react-icons/ai";

export const ProfileCard = () => {
  return (
    <>
      <Row>
        <section>
          <div className="BackgroundContainer">
            <div>
              <div></div>
            </div>
            <div className="CamContainer">
              <button>
                <li>
                  <AiFillCamera className="IconCam" />
                </li>
              </button>
            </div>
          </div>
          {/* immagine profilo */}
          <div className="p-4">
            <div className="ProfileImgContainer d-flex">
              <div className="ProfileImgContainer2">
                <div className="ProfileImgContainer3">
                  <div className="ProfileImgContainer4">
                    <img src="" alt="" />
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <button>
                      <li></li>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* immagine profilo */}
            <div className="d-flex align-items-center">
              <div>
                <h2>Alessandro D'Ascenzo</h2>
                <p>Studente Full Stack Developer</p>
                <p>
                  Roma - <a href="/">Informazioni di contatto</a>
                </p>
              </div>
              <div>
                <ul>
                  <li>
                    <img src="" alt="" /> Epicode
                  </li>
                  <li>
                    <img src="" alt="" /> Diploma di scuola superiore
                  </li>
                </ul>
              </div>
            </div>
            <div className="d-flex">
              <div>
                <Button variant="primary" className="rounded-pill py-1 me-2">
                  Disponibile per
                </Button>
              </div>
              <div>
                <Button variant="outline-primary" className="rounded-pill py-1 me-2">
                  Aggiungi sezione del profilo
                </Button>
              </div>
              <div>
                <Button variant="outline-secondary" className="rounded-pill py-1">
                  Altro
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Row>
    </>
  );
};
