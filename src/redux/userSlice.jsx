import { createSlice } from "@reduxjs/toolkit";

const initialState = { users: [] };

const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    saveUser(state, actions) {
      state.users = [...state.users, actions.payload];
    },
    deleteUser(state, actions) {
      state.users = state.users.filter(
        (user) => user.email !== actions.payload
      );
    },
    editUser(state, actions) {
      state.users = state.users.flatMap((el) => {
        if (el.email === actions.payload.email) {
          return actions.payload;
        } else {
          return el;
        }
      });
    },
  },
});

export const userSliceActions = userSlice.actions;
export default userSlice;
