import OtpInput from "react-otp-input";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { PiClockClockwiseLight } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "src/api/operations/authApi";

const VerifyOTP = () => {
  const [otp, setOtp] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.authReducer.signupdata);
  console.log(user);
  const parsedOtp = parseInt(otp);
  console.log(typeof parsedOtp);
  let userSignupData;
  if (user) {
    userSignupData = {
      ...user,
      otp,
    };
  }

  const handleSubmit = async () => {
    await signup(userSignupData, navigate, dispatch);
  };
  return (
    <div className="flex flex-1  bg-richblack-900 w-full ">
      <div className="flex flex-col w-full mt-36 items-center">
        <div className="w-4/12">
          <div className="text-richblack-5 my-4  text-4xl font-inter font-semibold ">
            Verify Email
          </div>
          <div className="text-richblack-25 mb-6 text-xl font-light">
            A verfication code has been sent to you. Enter the code below
          </div>
          <div className="max-h-full">
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              shouldAutoFocus
              renderInput={(props) => (
                <input
                  {...props}
                  placeholder="-"
                  type="number"
                  style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                  }}
                  className="w-[48px] lg:w-[60px] border-0 bg-richblack-800 rounded-[0.5rem] text-richblack-5 aspect-square text-center focus:border-0 focus:outline-2 focus:outline-yellow-50"
                />
              )}
              containerStyle={{
                justifyContent: "center",
                display: "flex",
                gap: "2rem",
              }}
            />
          </div>
          <div>
            <button
              onClick={handleSubmit}
              className="w-full flex flex-col gap-4 items-center font-poppins tracking-wider bg-yellow-50 font-semibold mt-6 px-2 py-3 rounded-lg"
            >
              Verify Email
            </button>
            <div className="flex justify-between mt-3">
              <Link
                className="text-richblack-25 mt-2 flex gap-2 items-center"
                to={"/login"}
              >
                <IoIosArrowRoundBack size={35} />
                Back to Login
              </Link>
              <Link
                className="text-richblack-25 mt-2 flex gap-2 items-center"
                to={"/login"}
              >
                <PiClockClockwiseLight size={35} />
                Resend OTP
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOTP;
