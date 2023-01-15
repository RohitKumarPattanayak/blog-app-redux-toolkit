import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "I've heard good things.",
  },
  {
    id: "2",
    title: "Learning Redux Toolkit",
    content: "I've heard good things.",
  },
  {
    id: "3",
    title: "Learning Redux Toolkit",
    content: "I've heard good things.",
  },
];
export const postSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {},
});

export const {} = postSlice.actions;

export const allPostsStore = (state) => state.posts;

export default postSlice.reducer;
