import { PayloadAction } from "@reduxjs/toolkit";
import { Iprofile } from "../../componets/Profile/Profile";

export const ADD_TO_ALLPROFILE = "ADD_TO_ALLPROFILE";
export const ADD_TO_MYPROFILE = "ADD_TO_MYPROFILE";
export const ADD_TO_GENERALPROFILE = "ADD_TO_GENERALPROFILE";

interface AllProfile {
  allProfile: Iprofile[];
  myProfile: Iprofile | null;
  generalProfile: Iprofile | null;
}

const initialState: AllProfile = {
  allProfile: [],
  myProfile: null,
  generalProfile: null,
};

export const allProfileReduce = (
  state = initialState,
  action: PayloadAction<Iprofile[] | Iprofile>
) => {
  switch (action.type) {
    case ADD_TO_ALLPROFILE:
      return {
        ...state,
        allProfile: action.payload,
      };
    case ADD_TO_MYPROFILE:
      return {
        ...state,
        myProfile: action.payload,
      };
    case ADD_TO_GENERALPROFILE:
      return {
        ...state,
        generalProfile: action.payload,
      };

    default:
      return state;
  }
};
