import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Ishow } from "./upgrateModSlice";

const initialState: Ishow = {
  show: false,
};

const expModSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {
    toogleExpM(state) {
      state.show = !state.show;
    },
    hideExpM(state) {
      state.show = false;
    },
    showExpM(state) {
      state.show = true;
    },
  },
});
export const { toogleExpM, hideExpM, showExpM } = expModSlice.actions;
export default expModSlice.reducer;
