import { configureStore, ThunkAction, Action, Reducer, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";
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
import { friends } from "./reducers/favFriends";
import gameScoreSlice from "./reducers/gameScoreSlice";

// const allReducer = combineReducers({
//   profile: allProfileReduce as Reducer,
// });

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["jobsFav", "allJobs", "friends", "gameScore"],
  transforms: [encryptTransform({ secretKey: process.env.REACT_APP_SECRET_KEY || "nonandrà" })],
};

const rootReducer = combineReducers({
  // jobsFav : jobsFav,
  // jobsSlice : jobsSlice,
  // friends : friends as Reducer
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
  friends: friends as Reducer,
  gameScore: gameScoreSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore(
  {
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  }
  // profile: allProfileReduce as Reducer,
  // experience: experienceSlice,
  // upGradeModale: upgrateModSlice,
  // experienceModale: expModSlice,
  // experiencePutModale: expPutModSlice,
  // allPosts: postsSlice,
  // allJobs: jobsSlice,
  // jobsFav: jobsFav as Reducer,
  // postsModale: postsModSlice,
  // postPutModale: postsPutModSlice,
  // upDate: slicerForUpDate,
  // comments: commentSlice,
  // friends : friends as Reducer

  // newProfile: profileSlice,
);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
