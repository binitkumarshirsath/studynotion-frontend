import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import "react-phone-number-input/style.css";
// import { updateProfileImage } from "src/api/operations/profileApi";
import ProfileInfo from "src/pages/Dashboard/ProfileInfo";
import { updateProfile } from "src/api/operations/profileApi";
import ChangePassword from "./ChangePassword";
const Settings = () => {
  const { register } = useForm();

  const user = useSelector((state) => state.profileReducer);
  const [imagePreview, setImagePreview] = useState(user.image);
  const [imageToUpload, setImageToUpload] = useState(null);
  // e.target gives the whole img tag :
  // <input name="image" type="file" id="image" accept="image/png, image/gif, image/jpeg" class="hidden">
  const dispatch = useDispatch();
  const onImageChange = (e) => {
    // e.target.files[0] ---> gives image to upload
    // URL.createObjectURL(e.target.files[0]) --> gives image to preview
    // blog -> localhost url
    setImagePreview(URL.createObjectURL(e.target.files[0]));
    setImageToUpload(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", imageToUpload);
    try {
      dispatch(updateProfile(formData));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-richblack-900 w-full h-full">
      <div className="flex flex-col w-10/12 mx-auto  h-full">
        {/* Heading */}
        <div className="text-white font-bold font-mono text-3xl my-12 ">
          Edit Profile
        </div>

        {/* 2nd div photo edit */}
        <div className="bg-richblack-800 mb-10 h-full rounded-lg border items-center gap-10 flex pl-10 pr-10 border-richblack-600 w-10/12">
          <img
            src={imagePreview}
            alt="user-photu"
            className="rounded-full max-w-[60px] min-w-[60px] max-h-[60px] min-h-[60px  ] object-contain "
          />
          <div className="flex flex-col my-4 text-white justify-evenly">
            <div className="font-semibold">Change Profile Picture</div>
            <div className="flex gap-5 mt-4 items-center">
              <div className="flex items-center">
                <input
                  {...register("image")}
                  type="file"
                  name="image"
                  id="image"
                  accept="image/png, image/gif, image/jpeg"
                  className="hidden"
                  onChange={onImageChange}
                />
                <label
                  className="cursor-pointer text-base font-semibold border-2 border-richblack-50 bg-richblack-600  px-3 py-1 rounded-md"
                  htmlFor="image"
                >
                  SELECT
                </label>
              </div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="bg-yellow-50 cursor-pointer text-base py-1 px-3 font-semibold rounded-md text-richblue-700"
              >
                UPLOAD
              </button>
            </div>
          </div>
        </div>
        {/* Profile info wala div */}
        <ProfileInfo />
        {/* password change section */}
        <ChangePassword />
      </div>
    </div>
  );
};
export default Settings;
