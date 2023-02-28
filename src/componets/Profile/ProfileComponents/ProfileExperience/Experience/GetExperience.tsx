import { useEffect } from "react";
import { useAppSelector } from "../../../../../app/hooks";

export interface Iexperience {
  _id: string;
  role: string;
  company: string;
  startDate: Date;
  description: string;
  area: string;
  username: string;
  user: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export const GetExperience = () => {
  const url = "https://striveschool-api.herokuapp.com/api/profile/";

  const myProfile = useAppSelector((state) => state.profile.myProfile);
  const fetchExperience = async () => {
    try {
      const response = await fetch(url + myProfile._id + "/experiences", {
        headers: {
          Authorization: process.env.REACT_APP_BEARER || "nonandra",
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log("experience ", data);
      } else {
        console.log("errorer");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchExperience();
  }, []);
  return (
    <>
      <h2>my GetExperience</h2>
    </>
  );
};
