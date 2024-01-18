import {createSlice} from '@reduxjs/toolkit'
const initialState = {
  isLoggedIn:false,
  value: '',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoginStatus: (state,actions) => {
      state.value = "Login successful"
      state.isLoggedIn = actions.payload;
    },
    signup: (state,actions) => {
      state.value = "Registration successful"
      state.isLoggedIn = actions.payload;
    },
    reset: (state,actions) => {
      state.value = actions.payload
    },
  },
})

export const { reset, signup, setLoginStatus } = authSlice.actions

export default authSlice.reducer