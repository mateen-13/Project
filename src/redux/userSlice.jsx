import { createSlice } from "@reduxjs/toolkit";

const initialState = { users: [] };

const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    saveUser(state, actions) {
      state.users = [...state.users, actions.payload];
    },
  },
});

export const userSliceActions = userSlice.actions;
export default userSlice;

// export default userSlice.reducer;
