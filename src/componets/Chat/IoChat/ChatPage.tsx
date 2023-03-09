import { Col, Row } from "react-bootstrap";
import { useEffect } from "react";
import { io } from "socket.io-client";
import { ChatTemplate } from "./ChatTemplate";

const ADDRESS = "https://chat-api-epicode.herokuapp.com";
const socket = io(ADDRESS, { transports: ["websocket"] });

export const ChatPage = () => {
  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connection established!");
    }); //manda un clg quando siete collegati
    //vari emit, tra cui "setIdentity" e se volete "joinRoom"
    return () => {
      socket.disconnect();
      console.log("disconnected");
    }; //on unMount, vi disconnette :)
  });

  return (
    <Row>
      <Col xs={10} md={8} xl={6}>
        <ChatTemplate />
      </Col>
    </Row>
  );
};
