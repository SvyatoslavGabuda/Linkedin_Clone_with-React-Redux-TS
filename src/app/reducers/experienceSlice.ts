import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Iexperience {
  _id: string;
  role: string;
  company: string;
  startDate: Date;
  description: string;
  area: string;
  username: string;
  user: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

const initialState = {
  experience: [] as Iexperience[],
};

const experienceSlice = createSlice({
  name: "save",
  initialState,
  reducers: {
    save(state, action: PayloadAction<Iexperience[]>) {
      state.experience = action.payload;
    },
  },
});

export const { save } = experienceSlice.actions;
export default experienceSlice.reducer;
