import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 1,
  course: null,
  isEditing: false,
  paymentLoading: false,
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setStep: (state, action) => {
      state.step = action.payload.step;
    },
    setCourse: (state, action) => {
      state.course = action.payload.course;
    },
    setEditing: (state, action) => {
      state.isEditing = action.payload.isEditing;
    },
    setPaymentLoading: (state, action) => {
      state.paymentLoading = action.payload.paymentLoading;
    },
    setResetCourse: (state, action) => {
      state.course = action.payload.course;
    },
  },
});

export const { setStep, setCourse, setEditing, setPaymentLoading } =
  courseSlice.actions;

export default courseSlice.reducer;
