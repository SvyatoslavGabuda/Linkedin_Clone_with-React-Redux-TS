import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { Col, Row } from "react-bootstrap";
import { BsEmojiSmile } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaGlobeAmericas } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { hidePutPosts } from "../../../app/reducers/postsPutModSlice";

export const PostsPutModal = () => {
  const storePutPosts = useAppSelector((state) => state.postPutModale);
  const myProfile = useAppSelector((state) => state.profile.myProfile);
  const dispatch = useAppDispatch();
  const [textPUT, setTextPUT] = useState("");

  const postsPUT = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${storePutPosts.focus._id}`, {
        method: "PUT",
        body: JSON.stringify({ text: textPUT }),
        headers: {
          "Content-Type": "application/json",
          Authorization: process.env.REACT_APP_BEARER || "nonandra",
        },
      });
      if (response.ok) {
        console.log("PUT post successfull");
      } else {
        console.log("PUT post response not okay");
      }
    } catch (error) {
      console.log("fatal error in posts PUT", error);
    } finally {
      dispatch(hidePutPosts());
    }
  };

  useEffect(() => {
    setTextPUT(storePutPosts.focus.text);
  }, [storePutPosts.focus.text]);

  return (
    <>
      {myProfile && (
        <Modal show={storePutPosts.show} onHide={() => dispatch(hidePutPosts())}>
          <Modal.Header closeButton>
            <Modal.Title>Crea un Post</Modal.Title>
          </Modal.Header>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              postsPUT();
            }}
          >
            <Modal.Body>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="w-100">
                  <Row className="w-100 modalRow align-items-center">
                    <Col xs={2} className="pe-0">
                      <img src={myProfile.image} alt="profileimage" />
                    </Col>
                    <Col xs={8}>
                      <h6>
                        {myProfile.name} {myProfile.surname}
                      </h6>
                      <Button variant="outline-secondary" className="rounded-pill chiunque">
                        <FaGlobeAmericas /> Chiunque <IoMdArrowDropdown />
                      </Button>
                    </Col>
                  </Row>
                </Form.Label>
                <Form.Control
                  as="textarea"
                  className="border-0"
                  placeholder="Di cosa vuoi parlare?"
                  style={{ height: "200px" }}
                  value={textPUT}
                  onChange={(e) => {
                    setTextPUT(e.target.value);
                  }}
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer className="justify-content-between">
              <Row></Row>
              <Row className="justify-content-between w-100 aling-items-center">
                <Col>
                  <Button variant="outline-secondary border-0" type="button" className="rounded-pill modalBtn">
                    <BsEmojiSmile />
                  </Button>
                </Col>

                <Col xs={4}>
                  <Button variant="outline-secondary border-0" type="button" className="rounded-pill modalBtn">
                    <AiOutlineClockCircle />
                  </Button>
                  <Button
                    variant={textPUT !== "" ? "primary" : "outline-secondary"}
                    type="submit"
                    className="rounded-pill"
                    size="sm"
                    disabled={textPUT !== "" ? false : true}
                  >
                    Modifica
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
