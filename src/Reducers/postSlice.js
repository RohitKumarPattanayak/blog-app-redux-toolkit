import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
export const postSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    addPost: (state, data) => {
      return [...state, { id: data.payload.id, ...data.payload.post }];
    },
  },
});

export const { addPost } = postSlice.actions;

export const allPostsStore = (state) => state.posts;

export default postSlice.reducer;
