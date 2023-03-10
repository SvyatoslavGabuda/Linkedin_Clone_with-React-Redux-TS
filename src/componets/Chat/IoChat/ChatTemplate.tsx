import { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { ChatMessage } from "./Chat_Interfaces";

export const ChatTemplate = () => {
  const [currentMessage, setCurrentMessage] = useState("");

  const sendMessage = () => {
    if (currentMessage !== "") {
    }
  };
  return (
    <>
      <div>
        <div className="chatIo-header">
          <p>Live Chat</p>
        </div>
        <div className="chatIo-body"></div>
        <div className="chatIo-footer">
          <input type="text" placeholder="Chat here..." onChange={(event) => setCurrentMessage(event.target.value)} />
          <button>
            <AiOutlineSend />
          </button>
        </div>
      </div>
    </>
  );
};
