import { CreatePost } from "../CreatePostsComp/CreatePost";

import { Col, Row } from "react-bootstrap";

import { Posts } from "../PostsS";
import "./HomeComponents.scss";
import { useAppSelector } from "../../../app/hooks";
import { SpinnerSuper } from "../spinner/SpinnerSuper";
import { SinglePostComponent } from "./HomeMidComponent/SinglePostComponent";

import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import { Iposts } from "../../../app/reducers/postsSlice";

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
  // const NewsArrData = useAppSelector((state) => state.allPosts.allPosts).slice(-50);
  //setAllPostRev([...allpost].reverse());
  // const OnlyOnePostForUser = [...new Map(NewsArrData.map((p) => [p.user._id, p])).values()];
  const allpost = useAppSelector((state) => state.allPosts.allPosts);
  const [allPostRev, setAllPostRev] = useState<Iposts[]>([]);
  const loadingState: string = useAppSelector((state) => state.allPosts.status);
  const [postOffSet, setPostOffset] = useState(0);
  const [postPerPage, setPostPerPage] = useState(10);
  const endOffset = postOffSet + postPerPage;
  const curretPOSTS = allPostRev.slice(postOffSet, endOffset);
  const pageCount = Math.ceil(allPostRev.length / postPerPage);

  const handlePageClick = (e: any) => {
    const newOffset = (e.selected * postPerPage) % allPostRev.length;
    setPostOffset(newOffset);
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    setAllPostRev([...allpost].reverse());
  }, [allpost]);
  return (
    <>
      <Posts />
      <Col xs={12} md={8} xl={6}>
        <Row>
          <CreatePost />
        </Row>
        <Row className="flex-column">
          {loadingState === "loading" && (
            <div className="text-center ">
              {/* <Spinner animation="grow" variant="info" /> */}
              <SpinnerSuper />
              <SpinnerSuper />
              <SpinnerSuper />
            </div>
          )}

          {curretPOSTS && curretPOSTS.map((el) => <SinglePostComponent post={el} key={el._id} />)}
          {curretPOSTS && (
            <ReactPaginate
              breakLabel="&#8230;"
              breakClassName="linkPaginazione rounded-pill"
              previousLabel="<"
              nextLabel=">"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              pageCount={pageCount}
              pageLinkClassName="rounded-pill linkPaginazione"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakLinkClassName="threeDots"
              containerClassName="pagination justify-content-between"
              activeClassName="active"
            />
          )}
          {/* {NewsArrData &&
            OnlyOnePostForUser.map((Singlepost) => (
              <SinglePostComponent post={Singlepost} key={Singlepost._id} />
            ))} */}
        </Row>
      </Col>
    </>
  );
};
