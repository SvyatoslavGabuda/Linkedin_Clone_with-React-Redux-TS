import { Row, Col, ListGroup, Card } from "react-bootstrap";
import { Iprofile } from "../../../Profile";
import { SideBarItemComponent } from "./SideBarItemComponent";

interface OtherPersonsProps {
  profiles: Iprofile[];
}

export const OtherPersonsComponent = (props: OtherPersonsProps) => {
  return (
    <Row className="py-1 px-md-3 px-lg-4">
      <Col className="p-0">
        <Card>
          <h5 className="p-3 m-0">
            Persone che potresti
            <br /> conoscere
          </h5>
          <Row className="justify-content-center">
            <Col xs={10}>
              <ListGroup variant="flush">
                {props.profiles.slice(6, 12).map((item, i) => (
                  <SideBarItemComponent item={item} key={i} />
                ))}
              </ListGroup>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};
