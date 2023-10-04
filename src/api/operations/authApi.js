import toast from "react-hot-toast";

// import routes
import { apiRoutes } from "src/api/apiRoute";

import axiosInstance from "..";

//login function
export const login = (user, navigate) => {
  return async () => {
    const loading = toast.loading("Loading....");
    try {
      const { data } = await axiosInstance.post(apiRoutes.login, user);
      console.log(data);
      toast.dismiss(loading);
    } catch (error) {
      console.log("Error while logging in:", error.response.data);
      toast.error(error.response.data.message);
      toast.dismiss(loading);
    }
  };
};

//signup function
export const signup = (user, navigate) => {
  return async () => {
    const loading = toast.loading("Loading...");
    try {
      const { data } = await axiosInstance.post(apiRoutes.signup, user);
      console.log(data);
      toast.dismiss(loading);
    } catch (error) {
      console.log("Error while creating account:", error.response.data);
      toast.error(error.response.data.message);
      toast.dismiss(loading);
    }
  };
};
