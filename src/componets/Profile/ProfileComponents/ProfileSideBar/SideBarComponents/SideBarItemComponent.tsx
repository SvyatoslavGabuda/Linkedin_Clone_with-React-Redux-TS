import { Button, ListGroup } from "react-bootstrap";
import { BsFillPersonPlusFill } from "react-icons/bs";

export const SideBarItemComponent = () => {
  return (
    <ListGroup.Item className="sideBarItem py-3">
      <div className="sideBarCard d-flex align-items-center">
        <img className="img-fluid me-3 sideBarCardImg" src="" alt="" />
        <span className="sideBarCardText">
          <h4 className="m-0">Nome Azienda</h4>
          <p className="m-0">Azienda che lavora in...</p>
        </span>
      </div>
      <Button variant="outline-secondary d-flex align-items-center">
        <BsFillPersonPlusFill />
        <p className="m-0">Collegati</p>
      </Button>
    </ListGroup.Item>
  );
};
