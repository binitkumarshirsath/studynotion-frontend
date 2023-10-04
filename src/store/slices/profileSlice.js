import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  image: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setUser: (state, action) => {
      (state.name = action.payload.name), (state.image = action.payload.image);
    },
    logout: (state) => {
      (state.name = null)((state.image = null));
    },
  },
});

export const { setUser } = profileSlice.actions;
export default profileSlice.reducer;
