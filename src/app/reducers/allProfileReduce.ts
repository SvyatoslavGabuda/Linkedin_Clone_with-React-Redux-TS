import { PayloadAction } from "@reduxjs/toolkit";
import { Iprofile } from "../../componets/Profile/Profile";

export const ADD_TO_ALLPROFILE = "ADD_TO_ALLPROFILE";
interface AllProfile {
  allProfile: Iprofile[];
}

const initialState: AllProfile = {
  allProfile: [],
};

const allProfileReduce = (state = initialState, action: PayloadAction<Iprofile[]>) => {
  switch (action.type) {
    case ADD_TO_ALLPROFILE:
      return {
        ...state,
        allProfile: action.payload,
      };

    default:
      return { state };
  }
};
export default allProfileReduce;
