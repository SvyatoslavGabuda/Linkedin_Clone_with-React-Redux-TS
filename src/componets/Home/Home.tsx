import { Link } from "react-router-dom";
import { Posts } from "./PostsS";
import { HomeLeft } from "./HomeComponents/HomeLeft";
import { CreatePost } from "./CreatePostsComp/CreatePost";

export const Home = () => {
  return (
    <>
      <div className="text-center mb-5">
        <img
          className="mb-3"
          src="https://img.freepik.com/premium-photo/question-will-internet-go-away-banner-men-s-hand-with-blurred-background-link-crash-crisis-client-ai-tech-speed-risk-free-globe-cable-line-cyber-device-wifi-net_75939-893.jpg?w=360"
          alt="Roba carina"
        />
        <h2 className="text-center">Hai già finito l'internet!</h2>
        <Link to="/profile/me">
          <h3 className="text-center">Visita il tuo profilo</h3>
        </Link>
        <h6 className="text-center mb-5">
          Se vuoi, oppure rimani qua a fissare il nulla per un altro po!
        </h6>
      </div>

      <HomeLeft />
    </>
  );
};
