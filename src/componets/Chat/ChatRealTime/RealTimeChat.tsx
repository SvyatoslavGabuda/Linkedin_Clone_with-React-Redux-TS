import { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useAppSelector } from "../../../app/hooks";
import { CgImage } from "react-icons/cg";
import { TiAttachment } from "react-icons/ti";
import { MdGif } from "react-icons/md";
import { BiSmile } from "react-icons/bi";
import { BsThreeDots, BsArrowsAngleContract } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import "./RealTimeChat.scss";

interface RealTimeChatProps {}

export const RealTimeChat = (props: RealTimeChatProps) => {
  const profile = useAppSelector((state) => state.profile.myProfile);
  const [textPUT, setTextPUT] = useState("");

  return (
    <div className="RealTimeChatContainer border border-1">
      <div className="d-flex justify-content-between RealTimeChatFirstPart px-2 py-2 align-items-center">
        <div className="d-flex align-items-center RealTimeCHatUpperSection">
          <div>
            <img src={profile?.image} alt="Pic Profile" />
          </div>
          <div>
            <h4>
              {profile?.name} {profile?.surname}
            </h4>
          </div>
        </div>
        <div className="RealTimeChatButtonsContainer d-flex justify-content-center align-items-center">
          <button type="button" className="rounded-pill RealTimeChatlBtn me-1">
            <BsThreeDots className="fs-5" />
          </button>
          <button type="button" className="rounded-pill RealTimeChatlBtn me-1">
            <BsArrowsAngleContract className="fs-5" />
          </button>
          <button type="button" className="rounded-pill RealTimeChatlBtn me-0">
            <RxCross2 className="fs-5" />
          </button>
        </div>
      </div>
      <div>
        <div className="RealTimeChatImgInChatContainer py-3 px-2">
          <img src={profile?.image} alt="Profile Pic" />
          <h3 className="mt-2">
            {profile?.name} {profile?.surname}
          </h3>
          <p>{profile?.title}</p>
        </div>
        <div className="RealTimeChatMessageArea"></div>
        <div className="RealTimeChatInputArea">
          <Form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Form.Group className=" px-3 RealTimeChatTextAreaCont" controlId="formBasicEmail">
              <Form.Control
                as="textarea"
                className="border-0 mx-auto RealTimeChatTextArea my-2"
                placeholder="Scrivi un messaggio"
                style={{ minHeight: "100px" }}
                value={textPUT}
                onChange={(e) => {
                  setTextPUT(e.target.value);
                }}
              />
            </Form.Group>

            <Row>
              <Col xs={4} className="d-flex justify-content-between w-100 p-1">
                <div className="d-flex ms-2">
                  <Button
                    variant="outline-secondary border-0"
                    type="button"
                    className="rounded-pill RealTimeChatlBtn me-0"
                  >
                    <CgImage className="text-black" />
                  </Button>
                  <Button
                    variant="outline-secondary border-0"
                    type="button"
                    className="rounded-pill RealTimeChatlBtn me-0 px-2"
                  >
                    <TiAttachment className="fs-5 text-black" />
                  </Button>
                  <Button
                    variant="outline-secondary border-0"
                    type="button"
                    className="rounded-pill RealTimeChatlBtnGif me-0"
                  >
                    <MdGif className="fs-4 text-black" />
                  </Button>
                  <Button
                    variant="outline-secondary border-0"
                    type="button"
                    className="rounded-pill RealTimeChatlBtn me-0"
                  >
                    <BiSmile className="text-black" />
                  </Button>
                </div>
                <div className="d-flex justify-content-center align-items-center me-2">
                  <div>
                    <Button
                      variant={textPUT !== "" ? "primary" : "outline-secondary"}
                      type="submit"
                      className="rounded-pill py-0 me-2"
                      size="sm"
                      disabled={textPUT !== "" ? false : true}
                    >
                      Invia
                    </Button>
                  </div>
                  <div>
                    <Button
                      variant="outline-secondary border-0"
                      type="button"
                      className="rounded-pill RealTimeChatlBtn me-0"
                    >
                      <BsThreeDots className="text-black" />
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );
};
