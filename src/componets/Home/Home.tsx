import { HomeLeftComponent } from "./HomeComponents/HomeLeftComponent";
import { HomeMid } from "./HomeComponents/HomeMid";
import { Row } from "react-bootstrap";
import { HomeRight } from "./HomeComponents/HomeRight";
import useDocumentTitle from "../../app/useDocumentTitle";

export const Home = () => {
  useDocumentTitle(`Feed | LinkedIn`);
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
