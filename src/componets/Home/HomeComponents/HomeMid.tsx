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

export const HomeMid = () => {
  const NewsArrData = useAppSelector((state) => state.allPosts.allPosts).slice(-50);
  const MyProfile: Iprofile = useAppSelector((state) => state.profile.myProfile);

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
              <Col className="bg-white border border-1 rounded rounded-3 overflow-hidden my-2 p-0" key={Singlepost._id}>
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
                      <NavDropdown title="..." align={"end"} className="fs-2">
                        <div className="HomeMidDropDwon">
                          <Link to="/">Salva</Link>
                        </div>
                        <div className="HomeMidDropDwon">
                          <Link to="/">Copia link al post</Link>
                        </div>
                        <div className="HomeMidDropDwon">
                          <Link to="/">Incorpora questo post</Link>
                        </div>
                        <div className="HomeMidDropDwon">
                          <Link to="/">Non voglio vederlo</Link>
                        </div>
                        <div className="HomeMidDropDwon">
                          <Link to="/">Perchè vedo questo annuncio?</Link>
                        </div>
                        <div className="HomeMidDropDwon">
                          <Link to="/">Segnala post</Link>
                        </div>
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
