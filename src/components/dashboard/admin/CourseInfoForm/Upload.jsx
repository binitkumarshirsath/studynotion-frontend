import { AiOutlineCloudUpload } from "react-icons/ai";
import PropTypes from "prop-types";

// e.target.files[0] is somthing we pass to form data for uploading

const Upload = ({
  label,
  name,
  register,
  validationSchema,
  type,
  errors,
  handleChange,
  preview,
  setPreview,
}) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    handleChange(file);
  };

  return (
    <div className="flex flex-col">
      <label htmlFor={label} className="mb-2 mt-4">
        {label} <sup className="text-red-500">*</sup>
      </label>

      <div className="w-full mx-auto">
        <input
          type="file"
          hidden
          {...register(name, validationSchema)}
          accept={`${type}/*`}
          name={name}
          id={name}
          onChange={handleFileChange}
        />
        {preview ? (
          <>
            <img
              src={preview}
              className="flex flex-col items-center w-full h-72 rounded-md border border-richblack-400 bg-richblack-700 wjustify-center"
            />
            <div className="flex justify-center w-full">
              <button
                onClick={() => {
                  setPreview(null);
                }}
                className="text-richblack-50 text-base mt-2 rounded-sm "
              >
                Cancel
              </button>
            </div>
          </>
        ) : (
          <label
            htmlFor={name}
            className="flex flex-col items-center w-full h-72 rounded-md border border-richblack-400 bg-richblack-700 wjustify-center"
          >
            <div className="flex flex-col justify-center items-center   w-full h-full">
              <div className="rounded-full bg-richblue-700 px-8 py-8">
                <AiOutlineCloudUpload className="text-yellow-50" size={45} />
              </div>
              <div className="max-w-[50%] text-center text-richblack-100 text-base ">
                Drag and drop an {type}, or click to{" "}
                <span className="font-bold text-yellow-50">Browse</span> a file
              </div>
              <div>
                <ul className="flex text-sm text-richblack-25 mt-6 w-full justify-between gap-10">
                  <li>Aspect ratio 16:9</li>
                  <li>Recommended size 1024 x 576</li>
                </ul>
              </div>
            </div>
          </label>
        )}

        {errors?.name && (
          <span className="error translate-y-1  text-red-500">
            {errors?.name?.message}
          </span>
        )}
      </div>
    </div>
  );
};

Upload.propTypes = {
  preview: PropTypes.any,
  setPreview: PropTypes.func,
  handleChange: PropTypes.func,
  label: PropTypes.string,
  name: PropTypes.string,
  register: PropTypes.func,
  validationSchema: PropTypes.object,
  type: PropTypes.string,
  errors: PropTypes.object,
};

export default Upload;
