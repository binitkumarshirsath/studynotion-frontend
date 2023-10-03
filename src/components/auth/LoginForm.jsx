import CustomInput from "../common/CustomInput";

const LoginForm = () => {
  return (
    <div className="w-full  mt-6 ">
      {/* input element */}
      <div className="flex flex-col relative">
        <CustomInput
          name="email"
          type="email"
          label="Email"
          placeholder="Enter your email"
          key={1}
        />
        <CustomInput
          name="password"
          type="password"
          label="Password"
          placeholder="Enter your Password"
          key={2}
        />
        <div className="text-blue-200 font-mono font-medium text-base  absolute -bottom-5 right-0">
          Forget Password
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
