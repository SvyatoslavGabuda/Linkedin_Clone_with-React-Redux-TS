import { CreatePost } from "../CreatePostsComp/CreatePost";

import { Col, Row } from "react-bootstrap";

import { Posts } from "../PostsS";
import "./HomeComponents.scss";
import { useAppSelector } from "../../../app/hooks";
import { SpinnerSuper } from "../spinner/SpinnerSuper";
import { SinglePostComponent } from "./HomeMidComponent/SinglePostComponent";

export const postsDELETE = async (idPost: string) => {
  try {
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${idPost}`, {
      method: "DELETE",
      headers: {
        Authorization: process.env.REACT_APP_BEARER || "nonandra",
        "content-type": "application/json",
      },
    });
    if (response.ok) {
      console.log("Post successfully deleted");
    } else {
      console.log("something went wrong in the response of the post DELETE");
    }
  } catch (error) {
    console.log("fatal error in DELETE post");
  } finally {
    document.location.reload();
  }
};
export const HomeMid = () => {
  const NewsArrData = useAppSelector((state) => state.allPosts.allPosts).slice(-50);
  const OnlyOnePostForUser = [...new Map(NewsArrData.map((p) => [p.user._id, p])).values()];
  const loadingState: string = useAppSelector((state) => state.allPosts.status);

  return (
    <>
      <Posts />
      <Col>
        <Row>
          <CreatePost />
        </Row>
        <Row className="flex-column">
          {/* <SpinnerSuper />
          <SpinnerSuper />
          <SpinnerSuper /> */}
          {loadingState === "loading" && (
            <div className="text-center ">
              {/* <Spinner animation="grow" variant="info" /> */}
              <SpinnerSuper />
              <SpinnerSuper />
              <SpinnerSuper />
            </div>
          )}
          {NewsArrData && OnlyOnePostForUser.map((Singlepost) => <SinglePostComponent post={Singlepost} />)}
        </Row>
      </Col>
    </>
  );
};
