import { useState } from "react";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import { useAppDispatch } from "../../../../app/hooks";
import { commentFetch, Icomments } from "../../../../app/reducers/commentSlice";

interface PutCommentProps {
  toPut: {
    show: boolean;
    comment: Icomments;
  };
  closeModal: () => void;
}

export const PostCommentPUTModal = ({ toPut, closeModal }: PutCommentProps) => {
  const dispatch = useAppDispatch();
  const [commentPUT, setCommentPUT] = useState<Icomments>({
    ...toPut.comment,
  });

  const PUTmyComment = async (comment: Icomments) => {
    await dispatch(commentFetch({ metod: "PUT", id: toPut.comment._id, commentToPost: comment }));
    dispatch(commentFetch({ metod: "GET", id: toPut.comment.elementId }));
  };

  return (
    <Modal show={toPut.show} onHide={closeModal} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Modifica il tuo commento:</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">Testo del Commento</InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              value={commentPUT.comment}
              onChange={(e) => setCommentPUT({ ...commentPUT, comment: e.target.value })}
            />
          </InputGroup>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={(e) => {
            e.preventDefault();
            PUTmyComment(commentPUT);
          }}
        >
          Modifica Commento
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
