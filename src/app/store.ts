import { configureStore, ThunkAction, Action, Reducer } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { allProfileReduce } from "./reducers/allProfileReduce";
import commentSlice from "./reducers/commentSlice";
import experienceSlice from "./reducers/experienceSlice";
import expModSlice from "./reducers/expModSlice";
import expPutModSlice from "./reducers/expPutModSlice";
import { jobsFav } from "./reducers/jobsFav";
import jobsSlice from "./reducers/jobsSlice";
import postsModSlice from "./reducers/postsModSlice";
import postsPutModSlice from "./reducers/postsPutModSlice";
import postsSlice from "./reducers/postsSlice";
import slicerForUpDate from "./reducers/slicerForUpDate";
import upgrateModSlice from "./reducers/upgrateModSlice";

// const allReducer = combineReducers({
//   profile: allProfileReduce as Reducer,
// });

const persistConfig = {
  key : '',
  storage
}

// const persistedReducer = persistReducer(persistConfig, commentSlice.reducer)

export const store = configureStore({
  reducer: {
    profile: allProfileReduce as Reducer,
    experience: experienceSlice,
    upGradeModale: upgrateModSlice,
    experienceModale: expModSlice,
    experiencePutModale: expPutModSlice,
    allPosts: postsSlice,
    allJobs: jobsSlice,
    jobsFav: jobsFav as Reducer,
    postsModale: postsModSlice,
    postPutModale: postsPutModSlice,
    upDate: slicerForUpDate,
    comments: commentSlice,

    // newProfile: profileSlice,
  },
});

const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
