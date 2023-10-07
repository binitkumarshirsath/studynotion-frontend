import { createSlice } from "@reduxjs/toolkit";

const user = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const initialState = {
  name: user?.name || null,
  image: user?.image || null,
  role: user?.role || null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setUser: (state, action) => {
      (state.name = action.payload.name),
        (state.image = action.payload.image),
        (state.role = action.payload.role);
    },
    logout: (state) => {
      (state.image = null), (state.role = null), (state.role = null);
    },
  },
});

export const { setUser, logout } = profileSlice.actions;
export default profileSlice.reducer;
