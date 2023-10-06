import CustomInput from "src/components/common/CustomInput";
import { useNavigate, useParams } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { resetPassword } from "src/api/operations/profileApi";
import { useEffect } from "react";
const UpdatePassword = () => {
  const dispatch = useDispatch();
  // extract the token  from parameter
  let { id } = useParams();

  const {
    register,
    formState: { errors },
    watch,
    setError,
    clearErrors,
    handleSubmit,
  } = useForm();

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  const navigate = useNavigate();

  useEffect(() => {
    if (password !== confirmPassword) {
      setError("confirmPassword", { message: "Password do not match" });
    } else {
      clearErrors("confirmPassword");
    }
  }, [password, confirmPassword, setError, clearErrors]);

  const onSubmit = (data) => {
    dispatch(resetPassword({ ...data, token: id }, navigate));
  };

  return (
    <div className="bg-richblack-900 flex h-[calc(100vh-64px)] justify-center  w-full">
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
            register={register}
            validationSchema={{
              required: "Password is required",
            }}
            errors={errors}
            label="Password"
            placeholder="Enter your Password"
            key={2}
          />
          <CustomInput
            name="confirmPassword"
            type="password"
            register={register}
            label="Confirm Password"
            errors={errors}
            validationSchema={{
              required: "Confirm password is required",
            }}
            placeholder="Enter Confirm Password"
            key={3}
          />
          <button
            onClick={handleSubmit(onSubmit)}
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
