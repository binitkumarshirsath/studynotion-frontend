import toast from "react-hot-toast";
import axiosInstance from "..";
import { apiRoutes } from "../apiRoute";
import { setCourse, setStep } from "src/store/slices/courseSlice";

export const createCourse = (params) => {
  return async (dispatch) => {
    try {
      const loading = toast.loading("Loading....");
      const { data } = await axiosInstance.post(apiRoutes.createCourse, params);
      console.log(data.course);
      dispatch(setCourse({ course: data.course }));
      toast.success("Course Information created successfully");
      dispatch(setStep({ step: 2 }));
      toast.dismiss(loading);
    } catch (err) {
      console.log(err.response);
      toast.error(err.response.data.message);
      throw err;
    }
  };
};

export const updateCourse = (params) => {
  return async (dispatch) => {
    try {
      const { data } = await axiosInstance.post(apiRoutes.updateCourse, params);
      console.log(data);
      toast.success("Course Information Updated successfully");
      dispatch(setStep({ step: 2 }));
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};

export const createSection = async (params) => {
  try {
    const { data } = await axiosInstance.post(apiRoutes.createSection, params);
    console.log(data);
    toast.success("Section created successfully");
  } catch (err) {
    console.error(err);
    return;
  }
};
export const updateSection = async (params) => {
  try {
    const { data } = await axiosInstance.post(apiRoutes.updateSection, params);
    console.log(data);
    toast.success("Section updated successfully");
  } catch (err) {
    console.error(err);
    return;
  }
};

export const deleteSection = (params) => {
  return async (dispatch) => {
    try {
      const { data } = await axiosInstance.post(
        apiRoutes.deleteSection,
        params
      );
      console.log(data);
      dispatch(setCourse({ course: data?.course }));
      toast.success("Section Deleted successfully");
    } catch (err) {
      toast.error("Error while deleting Section");
      console.error(err);
      throw err;
    }
  };
};
