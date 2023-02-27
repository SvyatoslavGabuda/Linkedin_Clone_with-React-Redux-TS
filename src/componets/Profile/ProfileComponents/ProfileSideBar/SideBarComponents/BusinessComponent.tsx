import { Button, ListGroup } from "react-bootstrap";
import { BsFillPersonPlusFill } from "react-icons/bs";

export const BusinessComponent = () => {
  return (
    <ListGroup.Item className="businessItem py-3">
      <div className="businessCard d-flex align-items-center">
        <img className="img-fluid me-3 businessImg" src="" alt="" />
        <span className="businessText">
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
