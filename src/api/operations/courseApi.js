import toast from "react-hot-toast";
import axiosInstance from "..";
import { apiRoutes } from "../apiRoute";
import { setStep } from "src/store/slices/courseSlice";

export const createCourse = (params) => {
  return async (dispatch) => {
    try {
      const { data } = await axiosInstance.post(apiRoutes.createCourse, params);
      console.log(data);
      toast.success("Course Information created successfully");
      dispatch(setStep({ step: 2 }));
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};
