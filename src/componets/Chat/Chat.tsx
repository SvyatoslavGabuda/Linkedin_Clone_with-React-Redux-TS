import { useState } from "react";
import { Form } from "react-bootstrap";
import { BiUpArrow } from "react-icons/bi";
import { useAppSelector } from "../../app/hooks";
import "./chat.scss";
export const Chat = () => {
  const [show, setShow] = useState(false);
  const myProfile = useAppSelector((state) => state.profile.myProfile);

  return (
    <>
      <div className={show ? "chat" : "chat chat-closed"}>
        <div
          className="chat-header d-flex justify-content-between"
          onClick={() => {
            setShow(!show);
          }}
        >
          <div>
            <div style={{ position: "relative" }}>
              <img className="chat-profile-pic rounded-circle" src={myProfile?.image} alt="Profile Picture" />
              <div
                className="d-block rounded-circle"
                style={{
                  position: "absolute",
                  backgroundColor: "green",
                  width: "10px",
                  height: "10px",
                  bottom: "-2px",
                  right: "9px",
                  border: "2px solid white",
                }}
              ></div>
            </div>
            <span>Messaggistica</span>
          </div>
          <span>
            <BiUpArrow className={show ? "showchat hidechat" : "showchat"} />
          </span>
        </div>
        <div className="chat-list">
          <Form.Control type="email" placeholder="Cerca messaggi" className="mb-4" />
          <div className="chatElement">
            <div>
              <img src={myProfile?.image} alt="Profile Picture" className="chatlistimg rounded-circle" />
            </div>
            <div className="chatbody px-2">
              <p>{myProfile?.name + " " + myProfile?.surname}</p>
              <p>Nel mezzo del cammin di nostra vita, odiai Typescript in maniera oscura.</p>
            </div>
            <div>7 Feb</div>
          </div>
          <div className="chatElement">
            <div>
              <img src="https://placekitten.com/330/200" alt="Profile Picture" className="chatlistimg rounded-circle" />
            </div>
            <div className="chatbody px-2">
              <p>Giovanni Muciaccia</p>
              <p>Typescript è un heArt Attack. Typescript as HeartAttck</p>
            </div>
            <div>7 Feb</div>
          </div>
          <div className="chatElement">
            <div>
              <img src="https://placekitten.com/100/230" alt="Profile Picture" className="chatlistimg rounded-circle" />
            </div>
            <div className="chatbody px-2">
              <p>Bill Gates</p>
              <p>Don't go to that madman, come to me who's better than him, level up.</p>
            </div>
            <div>7 Feb</div>
          </div>
          <div className="chatElement">
            <div>
              <img src="https://placekitten.com/310/200" alt="Profile Picture" className="chatlistimg rounded-circle" />
            </div>
            <div className="chatbody px-2">
              <p>Steve Jobs</p>
              <p>I'm looking for you because I need you at Apple, please call me on my private cell phone.</p>
            </div>
            <div>5/10/11</div>
          </div>
        </div>
      </div>
    </>
  );
};
