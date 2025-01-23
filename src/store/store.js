// store.js
import { configureStore, combineReducers } from "@reduxjs/toolkit"; // Add combineReducers
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import todoReducer from "./slice/todoSlice";
import authReducer from "./slice/authSlice"; 

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "todos"], 
};

// Create root reducer using combineReducers
const rootReducer = combineReducers({
  auth: authReducer,
  todos: todoReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }),
});

export const persistor = persistStore(store);
