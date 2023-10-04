import { useEffect, useState } from "react";
import CustomInput from "../common/CustomInput";

const SignupForm = () => {
  //switch between roles student and instructor
  const [accountType, setAccountType] = useState("student");

  //save this state in redux be4 sending otp
  const [user, setUser] = useState({
    accountType: accountType,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Update the accountType property in the user state when accountType changes
  useEffect(() => {
    setUser((prevData) => {
      return { ...prevData, accountType };
    });
  }, [accountType]);

  // handleChange for input fields
  const handleChange = (e) => {
    const { name } = e.target;
    setUser((prevData) => {
      return { ...prevData, [name]: e.target.value };
    });
  };

  //submit form
  const handleSubmit = () => {
    console.log(user);
  };

  return (
    <div className="flex flex-col mt-6 w-full h-auto ">
      {/* Student and instructor button */}
      <div className="flex w-min gap-3 my-4 px-2  py-1 rounded-full bg-richblack-700">
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
          onChange={handleChange}
          value={user.firstName}
          key={1}
          label="First Name"
          name="firstName"
          placeholder="Enter first name"
          type="text"
        />
        <CustomInput
          key={2}
          onChange={handleChange}
          value={user.lastName}
          label="Last Name"
          name="lastName"
          placeholder="Enter last name"
          type="text"
        />
      </div>
      {/* email */}
      <div className="flex min-w-full">
        <CustomInput
          key={3}
          label="Email Address"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Enter your email address"
          type="email"
        />
      </div>
      {/* pass and cp */}
      <div className="flex gap-5">
        <CustomInput
          key={4}
          label="Password"
          value={user.password}
          onChange={handleChange}
          name="password"
          placeholder="Password"
          type="password"
        />
        <CustomInput
          key={5}
          label="Confirm Password"
          onChange={handleChange}
          value={user.confirmPassword}
          name="confirmPassword"
          placeholder="Confirm Password"
          type="password"
        />
      </div>
      <button
        onClick={handleSubmit}
        className=" bg-yellow-50  mx-auto w-full  py-2 mt-8 rounded-md  font-semibold text-richblack-800"
      >
        CREATE ACCOUNT
      </button>
    </div>
  );
};
export default SignupForm;
