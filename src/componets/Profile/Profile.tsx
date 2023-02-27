import "./profile.scss";
import { ProfileActivity } from "./ProfileComponents/ProfileActivity/ProfileActivity";
import { ProfileCard } from "./ProfileComponents/ProfileCard/ProfileCard";
import { useEffect } from "react";
import { profile } from "console";

const url = "https://striveschool-api.herokuapp.com/api/profile/";

interface Iprofile {}

const Profile = () => {
  //facciamo la fetch
  //salviamo nello store
  const profileFetch = async () => {
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: process.env.REACT_APP_BEARER,
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      }
    } catch (error) {}
  };
  useEffect(() => {
    profileFetch();
  }, []);
  return (
    <>
      <ProfileCard />
    </>
  );
};
export default Profile;
