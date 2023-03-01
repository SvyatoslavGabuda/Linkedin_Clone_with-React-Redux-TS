import { configureStore, ThunkAction, Action, combineReducers, Reducer } from "@reduxjs/toolkit";

import { AllProfile, allProfileReduce } from "./reducers/allProfileReduce";
import experienceSlice from "./reducers/experienceSlice";
import expModSlice from "./reducers/expModSlice";
import expPutModSlice from "./reducers/expPutModSlice";
import profileSlice from "./reducers/profileSlice";
import upgrateModSlice from "./reducers/upgrateModSlice";

// const allReducer = combineReducers({
//   profile: allProfileReduce as Reducer,
// });
export const store = configureStore({
  reducer: {
    profile: allProfileReduce as Reducer,
    experience: experienceSlice,
    upGradeModale: upgrateModSlice,
    experienceModale: expModSlice,
    experiencePutModale: expPutModSlice,
    // newProfile: profileSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
