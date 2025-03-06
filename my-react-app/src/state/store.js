import { configureStore } from "@reduxjs/toolkit";
// import useReducer from "./profile/userSlice";
import authReducer from "./Authentification/authSlice";

export const store = configureStore({
  reducer: {
    // user: useReducer,
    auth: authReducer,
  },
});
