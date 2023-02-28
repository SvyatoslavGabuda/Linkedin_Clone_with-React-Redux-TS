import { configureStore, ThunkAction, Action, combineReducers, Reducer } from "@reduxjs/toolkit";

import { AllProfile, allProfileReduce } from "./reducers/allProfileReduce";
import experienceSlice from "./reducers/experienceSlice";

// const allReducer = combineReducers({
//   profile: allProfileReduce as Reducer,
// });
export const store = configureStore({
  reducer: {
    profile: allProfileReduce as Reducer,
    experience: experienceSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
