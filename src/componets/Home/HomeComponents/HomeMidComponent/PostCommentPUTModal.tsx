import { useState } from "react";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import { BiSmile } from "react-icons/bi";
import { useAppDispatch } from "../../../../app/hooks";
import { commentFetch, Icomments } from "../../../../app/reducers/commentSlice";
import { EmojiObject } from "./PostCommentSectionComponent";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

interface PutCommentProps {
  toPut: {
    show: boolean;
    comment: Icomments;
  };
  closeModal: () => void;
  fetchAgain: () => void;
}

export const PostCommentPUTModal = ({ toPut, closeModal, fetchAgain }: PutCommentProps) => {
  const dispatch = useAppDispatch();
  const [showEmojiBox, setShowEmojiBox] = useState(false);
  const [commentPUT, setCommentPUT] = useState<Icomments>({
    ...toPut.comment,
  });

  const addEmoji = (e: any) => {
    const emoji: any = e.unified.split("_");
    const codeArray: any = [];
    emoji.forEach((em: EmojiObject) => codeArray.push("0x" + em));
    let fixedEmoji = String.fromCodePoint(...codeArray);
    setCommentPUT({ ...commentPUT, comment: commentPUT.comment + fixedEmoji });
  };

  const PUTmyComment = async (comment: Icomments) => {
    await dispatch(commentFetch({ metod: "PUT", id: toPut.comment._id, commentToPost: comment }));
    fetchAgain();
  };

  return (
    <Modal show={toPut.show} onHide={closeModal} backdrop="static" keyboard={false} className="modalCommentContainer">
      <Modal.Header closeButton className="modalCommmentHeader">
        <Modal.Title>Modifica il tuo commento:</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modalCommentBody">
        <Form>
          <p id="inputGroup-sizing-default" className="textAreaLabel">
            Testo del Commento
          </p>
          <InputGroup className="mb-3 mt-1 rounded areaCommentContainer">
            <Form.Control
              as={"textarea"}
              value={commentPUT.comment}
              onChange={(e) => setCommentPUT({ ...commentPUT, comment: e.target.value })}
              className="rounded commentPutInput"
            />
            <BiSmile className="commentPutIcon fs-3 me-2" onClick={() => setShowEmojiBox(!showEmojiBox)} />
            {showEmojiBox && (
              <div className="emojiPicker">
                <Picker data={data} theme="light" maxFrequentRows={0} onEmojiSelect={addEmoji} />
              </div>
            )}
          </InputGroup>
        </Form>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-between commentFooterPut">
        <Button variant="outline-secondary" className="putCloseButton rounded-pill" onClick={closeModal}>
          Annulla
        </Button>
        <Button
          variant="primary"
          className="rounded-pill putButton"
          onClick={(e) => {
            e.preventDefault();
            PUTmyComment(commentPUT);
            closeModal();
          }}
        >
          Modifica Commento
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
