import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { hidePosts } from "../../../app/reducers/postsModSlice";
import { Col, Row } from "react-bootstrap";
import { BsChatText, BsImage, BsPlayBtnFill, BsThreeDots } from "react-icons/bs";
import { GrArticle } from "react-icons/gr";
import { AiOutlineClockCircle } from "react-icons/ai";

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

  const myProfile = useAppSelector((state) => state.profile.myProfile);

  return (
    <>
      {myProfile && (
        <Modal show={show} onHide={() => dispatch(hidePosts())}>
          <Modal.Header closeButton>
            <Modal.Title>Crea un Post</Modal.Title>
          </Modal.Header>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              postsPOST();
            }}
          >
            <Modal.Body>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="w-100">
                  <Row className="w-100">
                    <Col xs={2}>
                      <img
                        src={myProfile.image}
                        style={{ width: 50, borderRadius: "50%" }}
                        alt="profileimage"
                      />
                    </Col>
                    <Col xs={8}>
                      <h6>
                        {myProfile.name} {myProfile.surname}
                      </h6>
                      <Button variant="outline-secondary" className=" rounded-pill ">
                        Chiunque
                      </Button>
                    </Col>
                  </Row>
                </Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Di cosa vuoi parlare?"
                  value={text}
                  onChange={(e) => {
                    setText(e.target.value);
                  }}
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer className="justify-content-between">
              <Row className="justify-content-between w-100">
                <Col>
                  <Button variant="outline-secondary border-0" type="button">
                    <BsImage />
                  </Button>
                  <Button variant="outline-secondary border-0" type="button">
                    <BsPlayBtnFill />
                  </Button>
                  <Button variant="outline-secondary border-0" type="button">
                    <GrArticle />
                  </Button>
                  <Button variant="outline-secondary border-0" type="button">
                    <BsThreeDots />
                  </Button>
                  <Button variant="outline-secondary border-0" type="button">
                    <BsChatText /> tutti
                  </Button>
                </Col>
                <Col xs={4}>
                  <Button variant="outline-secondary border-0" type="button">
                    <AiOutlineClockCircle />
                  </Button>
                  <Button
                    variant={text !== "" ? "primary" : "outline-secondary"}
                    type="submit"
                    className="rounded-pill"
                    disabled={text !== "" ? false : true}
                  >
                    Pubblica
                  </Button>
                </Col>
              </Row>
            </Modal.Footer>
          </Form>
        </Modal>
      )}
    </>
  );
};
