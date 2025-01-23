import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./reducers/blogSlice.js";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Use localStorage as default storage
import { combineReducers } from "redux";

// Combine all reducers
const rootReducer = combineReducers({
  blogs: blogReducer,
});

// Configuration for redux-persist
const persistConfig = {
  key: "root", // Key for localStorage
  storage,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable checks for non-serializable values
    }),
});

// Persistor for the store
export const persistor = persistStore(store);
export default store;
