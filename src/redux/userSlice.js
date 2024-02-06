import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  email: null,
  age: null,
  password: null,
};

const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    saveUser(state, actions) {
      state.name = actions.payload.name;
      state.email = actions.payload.email;
      state.age = actions.payload.age;
      state.password = actions.payload.password;
    },
  },
});

export const userSliceActions = userSlice.actions;
export default userSlice;

// export default userSlice.reducer;
