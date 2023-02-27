import "./profileCard.scss";
import { Row, Button, Badge } from "react-bootstrap";
import { AiFillCamera } from "react-icons/ai";
import { HiOutlinePencil } from "react-icons/hi2";
import Logo from "./Assets/original.png";
import Logo2 from "./Assets/Immagine 2023-02-27 184537.png";

export const ProfileCard = () => {
  return (
    <>
      <Row className="mt-2">
        <section className="p-0">
          <div className="BackgroundContainer rounded-top-3">
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
            <div className="ProfileImgContainer d-flex justify-content-between">
              <div className="ProfileImgContainer2">
                <div className="ProfileImgContainer3">
                  <div className="ProfileImgContainer4">
                    <img src="" alt="" />
                  </div>
                </div>
              </div>
              <div className="ButtonContainer">
                <div className="ButtonContainer2 d-flex">
                  <div className="ButtonContainer3">
                    <button>
                      <li>
                        <HiOutlinePencil className="IconPen" />
                      </li>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* immagine profilo */}
            <div className="d-flex align-items-center justify-content-between mb-2">
              <div>
                <h3 className="mb-0">Alessandro D'Ascenzo</h3>
                <p className="mb-2 fs-5 fw-normal">Studente Full Stack Developer</p>
                <p className="mb-2">
                  <span className="text-secondary">Roma</span> · <a href="/">Informazioni di contatto</a>
                </p>
                <p>
                  <a href="/">1 collegamento</a>
                </p>
              </div>
              <div>
                <ul>
                  <li className="mb-3">
                    <div className="d-flex align-items-center">
                      <img className="me-2" src={Logo} alt="Epicode logo" />{" "}
                      <span>
                        <a href="/">Epicode</a>
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <img className="me-2" src={Logo2} alt="Pic" />
                      <span>
                        <a href="/">Laurea non in Typescript</a>
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="d-flex">
              <div>
                <Button variant="primary" className="rounded-pill py-1 me-2 Button1">
                  Disponibile per
                </Button>
              </div>
              <div>
                <button className="rounded-pill py-1 me-2 Button2">Aggiungi sezione del profilo</button>
              </div>
              <div>
                <button className="rounded-pill py-1 Button3">Altro</button>
              </div>
            </div>
          </div>
        </section>
      </Row>

      {/* Analisi */}

      <Row className="p-4">
        <div className="mb-2 p-0">
          <div>
            <div>
              <h3 className="fs-4 mb-0">Analisi</h3>
            </div>
            <div className="d-flex">
              <span className="me-1">@</span>
              <p>Solo per te</p>
            </div>
          </div>
        </div>
        <div className="d-flex p-0">
          <div className="me-1">
            <HiOutlinePencil />
          </div>
          <div>
            <p>
              <a href="/">10 visualizzazioni del profilo</a>
            </p>
            <p>Scopri chi ha visitato il tou profilo</p>
          </div>
        </div>
      </Row>

      {/* Risorse */}

      <Row className="rounded-3">
        <div className="px-4 pt-4 pb-3 border-bottom">
          <div className="mb-2">
            <div>
              <div>
                <h3 className="fs-4 mb-0">Risorse</h3>
              </div>
              <div className="d-flex">
                <span className="me-1">@</span>
                <p>Solo per te</p>
              </div>
            </div>
          </div>
          <div className="d-flex border-bottom">
            <div className="me-1">
              <HiOutlinePencil />
            </div>
            <div className="mb-3">
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
              <HiOutlinePencil />
            </div>
            <div>
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

      {/* Attività */}

      <Row className="rounded-3">
        <div className="px-4 pt-4 pb-3 border-bottom">
          <div className="mb-2">
            <div>
              <div>
                <h3 className="fs-4 mb-0">Attività</h3>
              </div>
              <div className="d-flex">
                <span className="me-1">@</span>
                <p>
                  <a href="/">10 follower</a>
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex mt-3">
            <div className="me-1">
              <HiOutlinePencil />
            </div>
            <div>
              <p>
                <a href="/">La mia rete</a>
              </p>
              <p>Salva e gestisci i tuoi collegamneti e interessi</p>
            </div>
          </div>
        </div>
        <div className="p-0">
          <button className="Button4">Mostra tutte le attività {"->"} </button>
        </div>
        <div>
          <button className="rounded-pill py-1 me-2 Button2">Avvia un post</button>
        </div>
      </Row>
    </>
  );
};
