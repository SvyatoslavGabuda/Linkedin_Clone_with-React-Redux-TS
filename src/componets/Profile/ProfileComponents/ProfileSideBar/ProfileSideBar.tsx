import "./profileSideBar.scss";
import { Col, Row, Spinner } from "react-bootstrap";
import { UpperSectionComponent } from "./SideBarComponents/UpperSectionComponent";
import { OtherBusinessComponent } from "./SideBarComponents/OtherBusinessComponents";
import { OtherPersonsComponent } from "./SideBarComponents/OtherPersonsComponent";
import { GroupsInterestsComponent } from "./SideBarComponents/GroupsInterestsComponent";
import { useAppSelector } from "../../../../app/hooks";
import { Iprofile } from "../../Profile";
import { useState, useEffect } from "react";

export const ProfileSideBar = () => {
  const fetchedProfiles = useAppSelector((state) => state.profile.allProfile);
  const [randomizedArray, setRandomizedArray] = useState<Iprofile[]>([]);

  function shuffleArray(array: Iprofile[]) {
    let ordered = array.slice(0);
    let randomized = ordered
      .map((profile) => ({ profile, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ profile }) => profile);
    console.log(randomized);
    return randomized.filter((el) => el.name && el.surname && el.image);
  }
  useEffect(() => {
    if (fetchedProfiles.length !== 0) {
      setRandomizedArray(shuffleArray(fetchedProfiles));
    }
  }, [fetchedProfiles]);

  return (
    <>
      <Col xs={12} md={5} lg={4}>
        <UpperSectionComponent />
        {randomizedArray.length > 0 ? (
          <>
            {console.log("passing", randomizedArray)}
            <OtherBusinessComponent profiles={randomizedArray} />
            <OtherPersonsComponent profiles={randomizedArray} />
            <GroupsInterestsComponent profiles={randomizedArray} />
          </>
        ) : (
          <>
            <Row>
              <Col xs={12} className="d-flex flex-column align-items-center justify-content-between py-5">
                <Spinner animation="grow" variant="info" className="my-5" />
                <Spinner animation="grow" variant="info" className="my-5" />
                <Spinner animation="grow" variant="info" className="my-5" />
                <Spinner animation="grow" variant="info" className="my-5" />
                <Spinner animation="grow" variant="info" className="my-5" />
              </Col>
            </Row>
          </>
        )}
      </Col>
    </>
  );
};
