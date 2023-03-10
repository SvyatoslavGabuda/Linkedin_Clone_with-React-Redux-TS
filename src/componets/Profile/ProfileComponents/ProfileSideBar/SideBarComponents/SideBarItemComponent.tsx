import { Button, ListGroup } from "react-bootstrap";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { Iprofile } from "../../../Profile";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../../app/hooks";
import { MdOutlineDone } from "react-icons/md";

interface SideBarItemProps {
  item: Iprofile;
}

export const SideBarItemComponent = (props: SideBarItemProps) => {
  const Friends = useAppSelector((state) => state.friends.Favfriends);
  const dispatch = useAppDispatch();

  return (
    <ListGroup.Item className="sideBarItem py-3 px-md-0">
      <div className="sideBarCard d-flex align-items-center">
        <img className="img-fluid me-3 sideBarCardImg" src={props.item.image} alt="" />
        <span className="sideBarCardText">
          <Link to={"/profile/" + props.item._id} className="itemLink">
            <h4 className="m-0">{props.item.name + " " + props.item.surname}</h4>
          </Link>
          <p className="m-0 sideBarItemTitle">
            {props.item.title !== undefined && props.item.title !== "" ? props.item.title : "Nessuna professione"}
          </p>
        </span>
      </div>
      {!Friends.find((el: Iprofile) => el._id === props.item._id) && (
        <Button
          className="Button3 rounded-pill py-1 d-flex align-items-center"
          onClick={() => {
            dispatch({ type: "ADDFRIENDTOFAV", payload: props.item });
          }}
        >
          <BsFillPersonPlusFill />
          <p className="ms-1">Collegati</p>
        </Button>
      )}
      {Friends.find((el: Iprofile) => el._id === props.item._id) && (
        <Button
          className="Button6 d-flex align-items-center rounded-pill py-1"
          onClick={() => {
            dispatch({ type: "DELFRIENDFROMFAV", payload: props.item });
          }}
        >
          <MdOutlineDone />
          <p className="ms-1">Collegato</p>
        </Button>
      )}
    </ListGroup.Item>
  );
};
