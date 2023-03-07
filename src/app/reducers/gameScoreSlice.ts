import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Ishow {
  currentScore: number;
  lastScore: number;
  bestScore: number;
}
const initialState: Ishow = {
  currentScore: 0,
  lastScore: 0,
  bestScore: 0,
};

const gameScore = createSlice({
  name: "upgrade",
  initialState,
  reducers: {
    setCurrentScore(state, action: PayloadAction<number>) {
      state.currentScore = action.payload;
    },
    setLastScore(state, action: PayloadAction<number>) {
      state.lastScore = action.payload;
    },
    setBestScore(state, action: PayloadAction<number>) {
      state.bestScore = action.payload;
    },
  },
});
export const { setBestScore, setCurrentScore, setLastScore } = gameScore.actions;
export default gameScore.reducer;
