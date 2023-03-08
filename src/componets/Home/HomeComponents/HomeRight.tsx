import { Col } from "react-bootstrap";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { BiUpArrow } from "react-icons/bi";
import { useState } from "react";
import { Link } from "react-router-dom";
import { HomeFooter } from "./HomeFooter";
import { GiSnake } from "react-icons/gi";

export const HomeRight = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Col xl={3} className="d-none d-xl-block">
        <div className="HomeRightPartContainer border border-1 rounded rounded-3">
          <div className="HomeRightPartHeader">
            <h5>LinkedIn Notizie</h5>
            <BsFillInfoSquareFill />
          </div>
          <ul>
            <li>
              <h6>Nuova proproga per lo smart working</h6>
              <p>1 giorno fa | 640 lettori</p>
            </li>
            <li>
              <h6>Un'azienda scomoda sul CV</h6>
              <p>17 ore fa | 253 lettori</p>
            </li>
            <li>
              <h6>
                Quanto Typescrip ti da noie{" "}
                <Link to="/game" style={{ color: "green" }}>
                  <GiSnake />
                </Link>
              </h6>
              <p>Oggi | 999 lettori</p>
            </li>
            <li>
              <h6>Fare una fetch è assurdo così</h6>
              <p>15 giorni fa | 256 lettori</p>
            </li>
            <li>
              <h6>Il declino di demografico</h6>
              <p>3 giorni fa | 485 lettori</p>
            </li>
            {show && (
              <>
                <li>
                  <h6>Vincenzo dichiara il default</h6>
                  <p>Domani | 1 lettore</p>
                </li>
                <li>
                  <h6>Svyatoslav ha capito Typescript</h6>
                  <p>1 anno fa | 756 lettori</p>
                </li>
                <li>
                  <h6>Alessandro D. va in palestra</h6>
                  <p>08.30h | 4 lettori</p>
                </li>
                <li>
                  <h6>Alessandro O. litiga con i tipi</h6>
                  <p>Sempre | 985 lettori</p>
                </li>
              </>
            )}
          </ul>
          <div
            className="HomeRightPartShowMore"
            onClick={() => {
              setShow(!show);
            }}
          >
            <BiUpArrow className={!show ? "showchat hidechat" : "showchat"} /> &nbsp; Visualizza
            Altro
          </div>
        </div>
        <HomeFooter />
      </Col>
    </>
  );
};
