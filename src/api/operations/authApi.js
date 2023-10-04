import toast from "react-hot-toast";

// import routes
import { apiRoutes } from "src/api/apiRoute";

import axiosInstance from "..";

import { setLoading, setSignupData } from "src/store/slices/authSlice";
import { setUser } from "src/store/slices/profileSlice";
// import store from "src/store/store";

//otp function
export const sendotp = (params, navigate) => {
  return async () => {
    try {
      const { data } = await axiosInstance.post(apiRoutes.sendOTP, {
        email: params,
      });
      console.log(data);
      console.log(data.response.OTP);
      return data.response.OTP;
    } catch (error) {
      console.error("Error while sending otp", error);
      toast.error("Error while sending otp");
    }
  };
};

//signup function
export const signup = (params, navigate) => {
  return async (dispatch) => {
    dispatch(setLoading({ loading: true }));
    dispatch(setSignupData({ signupdata: params }));
    const otp = await dispatch(sendotp(params.email, navigate));
    try {
      const { data } = await axiosInstance.post(apiRoutes.signup, {
        ...params,
        otp,
      });
      console.log(data);
      toast.success("Account created successfully ! Please Login");
      navigate("/login");
    } catch (error) {
      console.log("Error while creating account:", error.response.data);
      toast.error(error.response.data.message);
    }
    dispatch(setLoading({ loading: false }));
  };
};

//login function
export const login = (params, navigate) => {
  return async (dispatch) => {
    dispatch(setLoading({ loading: true }));
    try {
      const { data } = await axiosInstance.post(apiRoutes.login, params);
      console.log(data);
      const user = data.user;
      const name = user.firstName + user.lastName;
      const image = user.image;
      localStorage.setItem("token", JSON.stringify(data.token));
      dispatch(
        setUser({
          name,
          image,
        })
      );
      localStorage.setItem("user", JSON.stringify({ name, image }));
      toast.success("User logged in successfully.");
      navigate("/dashboard/user");
    } catch (error) {
      console.log("Error while logging in:", error.response.data);
      toast.error(error.response.data.message);
    }
    dispatch(setLoading({ loading: false }));
  };
};
