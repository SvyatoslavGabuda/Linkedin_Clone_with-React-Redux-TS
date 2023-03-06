import { PayloadAction } from "@reduxjs/toolkit";

interface ifavJobs {
  favJobs: string[];
}

const initialState: ifavJobs = {
  favJobs: [],
};

export const jobsFav = (state = initialState, action: PayloadAction<string>) => {
  switch (action.type) {
    case "ADDJOBTOFAV":
      if (state.favJobs.filter((el) => el === action.payload).length < 1) {
        return { ...state, favJobs: [...state.favJobs, action.payload] };
      } else {
        return state;
      }
    case "DELJOBFROMFAV":
      return { ...state, favJobs: state.favJobs.filter((e) => e !== action.payload) };
    default:
      return state;
  }
};
