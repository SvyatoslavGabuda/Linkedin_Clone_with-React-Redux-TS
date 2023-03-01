import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IshowPlus {
  show: boolean;
  indexExp: number;
}

const initialState: IshowPlus = {
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
    addIndex: (state, action: PayloadAction<number>) => {
      state.indexExp = action.payload;
    },
  },
});
export const { tooglePutM, hidePutM, showPutM, addIndex } = expPutModSlice.actions;
export default expPutModSlice.reducer;
