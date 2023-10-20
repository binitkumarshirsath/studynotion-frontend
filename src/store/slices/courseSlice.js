import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 1,
  course: null,
  editCourse: false,
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
    resetCourseState: (state) => {
      state.step = 1;
      state.course = null;
      state.editCourse = false;
    },
  },
});

export const {
  setStep,
  setCourse,
  setEditing,
  setPaymentLoading,
  resetCourseState,
} = courseSlice.actions;

export default courseSlice.reducer;
