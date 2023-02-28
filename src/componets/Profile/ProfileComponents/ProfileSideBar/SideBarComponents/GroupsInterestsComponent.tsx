import { Row, Col, Card, ListGroup } from "react-bootstrap";
import { useAppSelector } from "../../../../../app/hooks";
import { Iprofile } from "../../../Profile";
import { SideBarItemComponent } from "./SideBarItemComponent";

export const GroupsInterestsComponent = () => {
  const allProfileData: Iprofile[] = useAppSelector((state) => state.profile.allProfile).slice(13, 15);
  return (
    <Row className="py-1 px-md-3 px-lg-4">
      <Col className="p-0">
        <Card>
          <h5 className="p-3 m-0">Altre aziende consultate</h5>
          <Row className="justify-content-center">
            <Col xs={10}>
              <ListGroup variant="flush">
                {allProfileData.map((item, i) => (
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
