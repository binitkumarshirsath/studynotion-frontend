import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  image: null,
  role: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile: (state, action) => {
      (state.name = action.payload.name),
        (state.image = action.payload.image),
        (state.role = action.payload.role);
    },
  },
});

export const { setProfile } = profileSlice.actions;
export default profileSlice.reducer;
