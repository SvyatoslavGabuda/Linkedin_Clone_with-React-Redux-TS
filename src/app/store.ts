import { configureStore, ThunkAction, Action, Reducer } from "@reduxjs/toolkit";

import { allProfileReduce } from "./reducers/allProfileReduce";
import experienceSlice from "./reducers/experienceSlice";
import expModSlice from "./reducers/expModSlice";
import expPutModSlice from "./reducers/expPutModSlice";
import postsModSlice from "./reducers/postsModSlice";
import postsPutModSlice from "./reducers/postsPutModSlice";
import postsSlice from "./reducers/postsSlice";
import slicerForUpDate from "./reducers/slicerForUpDate";
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
    allPosts: postsSlice,
    postsModale: postsModSlice,
    postPutModale: postsPutModSlice,
    upDate: slicerForUpDate,

    // newProfile: profileSlice,
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
