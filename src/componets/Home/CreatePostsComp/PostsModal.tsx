import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { hidePosts } from "../../../app/reducers/postsModSlice";

export const PostsModal = () => {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const show = useAppSelector((state) => state.postsModale.show);
  const dispatch = useAppDispatch();

  const [text, setText] = useState("");

  const postsPOST = async () => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
        method: "POST",
        body: JSON.stringify({ text: text }),
        headers: {
          "Content-Type": "application/json",
          Authorization: process.env.REACT_APP_BEARER || "nonandra",
        },
      });
      console.log("testo", text);
      console.log(response);
      if (response.ok) {
        console.log("post creato");
      } else {
        console.log("NON creato");
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(hidePosts());
    }
  };
  return (
    <>
      <Modal show={show} onHide={() => dispatch(hidePosts())}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              postsPOST();
            }}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Crea un post</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Di cosa vuoi parlare?"
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                }}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => dispatch(hidePosts())}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
