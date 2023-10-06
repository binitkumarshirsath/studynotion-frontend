import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSignupData } from "src/store/slices/authSlice";
import { sendotp } from "src/api/operations/authApi";
import { useForm } from "react-hook-form";

import CustomInput from "../common/CustomInput";
//switch between roles student and instructor

const SignupForm = () => {
  const [accountType, setAccountType] = useState("student");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    setError,
    clearErrors,
  } = useForm();
  //save this state in redux be4 sending otp
  // Update the accountType property in the user state when accountType changes

  /*set user data in redux store,
  send email[otp] to users email
  navigate to verify email 
  */
  const onSubmit = async (data) => {
    dispatch(setSignupData({ signupdata: { ...data, accountType } }));
    await sendotp(data.email, navigate, dispatch);
  };

  // used to check if password and cnfpassword matches
  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  useEffect(() => {
    if (password !== confirmPassword) {
      setError("confirmPassword", {
        message: "Passwords do not match",
      });
    } else {
      clearErrors("confirmPassword");
    }
  }, [password, confirmPassword, setError, errors, clearErrors]);
  return (
    <div className="flex flex-col h-full mt-6 w-full  ">
      {/* Student and instructor button */}
      <div className="flex w-min gap-3 my-4 px-2 h-full  py-1 rounded-full bg-richblack-700">
        <button
          onClick={() => setAccountType("student")}
          className={`transition-all duration-150 rounded-full  px-4 py-2 text-richblack-50 w-fit ${
            accountType === "student" ? "bg-richblack-900" : "bg-richblack-700"
          } `}
        >
          Student
        </button>
        <button
          onClick={() => setAccountType("instructor")}
          className={` transition-all duration-200 rounded-full  px-4 py-2 text-richblack-50 w-fit ${
            accountType === "instructor"
              ? "bg-richblack-900"
              : "bg-richblack-700"
          } `}
        >
          Instructor
        </button>
      </div>
      {/* firstname and lastname */}
      <div className="flex w-full gap-5">
        <CustomInput
          label="First Name"
          name="firstName"
          register={register}
          errors={errors}
          validationSchema={{
            required: "First name is required",
          }}
          placeholder="Enter first name"
          type="text"
        />
        <CustomInput
          label="Last Name"
          name="lastName"
          register={register}
          errors={errors}
          validationSchema={{
            required: "Last name is required",
          }}
          placeholder="Enter last name"
          type="text"
        />
      </div>
      {/* email */}
      <div className="flex min-w-full ">
        <CustomInput
          label="Email Address"
          name="email"
          errors={errors}
          register={register}
          validationSchema={{
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid Email address",
            },
          }}
          placeholder="Enter your email address"
          type="email"
        />
      </div>
      {/* pass and cp */}
      <div className="flex gap-5">
        <CustomInput
          label="Password"
          errors={errors}
          register={register}
          validationSchema={{
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Atleast 6 characters",
            },
          }}
          name="password"
          placeholder="Password"
          type="password"
        />
        <CustomInput
          label="Confirm Password"
          name="confirmPassword"
          errors={errors}
          register={register}
          validationSchema={{
            required: "Confirm password is required",
            minLength: {
              value: 6,
              message: "",
            },
          }}
          placeholder="Confirm Password"
          type="password"
        />
      </div>
      <button
        onClick={handleSubmit(onSubmit)}
        className=" bg-yellow-50  mx-auto w-full  py-2 my-8 rounded-md  font-semibold text-richblack-800"
      >
        CREATE ACCOUNT
      </button>
    </div>
  );
};
export default SignupForm;
