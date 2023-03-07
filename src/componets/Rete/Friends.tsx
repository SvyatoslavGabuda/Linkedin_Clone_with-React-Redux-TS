import { Row, Col } from "react-bootstrap";
import { useAppSelector } from "../../app/hooks";
import { Iprofile } from "../Profile/Profile";
import { SingleFriend } from "./SingleFriend";

export const Friends = () => {
  const friends = useAppSelector((state) => state.friends.Favfriends);

  return (
    <Row>
      <Col className="bg-white border border-1 rounded-3 ReteAllFriendsContainer">
        <div className="d-flex justify-content-between mx-2 my-3">
          <div>
            <h5>{friends.length} collegamenti</h5>
            <p>Ordina per:</p>
          </div>
          <div className="d-flex align-items-end ReteInputCOntainer">
            <input type="text" placeholder="Cerca per nome" className="me-2" />
            <p>Esegui la ricerca usando i filtri</p>
          </div>
        </div>
        {friends.length > 0 && friends.map((Friend: Iprofile) => <SingleFriend friend={Friend} />)}
      </Col>
    </Row>
  );
};
