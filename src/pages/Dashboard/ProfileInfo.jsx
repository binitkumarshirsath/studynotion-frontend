import CustomInput from "src/components/common/CustomInput";
import { useForm } from "react-hook-form";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import "react-phone-number-input/style.css";

const ProfileInfo = () => {
  const { errors, handleSubmit, register, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-richblack-800 relative mb-10 rounded-lg border  gap-10 flex-col flex pl-10 pr-10 border-richblack-600 h-auto w-10/12">
      <div className="text-white font-mono text-xl mt-6 font-semibold">
        PROFILE INFORMATION
      </div>
      {/*  */}
      <div className="flex w-4/6 gap-8 justify-between">
        {/* fist column */}
        <form className="flex flex-col w-full gap-2">
          <CustomInput
            errors={errors}
            key={1}
            label="First Name"
            name="firstName"
            type="text"
            register={register}
            validationSchema={{
              required: "First Name is required",
            }}
          />
          <CustomInput
            errors={errors}
            key={2}
            label="DOB"
            name="dob"
            type="date"
            register={register}
            validationSchema={{
              required: "Date of birth is required",
            }}
          />
          <div className="mt-3">
            <label className="text-white mb-3 font-semibold" htmlFor="phone">
              Phone<sup className="text-red-500">*</sup>
            </label>
            <div className="mt-2">
              <PhoneInputWithCountry
                name="phone"
                control={control}
                defaultCountry="IN"
                className="bg-richblack-700 rounded-md  box-border   pl-3 py-2"
                rules={{ required: "true" }}
              />
            </div>
          </div>
        </form>
        {/* second column */}
        <div className="flex flex-col w-full gap-2">
          <CustomInput
            errors={errors}
            key={4}
            label="Last Name"
            name="lastName"
            type="text"
            register={register}
            validationSchema={{
              required: "Last Name required",
            }}
          />

          <div className="my-3">
            <label className="text-white mb-2 font-semibold" htmlFor="Email">
              Gender <sup className="text-red-700">*</sup>
            </label>
            <select
              {...register("gender")}
              className="text-richblack-25 w-full mt-2 font-montserrat px-2 rounded-md bg-richblack-700 h-11 shadow-sm shadow-richblack-200 py-2"
            >
              <option value={"male"}>Male</option>
              <option value={"femail"}>Female</option>
            </select>
          </div>

          <CustomInput
            errors={errors}
            key={6}
            label="About"
            name="about"
            type="text"
            register={register}
          />
        </div>
      </div>
      <button
        type="submit"
        onClick={handleSubmit(onSubmit)}
        className="bg-yellow-50 absolute translate-y-16 px-1 py-2 text-lg  right-0 bottom-0 text-richblack-800 w-1/12 rounded-md font-semibold "
      >
        Save
      </button>
    </div>
  );
};

export default ProfileInfo;
