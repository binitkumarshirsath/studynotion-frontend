import CustomInput from "src/components/common/CustomInput";
import { useParams } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { resetPassword } from "src/api/operations/profileApi";
const UpdatePassword = () => {
  const dispatch = useDispatch();
  // extract the token  from parameter
  let { id } = useParams();
  const [details, setDetails] = useState({
    token: id,
    password: "",
    confirmPassword: "",
  });

  const handleOnChange = (e) => {
    const { name } = e.target;
    setDetails((prevDetails) => {
      return {
        ...prevDetails,
        [name]: e.target.value,
      };
    });
  };

  const handleSubmit = () => {
    dispatch(resetPassword(details));
  };
  return (
    <div className="bg-richblack-900 flex flex-grow justify-center  w-full">
      <div className="w-2/5 h-fit  items-center flex flex-col lg:mt-28 mx-auto ">
        <div className="text-3xl w-4/5 text-richblack-25 lg:mb-12 font-extrabold">
          CHOOSE NEW PASSWORD
        </div>
        <div className="text-xl w-4/5 text-richblack-50 font-bold">
          Almost done. Enter your new password and you are all set.
        </div>
        <div className="w-4/5 mt-4 mb-2">
          <CustomInput
            name="password"
            type="password"
            value={details.password}
            label="Password"
            onChange={handleOnChange}
            placeholder="Enter your Password"
            key={2}
          />
          <CustomInput
            name="confirmPassword"
            type="password"
            value={details.confirmPassword}
            label="Confirm Password"
            onChange={handleOnChange}
            placeholder="Enter Confirm Password"
            key={3}
          />
          <button
            onClick={handleSubmit}
            className=" bg-yellow-50  mx-auto w-full  py-2 mt-8 rounded-md  font-bold text-richblack-700"
          >
            Change Password
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

export default UpdatePassword;
