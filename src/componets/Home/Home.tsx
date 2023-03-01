import { Link } from "react-router-dom";
import { Posts } from "./PostsS";
import { HomeLeft } from "./HomeComponents/HomeLeft";
import { Row } from "react-bootstrap";
import { HomeRight } from "./HomeComponents/HomeRight";
import { HomeMid } from "./HomeComponents/HomeMid";
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
