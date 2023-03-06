import "./jobs.scss";
import { useEffect } from "react";
import { useAppDispatch } from "../../app/hooks";
import { jobsFetch } from "../../app/reducers/jobsSlice";

export const Jobs = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(jobsFetch(20));
  });
  return <>Jobs</>;
};
