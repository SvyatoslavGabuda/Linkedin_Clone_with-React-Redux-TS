import { PayloadAction } from "@reduxjs/toolkit";
import { Iprofile } from "../../componets/Profile/Profile";




interface iFriends {
  Favfriends: Iprofile[];
}

const initialState: iFriends = {
  Favfriends: [],
};

export const friends = (state = initialState, action: PayloadAction<Iprofile>) => {
  switch (action.type) {
    case "ADDFRIENDTOFAV":
      if (state.Favfriends.filter((el) => el._id === action.payload._id).length < 1) {
        return { ...state, Favfriends: [...state.Favfriends, action.payload] };
      } else {
        return state;
      }
    case "DELFRIENDFROMFAV":
      return { ...state, Favfriends: state.Favfriends.filter((e) => e._id !== action.payload._id) };
    default:
      return state;
  }
};

