import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

import CustomInput from "../common/CustomInput";
import { login } from "src/api/operations/authApi";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const loading = useSelector((state) => state.authReducer.loading);

  // state variable to store user object

  const onSubmit = async (data) => {
    try {
      dispatch(login(data, navigate));
    } catch (error) {
      toast.error("Error while logging in");
      console.log(error);
    }
  };

  if (loading) {
    return <div className="custom-loader"></div>;
  }

  return (
    <div className="w-full flex flex-col  mt-6 ">
      {/* input element */}
      <div className="flex flex-col relative gap-4">
        <CustomInput
          name="email"
          type="email"
          label="Email"
          errors={errors}
          placeholder="Enter your email"
          register={register}
          validationSchema={{
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          }}
        />
        <CustomInput
          name="password"
          type="password"
          label="Password"
          placeholder="Enter your Password"
          register={register}
          errors={errors}
          validationSchema={{
            required: "Passoword is required",
            minLength: {
              value: 6,
              message: "Password must me atleast 6 character",
            },
          }}
        />
        <Link
          to={"/forgot-password"}
          className="text-blue-200 font-mono font-medium text-base  absolute -bottom-5 right-0"
        >
          Forgot Password
        </Link>
      </div>
      <button
        onClick={handleSubmit(onSubmit)}
        className=" bg-yellow-50  mx-auto w-full  py-2 mt-8 rounded-md  font-bold text-richblack-700"
      >
        LOGIN
      </button>
    </div>
  );
};

export default LoginForm;
