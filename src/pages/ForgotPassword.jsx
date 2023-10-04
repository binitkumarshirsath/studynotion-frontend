import { useState } from "react";

import CustomInput from "src/components/common/CustomInput";

import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { resetPasswordToken } from "src/api/operations/profileApi";

const ForgotPassword = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      dispatch(resetPasswordToken(email));
    } catch (error) {
      console.log(error);
    }
  };
  // accress the state using state.reducer
  //  name inside combine reducer then the inititalstate name
  const isMailSent = useSelector((state) => state.authReducer.isMailSent);

  return (
    <div className="bg-richblack-900 flex flex-grow justify-center  w-full">
      <div className="w-2/5 h-fit  items-center flex flex-col lg:mt-28 mx-auto ">
        <div className="text-3xl w-4/5 text-richblack-25 lg:mb-12 font-extrabold">
          {!isMailSent ? "RESET PASSWORD" : "CHECK EMAIL"}
        </div>
        <div className="text-xl w-4/5 text-richblack-50 font-bold">
          {!isMailSent
            ? "Have no fear. We’ll email you instructions to reset your password. If you dont have access to your email we can try account recovery"
            : `We have sent the reset email to `}
        </div>

        <div className="w-4/5 mt-4 mb-2">
          {!isMailSent ? (
            <CustomInput
              label="Email Address"
              key={1}
              name="email"
              type="email"
              value={email}
              onChange={handleOnChange}
              placeholder="Enter Your Email Address"
            />
          ) : (
            ""
          )}
          <button
            onClick={handleSubmit}
            className=" bg-yellow-50  mx-auto w-full  py-2 mt-8 rounded-md  font-bold text-richblack-700"
          >
            {!isMailSent ? "RESET PASSWORD" : "RESEND EMAIL"}
          </button>
          <div>
            <Link
              className="text-richblack-25 mt-2 flex gap-2 items-center"
              to={"/login"}
            >
              <IoIosArrowRoundBack size={35} />
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
