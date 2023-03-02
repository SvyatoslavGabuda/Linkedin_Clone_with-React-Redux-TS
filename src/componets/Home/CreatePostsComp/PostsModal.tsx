import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, ChangeEvent } from "react";
import Modal from "react-bootstrap/Modal";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { hidePosts } from "../../../app/reducers/postsModSlice";
import { Col, Row } from "react-bootstrap";
import { BsChatText, BsEmojiSmile, BsImage, BsPlayBtnFill, BsThreeDots } from "react-icons/bs";
import { GrArticle } from "react-icons/gr";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaGlobeAmericas } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { Add } from "../../../app/reducers/slicerForUpDate";

export const PostsModal = () => {
  const show = useAppSelector((state) => state.postsModale.show);
  const dispatch = useAppDispatch();

  const [text, setText] = useState("");
  const [postImage, setPostImage] = useState(new FormData());
  const [imageAvailable, setAvailabilityImg] = useState(false);

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
      let postIdquery = await response.json();
      if (response.ok) {
        console.log("post creato");
        if (imageAvailable) {
          fetchPostImage(postIdquery._id);
        }
      } else {
        console.log("NON creato");
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(hidePosts());
    }
  };

  const fetchPostImage = async (postid: string) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${postid}`, {
        method: "POST",
        body: postImage,
        headers: {
          Authorization: process.env.REACT_APP_BEARER || "nonandra",
        },
      });
      if (response.ok) {
        console.log("immagine Caricata");
      } else {
        console.log("non caricata l'immagine");
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(Add());
    }
  };

  const myProfile = useAppSelector((state) => state.profile.myProfile);

  const handleFile = (ev: ChangeEvent<HTMLInputElement>) => {
    setAvailabilityImg(true);
    setPostImage((prev) => {
      //per cambiare i formData, bisogna "appendere" una nuova coppia chiave/valore, usando il metodo .append()
      prev.delete("post"); //ricordatevi di svuotare il FormData prima :)
      prev.append("post", ev.target.files![0]); //L'API richiede un "nome" diverso per ogni rotta, per caricare un'immagine ad un post, nel form data andra' inserito un valore con nome "post"
      return prev;
    });
  };

  return (
    <>
      {myProfile && (
        <Modal show={show} onHide={() => dispatch(hidePosts())}>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              postsPOST();
            }}
          >
            {" "}
            <Modal.Header closeButton>
              <Modal.Title>Crea un Post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="w-100">
                  <Row className="w-100 modalRow align-items-center">
                    <Col xs={2} className="pe-0 d-none d-sm-block">
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
                  value={text}
                  onChange={(e) => {
                    setText(e.target.value);
                  }}
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer className="justify-content-between">
              <Row>
                <Col>
                  <Button
                    variant="outline-secondary border-0"
                    type="button"
                    className="rounded-pill modalBtn"
                  >
                    <BsEmojiSmile />
                  </Button>
                </Col>
              </Row>
              <Row className="justify-content-between w-100 aling-items-center">
                <Col className="d-flex align-items-center">
                  <Form.Label
                    htmlFor="newPostImage"
                    className={
                      imageAvailable ? "rounded-pill modalBtn imagePosted" : "rounded-pill modalBtn"
                    }
                  >
                    <BsImage />
                    <input
                      type="file"
                      id="newPostImage"
                      style={{ display: "none" }}
                      onChange={handleFile}
                    />
                  </Form.Label>
                  <Form.Label className="rounded-pill modalBtn">
                    <BsPlayBtnFill />
                  </Form.Label>
                  <Form.Label className="rounded-pill modalBtn">
                    <GrArticle />
                  </Form.Label>
                  <Form.Label className="rounded-pill modalBtn">
                    <BsThreeDots />
                  </Form.Label>
                  <Form.Label className="rounded-pill modalBtn">
                    <BsChatText /> Tutti
                  </Form.Label>
                </Col>
                <Col xs={4} className="d-flex align-items-center">
                  <Button
                    variant="outline-secondary border-0"
                    type="button"
                    className="rounded-pill modalBtn"
                  >
                    <AiOutlineClockCircle />
                  </Button>
                  <Button
                    variant={text !== "" ? "primary" : "outline-secondary"}
                    type="submit"
                    className="rounded-pill"
                    size="sm"
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
