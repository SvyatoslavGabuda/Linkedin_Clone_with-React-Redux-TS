import { useState } from "react";
import "./chat.scss";
export const Chat = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className={show ? "chat" : "chat chat-closed"}>
        <div className="chat-header">
          {" "}
          <img className="nav-profile-pic rounded-circle" src="https://placekitten.com/300/200" alt="Profile Picture" />
          <span>Messaggistica</span>
          <span
            onClick={() => {
              setShow(!show);
            }}
          >
            toggle
          </span>
        </div>
        <div className="chat-search">Search</div>
        <div className="chat-list">Elenco Chat</div>
      </div>
    </>
  );
};
