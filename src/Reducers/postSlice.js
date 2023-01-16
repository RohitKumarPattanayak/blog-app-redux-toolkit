import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = [];
export const postSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        return [...state, action.payload];
      },
      prepare(data) {
        return {
          payload: { id: uuidv4(), ...data },
        };
      },
    },
  },
});

export const { addPost } = postSlice.actions;

export const allPostsStore = (state) => state.posts;

export default postSlice.reducer;
