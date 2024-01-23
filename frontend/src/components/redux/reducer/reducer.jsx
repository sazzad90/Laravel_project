import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  value: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoginStatus: (state, actions) => {
      state.isLoggedIn = actions.payload;
    },
    signup: (state, actions) => {
      state.isLoggedIn = actions.payload;
    },
    setResetMessage: (state, actions) => {
      state.value = actions.payload;
    },
  },
});

export const { reset, signup, setLoginStatus, setResetMessage } = authSlice.actions;

export default authSlice.reducer;
