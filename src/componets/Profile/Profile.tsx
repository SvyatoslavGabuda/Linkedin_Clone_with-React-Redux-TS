import "./profile.scss";
import { ProfileActivity } from "./ProfileComponents/ProfileActivity/ProfileActivity";
import { ProfileCard } from "./ProfileComponents/ProfileCard/ProfileCard";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_TO_ALLPROFILE, ADD_TO_GENERALPROFILE, ADD_TO_MYPROFILE } from "../../app/reducers/allProfileReduce";
import { useParams } from "react-router-dom";
import { ProfileSideBar } from "./ProfileComponents/ProfileSideBar/ProfileSideBar";
import { ProfileModale } from "./ProfileComponents/ProfileModale/ProfileModale";
import { useAppDispatch } from "../../app/hooks";
import { Row } from "react-bootstrap";
import { GetExperience } from "./ProfileComponents/ProfileExperience/Experience/GetExperience";
import { useAppSelector } from "../../app/hooks";

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
  // stateLocali A PROFILE
  const [allProfile, setAllProfile] = useState<Iprofile[]>();
  const [myProfile, setMyProfile] = useState<Iprofile>();
  const [generalProfile, setGeneralProfile] = useState<Iprofile>();
  //params
  const params = useParams();

  //dispatch
  const dispatch = useAppDispatch();
  //fetch tutti i profili
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
      } else {
        console.log("erro");
      }
    } catch (error) {
      console.log(error);
    }
  };
  //fetch Profilo in base al BEARER
  const myProfileFetch = async () => {
    try {
      const response = await fetch(url + "me", {
        headers: {
          Authorization: process.env.REACT_APP_BEARER || "nonandra",
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log("myprofle", data);
        setMyProfile(data);
        dispatch({ type: ADD_TO_MYPROFILE, payload: data });
      }
    } catch (error) {}
  };
  //fetch PROFILO IN base al id
  const idProfileFetch = async () => {
    try {
      const response = await fetch(url + params.id, {
        headers: {
          Authorization: process.env.REACT_APP_BEARER || "nonandra",
        },
      });
      if (response.ok) {
        const data = await response.json();

        setGeneralProfile(data);
        dispatch({ type: ADD_TO_GENERALPROFILE, payload: data });
      }
    } catch (error) {}
  };

  useEffect(() => {
    profileFetch();
    myProfileFetch();
    //dispatch(profileFetch());
  }, []);

  useEffect(() => {
    idProfileFetch();
  }, [params]);

  const currentProfile: Iprofile = useAppSelector((state) => state.profile.myProfile);

  return (
    <>
      <GetExperience />
      <ProfileModale />
      <Row>
        <ProfileCard profile={currentProfile} />
        <ProfileSideBar />
      </Row>
    </>
  );
};
export default Profile;
