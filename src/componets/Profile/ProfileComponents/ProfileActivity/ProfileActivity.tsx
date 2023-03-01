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

export const ProfileActivity = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const alltheposts = useAppSelector((state) => state.allPosts.allPosts);
  const myProfile = useAppSelector((state) => state.profile.myProfile);

  const getLatestPost = () => {
    let latestPost = [...alltheposts].reverse().filter((el) => el.user?._id === (params.id === "me" ? myProfile._id : params.id));
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
    <Row className="border border-1 rounded mb-2 bg-white">
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
      {alltheposts?.length > 0 &&
        getLatestPost().map((Singlepost) => (
          <div className="border-bottom">
            {/* Profile */}

            <div className="d-flex HomeMidProfileCont justify-content-between px-3 pt-3">
              <div className="d-flex">
                <div className="me-2">
                  <img src={Singlepost.user.image} alt="ProfilePic" />
                </div>
                <div>
                  <Link to={"/profile/" + (Singlepost.user._id === myProfile._id ? myProfile._id : Singlepost.user._id)}>
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
              <img className="img-fluid" src="https://placekitten.com/300/200" alt="" />
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
        ))}
      <div className="p-0">
        <button className="Button4">Mostra tutte le attività {"->"} </button>
      </div>
    </Row>
  );
};
