import { useState, useEffect } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useAppSelector } from "../../../app/hooks";
import { CgImage } from "react-icons/cg";
import { TiAttachment } from "react-icons/ti";
import { MdGif } from "react-icons/md";
import { BiSmile } from "react-icons/bi";
import { BsThreeDots, BsArrowsAngleContract } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import "./RealTimeChat.scss";
import { ChatMessage } from "../IoChat/Chat_Interfaces";

interface RealTimeChatProps {
  socket: any;
}

export const RealTimeChat = ({ socket }: RealTimeChatProps) => {
  const profile = useAppSelector((state) => state.profile.myProfile);
  const ChatStore = useAppSelector((state) => state.chat.id);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [msgContent, setMsgContent] = useState("");

  const sendMessage = () => {
    socket.emit("sendMsg", { room: ChatStore, token: process.env.REACT_APP_BEARER, msg: msgContent });
  };

  const addMessage = (msg: ChatMessage) => {
    if (msg.RoomId === ChatStore) {
      setMessages((prevState) => [...prevState, msg]);
      console.log("listened message");
      console.log("testo messaggio", msg.content);
      console.log("roomid", msg.RoomId, " - ", ChatStore);
    }
  };

  useEffect(() => {
    setMessages([]);

    socket.emit("joinRoom", {
      token: process.env.REACT_APP_BEARER,
      id: ChatStore,
    });

    socket.on("joined", ({ msgs }: any) => {
      console.log("join");
      let reversedMsgs = msgs.reverse();
      setMessages(reversedMsgs);
      socket.on("message", (msg: ChatMessage) => {
        addMessage(msg);
      });
    });

    return () => {
      socket.off("message");
    };
  }, [ChatStore]);

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
        <div className="RealTimeChatMessageArea">
          {messages.length > 0 &&
            messages.map((msg) => (
              <div
                className={profile._id === msg.User.linkedinId ? "d-flex flex-row-reverse p-2" : "d-flex p-2"}
                key={msg.id}
              >
                <div>
                  <img src={msg.User.linkedinProPic} alt="Profile Img" />
                </div>
                <div className="ms-2" data-is="ciao">
                  <div
                    className={
                      profile._id === msg.User.linkedinId ? "RealTimeMessageMe py-2 me-2" : "RealTimeMessage py-2"
                    }
                  >
                    <p>{msg.content}</p>
                  </div>
                  <h6>
                    {msg.User.first_name} {msg.User.last_name}
                  </h6>
                </div>
              </div>
            ))}
        </div>
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
                value={msgContent}
                onChange={(e) => {
                  setMsgContent(e.target.value);
                }}
                // // onKeyDown={(e) => {
                // //   e.preventDefault();
                // //   e.code === "Enter" && sendMessage();
                // //   setMsgContent("");
                // // }}
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
                      variant={msgContent !== "" ? "primary" : "outline-secondary"}
                      type="submit"
                      className="rounded-pill py-0 me-2"
                      size="sm"
                      disabled={msgContent !== "" ? false : true}
                      onClick={(e) => {
                        e.preventDefault();
                        sendMessage();
                        setMsgContent("");
                      }}
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
