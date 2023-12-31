import { createSlice } from "@reduxjs/toolkit";

/* 
    initial state of auth
    check if token is available in local storage
    if its available set the token value
*/

/*
  signupdata holds the signup data while signining
  token holdes the jwt
  ismail sent is a flag changing content of password page based 
  on mail sent or not , works as a template swither
*/
const initialState = {
  signupdata: null,
  token: localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : null,
  loading: false,
  isMailSent: false,
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
    setIsMailSent: (state, action) => {
      state.isMailSent = action.payload.isMailSent;
    },
  },
});

export const { setAuth, setLoading, setSignupData, setIsMailSent } =
  authSlice.actions;

export default authSlice.reducer;
