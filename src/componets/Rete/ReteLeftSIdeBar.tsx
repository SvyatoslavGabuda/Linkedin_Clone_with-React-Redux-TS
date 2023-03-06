import { useState } from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoIosArrowUp } from "react-icons/io";
import { BsFillPeopleFill, BsFillPersonFill, BsCalendarDate } from "react-icons/bs";
import { BiNews } from "react-icons/bi";
import { RiPagesLine } from "react-icons/ri";
import { FiHash } from "react-icons/fi";
import { TiContacts } from "react-icons/ti";
import "./Rete.scss";

export const ReteLeftSideBar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Col xl={3} className="d-none d-xl-block ">
        <div className="ReteLeftSideFullContainer">
          <div className="ReteLeftPartContainer border border-1 mb-0 rounded-top">
            <div className="ReteLeftPartHeader">
              <h5 className="ms-3">Gestisci la tua rete</h5>
            </div>
            <ul>
              <li>
                <h6>
                  <BsFillPeopleFill className="mx-2 ReteIcons" /> Collegamenti
                </h6>
              </li>
              {show && (
                <>
                  <li>
                    <h6>
                      <TiContacts className="mx-2 ReteIcons" /> Contatti
                    </h6>
                  </li>
                  <li>
                    <h6>
                      <BsFillPersonFill className="mx-2 ReteIcons" /> Persone che segui e follower
                    </h6>
                  </li>
                  <li>
                    <h6>
                      <BsCalendarDate className="mx-2 ReteIcons" /> Eventi
                    </h6>
                  </li>
                  <li>
                    <h6>
                      <RiPagesLine className="mx-2 ReteIcons" /> pagina
                    </h6>
                  </li>
                  <li>
                    <h6>
                      <BiNews className="mx-2 ReteIcons" /> Newsletter
                    </h6>
                  </li>
                  <li>
                    <h6>
                      <FiHash className="mx-2 ReteIcons" /> Hashtag
                    </h6>
                  </li>
                </>
              )}
            </ul>
            <div
              className="ReteLeftPartShowMore ms-2"
              onClick={() => {
                setShow(!show);
              }}
            >
              Vedi Altro <IoIosArrowUp className={!show ? "showReteLeftPart hideReteLeftPart" : "showReteLeftPart"} />{" "}
              &nbsp;
            </div>
          </div>
          <div className="text-center bg-white ReteLeftPartH5 ">
            <a href="/">
              <h5>Espandi la tua rete</h5>
            </a>
          </div>
          <div className="HomeRightFooter bg-white p-4 border border-1 rounded-bottom rounded-bottom-3">
            <div>
              <Link className="footer-link" to="/">
                Informazioni
              </Link>
              <Link className="footer-link" to="/">
                Accessibilità
              </Link>
            </div>
            <div>
              <Link className="footer-link" to="/">
                Centro assistenza
              </Link>
              <Link className="footer-link" to="/">
                Privacy e condizioni
              </Link>
            </div>
            <div>
              <Link className="footer-link" to="/">
                Opzioni per gli annunci pubblicitari
              </Link>
            </div>
            <div>
              <Link className="footer-link" to="/">
                Pubblicità
              </Link>
              <Link className="footer-link" to="/">
                Servizi alle aziende
              </Link>
            </div>
            <div>
              <Link className="footer-link" to="/">
                Scarica l'app LinkedIn
              </Link>
              <Link className="footer-link" to="/">
                Altro
              </Link>
            </div>
            <div className="HomeFooterCR">
              {" "}
              <img className="footer-logo" src="logo.webp" alt="Linkedin Logo" height={"16px"} />
              LinkedIn Corporation &copy; {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </Col>
    </>
  );
};
