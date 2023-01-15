import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "I've heard good things.",
  },
  {
    id: "2",
    title: "Slices...",
    content: "The more I say slice, the more I want pizza.",
  },
  {
    id: "3",
    title: "Slices...",
    content: "The more I say slice, the more I want pizza.",
  },
  {
    id: "4",
    title: "Slices...",
    content: "The more I say slice, the more I want pizza.",
  },
];
export const postSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {},
});

export const {} = postSlice.actions;

export default postSlice.reducer;
