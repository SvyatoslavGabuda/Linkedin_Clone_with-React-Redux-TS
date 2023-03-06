import { Row } from "react-bootstrap";
import { ReteLeftSideBar } from "./ReteLeftSIdeBar";
import { ReteMidPart } from "./ReteMidPart";

export const Rete = () => {
  return (
    <Row>
      <ReteLeftSideBar />
      <ReteMidPart />
    </Row>
  );
};
