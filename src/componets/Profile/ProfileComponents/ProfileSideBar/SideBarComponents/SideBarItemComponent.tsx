import { Button, ListGroup } from "react-bootstrap";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { Iprofile } from "../../../Profile";

interface SideBarItemProps {
  item: Iprofile;
}

export const SideBarItemComponent = (props: SideBarItemProps) => {
  return (
    <ListGroup.Item className="sideBarItem py-3">
      <div className="sideBarCard d-flex align-items-center">
        <img className="img-fluid me-3 sideBarCardImg" src={props.item.image} alt="" />
        <span className="sideBarCardText">
          <h4 className="m-0">{props.item.name + " " + props.item.surname}</h4>
          <p className="m-0">{props.item.title}</p>
        </span>
      </div>
      <Button variant="outline-secondary d-flex align-items-center">
        <BsFillPersonPlusFill />
        <p className="m-0">Collegati</p>
      </Button>
    </ListGroup.Item>
  );
};
