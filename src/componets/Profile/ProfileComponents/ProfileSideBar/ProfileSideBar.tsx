import "./profileSideBar.scss";
import { Col } from "react-bootstrap";
import { UpperSectionComponent } from "./SideBarComponents/UpperSectionComponent";
import { OtherBusinessComponent } from "./SideBarComponents/OtherBusinessComponents";
import { OtherPersonsComponent } from "./SideBarComponents/OtherPersonsComponent";
import { GroupsInterestsComponent } from "./SideBarComponents/GroupsInterestsComponent";
import { useAppSelector } from "../../../../app/hooks";
import { Iprofile } from "../../Profile";

export const ProfileSideBar = () => {
  const fetchedProfiles = useAppSelector((state) => state.profile.allProfile);
  const myProfiles = [...fetchedProfiles];
  console.log("based", myProfiles);
  const randomizeIt = (profiles: Iprofile[]) => {
    for (let i = profiles.length - 1; i > 0; i--) {
      let randomIndex = Math.floor(Math.random() * (i + 1));
      [profiles[i], profiles[randomIndex]] = [profiles[randomIndex], profiles[i]];
    }
    console.log("random", profiles);
  };

  return (
    <>
      <Col xs={12} md={5} lg={4}>
        <UpperSectionComponent />
        <OtherBusinessComponent />
        <OtherPersonsComponent />
        <GroupsInterestsComponent />
      </Col>
      {fetchedProfiles.length > 0 && randomizeIt(myProfiles)}
    </>
  );
};
