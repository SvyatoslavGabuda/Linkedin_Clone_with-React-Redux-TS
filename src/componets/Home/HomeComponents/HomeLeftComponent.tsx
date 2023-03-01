import { Col } from "react-bootstrap";
import { HomeLeftLowerComponent } from "./HomeLeftComponents/HomeLeftLowerComponent";
import { HomeLeftUpperComponent } from "./HomeLeftComponents/HomeLeftUpperComponent";
export const HomeLeftComponent = () => {
  return (
    <Col xs={12} md={4} xl={3}>
      <HomeLeftUpperComponent />
      <HomeLeftLowerComponent />
    </Col>
  );
};
