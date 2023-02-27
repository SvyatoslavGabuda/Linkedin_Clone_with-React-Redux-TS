import { Row, Col, Card, ListGroup } from "react-bootstrap";
import { SideBarItemComponent } from "./SideBarItemComponent";

export const GroupsInterestsComponent = () => {
  return (
    <Row className="p-3">
      <Col>
        <Card>
          <h5 className="p-3 m-0">Altre aziende consultate</h5>
          <Row className="justify-content-center">
            <Col xs={10}>
              <ListGroup variant="flush">
                {/* map delle aziende */}
                <SideBarItemComponent />
                <SideBarItemComponent />
              </ListGroup>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};
