import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../app/hooks";
import { save } from "../../../../../app/reducers/experienceSlice";

export const GetExperience = () => {
  const url = "https://striveschool-api.herokuapp.com/api/profile/";
  const idProva = "5fc4af0bb708c200175de88e";

  const myProfile = useAppSelector((state) => state.profile.myProfile);
  const dispatch = useAppDispatch();
  const fetchExperience = async () => {
    try {
      const response = await fetch(url + idProva + "/experiences", {
        headers: {
          Authorization: process.env.REACT_APP_BEARER || "nonandra",
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log("experience ", data);
        dispatch(save(data));
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
