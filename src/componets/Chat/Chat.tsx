import { useState } from "react";
import { BiUpArrow } from "react-icons/bi";
import "./chat.scss";
export const Chat = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className={show ? "chat" : "chat chat-closed"}>
        <div className="chat-header d-flex justify-content-between">
          <div>
            <img className="chat-profile-pic rounded-circle" src="https://placekitten.com/300/200" alt="Profile Picture" />
            <span>Messaggistica</span>
          </div>
          <span
            onClick={() => {
              setShow(!show);
            }}
          >
            <BiUpArrow className={show ? "showchat hidechat" : "showchat"} />
          </span>
        </div>
        <div className="chat-search">Search</div>
        <div className="chat-list">Elenco Chat</div>
      </div>
    </>
  );
};
