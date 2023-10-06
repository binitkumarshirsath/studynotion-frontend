import toast from "react-hot-toast";

// import routes
import { apiRoutes } from "src/api/apiRoute";

import axiosInstance from "..";

import { setAuth, setLoading } from "src/store/slices/authSlice";
import { setUser } from "src/store/slices/profileSlice";
// import store from "src/store/store";

//otp function
export const sendotp = async (params, navigate, dispatch) => {
  dispatch(setLoading({ loading: true }));
  try {
    await axiosInstance.post(apiRoutes.sendOTP, {
      email: params,
    });
    navigate("/verify-otp");
  } catch (error) {
    console.error("Error while sending otp", error);
    toast.error("Error while sending otp");
  }
  dispatch(setLoading({ loading: false }));
};

// passing dispatch as an arguments works too
//

//signup function
// export const signup = (params, navigate) => {
//   return async (dispatch) => {
//     dispatch(setLoading({ loading: true }));
//     dispatch(setSignupData({ signupdata: params }));
//     const otp = await dispatch(sendotp(params.email, navigate));
//     try {
//       const { data } = await axiosInstance.post(apiRoutes.signup, {
//         ...params,
//         otp,
//       });
//       console.log(data);
//       toast.success("Account created successfully ! Please Login");
//       navigate("/login");
//     } catch (error) {
//       console.log("Error while creating account:", error.response.data);
//       toast.error(error.response.data.message);
//     }
//     dispatch(setLoading({ loading: false }));
//   };
// };
export const signup = async (params, navigate, dispatch) => {
  dispatch(setLoading({ loading: true }));
  try {
    await axiosInstance.post(apiRoutes.signup, params);
    toast.success("User signed up successfully.");
    navigate("/login");
  } catch (error) {
    console.log("Error while creating account:", error.response.data);
    toast.error(error.response.data.message);
  }
  dispatch(setLoading({ loading: false }));
};

//login function
export const login = (params, navigate) => {
  return async (dispatch) => {
    dispatch(setLoading({ loading: true }));
    try {
      const { data } = await axiosInstance.post(apiRoutes.login, params);
      const user = data.user;
      const name = user.firstName + user.lastName;
      const image = user.image;
      const role = user.accountType;
      localStorage.setItem("token", JSON.stringify(data.token));
      //update state after login
      dispatch(setAuth({ token: data.token }));
      dispatch(
        setUser({
          name,
          image,
          role,
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

//logout functionality
export const logout = async (navigate, dispatch) => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  dispatch(
    setUser({
      name: null,
      image: null,
      role: null,
    })
  );
  dispatch(setAuth({ token: null }));
  toast.success("User logged out successfully.");
  navigate("/");
};
