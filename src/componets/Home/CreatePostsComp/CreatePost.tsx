import Button from "react-bootstrap/Button";

import "./createPost.scss";
import Card from "react-bootstrap/Card";
import { BsCalendar2Event, BsFillPlayBtnFill } from "react-icons/bs";
import { HiPhoto } from "react-icons/hi2";
import { MdOutlineArticle } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { Col, Row } from "react-bootstrap";
import { PostsModal } from "./PostsModal";
import { useState } from "react";
import { tooglePosts } from "../../../app/reducers/postsModSlice";

export const CreatePost = () => {
  const myProfile = useAppSelector((state) => state.profile.myProfile);
  const dispatch = useAppDispatch();
  return (
    <>
      <Card className="createPost">
        <Card.Body>
          <Card.Text className="createPostTextAreaOne">
            <Row className="align-items-center">
              <Col xs={2} className="text-center">
                {myProfile && (
                  <>
                    {" "}
                    <img src={myProfile.image} alt="" />
                  </>
                )}
              </Col>
              <Col>
                <Button
                  variant="outline-secondary"
                  className="w-100 rounded-pill avviaPost"
                  onClick={() => {
                    dispatch(tooglePosts());
                  }}
                >
                  Avvia un post
                </Button>
              </Col>
            </Row>
          </Card.Text>
          <Card.Text className="createPostTextAreaTwo">
            <Row className="justify-content-around">
              <Col className="p-0">
                <Button variant="light">
                  <Row>
                    <Col xs={2}>
                      <HiPhoto className="photoIcon" />{" "}
                    </Col>
                    <Col className="pe-0">Foto</Col>
                  </Row>
                </Button>
              </Col>
              <Col className="p-0">
                <Button variant="light">
                  <Row>
                    <Col xs={2}>
                      <BsFillPlayBtnFill className="playIcon" />
                    </Col>
                    <Col className="pe-0">Video</Col>
                  </Row>
                </Button>
              </Col>
              <Col className="p-0">
                <Button variant="light">
                  <Row>
                    <Col xs={2}>
                      <BsCalendar2Event className="calendarIcon" />
                    </Col>
                    <Col className="pe-0">Evento</Col>
                  </Row>
                </Button>
              </Col>
              <Col className="p-0">
                <Button variant="light" className="w-100">
                  <Row>
                    <Col xs={2}>
                      <MdOutlineArticle className="articleIcon" />
                    </Col>
                    <Col className="p-0"> Scrivi un articolo</Col>
                  </Row>
                </Button>
              </Col>
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>
      <PostsModal />
    </>
  );
};
