import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import PropTypes from "prop-types";
import { useState } from "react";

const CustomInput = ({
  label,
  type,
  name,
  style,
  placeholder,
  register,
  errors,
  validationSchema,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="text-white w-full flex my-3 flex-col relative">
      <label className="text-white mb-2 font-semibold" htmlFor={label}>
        {label} <sup className="text-red-700">*</sup>
      </label>
      <div className="relative">
        <input
          id={name}
          name={name}
          type={showPassword ? "text" : type}
          placeholder={placeholder}
          {...register(name, validationSchema)}
          className={`text-richblack-25 w-full  font-montserrat ${
            style && style
          } px-2 rounded-md bg-richblack-700 shadow-sm shadow-richblack-200 py-2`}
        />
        {type === "password" ? (
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute bottom-[0.70rem] text-lg right-4"
          >
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
        ) : (
          ""
        )}
      </div>
      {errors && errors[name] && (
        <span className="error translate-y-1  text-red-500">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
};

CustomInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  register: PropTypes.any,
  validationSchema: PropTypes.object,
  errors: PropTypes.object,
  style: PropTypes.string,
};

export default CustomInput;
