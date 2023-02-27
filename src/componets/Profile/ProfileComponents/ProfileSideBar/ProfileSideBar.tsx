import "./profileSideBar.scss";
import { Row, Col } from "react-bootstrap";
import { UpperSectionComponent } from "./SideBarComponents/UpperSectionComponent";
import { OtherBusinessComponent } from "./SideBarComponents/OtherBusinessComponents";

export const ProfileSideBar = () => {
  return (
    <Col xs={12} md={4} style={{ backgroundColor: "#F3F2EF" }}>
      <UpperSectionComponent />
      <OtherBusinessComponent />
    </Col>
  );
};
