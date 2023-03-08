import "./profileActivity.scss";
import { NavDropdown, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { tooglePosts } from "../../../../app/reducers/postsModSlice";
import { useDispatch } from "react-redux";
import { PostsModal } from "../../../Home/CreatePostsComp/PostsModal";
import { useAppSelector } from "../../../../app/hooks";
import { Link } from "react-router-dom";
import { BiWorld } from "react-icons/bi";
import { SlLike } from "react-icons/sl";
import { FaRegCommentDots } from "react-icons/fa";
import { TbArrowsRandom } from "react-icons/tb";
import { RiSendPlaneFill } from "react-icons/ri";
import { differenceInHours, differenceInMinutes } from "date-fns";
import { BsFlagFill, BsBookmark, BsCodeSlash, BsEyeSlashFill } from "react-icons/bs";
import { SlLink } from "react-icons/sl";
import { FiAlertTriangle } from "react-icons/fi";
import { FaTrashAlt } from "react-icons/fa";
import { HiOutlinePencil } from "react-icons/hi2";
import { PostsPutModal } from "../../../Home/CreatePostsComp/PostsPutModal";
import { postsDELETE } from "../../../Home/HomeComponents/HomeMid";
import { addFocusPosts, showPutPosts } from "../../../../app/reducers/postsPutModSlice";
import { ActivityImgMod } from "./ActivityImgMod";
import { useState } from "react";
import { postsFetc } from "../../../../app/reducers/postsSlice";
import { SinglePostComponent } from "../../../Home/HomeComponents/HomeMidComponent/SinglePostComponent";

export const ProfileActivity = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);

  const alltheposts = useAppSelector((state) => state.allPosts.allPosts);
  const myProfile = useAppSelector((state) => state.profile.myProfile);
  const storePutPost = useAppSelector((state) => state.postPutModale);

  const getLatestPost = () => {
    let latestPost = [...alltheposts]
      .reverse()
      .filter((el) => el.user?._id === (params.id === "me" ? myProfile._id : params.id));
    return [latestPost[0]];
  };

  const Oggi = new Date();

  const posted = (date: string) => {
    if (differenceInMinutes(Oggi, new Date(date)) < 1) {
      return "Adesso";
    } else if (differenceInHours(Oggi, new Date(date)) < 1) {
      let minuti = differenceInMinutes(Oggi, new Date(date)) > 1 ? " minuti" : " minuto";
      return differenceInMinutes(Oggi, new Date(date)) + minuti;
    } else {
      let ore = differenceInHours(Oggi, new Date(date)) > 1 ? " ore" : " ora";
      return differenceInHours(Oggi, new Date(date)) + ore;
    }
  };

  return (
    <>
      <Row className="border border-1 rounded mb-2 bg-white" id="activityRow">
        <div className="px-4 pt-4 pb-3 border-bottom">
          <div className="mb-2 d-flex justify-content-between align-items-center">
            <div>
              <div>
                <h3 className="fs-4 mb-0">Attività</h3>
              </div>
              <div className="d-flex Follower">
                <p>
                  <a href="/">10 follower</a>
                </p>
              </div>
            </div>
            <div>
              {params.id === "me" && (
                <>
                  <button
                    className="rounded-pill py-1 me-2 Button2"
                    onClick={() => {
                      dispatch(tooglePosts());
                    }}
                  >
                    Avvia un post
                  </button>
                  <PostsModal />
                </>
              )}
            </div>
          </div>
          <div className="d-flex mt-3">
            {params.id === "me" && (
              <div className="Follower">
                <p>
                  <a href="/">Pubblica qualcosa</a>
                </p>
                <p>I post recenti che condividi o commenti appariranno qui</p>
              </div>
            )}
            <div>{}</div>
          </div>
        </div>
        {getLatestPost()[0]?.user &&
          getLatestPost().map((Singlepost) => <SinglePostComponent post={Singlepost} key={Singlepost._id} />)}
        <div className="p-0">
          <button className="Button4">Mostra tutte le attività {"->"} </button>
        </div>
      </Row>
      <ActivityImgMod show={show} handleShow={handleShow} lastpost={getLatestPost()} />
      <PostsPutModal />
    </>
  );
};
