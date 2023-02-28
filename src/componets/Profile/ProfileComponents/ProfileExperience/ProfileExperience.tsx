import "./profileExperience.scss";
import { Row } from "react-bootstrap";
import { HiOutlinePencil } from "react-icons/hi2";
import { GrAdd } from "react-icons/gr";
import Logo from "./Assets/original.png";

export const ProfileExperience = () => {
  return (
    <Row className="border-1 border border-1 rounded mb-2 bg-white">
      <div className="px-4 pt-4 pb-3 border-bottom">
        <div className="mb-2">
          <div className="d-flex justify-content-between">
            <div>
              <h3 className="fs-4 mb-0">Esperienze</h3>
            </div>
            <div className="d-flex">
              <div className="ButtonContainer3">
                <button>
                  <li>
                    <GrAdd className="IconPen" />
                  </li>
                </button>
              </div>
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
        <div className="d-flex border-bottom">
          <div>
            <img src={Logo} alt="Pic" className="me-2 ExpImg" />
          </div>
          <div className="mb-3">
            <p className="fs-5">Web Developer</p>
            <p>Epicode · A tempo pieno</p>
            <p>nov 2022 - Presente · 4 mesi </p>
            <p>Roma · Da remoto</p>
          </div>
        </div>
      </div>
    </Row>
  );
};
