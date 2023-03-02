import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Iexperience {
  _id: string;
  role: string;
  company: string;
  startDate: Date;
  description: string;
  image: string;
  area: string;
  username: string;
  user: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
interface expState {
  experience: Iexperience[];
  status: "idle" | "loading" | "failed";
}

const initialState: expState = {
  experience: [],
  status: "idle",
};
const url = "https://striveschool-api.herokuapp.com/api/profile/";

export const expFetc = createAsyncThunk("fetct", async (id: string) => {
  try {
    const response = await fetch(url + id + "/experiences", {
      headers: {
        Authorization: process.env.REACT_APP_BEARER || "nonandra",
      },
    });
    if (response.ok) {
      const data = await response.json();
      console.log("experience ", data);
      return data;
    } else {
      console.log("errorer");
    }
  } catch (error) {
    console.log(error);
  }
});

const experienceSlice = createSlice({
  name: "save",
  initialState,
  reducers: {
    save(state, action: PayloadAction<Iexperience[]>) {
      state.experience = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(expFetc.pending, (state) => {
        state.status = "loading";
      })
      .addCase(expFetc.fulfilled, (state, action) => {
        state.status = "idle";
        state.experience = action.payload;
      })
      .addCase(expFetc.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { save } = experienceSlice.actions;
export default experienceSlice.reducer;
