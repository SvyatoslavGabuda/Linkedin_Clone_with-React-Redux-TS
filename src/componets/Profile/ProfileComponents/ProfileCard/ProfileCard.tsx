import "./profileCard.scss";
import { Row, Button, Col } from "react-bootstrap";
import { AiFillCamera } from "react-icons/ai";
import { HiOutlinePencil } from "react-icons/hi2";
import Logo from "./Assets/original.png";
import Logo2 from "./Assets/Immagine 2023-02-27 184537.png";
import { ProfileActivity } from "../ProfileActivity/ProfileActivity";
import { ProfileAnalisis } from "../ProfileAnalisis/ProfileAnalisis";
import { ProfileExperience } from "../ProfileExperience/ProfileExperience";
import { ProfileInterest } from "../ProfileInterests/ProfileInterests";
import { ProfileResources } from "../ProfileRecurces/ProfileResources";
import { Iprofile } from "../../Profile";
import { useAppDispatch } from "../../../../app/hooks";
import { toogleM } from "../../../../app/reducers/upgrateModSlice";

interface ProfileCardProps {
  profile: Iprofile;
}

export const ProfileCard = ({ profile }: ProfileCardProps) => {
  const dispatch = useAppDispatch();
  return (
    <>
      <Col xs={12} md={7} lg={8}>
        {profile && (
          <Row className="mt-1 border border-1 rounded mb-2 bg-white">
            <section className="p-0">
              <div className="BackgroundContainer rounded-top">
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
                        <img src={profile.image} alt="ProfilePic" />
                      </div>
                    </div>
                  </div>
                  <div className="ButtonContainer">
                    <div className="ButtonContainer2 d-flex">
                      <div className="ButtonContainer3">
                        <button>
                          <li onClick={() => dispatch(toogleM())}>
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
                    <h3 className="mb-0">
                      {profile.name} {profile.surname}
                    </h3>
                    <p className="mb-2 fs-5 fw-normal">Studente Full Stack Developer</p>
                    <p className="mb-2">
                      <span className="text-secondary">{profile.area}</span> ·{" "}
                      <a href="/">Informazioni di contatto</a>
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
                    <button className="rounded-pill py-1 me-2 Button2">
                      Aggiungi sezione del profilo
                    </button>
                  </div>
                  <div>
                    <button className="rounded-pill py-1 Button3">Altro</button>
                  </div>
                </div>
              </div>
            </section>
          </Row>
        )}
        <ProfileActivity />
        <ProfileAnalisis />
        <ProfileExperience />
        <ProfileInterest />
        <ProfileResources />
      </Col>
    </>
  );
};
