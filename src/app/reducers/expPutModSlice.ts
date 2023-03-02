import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Iexperience } from "./experienceSlice";

interface IshowPlus {
  show: boolean;
  indexExp: number;
  currentExperience: Iexperience;
}

const initialState: IshowPlus = {
  show: false,
  indexExp: 0,
  currentExperience: {} as Iexperience,
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
    addExperience: (state, action: PayloadAction<Iexperience>) => {
      state.currentExperience = action.payload;
    },
  },
});
export const { tooglePutM, hidePutM, showPutM, addIndex, addExperience } = expPutModSlice.actions;
export default expPutModSlice.reducer;
