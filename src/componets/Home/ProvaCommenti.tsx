import { useEffect } from "react";
import { useAppDispatch } from "../../app/hooks";
import { commentFetch } from "../../app/reducers/commentSlice";

export const ProvaCommmenti = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(commentFetch({ metod: "GET", id: "1597808709" }));
  }, []);
  return (
    <>
      <h2> tutti i commenti</h2>
    </>
  );
};
