import CustomInput from "../common/CustomInput";

const SignupForm = () => {
  return (
    <div className="flex flex-col mt-6 w-full h-auto ">
      {/* Student and instructor button */}
      <div className="flex w-min gap-3 my-4 px-2  py-1 rounded-full bg-richblack-700">
        <div className="rounded-full  px-4 py-2 text-richblack-50 w-fit bg-richblack-900">
          Student
        </div>
        <div className="rounded-full px-4 py-2 text-richblack-50 w-fit bg-richblack-700">
          Instructor
        </div>
      </div>
      {/* firstname and lastname */}
      <div className="flex w-full gap-5">
        <CustomInput
          key={1}
          label="First Name"
          name="firstname"
          placeholder="Enter first name"
          type="text"
        />
        <CustomInput
          key={2}
          label="Last Name"
          name="lastname"
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
          placeholder="Enter your email address"
          type="email"
        />
      </div>
      {/* pass and cp */}
      <div className="flex gap-5">
        <CustomInput
          key={4}
          label="Password"
          name="password"
          placeholder="Password"
          type="password"
        />
        <CustomInput
          key={5}
          label="Confirm Password"
          name="confirmPassword"
          placeholder="Confirm Password"
          type="password"
        />
      </div>
    </div>
  );
};

export default SignupForm;
