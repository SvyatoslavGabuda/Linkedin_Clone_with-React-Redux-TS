import { Button, ListGroup } from "react-bootstrap";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { Iprofile } from "../../../Profile";
import { Link } from "react-router-dom";

interface SideBarItemProps {
  item: Iprofile;
}

export const SideBarItemComponent = (props: SideBarItemProps) => {
  return (
    <ListGroup.Item className="sideBarItem py-3 px-md-0">
      <div className="sideBarCard d-flex align-items-center">
        <img className="img-fluid me-3 sideBarCardImg" src={props.item.image} alt="" />
        <span className="sideBarCardText">
          <Link to={"/profile/" + props.item._id} className="itemLink">
            <h4 className="m-0">{props.item.name + " " + props.item.surname}</h4>
          </Link>
          <p className="m-0">{props.item.title.slice(0, 25) + "..."}</p>
        </span>
      </div>
      <Button variant="outline-secondary d-flex align-items-center">
        <BsFillPersonPlusFill />
        <p className="ms-1">Collegati</p>
      </Button>
    </ListGroup.Item>
  );
};
