import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../app/hooks";
import { expFetc, save } from "../../../../../app/reducers/experienceSlice";

export const GetExperience = () => {
  const url = "https://striveschool-api.herokuapp.com/api/profile/";
  const idProva = "5fc4af0bb708c200175de88e";

  const myProfile = useAppSelector((state) => state.profile.myProfile);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(expFetc(idProva));
  }, []);
  return <></>;
};
