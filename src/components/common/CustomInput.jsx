import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import PropTypes from "prop-types";
import { useState } from "react";

const CustomInput = ({ label, type, name, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="text-white w-full flex gap-1 my-2 flex-col relative">
      <label className="text-white" htmlFor="Email">
        {label} <sup className="text-red-700">*</sup>
      </label>
      <input
        className="text-richblack-25 w-full font-montserrat px-2 rounded-md bg-richblack-700 shadow-sm shadow-richblack-500 py-2"
        type={showPassword ? "text" : type}
        name={name}
        placeholder={placeholder}
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
  );
};

CustomInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

export default CustomInput;