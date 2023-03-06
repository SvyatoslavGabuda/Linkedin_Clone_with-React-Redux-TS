import { PayloadAction } from "@reduxjs/toolkit";
import { Ijob } from "./jobsSlice";

interface ifavJobs {
  favJobs: Ijob[];
}

const initialState: ifavJobs = {
  favJobs: [],
};

export const jobsFav = (state = initialState, action: PayloadAction<Ijob>) => {
  switch (action.type) {
    case "ADDJOBTOFAV":
      if (state.favJobs.filter((el) => el._id === action.payload._id).length < 1) {
        return { ...state, favJobs: [...state.favJobs, action.payload] };
      } else {
        return state;
      }
    case "DELJOBFROMFAV":
      return { ...state, favJobs: state.favJobs.filter((e) => e._id !== action.payload._id) };
    default:
      return state;
  }
};
