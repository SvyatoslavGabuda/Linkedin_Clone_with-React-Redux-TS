import { Row, Col, ListGroup, Card } from "react-bootstrap";
import { BusinessComponent } from "./BusinessComponent";

export const OtherPersonsComponent = () => {
  return (
    <Row className="p-3">
      <Col>
        <Card>
          <h5 className="p-3 m-0">Altre aziende consultate</h5>
          <Row className="justify-content-center">
            <Col xs={10}>
              <ListGroup variant="flush">
                {/* map delle aziende */}
                <BusinessComponent />
                <BusinessComponent />
                <BusinessComponent />
                <BusinessComponent />
                <BusinessComponent />
              </ListGroup>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};
