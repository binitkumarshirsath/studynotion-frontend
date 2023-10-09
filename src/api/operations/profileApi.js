import toast from "react-hot-toast";
import axiosInstance from "..";
import { apiRoutes } from "../apiRoute";
import { setAuth, setIsMailSent } from "src/store/slices/authSlice";
import { setLoading } from "src/store/slices/authSlice";
import { setUser } from "src/store/slices/profileSlice";
import { setProfileLoading } from "src/store/slices/profileSlice";
import store from "src/store/store";

// ask backend to generate token and send to mail
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

// reset password
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

//get user details
export const getUserDetails = async () => {
  try {
    const { data } = await axiosInstance.get(apiRoutes.getUserDetails);
    return data?.userDetails;
  } catch (error) {
    console.log(error);
  }
};

// never write async params , iykyk
export const updateProfile = (params) => {
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
      console.log(data);
      const image = data?.updatedUser?.image;
      const user = store.getState().profileReducer;
      dispatch(setUser({ ...user, image: image }));

      localStorage.setItem("user", JSON.stringify({ ...user, image }));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setProfileLoading({ loading: false }));
    }
  };
};

// change pass when logged in
export const changePassword = (params) => {
  return async (dispatch) => {
    try {
      dispatch(setProfileLoading({ loading: true }));
      const { data } = await axiosInstance.post(
        apiRoutes.changePassword,
        params
      );
      console.log(data);
      toast.success("Password updated successfully");
      return data;
    } catch (error) {
      console.log(error);
      toast.error("Error while changing password");
    } finally {
      dispatch(setProfileLoading({ loading: false }));
    }
  };
};

// delete account
export const deleteAccount = (navigate) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading({ loading: true }));
      const { data } = await axiosInstance.delete(apiRoutes.deleteAccount);
      console.log(data);
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      dispatch(
        setUser({
          name: null,
          image: null,
          role: null,
          email: null,
          dob: null,
          gender: null,
          phone: null,
        })
      );
      dispatch(setAuth({ token: null }));
      toast.success("User logged out successfully.");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Error while deleting account");
    } finally {
      dispatch(setLoading({ loading: false }));
    }
  };
};
