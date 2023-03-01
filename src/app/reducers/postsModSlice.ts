import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IpostsShow {
  show: boolean;
}
const initialState: IpostsShow = {
  show: false,
};

const postsModSlice = createSlice({
  name: "postsMod",
  initialState,
  reducers: {
    tooglePosts(state) {
      state.show = !state.show;
    },
    hidePosts(state) {
      state.show = false;
    },
    showPosts(state) {
      state.show = true;
    },
  },
});
export const { tooglePosts, hidePosts, showPosts } = postsModSlice.actions;
export default postsModSlice.reducer;
