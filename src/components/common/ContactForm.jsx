import CustomInput from "./CustomInput";
import { useForm } from "react-hook-form";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import "react-phone-number-input/style.css";
import { useDispatch } from "react-redux";
import { contactUs } from "src/api/operations/contactIUsApi";

const ContactForm = () => {
  const {
    register,
    formState: { errors },
    control,
    handleSubmit,
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = async (data, e) => {
    try {
      e.preventDefault();
      dispatch(contactUs(data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-richblack-900 w-full h-full">
      <div className="mt-10 w-full gap-4 mx-auto mb-20 flex flex-col">
        {/* Text */}
        <div className=" flex flex-col gap-4">
          <div className="text-4xl text-white font-bold">Get in Touch</div>
          <div className="text-xl font-semibold  text-richblack-50">
            {" "}
            {`We'd love to hear from you, Please fill out this form.`}
          </div>
        </div>
        {/* Form */}
        <div className="w-full gap-1 flex flex-col">
          {/* first nd lastname */}
          <div className="flex gap-5">
            <CustomInput
              register={register}
              validationSchema={{
                required: "First name is required",
              }}
              label="First Name"
              errors={errors}
              name="firstName"
              placeholder="Enter first name"
              type="text"
            />
            <CustomInput
              register={register}
              validationSchema={{
                required: "Last name is required",
              }}
              label="Last Name"
              errors={errors}
              name="lastName"
              placeholder="Enter last name"
              type="text"
            />
          </div>
          {/* email */}
          <div className="flex gap-5 items-center">
            <CustomInput
              register={register}
              errors={errors}
              validationSchema={{
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid Email address",
                },
              }}
              label="Email"
              name="email"
              placeholder="Enter Email"
              type="text"
            />
          </div>
          {/* phone */}
          <label className="text-white font-semibold" htmlFor="phone">
            Phone<sup className="text-red-500">*</sup>
          </label>
          <div>
            <PhoneInputWithCountry
              name="phone"
              control={control}
              defaultCountry="IN"
              className="bg-richblack-700 rounded-md  box-border   pl-3 py-2"
              rules={{ required: true }}
            />
          </div>
          {/* text message */}
          <div className="mt-3">
            <label className="text-white font-semibold" htmlFor="message">
              Message<sup className="text-red-500">*</sup>
            </label>
            <textarea
              name="message"
              id="message"
              {...register("message", {
                required: "Message is required",
              })}
              cols="30"
              rows="10"
              className="block w-full mt-3 mb-5 text-richblack-5 px-3 py-2 bg-richblack-700 rounded-md shadow-sm shadow-richblack-200"
            ></textarea>
          </div>
          {/* submit buttom */}
          <button
            onClick={handleSubmit(onSubmit)}
            className="bg-yellow-50 h-10 w-full rounded-md font-bold text-richblack-900 hover:scale-105 font-poppins transition-all duration-200 shadow-sm shadow-yellow-25"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
