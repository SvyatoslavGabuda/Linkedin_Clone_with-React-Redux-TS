import { differenceInHours, differenceInMinutes } from "date-fns";
import { Col, NavDropdown } from "react-bootstrap";
import { BiWorld } from "react-icons/bi";
import { BsBookmark, BsCodeSlash, BsEyeSlashFill, BsFlagFill } from "react-icons/bs";
import { FaRegCommentDots, FaTrashAlt } from "react-icons/fa";
import { FiAlertTriangle } from "react-icons/fi";
import { HiOutlinePencil } from "react-icons/hi2";
import { RiSendPlaneFill } from "react-icons/ri";
import { SlLike, SlLink } from "react-icons/sl";
import { TbArrowsRandom } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { addFocusPosts, showPutPosts } from "../../../../app/reducers/postsPutModSlice";
import { Iposts } from "../../../../app/reducers/postsSlice";
import { postsDELETE } from "../HomeMid";
import { PostCommentSectionComponent } from "./PostCommentSectionComponent";
import { useState } from "react";
import { Iprofile } from "../../../Profile/Profile";

interface SinglePostProps {
  post: Iposts;
}

export const SinglePostComponent = ({ post }: SinglePostProps) => {
  const MyProfile: Iprofile = useAppSelector((state) => state.profile.myProfile);
  const storePutPosts = useAppSelector((state) => state.postPutModale);
  const [showComment, setShowComment] = useState(false);
  const dispatch = useAppDispatch();

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
    <Col className="bg-white border border-1 rounded rounded-3 my-2 p-0" id="postCard" key={post._id}>
      <div>
        {/* Profile */}

        <div className="d-flex HomeMidProfileCont justify-content-between px-3 pt-3">
          <div className="d-flex">
            <div className="me-2">
              <img src={post.user.image} alt="ProfilePic" />
            </div>
            <div>
              <Link to={"/profile/" + (post.user?._id === MyProfile._id ? MyProfile._id : post.user._id)}>
                <h3>
                  {post.user.name} {post.user.surname}
                </h3>
              </Link>
              <p>{post.user.title}</p>
              <div className="d-flex">
                <p className="me-1">{posted(post.createdAt.toString())}</p>
                <p>
                  {" "}
                  · <BiWorld />
                </p>
              </div>
            </div>
          </div>
          <div>
            <NavDropdown
              title="..."
              align={"end"}
              className="fs-2"
              onClick={() => {
                dispatch(addFocusPosts(post));
              }}
            >
              <div className="HomeMidDropDwon">
                <Link to="/">
                  <BsBookmark /> Salva
                </Link>
              </div>
              <div className="HomeMidDropDwon">
                <Link to="/">
                  <SlLink /> Copia link al post
                </Link>
              </div>
              <div className="HomeMidDropDwon">
                <Link to="/">
                  <BsCodeSlash /> Incorpora questo post
                </Link>
              </div>
              {post.user._id === MyProfile._id ? (
                <div
                  className="HomeMidDropDwon"
                  onClick={() => {
                    postsDELETE(storePutPosts.focus._id);
                  }}
                >
                  <Link to="/">
                    <FaTrashAlt /> Elimina
                  </Link>
                </div>
              ) : (
                <div className="HomeMidDropDwon">
                  <Link to="/">
                    <BsEyeSlashFill /> Non voglio vederlo
                  </Link>
                </div>
              )}
              {post.user._id !== MyProfile._id ? (
                <div className="HomeMidDropDwon">
                  <Link to="/">
                    <FiAlertTriangle /> Perchè vedo questo annuncio?
                  </Link>
                </div>
              ) : (
                ""
              )}
              <div className="HomeMidDropDwon">
                <Link to="/">
                  <BsFlagFill /> Segnala post
                </Link>
              </div>
              {post.user._id === MyProfile._id ? (
                <div
                  className="HomeMidDropDwon"
                  onClick={() => {
                    dispatch(showPutPosts());
                  }}
                >
                  <Link to="/">
                    <HiOutlinePencil /> Modifica
                  </Link>
                </div>
              ) : (
                ""
              )}
            </NavDropdown>
          </div>
        </div>

        {/* Profile */}

        {/* Text */}

        <div className="px-3 pb-2">{post.text}</div>

        {/* Text */}

        {/* Img */}

        <div>{post.image && <img className="w-100" src={post.image} alt="" />}</div>

        {/* Img */}

        {/* Buttons */}

        <div className="HomeMidButtonsCont d-flex justify-content-evenly rounded rounded-3">
          <button className="HomeMidButton d-none d-sm-block">
            <div className="d-flex align-items-center">
              <div>
                <SlLike className="HomeMidIcon me-1" />
              </div>
              <div>Consiglia</div>
            </div>
          </button>
          <button className="HomeMidButton" onClick={() => setShowComment(!showComment)}>
            <div className="d-flex align-items-center">
              <div>
                <FaRegCommentDots className="HomeMidIcon me-1" />
              </div>
              <div>Commenta</div>
            </div>
          </button>
          <button className="HomeMidButton d-none d-lg-block">
            <div className="d-flex align-items-center">
              <div>
                <TbArrowsRandom className="HomeMidIcon me-1" />
              </div>
              <div>Diffondi il post</div>
            </div>
          </button>
          <button className="HomeMidButton">
            <div className="d-flex align-items-center">
              <div>
                <RiSendPlaneFill className="HomeMidIcon me-1" />
              </div>
              <div>Invia</div>
            </div>
          </button>
        </div>
        {showComment && <PostCommentSectionComponent postId={post._id} />}
        {/* Buttons */}
      </div>
    </Col>
  );
};
