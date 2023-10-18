import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";

const Labels = ({ name, label, register, errors, setValue }) => {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    register(name, {
      required: `${name} is required`,
    });
  }, [name, register]);

  return (
    <div>
      <label className="text-white mb-2 font-semibold" htmlFor={label}>
        {label} <sup className="text-red-700">*</sup>
      </label>
      <div className="flex flex-wrap gap-2 my-2">
        {arr.map((tag, index) => (
          <div
            key={index}
            className=" flex items-center rounded-md bg-richblack-500 px-2 py-1 text-sm text-richblack-5"
          >
            <span className="text-richblack-5">{tag}</span>
            <button
              type="button"
              onClick={() => {
                const updatedArr = [...arr];
                updatedArr.splice(index, 1);
                setArr(updatedArr);
                setValue(name, updatedArr);
              }}
              className="ml-2 text-richblack-5"
            >
              <FaTimes />
            </button>
          </div>
        ))}
      </div>
      <input
        type="text"
        id={name}
        placeholder="Press Enter or , to add a tag"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === ",") {
            e.preventDefault();
            if (e.target.value) {
              setArr([...arr, e.target.value]);
              setValue(name, [...arr, e.target.value]);
              e.target.value = "";
            }
          }
        }}
        className={`text-richblack-25 w-full pl-3  font-montserratpx-2 rounded-md bg-richblack-700 shadow-sm shadow-richblack-200 py-2`}
      />
      {errors[name] && (
        <span className="text-xs text-pink-200">{name} are required</span>
      )}
    </div>
  );
};

Labels.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  register: PropTypes.func,
  errors: PropTypes.object,
  setValue: PropTypes.func,
};

export default Labels;
