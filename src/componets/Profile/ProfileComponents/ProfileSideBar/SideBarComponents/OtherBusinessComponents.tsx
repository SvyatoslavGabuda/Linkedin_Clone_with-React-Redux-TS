import { Card, Col, Row, ListGroup } from "react-bootstrap";
import { SideBarItemComponent } from "./SideBarItemComponent";

export const OtherBusinessComponent = () => {
  return (
    <Row className="px-3 py-1">
      <Col>
        <Card>
          <h5 className="p-3 m-0">Altre aziende consultate</h5>
          <Row className="justify-content-center">
            <Col xs={10}>
              <ListGroup variant="flush">
                {/* map delle aziende */}
                <SideBarItemComponent />
                <SideBarItemComponent />
                <SideBarItemComponent />
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
