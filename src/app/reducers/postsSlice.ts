import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Iposts {
  _id: string;
  text: string;
  username: string;
  user: User;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface User {
  _id: string;
  name: string;
  surname: string;
  email: string;
  username: string;
  title: string;
  bio: string;
  area: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

interface allPosts {
  allPosts: Iposts[];
  status: "idle" | "loading" | "failed";
}
const initialState: allPosts = {
  allPosts: [] as Iposts[],

  status: "idle",
};
const postUrl = "https://striveschool-api.herokuapp.com/api/posts/";
export const postsFetc = createAsyncThunk("fetch-posts", async () => {
  try {
    const resposnse = await fetch(postUrl, {
      headers: {
        Authorization: process.env.REACT_APP_BEARER || "nonandra",
      },
    });
    if (resposnse.ok) {
      const data = await resposnse.json();
      console.log(data);
      return data;
    } else {
      console.log("errroer");
    }
  } catch (error) {
    console.log(error);
  }
});

const postsSlice = createSlice({
  name: "save",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postsFetc.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postsFetc.fulfilled, (state, action) => {
        state.status = "idle";
        state.allPosts = action.payload;
      })
      .addCase(postsFetc.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default postsSlice.reducer;
