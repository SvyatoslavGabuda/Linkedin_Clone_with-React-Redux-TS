import "./profile.scss";
import { ProfileCard } from "./ProfileComponents/ProfileCard/ProfileCard";
import { useEffect, useState } from "react";
import {
  ADD_TO_ALLPROFILE,
  ADD_TO_GENERALPROFILE,
  ADD_TO_MYPROFILE,
  HANDLE_LOAD_ALLPROFILE,
  HANDLE_LOAD_MYPROFILE,
} from "../../app/reducers/allProfileReduce";
import { useParams } from "react-router-dom";
import { ProfileSideBar } from "./ProfileComponents/ProfileSideBar/ProfileSideBar";
import { ProfileModale } from "./ProfileComponents/ProfileModale/ProfileModale";
import { useAppDispatch } from "../../app/hooks";
import { Row } from "react-bootstrap";
import { GetExperience } from "./ProfileComponents/ProfileExperience/Experience/GetExperience";
import { useAppSelector } from "../../app/hooks";
import { ExperienceModalComponent } from "./ProfileComponents/ProfileExperience/ExperienceModalComponenent";
import { ExperiencePutModalComponent } from "./ProfileComponents/ProfileExperience/ExperiencePutModalComponent";
import useDocumentTitle from "../../app/useDocumentTitle";
import { expFetc } from "../../app/reducers/experienceSlice";

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
    dispatch({ type: HANDLE_LOAD_ALLPROFILE, payload: true });
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: process.env.REACT_APP_BEARER || "nonandra",
        },
      });
      if (response.ok) {
        const data = await response.json();
        // console.log(data);
        setAllProfile(data);
        dispatch({ type: ADD_TO_ALLPROFILE, payload: data });
      } else {
        console.log("erro");
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: HANDLE_LOAD_ALLPROFILE, payload: false });
    }
  };
  //fetch Profilo in base al BEARER
  const myProfileFetch = async () => {
    dispatch({ type: HANDLE_LOAD_MYPROFILE, payload: true });
    try {
      const response = await fetch(url + "me", {
        headers: {
          Authorization: process.env.REACT_APP_BEARER || "nonandra",
        },
      });
      if (response.ok) {
        const data = await response.json();
        // console.log("myprofle", data);
        setMyProfile(data);
        dispatch({ type: ADD_TO_MYPROFILE, payload: data });
        dispatch(expFetc(data._id));
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: HANDLE_LOAD_MYPROFILE, payload: false });
    }
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
        dispatch(expFetc(data._id));
      }
    } catch (error) {}
  };

  const upDateState = useAppSelector((state) => state.upDate.numberOfUpdate);

  useEffect(() => {
    profileFetch();
    myProfileFetch();
    //dispatch(profileFetch());
  }, [upDateState]);

  useEffect(() => {
    idProfileFetch();
  }, [params]);

  const currentProfile: Iprofile = useAppSelector((state) => state.profile.myProfile);

  const clickedProfile: Iprofile = useAppSelector((state) => state.profile.generalProfile);

  let titolocondizionale = "";

  if (params.id === "me") {
    titolocondizionale = `${myProfile?.name} ${myProfile?.surname} | `;
  } else if (params.id !== "me") {
    titolocondizionale = `${clickedProfile?.name} ${clickedProfile?.surname} | `;
  }

  useDocumentTitle(`${titolocondizionale} LinkedIn`);

  return (
    <>
      <GetExperience />
      <ProfileModale />
      <ExperienceModalComponent />
      <ExperiencePutModalComponent />
      <Row>
        {params.id === "me" ? <ProfileCard profile={currentProfile} /> : <ProfileCard profile={clickedProfile} />}
        <ProfileSideBar />
      </Row>
    </>
  );
};
export default Profile;
