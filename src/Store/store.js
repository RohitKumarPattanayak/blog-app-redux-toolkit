import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../Reducers/postSlice";
import userReducer from "../Reducers/userSlice";

export const store = configureStore({
  reducer: { posts: postReducer, users: userReducer },
});
