import { useEffect } from "react";
import CustomInput from "../common/CustomInput";
import { useForm } from "react-hook-form";
import { changePassword } from "src/api/operations/profileApi";
import { useDispatch } from "react-redux";

const ChangePassword = () => {
  const {
    register,
    formState: { errors },
    clearErrors,
    setError,
    handleSubmit,
    watch,
  } = useForm();

  const dispatch = useDispatch();

  const newPassword = watch("newPassword");
  const confirmNewPassword = watch("confirmNewPassword");

  useEffect(() => {
    if (newPassword !== confirmNewPassword) {
      setError("confirmNewPassword", {
        message: "New Password and confirm new password do not match",
      });
    } else {
      clearErrors("confirmNewPassword");
    }
  }, [newPassword, confirmNewPassword, setError, clearErrors]);

  const onSubmit = async (data) => {
    dispatch(changePassword(data));
  };

  return (
    <div className="mt-16 mb-16  w-full h-full">
      <div className="w-10/12 relative h-full flex flex-col">
        <CustomInput
          errors={errors}
          label="Current Password"
          placeholder="Enter current password"
          register={register}
          validationSchema={{
            required: "Current password is required",
            minLength: {
              value: "Password is atleast 6 characters",
            },
          }}
          type="password"
          name="password"
        />
        <CustomInput
          errors={errors}
          label="New Password"
          placeholder="Enter New password"
          register={register}
          validationSchema={{
            required: "New password is required",
            minLength: {
              value: "Password is atleast 6 characters",
            },
          }}
          type="password"
          name="newPassword"
        />
        <CustomInput
          errors={errors}
          label="Confirm New Password"
          placeholder="Confirm password"
          register={register}
          validationSchema={{
            required: "Confirm new password is required",
            minLength: {
              value: "Password is atleast 6 characters",
            },
          }}
          type="password"
          name="confirmNewPassword"
        />
        <button
          onClick={handleSubmit(onSubmit)}
          className="bg-yellow-50 absolute translate-y-12 px-1 py-2 text-lg  right-0 bottom-0 text-richblack-800 w-1/12 rounded-md font-semibold "
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;
