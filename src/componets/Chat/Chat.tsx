import { useState } from "react";
import { Form } from "react-bootstrap";
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
        <div className="chat-list">
          <Form.Control type="email" placeholder="Cerca messaggi" className="mb-4" />
          <div className="chatElement">
            <div>
              <img src="https://placekitten.com/300/200" alt="Profile Picture" className="chatlistimg rounded-circle" />
            </div>
            <div className="chatbody px-2">
              <p>Giuseppe Simone</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, provident nisi praesentium tempora iure et ducimus laudantium
                assumenda doloremque amet natus aut repellendus nulla ipsum fugit facere architecto incidunt beatae.
              </p>
            </div>
            <div>7 Feb</div>
          </div>
          <div className="chatElement">
            <div>
              <img src="https://placekitten.com/300/200" alt="Profile Picture" className="chatlistimg rounded-circle" />
            </div>
            <div className="chatbody px-2">
              <p>Giuseppe Simone</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, provident nisi praesentium tempora iure et ducimus laudantium
                assumenda doloremque amet natus aut repellendus nulla ipsum fugit facere architecto incidunt beatae.
              </p>
            </div>
            <div>7 Feb</div>
          </div>
          <div className="chatElement">
            <div>
              <img src="https://placekitten.com/300/200" alt="Profile Picture" className="chatlistimg rounded-circle" />
            </div>
            <div className="chatbody px-2">
              <p>Giuseppe Simone</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, provident nisi praesentium tempora iure et ducimus laudantium
                assumenda doloremque amet natus aut repellendus nulla ipsum fugit facere architecto incidunt beatae.
              </p>
            </div>
            <div>7 Feb</div>
          </div>
          <div className="chatElement">
            <div>
              <img src="https://placekitten.com/300/200" alt="Profile Picture" className="chatlistimg rounded-circle" />
            </div>
            <div className="chatbody px-2">
              <p>Giuseppe Simone</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, provident nisi praesentium tempora iure et ducimus laudantium
                assumenda doloremque amet natus aut repellendus nulla ipsum fugit facere architecto incidunt beatae.
              </p>
            </div>
            <div>7 Feb</div>
          </div>
        </div>
      </div>
    </>
  );
};
