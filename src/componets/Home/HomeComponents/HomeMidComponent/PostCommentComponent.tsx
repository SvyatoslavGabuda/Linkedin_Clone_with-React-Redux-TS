import { differenceInHours, differenceInMinutes } from "date-fns";
import { Card, Col, Dropdown } from "react-bootstrap";
import { BiLink } from "react-icons/bi";
import { FaTrashAlt } from "react-icons/fa";
import { HiOutlinePencil } from "react-icons/hi2";
import { useAppSelector } from "../../../../app/hooks";
import { Icomments } from "../../../../app/reducers/commentSlice";
import { Iprofile } from "../../../Profile/Profile";

interface PostCommentProps {
  comment: Icomments;
}

export const PostCommentComponent = ({ comment }: PostCommentProps) => {
  const allProfile = useAppSelector((state) => state.profile.allProfile);

  const today = new Date();
  const commented = (date: string) => {
    if (differenceInMinutes(today, new Date(date)) < 1) {
      return "Now";
    } else if (differenceInHours(today, new Date(date)) < 1) {
      let minuti = differenceInMinutes(today, new Date(date)) > 1 ? " minuti" : " minuto";
      return differenceInMinutes(today, new Date(date)) + minuti;
    } else {
      let ore = differenceInHours(today, new Date(date)) > 1 ? " ore" : " ora";
      return differenceInHours(today, new Date(date)) + ore;
    }
  };

  const findUser = (email: string) => {
    return allProfile.find((profile: Iprofile) => profile.email === email);
  };
  let userFound = findUser(comment.author);

  return (
    <Col xs={11} className="singlePostComment d-flex mb-4">
      <img src={userFound?.image} alt="" className="specificCommentImg me-2" />
      <Card className="singleCommentText p-2">
        <div className="d-flex justify-content-between align-items-center">
          <h6>{userFound?.name === undefined ? "NoName" : userFound?.name + " " + userFound?.surname}</h6>
          <span className="d-flex aling-items-center">
            <p className="me-2">{commented(comment.createdAt.toString())}</p>
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic" className="p-0 singleCommentDropdown"></Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1" className="d-flex align-items-center ps-1">
                  <BiLink className="fs-5" />
                  <p className="ms-2">Copia il link nel commento</p>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2" className="d-flex align-items-center ps-1">
                  <HiOutlinePencil className="fs-5" />
                  <p className="ms-2">Modifica commento</p>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3" className="d-flex align-items-center ps-1">
                  <FaTrashAlt className="fs-5" />
                  <p className="ms-2">Elimina commento</p>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </span>
        </div>
        <p className="title">{userFound?.title}</p>
        <p>{comment.comment}</p>
      </Card>
    </Col>
  );
};
