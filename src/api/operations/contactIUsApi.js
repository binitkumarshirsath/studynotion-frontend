import { apiRoutes } from "../apiRoute";
import axiosInstance from "..";
import { setLoading } from "src/store/slices/authSlice";
import toast from "react-hot-toast";

export const contactUs = (params) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading({ loading: true }));
      await axiosInstance.post(apiRoutes.contactUs, params);
      toast.success("Mail sent successfully");
    } catch (error) {
      console.log(error);
      toast.error("Error while sending the mail");
    } finally {
      dispatch(setLoading({ loading: false }));
    }
  };
};
