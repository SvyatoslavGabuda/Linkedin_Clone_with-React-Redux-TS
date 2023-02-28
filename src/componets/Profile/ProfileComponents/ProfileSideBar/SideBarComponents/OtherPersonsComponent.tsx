import { Row, Col, ListGroup, Card } from "react-bootstrap";
import { useAppSelector } from "../../../../../app/hooks";
import { Iprofile } from "../../../Profile";
import { SideBarItemComponent } from "./SideBarItemComponent";

export const OtherPersonsComponent = () => {
  const allProfileData: Iprofile[] = useAppSelector((state) => state.profile.allProfile).slice(6, 12);
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
