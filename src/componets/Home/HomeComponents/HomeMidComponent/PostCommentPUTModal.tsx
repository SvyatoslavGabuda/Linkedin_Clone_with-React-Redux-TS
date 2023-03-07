import { useState } from "react";
import { Button, Form, FormLabel, InputGroup, Modal } from "react-bootstrap";
import { useAppDispatch } from "../../../../app/hooks";
import { commentFetch, Icomments } from "../../../../app/reducers/commentSlice";

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
  const [commentPUT, setCommentPUT] = useState<Icomments>({
    ...toPut.comment,
  });

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
          <InputGroup className="mb-3 d-flex flex-column">
            <FormLabel id="inputGroup-sizing-default">Testo del Commento</FormLabel>
            <input
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              value={commentPUT.comment}
              onChange={(e) => setCommentPUT({ ...commentPUT, comment: e.target.value })}
            />
          </InputGroup>
        </Form>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-between commentFooterPut">
        <Button variant="outline-secondary" className="putCloseButton" onClick={closeModal}>
          Annulla
        </Button>
        <Button
          variant="primary"
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
