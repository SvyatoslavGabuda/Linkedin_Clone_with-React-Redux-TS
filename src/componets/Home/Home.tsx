import { Link } from "react-router-dom";
import { Posts } from "./PostsS";
export const Home = () => {
  return (
    <>
      <Link to="/profile/me">
        <h2>home</h2>
      </Link>
      <Posts />
    </>
  );
};
