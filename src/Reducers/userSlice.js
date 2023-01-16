import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Rohit kumar" },
  { id: "1", name: "Neil Young" },
  { id: "2", name: "Dave Gray" },
];
export const userSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {},
});

export const {} = userSlice.actions;

export const allUsersStore = (state) => state.users;

export default userSlice.reducer;
