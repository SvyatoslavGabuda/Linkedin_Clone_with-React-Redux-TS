import { Row, Col, Card } from "react-bootstrap";
import { BsFillQuestionCircleFill } from "react-icons/bs";

export const UpperSectionComponent = () => {
  return (
    <Row className="sideBarUpperSection d-flex flex-column px-3 py-1">
      <Col>
        <Card>
          <div className="d-flex justify-content-between align-items-center p-3">
            <a href="#profile" className="upperSectionLink">
              Modifica il tuo profilo pubblico e l'URL
            </a>
            <BsFillQuestionCircleFill className="sideBarQuestionIcon" />
          </div>
          <div>
            <hr className="m-0" />
          </div>
          <div className="d-flex justify-content-between align-items-center p-3">
            <a href="#profile" className="upperSectionLink">
              Aggiungi il tuo profilo in un'altra lingua
            </a>
            <BsFillQuestionCircleFill className="sideBarQuestionIcon" />
          </div>
        </Card>
      </Col>
    </Row>
  );
};
