import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import CustomInput from "../common/CustomInput";
import { login } from "src/api/operations/authApi";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // state variable to store user object
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name } = e.target;
    setUser((prevUser) => {
      return {
        ...prevUser,
        [name]: e.target.value,
      };
    });
  };

  const handleSubmit = async () => {
    try {
      await dispatch(login(user, navigate));
    } catch (error) {
      toast.error("Error while logging in");
      console.log(error);
    }
  };
  return (
    <div className="w-full flex flex-col  mt-6 ">
      {/* input element */}
      <div className="flex flex-col relative">
        <CustomInput
          onChange={handleOnChange}
          name="email"
          type="email"
          label="Email"
          value={user.email}
          placeholder="Enter your email"
          key={1}
        />
        <CustomInput
          onChange={handleOnChange}
          name="password"
          type="password"
          label="Password"
          value={user.password}
          placeholder="Enter your Password"
          key={2}
        />
        <Link
          to={"/forgot-password"}
          className="text-blue-200 font-mono font-medium text-base  absolute -bottom-5 right-0"
        >
          Forgot Password
        </Link>
      </div>
      <button
        onClick={handleSubmit}
        className=" bg-yellow-50  mx-auto w-full  py-2 mt-8 rounded-md  font-semibold text-richblack-800"
      >
        LOGIN
      </button>
    </div>
  );
};

export default LoginForm;
