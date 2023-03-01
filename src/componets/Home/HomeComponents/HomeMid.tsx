import { CreatePost } from "../CreatePostsComp/CreatePost";

import { Col, NavDropdown, Row } from "react-bootstrap";
import { BiWorld } from "react-icons/bi";
import { SlLike } from "react-icons/sl";
import { FaRegCommentDots } from "react-icons/fa";
import { TbArrowsRandom } from "react-icons/tb";
import { RiSendPlaneFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Posts } from "../PostsS";
import PlaceHolderImg from "./Assets/Schermata 2022-10-07 alle 10.29.59-original.webp";
import "./HomeComponents.scss";
import { useAppSelector } from "../../../app/hooks";
import { Iprofile } from "../../Profile/Profile";
import { differenceInHours, differenceInMinutes } from "date-fns";
import { BsFlagFill, BsBookmark, BsCodeSlash, BsEyeSlashFill } from "react-icons/bs";
import { SlLink } from "react-icons/sl";
import { FiAlertTriangle } from "react-icons/fi";
import { FaTrashAlt } from "react-icons/fa";
import { HiOutlinePencil } from "react-icons/hi2";
import { addFocusPosts, showPutPosts } from "../../../app/reducers/postsPutModSlice";
import { useAppDispatch } from "../../../app/hooks";

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
  }
};
export const HomeMid = () => {
  const NewsArrData = useAppSelector((state) => state.allPosts.allPosts).slice(-50);
  const MyProfile: Iprofile = useAppSelector((state) => state.profile.myProfile);
  const storePutPosts = useAppSelector((state) => state.postPutModale);
  const dispatch = useAppDispatch();

  const OnlyOnePostForUser = [...new Map(NewsArrData.map((p) => [p.user._id, p])).values()];
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

  // storePutPosts.focus._id

  return (
    <>
      <Posts />
      <Col>
        <Row>
          <CreatePost />
        </Row>
        <Row className="flex-column">
          {NewsArrData &&
            OnlyOnePostForUser.map((Singlepost) => (
              <Col
                className="bg-white border border-1 rounded rounded-3 overflow-hidden my-2 p-0"
                key={Singlepost._id}
              >
                <div>
                  {/* Profile */}

                  <div className="d-flex HomeMidProfileCont justify-content-between px-3 pt-3">
                    <div className="d-flex">
                      <div className="me-2">
                        <img src={Singlepost.user.image} alt="ProfilePic" />
                      </div>
                      <div>
                        <Link
                          to={
                            "/profile/" +
                            (Singlepost.user._id === MyProfile._id
                              ? MyProfile._id
                              : Singlepost.user._id)
                          }
                        >
                          <h3>
                            {Singlepost.user.name} {Singlepost.user.surname}
                          </h3>
                        </Link>
                        <p>{Singlepost.user.title}</p>
                        <div className="d-flex">
                          <p className="me-1">{posted(Singlepost.createdAt.toString())}</p>
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
                          dispatch(addFocusPosts(Singlepost));
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
                        {Singlepost.user._id === MyProfile._id ? (
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
                        {Singlepost.user._id !== MyProfile._id ? (
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
                        {Singlepost.user._id === MyProfile._id ? (
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

                  <div className="px-3 pb-2">{Singlepost.text}</div>

                  {/* Text */}

                  {/* Img */}

                  <div>
                    <img className="img-fluid" src={PlaceHolderImg} alt="" />
                  </div>

                  {/* Img */}

                  {/* Buttons */}

                  <div className="HomeMidButtonsCont d-flex justify-content-evenly">
                    <button className="HomeMidButton">
                      <div className="d-flex align-items-center">
                        <div>
                          <SlLike className="HomeMidIcon me-1" />
                        </div>
                        <div>Consiglia</div>
                      </div>
                    </button>
                    <button className="HomeMidButton">
                      <div className="d-flex align-items-center">
                        <div>
                          <FaRegCommentDots className="HomeMidIcon me-1" />
                        </div>
                        <div>Commenta</div>
                      </div>
                    </button>
                    <button className="HomeMidButton">
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

                  {/* Buttons */}
                </div>
              </Col>
            ))}
        </Row>
      </Col>
    </>
  );
};
