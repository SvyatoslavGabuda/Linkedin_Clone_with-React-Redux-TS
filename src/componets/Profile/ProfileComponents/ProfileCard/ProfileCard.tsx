import "./profileCard.scss";
import { Row, Button, Col, Spinner } from "react-bootstrap";
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
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { toogleM } from "../../../../app/reducers/upgrateModSlice";
import { useParams } from "react-router";
import { ProfileImageMod } from "./ProfileImageMod";
import { useState } from "react";
import { BsDownload, BsArrow90DegRight, BsInfoSquareFill, BsFlagFill, BsFillPersonXFill } from "react-icons/bs";
import { TfiMedallAlt } from "react-icons/tfi";
import { RiDoubleQuotesR } from "react-icons/ri";

interface ProfileCardProps {
  profile: Iprofile;
}

export const ProfileCard = ({ profile }: ProfileCardProps) => {
  const dispatch = useAppDispatch();
  const params = useParams();

  const [show, setShow] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleShow = () => setShow(!show);
  const loadingState = useAppSelector((state) => state.profile.loadingMyProfile);
  const friends = useAppSelector((state) => state.friends.Favfriends);

  const finduser = () => {
    if (friends?.length > 0) return friends.find((person: Iprofile) => person?._id === profile?._id);
  };

  let verifyUser = finduser();

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Col xs={12} md={7} lg={8}>
        {loadingState === true && (
          <div className="text-center py-5">
            <Spinner animation="grow" variant="info" />
          </div>
        )}
        <ProfileImageMod show={show} handleShow={handleShow} />
        {profile && (
          <Row className="mt-1 border border-1 mb-2 bg-white ProfileCardFullContainer">
            <section className="p-0">
              <div className="BackgroundContainer rounded-top">
                {/* <div><div></div></div> */}
                <div className="CamContainer">
                  {params.id === "me" && (
                    <button>
                      <li>
                        <AiFillCamera className="IconCam" />
                      </li>
                    </button>
                  )}
                </div>
              </div>
              {/* immagine profilo */}
              <div className="p-4">
                <div className="ProfileImgContainer d-flex justify-content-between">
                  <div className="ProfileImgContainer2">
                    <div className="ProfileImgContainer3">
                      <div className="ProfileImgContainer4" style={{ position: "relative" }}>
                        {params.id === "me" ? (
                          <img
                            src={profile.image}
                            alt="ProfilePic"
                            onClick={() => {
                              handleShow();
                            }}
                          />
                        ) : (
                          <img src={profile.image} alt="ProfilePic" />
                        )}
                        {params.id === "me" && (
                          <>
                            <div
                              className="d-block rounded-circle"
                              style={{
                                position: "absolute",
                                backgroundColor: "green",
                                width: "24px",
                                height: "24px",
                                bottom: "8px",
                                right: "8px",
                                border: "3px solid white",
                              }}
                            ></div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="ButtonContainer">
                    <div className="ButtonContainer2 d-flex">
                      <div className="ButtonContainer3">
                        <button>
                          {params.id === "me" && (
                            <li onClick={() => dispatch(toogleM())}>
                              <HiOutlinePencil className="IconPen" />
                            </li>
                          )}
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
                    <p className="mb-2 fs-5 fw-normal">{profile.title}</p>
                    <p className="mb-2">
                      <span className="text-secondary">{profile.area}</span> · <a href="/">Informazioni di contatto</a>
                    </p>
                    <p>
                      <a href="/">1 collegamento</a>
                    </p>
                  </div>
                  <div className="d-none d-lg-block">
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
                <div className="d-flex profileCardButtonsModifiers">
                  <div>
                    <Button variant="primary" className="rounded-pill py-1 me-2 Button1">
                      {params.id === "me" ? "Disponibile per" : "Messaggio"}
                    </Button>
                  </div>
                  <div>
                    <button
                      className={`rounded-pill py-1 me-2  Button2 ${verifyUser && "d-none"}`}
                      onClick={() => {
                        if (params.id !== "me") {
                          dispatch({ type: "ADDFRIENDTOFAV", payload: profile });
                        }
                      }}
                    >
                      {params.id === "me" ? "Aggiungi sezione del profilo" : "Segui"}
                    </button>
                  </div>
                  <div className="position-relative">
                    <button className="rounded-pill py-1 Button3" onClick={handleMenuClick}>
                      Altro
                    </button>
                    {isMenuOpen && (
                      <div className="ProfileCArdDropDownMenu border border-1 bg-white py-2" style={{ top: `130%` }}>
                        <div className="RemoveLink px-2 py-2 d-flex align-items-center">
                          <div className="mx-2">
                            <BsArrow90DegRight className="ProfileIconDropDown" />
                          </div>
                          <div>Invia il profilo in un messaggio</div>
                        </div>
                        <div className="RemoveLink px-2 py-2 d-flex align-items-center">
                          <div className="mx-2">
                            <BsDownload className="ProfileIconDropDown" />
                          </div>
                          <div>Salva come PDF</div>
                        </div>
                        {params.id !== "me" && (
                          <div className="RemoveLink px-2 py-2 d-flex align-items-center">
                            <div className="mx-2">
                              <TfiMedallAlt className="ProfileIconDropDown" />
                            </div>
                            <div>Fai un applauso</div>
                          </div>
                        )}
                        {params.id !== "me" && (
                          <div className="RemoveLink px-2 py-2 d-flex align-items-center">
                            <div className="mx-2">
                              <RiDoubleQuotesR className="ProfileIconDropDown" />
                            </div>
                            <div>Chiedi una referenza</div>
                          </div>
                        )}
                        {verifyUser && params.id !== "me" && params.id === verifyUser._id && (
                          <div
                            className="RemoveLink px-2 py-2 d-flex align-items-center "
                            onClick={() => {
                              dispatch({ type: "DELFRIENDFROMFAV", payload: profile });
                              handleMenuClick();
                            }}
                          >
                            <div className="mx-2">
                              <BsFillPersonXFill className="ProfileIconDropDown" />
                            </div>
                            <div> Rimuovi collegamento</div>
                          </div>
                        )}
                        {params.id !== "me" && (
                          <div className="RemoveLink px-2 py-2 d-flex align-items-center ">
                            <div className="mx-2">
                              <BsFlagFill className="ProfileIconDropDown" />
                            </div>
                            <div>Segnala violenza/Blocca</div>
                          </div>
                        )}
                        <div className="RemoveLink px-2 py-2 d-flex align-items-center">
                          <div className="mx-2">
                            <BsInfoSquareFill className="ProfileIconDropDown" />
                          </div>
                          <div>Informazioni su questo profilo</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </Row>
        )}
        <ProfileActivity />
        {params.id === "me" && <ProfileAnalisis />}
        <ProfileExperience />
        <ProfileInterest />
        {params.id === "me" && <ProfileResources />}
      </Col>
    </>
  );
};
