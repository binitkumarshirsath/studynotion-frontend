import toast from "react-hot-toast";
import axiosInstance from "..";
import { apiRoutes } from "../apiRoute";

export const createCourse = (params) => {
  return async (dispatch) => {
    try {
      const { data } = await axiosInstance.post(apiRoutes.createCourse, params);
      console.log(data);
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};
