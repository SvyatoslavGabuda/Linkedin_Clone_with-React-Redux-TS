import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Ishow {
  show: boolean;
}
const initialState: Ishow = {
  show: false,
};

const upgradeModSlice = createSlice({
  name: "upgrade",
  initialState,
  reducers: {
    toogleM(state) {
      state.show = !state.show;
    },
    hideM(state) {
      state.show = false;
    },
    showM(state) {
      state.show = true;
    },
  },
});
export const { toogleM, hideM, showM } = upgradeModSlice.actions;
export default upgradeModSlice.reducer;
