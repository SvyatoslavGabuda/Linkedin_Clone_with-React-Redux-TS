import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillQuestionCircle, AiFillSetting } from "react-icons/ai";
import "./myFooter.scss";

const MyFooter = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col>Logo Linkedin Esteso</Col>
        </Row>
        <Row className="">
          <Col className="d-flex flex-column">
            <Link className="footer-link" to="/">
              Informazioni
            </Link>
            <Link className="footer-link" to="/">
              Linee Guida della Community
            </Link>
            <Link className="footer-link" to="/">
              Privacy e Condizioni
            </Link>
            <Link className="footer-link" to="/">
              Sales Solutions
            </Link>
            <Link className="footer-link" to="/">
              Centro Sicurezza
            </Link>
          </Col>
          <Col className="d-flex flex-column">
            <Link className="footer-link" to="/">
              Accessibilità
            </Link>
            <Link className="footer-link" to="/">
              Carriera
            </Link>
            <Link className="footer-link" to="/">
              Opzioni di annuncio
            </Link>
            <Link className="footer-link" to="/">
              Mobile
            </Link>
          </Col>
          <Col className="d-flex flex-column">
            <Link className="footer-link" to="/">
              Talent Solutions
            </Link>
            <Link className="footer-link" to="/">
              Soluzioni di Marketing
            </Link>
            <Link className="footer-link" to="/">
              Pubblicità
            </Link>
            <Link className="footer-link" to="/">
              Piccole Imprese
            </Link>
          </Col>
          <Col xs={3} className="d-flex flex-column">
            <Link className="footer-link" to="/">
              <div className="d-flex">
                <div>
                  <AiFillQuestionCircle />
                </div>
                <div>
                  <h6>Domande?</h6>
                  <p>Visita il nostro centro di assistenza</p>
                </div>
              </div>
            </Link>
            <Link className="footer-link" to="/">
              <div className="d-flex">
                <div>
                  <AiFillSetting />
                </div>
                <div>
                  <h6>Gestisci il tuo account e la tua privacy </h6>
                  <p>Vai alle impostazioni</p>
                </div>
              </div>
            </Link>
          </Col>
          <Col xs={3} className="d-flex flex-column">
            <h6>Seleziona lingua</h6>
            <Form.Select aria-label="Seleziona la lingua">
              <option value="it">Italiano (Italiano)</option>
            </Form.Select>
          </Col>
        </Row>
        <Row>
          <Col>Linkedin Corporation &copy; {new Date().getFullYear()}</Col>
        </Row>
      </Container>
    </footer>
  );
};
export default MyFooter;
