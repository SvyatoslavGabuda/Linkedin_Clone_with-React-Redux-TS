import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Iprofile } from "../../componets/Profile/Profile";

const url = "https://striveschool-api.herokuapp.com/api/profile/";

interface AllProfile {
  allProfile: Iprofile[];
  myProfile: Iprofile;
  generalProfile: Iprofile;
  status: "idle" | "loading" | "failed";
}

const initialState: AllProfile = {
  allProfile: [] as Iprofile[],
  myProfile: {} as Iprofile,
  generalProfile: {} as Iprofile,
  status: "idle",
};

export const myProfileFetch = createAsyncThunk("fetch-prfile", async () => {
  try {
    const response = await fetch(url + "me", {
      headers: {
        Authorization: process.env.REACT_APP_BEARER || "nonandra",
      },
    });
    if (response.ok) {
      const data = await response.json();
      // console.log("myprofle", data);
      return data;
      //setMyProfile(data);
      //dispatch({ type: ADD_TO_MYPROFILE, payload: data });
    } else {
      console.log("errore");
    }
  } catch (error) {
    console.log(error);
  }
});

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(myProfileFetch.pending, (state) => {
        state.status = "loading";
      })
      .addCase(myProfileFetch.fulfilled, (state, action) => {
        state.status = "idle";
        state.myProfile = action.payload;
      })
      .addCase(myProfileFetch.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default profileSlice.reducer;
