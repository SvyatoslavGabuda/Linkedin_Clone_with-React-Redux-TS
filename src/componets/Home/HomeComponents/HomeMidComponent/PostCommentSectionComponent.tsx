import { Dropdown, Form, InputGroup, Row, Spinner } from "react-bootstrap";
import { BsClock, BsEmojiNeutral, BsImage } from "react-icons/bs";
import { IoIosRocket } from "react-icons/io";
import { useEffect, useState } from "react";
import { PostCommentComponent } from "./PostCommentComponent";
import { commentFetch, Icomments } from "../../../../app/reducers/commentSlice";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";

interface PostSectionProps {
  postId: string;
}

export const PostCommentSectionComponent = ({ postId }: PostSectionProps) => {
  const dispatch = useAppDispatch();
  const commentsStore = useAppSelector((state) => state.comments);

  useEffect(() => {
    dispatch(commentFetch({ metod: "GET", id: postId }));
  }, []);
  return (
    <div className="postCommentContainer pt-3">
      <div className="d-flex align-items-center">
        <img className="me-3" src="" alt="" style={{ width: 35 + "px", borderRadius: 50 + "px" }} />
        <InputGroup className="border rounded-pill d-flex align-items-center justify-content-start inputCommentContainer">
          <Form.Control className="border-0 rounded me-1 commentsInput" placeholder="Aggiungi un commento..." />
          <span className="commentsIconContainer">
            <BsEmojiNeutral className="fs-4 me-2 text-secondary" />
            <BsImage className="fs-4 me-2 text-secondary" />
          </span>
        </InputGroup>
      </div>
      <div className="my-2 commentsDropdown">
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic" className="dropFilter ms-2">
            Filtra
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1" className="d-flex align-items-center">
              <IoIosRocket className="fs-3 dropCommentIcon" />
              <span className="ms-3 commentsDropdownText">
                <h6 className="mb-0">Più rilevanti</h6>
                <p>Vedi i commenti più pertinenti</p>
              </span>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2" className="d-flex align-items-center">
              <BsClock className="fs-3 dropCommentIcon" />

              <span className="ms-3 commentsDropdownText">
                <h6 className="mb-0">Più recenti</h6>
                <p>Vedi tutti i commenti (i più recenti sono in alto)</p>
              </span>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <Row className="d-flex justify-content-center">
        {commentsStore.comments.length > 0 && commentsStore.status === "idle" ? (
          commentsStore.comments.map((comment) => {
            return <PostCommentComponent comment={comment} />;
          })
        ) : (
          <>
            <Spinner variant="info" />
          </>
        )}
      </Row>
    </div>
  );
};
