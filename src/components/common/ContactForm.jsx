import CustomInput from "./CustomInput";

import { countrycode } from "src/data/countrycode";

const ContactForm = () => {
  return (
    <div className="bg-richblack-900 w-full h-full">
      <div className="mt-10 w-2/6 gap-4 mx-auto mb-20 flex flex-col">
        {/* Text */}
        <div className=" flex flex-col gap-4">
          <div className="text-4xl text-white font-bold">Get in Touch</div>
          <div className="text-xl font-semibold  text-richblack-50">
            {" "}
            {`We'd love to hear for you, Please fill out this form.`}
          </div>
        </div>
        {/* Form */}
        <div className="w-full gap-1 flex flex-col">
          {/* first nd lastname */}
          <div className="flex gap-5">
            <CustomInput
              key={1}
              label="First Name"
              name="firstName"
              placeholder="Enter first name"
              type="text"
            />
            <CustomInput
              key={2}
              label="Last Name"
              name="lastName"
              placeholder="Enter last name"
              type="text"
            />
          </div>
          {/* email */}
          <div className="flex gap-5 items-center">
            <CustomInput
              key={3}
              label="Email"
              name="email"
              placeholder="Enter Email"
              type="text"
            />
          </div>
          {/* phone */}
          <div className="flex flex-col gap-2">
            <label className="text-white font-semibold " htmlFor="phone">
              Phone<sup className="text-red-600">*</sup>
            </label>
            <div className="flex gap-2 justify-between">
              <select
                name="phonecode"
                id="phonecode"
                className="bg-richblack-600 shadow-sm shadow-richblack-200 h-10 rounded-md w-[10%]"
              >
                {countrycode.map((item, index) => {
                  return (
                    <option key={index} value={item.code}>
                      {item.code} {item.country}
                    </option>
                  );
                })}
              </select>

              <div className="w-11/12">
                <input
                  type="number"
                  name="phone"
                  placeholder="Phone No."
                  className="w-full h-full shadow-sm shadow-richblack-200 px-2 rounded-md bg-richblack-700"
                />
              </div>
            </div>
          </div>
          {/* text message */}
          <div className="mt-3">
            <label className="text-white font-semibold" htmlFor="message">
              Message<sup className="text-red-500">*</sup>
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              className="block w-full mt-3 mb-5 text-richblack-5 px-3 py-2 bg-richblack-700 rounded-md shadow-sm shadow-richblack-200"
            ></textarea>
          </div>
          {/* submit buttom */}
          <button className="bg-yellow-50 h-10 w-full rounded-md font-bold text-richblack-900 hover:scale-105 font-poppins transition-all duration-200 shadow-sm shadow-yellow-25">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
