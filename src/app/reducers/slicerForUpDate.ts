import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Iupdate {
  numberOfUpdate: number;
}
const initialState: Iupdate = {
  numberOfUpdate: 0,
};
//dispatch(toofleM())
const slicerForUpDate = createSlice({
  name: "upgrade",
  initialState,
  reducers: {
    Add(state) {
      state.numberOfUpdate = state.numberOfUpdate + 1;
    },
  },
});
export const { Add } = slicerForUpDate.actions;
export default slicerForUpDate.reducer;
