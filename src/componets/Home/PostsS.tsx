import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { postsFetc } from "../../app/reducers/postsSlice";
export const Posts = () => {
  const dispatch = useAppDispatch();

  const upDateState = useAppSelector((state) => state.upDate.numberOfUpdate);
  useEffect(() => {
    dispatch(postsFetc());
  }, [upDateState]);
  return <></>;
};
