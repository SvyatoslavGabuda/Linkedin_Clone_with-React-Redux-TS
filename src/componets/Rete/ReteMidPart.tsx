import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useAppSelector } from "../../app/hooks";
import { Iprofile } from "../Profile/Profile";
import { ReteSpinner } from "./ReteSpinners/ReteSpinners";
import { SingleReteProfileCard } from "./SingleReteProfileCard";

export const ReteMidPart = () => {
  const allProfile = useAppSelector((state) => state.profile.allProfile);
  const [randomizedArray, setRandomizedArray] = useState<Iprofile[]>([]);
  const [profileToShow, setProfileToShow] = useState<Iprofile[]>([]);
  const [next, setNext] = useState<number>(0);
  const [profileShowed, setProfileShowed] = useState<number>(8);
  const [arryForHoldingProfile, setArryForHoldingProfile] = useState<Iprofile[]>([]);

  const loopWithSlice = (start: number, maxToAdd: number) => {
    const remainingProfiles = allProfile.slice(start);
    const toAdd = Math.min(maxToAdd, remainingProfiles.length);
    const slicedProfile = remainingProfiles.slice(0, toAdd);
    const newProfiles = slicedProfile.filter(
      (profile: Iprofile) => !arryForHoldingProfile.some((p) => p._id === profile._id)
    );
    setArryForHoldingProfile((prev) => [...prev, ...newProfiles]);
    setProfileShowed((prev) => prev + toAdd);
    setNext((prev) => prev + toAdd);
  };

  const handleShowMorePosts = () => {
    loopWithSlice(next, profileShowed);
  };

  useEffect(() => {
    loopWithSlice(0, profileShowed);
  }, [allProfile]);

  return (
    <Col xl={9} className="bg-white border border-1 rounded">
      <Row className="mt-3 mb-2">
        <div className="d-flex justify-content-between">
          <h5>Persone che potresti conoscere</h5>
          <button className="ReteMidPartNutton">Vedi Tutti</button>
        </div>
      </Row>
      <Row>
        {arryForHoldingProfile.length > 0 ? (
          arryForHoldingProfile.map((SingleProfile: Iprofile) => (
            <SingleReteProfileCard SingleProfile={SingleProfile} />
          ))
        ) : (
          <>
            <ReteSpinner />
            <ReteSpinner />
            <ReteSpinner />
            <ReteSpinner />
            <ReteSpinner />
            <ReteSpinner />
            <ReteSpinner />
            <ReteSpinner />
          </>
        )}
        {arryForHoldingProfile.length > 0 && <button onClick={handleShowMorePosts}>Mostra Altro</button>}
      </Row>
    </Col>
  );
};
