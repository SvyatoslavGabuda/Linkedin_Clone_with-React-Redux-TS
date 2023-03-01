import { HomeLeftComponent } from "./HomeComponents/HomeLeftComponent";
import { HomeMid } from "./HomeComponents/HomeMid";
import { Row } from "react-bootstrap";
import { HomeRight } from "./HomeComponents/HomeRight";

export const Home = () => {
  return (
    <>
      <Row>
        <HomeLeftComponent />
        <HomeMid />
        <HomeRight />
      </Row>
    </>
  );
};
