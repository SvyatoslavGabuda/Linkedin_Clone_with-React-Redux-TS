import { Row, Col, ListGroup, Card } from "react-bootstrap";
import { SideBarItemComponent } from "./SideBarItemComponent";

export const OtherPersonsComponent = () => {
  return (
    <Row className="px-3 py-1">
      <Col>
        <Card>
          <h5 className="p-3 m-0">
            Persone che potresti
            <br /> conoscere
          </h5>
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
