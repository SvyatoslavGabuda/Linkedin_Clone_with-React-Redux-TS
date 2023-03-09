import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { BiUpArrow } from "react-icons/bi";
import { SlNote } from "react-icons/sl";
import { TfiMoreAlt } from "react-icons/tfi";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import "./chat.scss";
import { io } from "socket.io-client";
import { Room, User } from "./IoChat/Chat_Interfaces";
import { format } from "date-fns";
import { joined, leveRoom } from "../../app/reducers/chatIdSlice";

import { RealTimeChat } from "./ChatRealTime/RealTimeChat";
export const Chat = () => {
  const ADDRESS = "https://chat-api-epicode.herokuapp.com";
  const socket = io(ADDRESS, { transports: ["websocket"] });
  const dispatch = useAppDispatch();
  const ChatStore = useAppSelector((state) => state.chat.id);
  const [rooms, setRooms] = useState<Room[]>([]);
  const [connected, setConnected] = useState<boolean>(false);
  const [onlineUsers, setOnlineUsers] = useState<User[]>([]);

  const setRoomId = (id: string) => {
    if (ChatStore === id) {
      dispatch(leveRoom());
    } else {
      dispatch(joined(id));
    }
  };

  socket.on("loggedIn", (bouncedMessage) => {
    // console.log(bouncedMessage);
    setRooms(bouncedMessage.rooms);
  });

  socket.on("newUserHasLoggedIn", (users) => {
    setOnlineUsers(users);
    console.log(onlineUsers);
  });

  useEffect(() => {
    if (!connected) {
      socket.on("connect", () => {
        console.log("Connection established!");
        socket.emit("setIdentity", { token: process.env.REACT_APP_BEARER });
        setConnected(true);
      });
    } //manda un clg quando siete collegati
    //vari emit, tra cui "setIdentity" e se volete "joinRoom"

    // return () => {
    //   socket.disconnect();

    //   console.log("disconnected");
    // }; //on unMount, vi disconnette :)
  }, [connected]);

  const [show, setShow] = useState(false);
  const myProfile = useAppSelector((state) => state.profile.myProfile);

  return (
    <>
      <div className={show ? "d-none d-sm-block chat" : "d-none d-sm-block chat chat-closed"}>
        <div
          className="chat-header d-flex justify-content-between"
          onClick={() => {
            setShow(!show);
          }}
        >
          <div>
            <div style={{ position: "relative" }}>
              <img className="chat-profile-pic rounded-circle" src={myProfile?.image} alt="Profile" />
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
            <TfiMoreAlt style={{ marginRight: "15px", scale: "0.9" }} />
            <SlNote style={{ marginRight: "12px", scale: "0.9" }} />
            <BiUpArrow className={show ? "showchat hidechat" : "showchat"} />
          </span>
        </div>
        <div className="chat-list">
          <Form.Control type="email" placeholder="Cerca messaggi" className="mb-4" />
          <div className="chatElement">
            <div>
              <img src={myProfile?.image} alt="Profile" className="chatlistimg rounded-circle" />
            </div>
            <div className="chatbody px-2">
              <p>{myProfile?.name + " " + myProfile?.surname}</p>
              <p>Nel mezzo del cammin di nostra vita, odiai Typescript in maniera oscura.</p>
            </div>
            <div>7 Feb</div>
          </div>
          {rooms.length > 0 &&
            rooms.map((el) => (
              <div className="chatElement" key={el.id} onClick={() => setRoomId(el.id)}>
                <div>
                  <img src={myProfile?.image} alt="Profile" className="chatlistimg rounded-circle" />
                </div>
                <div className="chatbody px-2">
                  <p>{el.name}</p>
                  <p>Una macchinata di pazzi</p>
                </div>
                <div>{format(new Date(el.updatedAt), "d MMM")}</div>
              </div>
            ))}
          <div className="chatElement">
            <div>
              <img src="https://placekitten.com/330/200" alt="Profile" className="chatlistimg rounded-circle" />
            </div>
            <div className="chatbody px-2">
              <p>Giovanni Muciaccia</p>
              <p>Typescript è un heArt Attack. Typescript as HeartAttck</p>
            </div>
            <div>7 Feb</div>
          </div>
          <div className="chatElement">
            <div>
              <img src="https://placekitten.com/100/230" alt="Profile" className="chatlistimg rounded-circle" />
            </div>
            <div className="chatbody px-2">
              <p>Bill Gates</p>
              <p>Don't go to that madman, come to me who's better than him, level up.</p>
            </div>
            <div>7 Feb</div>
          </div>
          <div className="chatElement">
            <div>
              <img src="https://placekitten.com/310/200" alt="Profile" className="chatlistimg rounded-circle" />
            </div>
            <div className="chatbody px-2">
              <p>Steve Jobs</p>
              <p>I'm looking for you because I need you at Apple, please call me on my private cell phone.</p>
            </div>
            <div>5/10/11</div>
          </div>
        </div>
        {ChatStore !== "" && <RealTimeChat socket={socket} />}
      </div>
    </>
  );
};
