import { createSlice } from "@reduxjs/toolkit";
/* 
    initial state of auth
    check if token is available in local storage
    if its available set the token value
*/

const initialState = {
  token: localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.token = action.payload.token;
    },
  },
});

console.log(authSlice);

export const { setAuth } = authSlice.actions;
export default authSlice.reducer;
