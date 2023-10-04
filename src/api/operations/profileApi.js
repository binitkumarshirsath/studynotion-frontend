import toast from "react-hot-toast";
import axiosInstance from "..";
import { apiRoutes } from "../apiRoute";
import { setIsMailSent } from "src/store/slices/authSlice";

export const resetPasswordToken = (email) => {
  return async (dispatch) => {
    try {
      const { data } = await axiosInstance.post(apiRoutes.sendToken, { email });
      toast.success(data.message);
      dispatch(setIsMailSent({ isMailSent: true }));
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
