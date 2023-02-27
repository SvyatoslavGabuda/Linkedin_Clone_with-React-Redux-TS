import "./profile.scss";
import { ProfileActivity } from "./ProfileComponents/ProfileActivity/ProfileActivity";
import { ProfileCard } from "./ProfileComponents/ProfileCard/ProfileCard";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_TO_ALLPROFILE } from "../../app/reducers/allProfileReduce";

const url = "https://striveschool-api.herokuapp.com/api/profile/";

export interface Iprofile {
  _id: string;
  name: string;
  surname: string;
  email: string;
  username: string;
  title: string;
  bio: string;
  area: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

const Profile = () => {
  const [allProfile, setAllProfile] = useState<Iprofile[]>();

  const dispatch = useDispatch();
  const profileFetch = async () => {
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: process.env.REACT_APP_BEARER || "nonandra",
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setAllProfile(data);
        dispatch({ type: ADD_TO_ALLPROFILE, payload: data });
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
