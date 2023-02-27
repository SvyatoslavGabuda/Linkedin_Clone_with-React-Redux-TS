//import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { Counter } from "./features/counter/Counter";
import "./App.scss";
import { Chat } from "./componets/Chat/Chat";
import MyFooter from "./componets/Footer/MyFooter";
import { Home } from "./componets/Home/Home";
import MyNav from "./componets/NavBar/MyNav";
import Profile from "./componets/Profile/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNav />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile/:id" element={<Profile />} />
          </Routes>
        </Container>
        <Chat />
        <MyFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
