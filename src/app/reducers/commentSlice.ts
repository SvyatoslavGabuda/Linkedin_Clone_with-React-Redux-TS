import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Icomments {
  _id: string;
  rate: number;
  comment: string;
  elementId: string;
  author: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
interface comments {
  comments: Icomments[];
  commenttoPost: Icomments;
  status: "idle" | "loading" | "failed";
}

const initialState: comments = {
  comments: [],
  status: "idle",
  commenttoPost: {} as Icomments,
};
interface params {
  metod: string;
  id?: string;
  commentToPost?: Icomments;
}
const url = "https://striveschool-api.herokuapp.com/api/comments/";

export const commentFetch = createAsyncThunk(
  "fetchComment",
  async ({ metod, id, commentToPost }: params) => {
    try {
      const response = await fetch(url + id, {
        method: metod,
        body: JSON.stringify(commentToPost),
        headers: {
          Authorization: process.env.REACT_APP_BEARER || "nonandra",
        },
      });
      if (response.ok) {
        if (metod === "GET") {
          const data = await response.json();
          console.log(data);

          return data;
        } else {
          console.log("l'operazione " + metod + " è andata a buon fine!!");
        }
      } else {
        console.log("non ha funzionato");
      }
    } catch (error) {
      console.log(error);
    }
  }
);

const commentSlice = createSlice({
  name: "save",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(commentFetch.pending, (state) => {
        state.status = "loading";
      })
      .addCase(commentFetch.fulfilled, (state, action) => {
        state.status = "idle";
        state.comments = action.payload;
      })
      .addCase(commentFetch.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default commentSlice.reducer;
