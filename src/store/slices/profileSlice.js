import { createSlice } from "@reduxjs/toolkit";

const user = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const initialState = {
  name: user?.name || null,
  image: user?.image || null,
  role: user?.role || null,
  email: user?.email || null,
  phone: user?.phome || null,
  gender: user?.gender || null,
  dob: user?.dob || null,
  loading: false,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setUser: (state, action) => {
      (state.name = action.payload.name),
        (state.image = action.payload.image),
        (state.role = action.payload.role),
        (state.email = action.payload.email),
        (state.dob = action.payload.dob),
        (state.gender = action.payload.gender),
        (state.phone = action.payload.phone);
    },
    logout: (state) => {
      (state.image = null),
        (state.role = null),
        (state.role = null),
        (state.email = null);
    },
    setProfileLoading: (state, action) => {
      state.loading = action.payload.loading;
    },
  },
});

export const { setUser, setProfileLoading, logout } = profileSlice.actions;
export default profileSlice.reducer;
