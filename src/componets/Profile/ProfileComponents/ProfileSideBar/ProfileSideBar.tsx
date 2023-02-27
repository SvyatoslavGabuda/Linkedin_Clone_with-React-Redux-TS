import "./profileSideBar.scss";
import { Col } from "react-bootstrap";
import { UpperSectionComponent } from "./SideBarComponents/UpperSectionComponent";
import { OtherBusinessComponent } from "./SideBarComponents/OtherBusinessComponents";
import { OtherPersonsComponent } from "./SideBarComponents/OtherPersonsComponent";
import { GroupsInterestsComponent } from "./SideBarComponents/GroupsInterestsComponent";

export const ProfileSideBar = () => {
  return (
    <Col xs={12} md={4} style={{ backgroundColor: "#F3F2EF" }}>
      <UpperSectionComponent />
      <OtherBusinessComponent />
      <OtherPersonsComponent />
      <GroupsInterestsComponent />
    </Col>
  );
};
