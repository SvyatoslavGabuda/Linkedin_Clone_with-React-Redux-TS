import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import Logo from "./Assets/original.png";
import { Iprofile } from "../Profile/Profile";
import { BsFillPersonFill } from "react-icons/bs";

interface SingleReteProfileCardProps {
  SingleProfile: Iprofile;
}

export const SingleReteProfileCard = ({ SingleProfile }: SingleReteProfileCardProps) => {
  return (
    <Col xs={12} sm={6} md={4} lg={3} className="mb-2" key={SingleProfile._id}>
      <div className="ReteLeftProfilePartContainer border border-1 rounded rounded-3">
        {/* ---- */}
        {/* Contenitore Img Profilo */}
        {/* ---- */}
        <div className="ReteLeftPartProfileSection">
          <div></div>
          <Link to={"/profile/" + SingleProfile._id}>
            <div className="ReteLeftPartImgContainer">
              <img src={SingleProfile.image} alt="" className="bg-white" />
            </div>
            <div className="ReteNameSurnameContainer">
              {SingleProfile.name} {SingleProfile.surname}
            </div>
          </Link>
          <span className="ReteTitleContainer">{SingleProfile.title}</span>
        </div>
        <div className="d-flex justify-content-center">
          <img src={Logo} alt="" className="LogoImg me-1" />
          <p>EPICODE</p>
        </div>
        {/* ---- */}
        {/* Button*/}
        {/* ---- */}
        <div className="ReteLeftPartSecond">
          <button className="Button2 rounded-pill py-1">
            <BsFillPersonFill />+ Collegati
          </button>
        </div>
        {/* ---- */}
        <button className="ReteDeleteButton">
          <RxCross2 className="ReteCradIcon" />
        </button>
      </div>
    </Col>
  );
};
