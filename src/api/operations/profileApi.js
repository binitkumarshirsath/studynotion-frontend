import toast from "react-hot-toast";
import axiosInstance from "..";
import { apiRoutes } from "../apiRoute";
import { setIsMailSent } from "src/store/slices/authSlice";
import { setLoading } from "src/store/slices/authSlice";
import { setUser } from "src/store/slices/profileSlice";
import { setProfileLoading } from "src/store/slices/profileSlice";
import store from "src/store/store";

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

// never write async params , iykyk
export const updateProfileImage = (params) => {
  return async (dispatch) => {
    dispatch(setProfileLoading({ loading: true }));
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const { data } = await axiosInstance.post(
        apiRoutes.updateProfile,
        params,
        config
      );

      const image = data?.updatedUser?.image;
      const user = store.getState().profileReducer;
      dispatch(setUser({ ...user, image: image }));

      localStorage.setItem("user", JSON.stringify({ ...user, image }));
      toast.success("Profile image updated successfully");
    } catch (error) {
      console.log(error);
      toast.error("Error while updating profile image.");
    } finally {
      dispatch(setProfileLoading({ loading: false }));
    }
  };
};
