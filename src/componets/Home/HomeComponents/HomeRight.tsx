import { Col } from "react-bootstrap";

export const HomeRight = () => {
  return (
    <>
      <Col xl={3} className="d-none d-xl-block">
        <div className="HomeRightPartContainer border border-1 rounded rounded-3">
          <div className="HomeRightPartHeader">
            <h5>LinkedIn Notizie</h5>
          </div>
          <ul>
            <li>
              <h6>Nuova proproga per lo smart working</h6>
              <p>1 giorno fa | 590 lettori</p>
            </li>
            <li>
              <h6>Nuova proproga per lo smart working</h6>
              <p>1 giorno fa | 590 lettori</p>
            </li>
            <li>
              <h6>Nuova proproga per lo smart working</h6>
              <p>1 giorno fa | 590 lettori</p>
            </li>
            <li>
              <h6>Nuova proproga per lo smart working</h6>
              <p>1 giorno fa | 590 lettori</p>
            </li>
            <li>
              <h6>Nuova proproga per lo smart working</h6>
              <p>1 giorno fa | 590 lettori</p>
            </li>
          </ul>
        </div>
      </Col>
    </>
  );
};
