import { Col } from "react-bootstrap";
import { useAppSelector } from "../../../../app/hooks";
import { Iprofile } from "../../../Profile/Profile";
import { FaBookmark } from "react-icons/fa";
import { FcCloth } from "react-icons/fc";
import "../HomeComponents.scss";
import { Link } from "react-router-dom";
import { HomeLeftProps } from "../HomeLeftComponent";

export const HomeLeftUpperComponent = ({ isShown }: HomeLeftProps) => {
  const currentProfile: Iprofile = useAppSelector((state) => state.profile.myProfile);

  return (
    <>
      {currentProfile && (
        <Col xs={12}>
          <div className="HomeLeftPartContainer border border-1 rounded rounded-3">
            {/* ---- */}
            {/* Contenitore Img Profilo */}
            {/* ---- */}
            <div className="HomeLeftPartProfileSection">
              <div></div>
              <Link to={"/profile/me"}>
                <div className="HomeLeftPartImgContainer">
                  <img src={currentProfile.image} alt="" />
                </div>
                <div>
                  {currentProfile.name} {currentProfile.surname}
                </div>
              </Link>
              <p>{currentProfile.title}</p>
            </div>
            {/* ---- */}
            {/* Seconda linea */}
            {/* ---- */}
            <div className={`HomeLeftPartSecond ${isShown === false && "isItShown"}`}>
              <a href="/">
                <div className="d-flex justify-content-between px-3 text-start">
                  <div>
                    <p className="text-secondary">Collegamento</p>
                    <p className="text-black">Espandi la tua rete</p>
                  </div>
                  <div>
                    <span>12</span>
                  </div>
                </div>
              </a>
            </div>
            {/* ---- */}
            {/* terza linea */}
            {/* ---- */}
            <a href="/" className={`HomeLeftPartThird ${isShown === false && "isItShown"}`}>
              <h3>Accedi a strumenti e informazioni in esclusiva</h3>
              <div className="d-flex">
                <li className="me-1">
                  <FcCloth />
                </li>
                <span> Premium gratis</span>
              </div>
            </a>
            {/* ---- */}
            {/* Quarta linea */}
            {/* ---- */}
            <a href="/" className={`HomeLeftPartLast ${isShown === false && "isItShown"}`}>
              <div>
                <span>
                  <FaBookmark /> I miei elementi
                </span>
              </div>
            </a>

            {/* ---- */}
          </div>
        </Col>
      )}
    </>
  );
};
