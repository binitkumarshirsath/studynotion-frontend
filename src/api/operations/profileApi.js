import toast from "react-hot-toast";
import axiosInstance from "..";
import { apiRoutes } from "../apiRoute";

export const resetPasswordToken = (email) => {
  return async () => {
    try {
      const { data } = await axiosInstance.post(apiRoutes.sendToken, { email });
      console.log(data);
    } catch (error) {
      console.error("Error while resetting password", error);
      toast.error(error.response.data.message);
    }
  };
};

export const resetPassword = (details) => {
  return async () => {
    try {
      const { data } = await axiosInstance.post(apiRoutes.resetPassword, {
        ...details,
      });
      console.log(data);
    } catch (error) {
      console.error("Error while upating password", error);
      toast.error(error.response.data.message);
    }
  };
};
