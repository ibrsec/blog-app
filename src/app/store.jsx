import { combineReducers, configureStore } from "@reduxjs/toolkit";
import blogSlice from "../features/blogSlice";
import authSlice from "../features/authSlice.";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const rootReducer = combineReducers({
  blogs: blogSlice,
  auth: authSlice,
});
const persistConfig = {
  key: "blog",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  //   reducer: {
  //     blogs: blogSlice,
  //     auth: authSlice,
  //   },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
