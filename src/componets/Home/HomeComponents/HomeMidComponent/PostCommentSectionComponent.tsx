import { Col, Dropdown, Form, InputGroup, Row } from "react-bootstrap";
import { BsClock, BsEmojiSmile, BsImage } from "react-icons/bs";
import { IoIosRocket } from "react-icons/io";
import { useEffect, useState } from "react";
import { PostCommentComponent } from "./PostCommentComponent";
import { commentFetch, Icomments, IcommentsPost } from "../../../../app/reducers/commentSlice";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

interface PostSectionProps {
  postId: string;
}

export interface EmojiObject {
  id: string;
  keywords: string[];
  name: string;
  native: any;
  shortcodes: string;
  unified: string;
}

export const PostCommentSectionComponent = ({ postId }: PostSectionProps) => {
  const dispatch = useAppDispatch();
  const myProfile = useAppSelector((state) => state.profile.myProfile);
  const [showEmojiBox, setShowEmojiBox] = useState(false);
  const [fetchedComments, setFetchedComments] = useState<Icomments[]>([]);
  const [commentText, setCommentText] = useState<IcommentsPost>({
    comment: "",
    rate: "5",
    elementId: postId,
  });

  const url = "https://striveschool-api.herokuapp.com/api/comments/";
  const fetchCommenti = async () => {
    try {
      const response = await fetch(url + postId, {
        method: "GET",
        headers: {
          Authorization: process.env.REACT_APP_COMMENT_BEARER || "nonandra",
          "content-type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        setFetchedComments(data);
      } else {
        console.log("non ha funzionato");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addEmoji = (e: any) => {
    const emoji: any = e.unified.split("_");
    const codeArray: any = [];
    emoji.forEach((em: EmojiObject) => codeArray.push("0x" + em));
    let fixedEmoji = String.fromCodePoint(...codeArray);
    setCommentText({ ...commentText, comment: commentText.comment + fixedEmoji });
  };

  const POSTmyComment = async (comment: IcommentsPost) => {
    await dispatch(commentFetch({ metod: "POST", id: "", commentToPost: comment }));
    fetchCommenti();
  };

  useEffect(() => {
    fetchCommenti();
  }, []);

  return (
    <div className="postCommentContainer pt-3">
      <div className="d-flex align-items-center justify-content-center mb-3">
        <img
          className="me-3 commentInputImage"
          src={myProfile.image}
          alt=""
          style={{ width: 45 + "px", borderRadius: 50 + "px" }}
        />
        <InputGroup className="border rounded-pill p-2 d-flex align-items-center justify-content-start inputCommentContainer">
          <Form.Control
            className="border-0 p-0 rounded me-1 commentsInput"
            placeholder="Aggiungi un commento..."
            value={commentText.comment}
            onChange={(e) => setCommentText({ ...commentText, comment: e.target.value })}
            onKeyUp={(e) => {
              e.key === "Enter" && POSTmyComment(commentText);
              e.key === "Enter" && setCommentText({ ...commentText, comment: "" });
            }}
          />
          <span className="commentsIconContainer">
            <BsEmojiSmile className="fs-4 me-2 commentInputIcon" onClick={() => setShowEmojiBox(!showEmojiBox)} />
            <BsImage className="fs-4 me-2 commentInputIcon" />
          </span>
          {showEmojiBox && (
            <div className="emojiPicker">
              <Picker data={data} theme="light" maxFrequentRows={0} onEmojiSelect={addEmoji} />
            </div>
          )}
        </InputGroup>
      </div>
      <div className="my-2 commentsDropdown">
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic" className="dropFilter ms-2">
            Filtra
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1" className="d-flex align-items-center">
              <IoIosRocket className="fs-4 dropCommentIcon" />
              <span className="ms-3 commentsDropdownText">
                <h6 className="mb-0">Più rilevanti</h6>
                <p>Vedi i commenti più pertinenti</p>
              </span>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2" className="d-flex align-items-center">
              <BsClock className="fs-4 dropCommentIcon" />

              <span className="ms-3 commentsDropdownText">
                <h6 className="mb-0">Più recenti</h6>
                <p>Vedi tutti i commenti (i più recenti sono in alto)</p>
              </span>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <Row className="d-flex justify-content-center">
        {fetchedComments?.length > 0 ? (
          fetchedComments?.map((comment: Icomments) => (
            <PostCommentComponent comment={comment} fetchAgain={fetchCommenti} key={comment._id} />
          ))
        ) : (
          <Col xs={11} className="pt-3 pb-4">
            <h5>Ooops, ancora niente</h5>
            <p>Sembra che questo post ancora non abbia ricevuto commenti, torna più tardi.</p>
          </Col>
        )}
      </Row>
    </div>
  );
};
