import { configureStore, ThunkAction, Action, combineReducers } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import { allProfileReduce } from "./reducers/allProfileReduce";

const allReducer = combineReducers({
  counter: counterReducer,
  profile: allProfileReduce,
});
export const store = configureStore({
  reducer: allReducer,
  // {
  //   counter: counterReducer,
  //   profile: allProfileReduce,
  // },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
