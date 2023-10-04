import { createSlice } from "@reduxjs/toolkit";
/* 
    initial state of auth
    check if token is available in local storage
    if its available set the token value
*/

const initialState = {
  signupdata: null,
  token: localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : null,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.token = action.payload.token;
    },
    setLoading: (state, action) => {
      state.loading = action.payload.loading;
    },
    setSignupData: (state, action) => {
      state.signupdata = action.payload.signupdata;
    },
  },
});

export const { setAuth, setLoading, setSignupData } = authSlice.actions;
export default authSlice.reducer;
