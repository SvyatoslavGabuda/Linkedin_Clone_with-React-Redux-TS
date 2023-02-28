import { configureStore, ThunkAction, Action, combineReducers, Reducer } from "@reduxjs/toolkit";

import { AllProfile, allProfileReduce } from "./reducers/allProfileReduce";
import experienceSlice from "./reducers/experienceSlice";
import profileSlice from "./reducers/profileSlice";

// const allReducer = combineReducers({
//   profile: allProfileReduce as Reducer,
// });
export const store = configureStore({
  reducer: {
    profile: allProfileReduce as Reducer,
    experience: experienceSlice,
    newProfile: profileSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
