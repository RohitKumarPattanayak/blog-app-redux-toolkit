import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { sub } from "date-fns";

const initialState = [];
export const postSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        console.log("action.payload : ", action.payload);
        return [...state, action.payload];
      },
      prepare(data) {
        let currentTime = new Date();
        let time = currentTime.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        });
        return {
          payload: {
            id: uuidv4(),
            ...data,
            date: sub(new Date(), { minutes: 10 }).toDateString(),
            time: time,
          },
        };
      },
    },
  },
});

export const { addPost } = postSlice.actions;

export const allPostsStore = (state) => state.posts;

export default postSlice.reducer;
