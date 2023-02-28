import { createSlice } from "@reduxjs/toolkit";
import { Ishow } from "./upgrateModSlice";

interface ShowPlus extends Ishow {
  indexExp?: number;
}

const initialState: ShowPlus = {
  show: false,
  indexExp: 0,
};

const expPutModSlice = createSlice({
  name: "experiencePut",
  initialState,
  reducers: {
    tooglePutM(state) {
      state.show = !state.show;
    },
    hidePutM(state) {
      state.show = false;
    },
    showPutM(state) {
      state.show = true;
    },
  },
});
export const { tooglePutM, hidePutM, showPutM } = expPutModSlice.actions;
export default expPutModSlice.reducer;
