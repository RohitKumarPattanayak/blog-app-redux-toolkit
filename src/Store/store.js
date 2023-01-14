import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../Reducers/postSlice";

export const store = configureStore({
  reducer: { posts: postReducer },
});
