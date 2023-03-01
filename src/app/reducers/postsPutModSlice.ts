import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Iposts } from "./postsSlice";

export interface IpostsShowPut {
  show: boolean;
  focus: Iposts;
}
const initialState: IpostsShowPut = {
  show: false,
  focus: {} as Iposts,
};

const postsPutModSlice = createSlice({
  name: "postsPutMod",
  initialState,
  reducers: {
    tooglePutPosts(state) {
      state.show = !state.show;
    },
    hidePutPosts(state) {
      state.show = false;
    },
    showPutPosts(state) {
      state.show = true;
    },
    addFocusPosts: (state, action: PayloadAction<Iposts>) => {
      state.focus = action.payload;
    },
  },
});
export const { tooglePutPosts, hidePutPosts, showPutPosts, addFocusPosts } = postsPutModSlice.actions;
export default postsPutModSlice.reducer;
