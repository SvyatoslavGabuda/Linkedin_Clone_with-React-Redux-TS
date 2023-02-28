import { useEffect } from "react";
import { useAppDispatch } from "../../app/hooks";
import { postsFetc } from "../../app/reducers/postsSlice";
export const Posts = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(postsFetc());
  }, []);
  return (
    <>
      {" "}
      <h2>mypost</h2>
    </>
  );
};
