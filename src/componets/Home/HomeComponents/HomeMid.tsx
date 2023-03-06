import { CreatePost } from "../CreatePostsComp/CreatePost";

import { Col, Form, InputGroup, NavDropdown, Row, Dropdown, Card } from "react-bootstrap";
import { BiWorld } from "react-icons/bi";
import { SlLike } from "react-icons/sl";
import { FaRegCommentDots } from "react-icons/fa";
import { TbArrowsRandom } from "react-icons/tb";
import { RiSendPlaneFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { Posts } from "../PostsS";
import "./HomeComponents.scss";
import { useAppSelector } from "../../../app/hooks";
import { Iprofile } from "../../Profile/Profile";
import { differenceInHours, differenceInMinutes } from "date-fns";
import { BsFlagFill, BsBookmark, BsCodeSlash, BsEyeSlashFill, BsEmojiNeutral, BsImage, BsClock } from "react-icons/bs";
import { SlLink } from "react-icons/sl";
import { FiAlertTriangle } from "react-icons/fi";
import { FaTrashAlt } from "react-icons/fa";
import { HiOutlinePencil } from "react-icons/hi2";
import { addFocusPosts, showPutPosts } from "../../../app/reducers/postsPutModSlice";
import { useAppDispatch } from "../../../app/hooks";
import { SpinnerSuper } from "../spinner/SpinnerSuper";
import { postsFetc } from "../../../app/reducers/postsSlice";
import { IoIosRocket } from "react-icons/io";
import { PostCommentComponent } from "./HomeMidComponent/PostCommentComponent";
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
  const loadingState = useAppSelector((state) => state.allPosts.status);

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
          {NewsArrData &&
            OnlyOnePostForUser.map((Singlepost) => (
              <Col className="bg-white border border-1 rounded rounded-3 my-2 p-0" key={Singlepost._id}>
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
                            "/profile/" + (Singlepost.user._id === MyProfile._id ? MyProfile._id : Singlepost.user._id)
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

                  <div>{Singlepost.image && <img className="w-100" src={Singlepost.image} alt="" />}</div>

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
                    <button className="HomeMidButton">
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

                  {/* Buttons */}
                </div>
                <div className="postCommentContainer">
                  <div className="d-flex align-items-center">
                    <img
                      className="me-2"
                      src={MyProfile.image}
                      alt=""
                      style={{ width: 35 + "px", borderRadius: 50 + "px" }}
                    />
                    <InputGroup className="border rounded d-flex align-items-center me-2 py-2">
                      <Form.Control
                        className="border-0 rounded me-1 commentsInput"
                        placeholder="Aggiungi un commento..."
                      />
                      <span className="commentsIconContainer">
                        <BsEmojiNeutral className="fs-2 me-2 text-secondary" />
                        <BsImage className="fs-2 me-2 text-secondary" />
                      </span>
                    </InputGroup>
                  </div>
                  <div className="my-2 commentsDropdown">
                    <Dropdown>
                      <Dropdown.Toggle id="dropdown-basic" className="dropFilter">
                        Filtra
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1" className="d-flex align-items-center">
                          <IoIosRocket className="fs-2 dropCommentIcon" />
                          <span className="ms-3 commentsDropdownText">
                            <h6 className="mb-0">Più rilevanti</h6>
                            <p>Vedi i commenti più pertinenti</p>
                          </span>
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2" className="d-flex align-items-center">
                          <BsClock className="fs-2 dropCommentIcon" />

                          <span className="ms-3 commentsDropdownText">
                            <h6 className="mb-0">Più recenti</h6>
                            <p>Vedi tutti i commenti (i più recenti sono in alto)</p>
                          </span>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>

                  <Row className="d-flex justify-content-center">
                    <PostCommentComponent />
                  </Row>
                </div>
              </Col>
            ))}
        </Row>
      </Col>
    </>
  );
};
