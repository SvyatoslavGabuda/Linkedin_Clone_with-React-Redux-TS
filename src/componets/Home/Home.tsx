import { HomeLeft } from "./HomeComponents/HomeLeft";
import { HomeMid } from "./HomeComponents/HomeMid";
import { Row } from "react-bootstrap";
import { HomeRight } from "./HomeComponents/HomeRight";

export const Home = () => {
  return (
    <>
      <Row>
        <HomeLeft />
        <HomeMid />
        <HomeRight />
      </Row>
    </>
  );
};
