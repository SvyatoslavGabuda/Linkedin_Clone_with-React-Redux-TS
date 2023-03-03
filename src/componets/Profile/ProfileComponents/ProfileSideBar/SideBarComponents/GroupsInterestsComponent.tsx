import { Row, Col, Card, ListGroup } from "react-bootstrap";

import { Iprofile } from "../../../Profile";
import { SideBarItemComponent } from "./SideBarItemComponent";

interface GroupsInterestsProps {
  profiles: Iprofile[];
}

export const GroupsInterestsComponent = (props: GroupsInterestsProps) => {
  return (
    <Row className="py-1 px-md-3 px-lg-4">
      <Col className="p-0">
        <Card>
          <h5 className="p-3 m-0">Altre aziende consultate</h5>
          <Row className="justify-content-center">
            <Col xs={10}>
              <ListGroup variant="flush">
                <SideBarItemComponent item={props.profiles[30]} />
                <SideBarItemComponent item={props.profiles[35]} />
              </ListGroup>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};
