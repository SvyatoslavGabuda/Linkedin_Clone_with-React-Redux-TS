//import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { Counter } from "./features/counter/Counter";
import "./App.scss";
import { useAppDispatch } from "./app/hooks";
import { ADD_TO_ALLPROFILE, ADD_TO_MYPROFILE, HANDLE_LOAD_ALLPROFILE, HANDLE_LOAD_MYPROFILE } from "./app/reducers/allProfileReduce";
import { Chat } from "./componets/Chat/Chat";
import MyFooter from "./componets/Footer/MyFooter";
import { Home } from "./componets/Home/Home";
import MyNav from "./componets/NavBar/MyNav";
import Profile from "./componets/Profile/Profile";
import { useEffect } from "react";
import { NotFound } from "./componets/NotFound/NotFound";
import { AdvancedSearch } from "./componets/AdvancedSearch/AdvancedSearch";
import { Jobs } from "./componets/Jobs/Jobs";
import { MyJobs } from "./componets/Jobs/MyJobs";

const url = "https://striveschool-api.herokuapp.com/api/profile/";

function App() {
  const dispatch = useAppDispatch();
  const myProfileFetch = async () => {
    dispatch({ type: HANDLE_LOAD_MYPROFILE, payload: true });
    try {
      const response = await fetch(url + "me", {
        headers: {
          Authorization: process.env.REACT_APP_BEARER || "nonandra",
        },
      });
      if (response.ok) {
        const data = await response.json();
        // console.log("myprofle", data);
        // setMyProfile(data);
        dispatch({ type: ADD_TO_MYPROFILE, payload: data });
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: HANDLE_LOAD_MYPROFILE, payload: false });
    }
  };
  const profileFetch = async () => {
    dispatch({ type: HANDLE_LOAD_ALLPROFILE, payload: true });
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: process.env.REACT_APP_BEARER || "nonandra",
        },
      });
      if (response.ok) {
        const data = await response.json();
        // console.log(data);
        //setAllProfile(data);
        dispatch({ type: ADD_TO_ALLPROFILE, payload: data });
      } else {
        console.log("erro");
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: HANDLE_LOAD_ALLPROFILE, payload: false });
    }
  };
  useEffect(() => {
    myProfileFetch();
    profileFetch();
  }, []);
  return (
    <>
      <BrowserRouter>
        <MyNav />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/myjobs" element={<MyJobs />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/advancedSearch" element={<AdvancedSearch />} />
          </Routes>
        </Container>
        <Chat />
        <MyFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
