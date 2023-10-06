import toast from "react-hot-toast";
import axiosInstance from "..";
import { apiRoutes } from "../apiRoute";
import { setIsMailSent } from "src/store/slices/authSlice";
import { setLoading } from "src/store/slices/authSlice";

export const resetPasswordToken = (email) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading({ loading: true }));
      const { data } = await axiosInstance.post(apiRoutes.sendToken, { email });
      toast.success(data.message);
      dispatch(setIsMailSent({ isMailSent: true }));
    } catch (error) {
      console.error("Error while resetting password", error);
      toast.error(error.response.data.message);
      dispatch(setLoading({ loading: false }));
    }
    dispatch(setLoading({ loading: false }));
  };
};

export const resetPassword = (details, navigate) => {
  return async (dispatch) => {
    dispatch(setLoading({ loading: true }));
    try {
      const { data } = await axiosInstance.post(apiRoutes.resetPassword, {
        ...details,
      });
      toast.success(data?.message);
      navigate("/login");
    } catch (error) {
      console.error("Error while upating password", error);
      toast.error(error.response.data.message);
    } finally {
      dispatch(setLoading({ loading: false }));
    }
  };
};
