import { useForm } from "react-hook-form";
import CustomInput from "src/components/common/CustomInput";
import { BsCurrencyRupee } from "react-icons/bs";
import { useEffect, useState } from "react";
import axiosInstance from "src/api";
import { apiRoutes } from "src/api/apiRoute";
import toast from "react-hot-toast";

import { GrNext } from "react-icons/gr";
import Upload from "src/components/dashboard/admin/CourseInfoForm/Upload";

import Labels from "./CourseInfoForm/Labels";
import { useDispatch } from "react-redux";
import { createCourse } from "src/api/operations/courseApi";

const CourseInfoForm = () => {
  const {
    register,
    formState: { errors },
    setValue,
    handleSubmit,
  } = useForm();

  const dispatch = useDispatch();

  const [categories, setCategories] = useState([]);

  // thumbnail preview ke liye
  const [preview, setPreview] = useState(null);

  const handleThumbnailChange = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    const getAllCategories = async () => {
      try {
        const { data } = await axiosInstance.get(apiRoutes.getAllCategories);
        setCategories(data?.categories);
      } catch (error) {
        error("Error while fetching categories");
        toast.error("Error while fetching categories");
      }
    };
    getAllCategories();
  }, []);

  const onSubmit = (data) => {
    try {
      dispatch(createCourse(data));
    } catch (error) {
      toast.error("Error while creating course");
    }
  };

  return (
    <div className="pl-10 pt-10 flex flex-col">
      <div className="w-11/12">
        <CustomInput
          register={register}
          errors={errors}
          label="Course title"
          name="courseTitle"
          placeholder="Enter Course Title"
          validationSchema={{
            required: "Course Title is required",
          }}
        />

        {/* course description */}
        <div>
          <label
            htmlFor="
            Course Description"
            className="text-white mb-2 font-semibold"
          >
            Course Description <sup className="text-red-500">*</sup>
          </label>
          <textarea
            name="courseDescription"
            id="courseDescription"
            cols="30"
            rows="10"
            placeholder="Course description"
            {...register("courseDescription", {
              required: "Course Description is required",
            })}
            className=" text-richblack-25 mt-3 w-full font-montserrat px-2 rounded-md bg-richblack-700 shadow-sm shadow-richblack-200 py-2"
          ></textarea>
          {errors && errors.courseDescription && (
            <span className="error translate-y-1  text-red-500">
              {errors.courseDescription?.message}
            </span>
          )}
        </div>
        {/* course price */}
        <div className="relative">
          <CustomInput
            register={register}
            errors={errors}
            label="Price"
            name="price"
            type="number"
            style="pl-10"
            placeholder="Enter Course Price"
            validationSchema={{
              required: "Course Price is required",
            }}
          />

          <div className="absolute left-0 bottom-0 -translate-y-2">
            <BsCurrencyRupee size={24} />
          </div>
        </div>
        {/* course category */}
        <div>
          <label htmlFor="courseCategories" className="mb-2">
            Course Category <sup className="text-red-500">*</sup>
          </label>
          <select
            {...register("courseCategory", {
              required: "Course category is required",
            })}
            className="text-richblack-25 w-full mt-3 font-montserrat px-2 rounded-md bg-richblack-700 shadow-sm mb-4 shadow-richblack-200 py-2"
          >
            <option value="">Choose course Category</option>
            {categories?.map((item, index) => {
              return <option key={index}>{item.name}</option>;
            })}
          </select>

          {errors.courseCategory && (
            <span className="error translate-y-1  text-red-500">
              {errors.courseCategory?.message}
            </span>
          )}
        </div>
        {/* Tags */}
        <Labels
          register={register}
          errors={errors}
          label="Course Tag"
          setValue={setValue}
          name="courseTag"
        />
        {/* thumbnail */}
        <Upload
          register={register}
          preview={preview}
          setPreview={setPreview}
          handleChange={handleThumbnailChange}
          validationSchema={{
            required: "Thumbnail is required",
          }}
          errors={errors}
          label="Course Thumbnail"
          name="coursethumbnail"
          type="image"
        />
        {/* benefits of course */}
        <div className="mt-4">
          <label
            htmlFor="
            Benefits Of course"
            className="text-white mb-2  font-semibold"
          >
            Benefits of course <sup className="text-red-500">*</sup>
          </label>
          <textarea
            name="benefitsOfCourse"
            id="benefitsofCourse"
            cols="30"
            rows="7"
            placeholder="Benefits of course"
            {...register("benefitsOfCourse", {
              required: "Benefits of course is required",
            })}
            className=" text-richblack-25 mt-3 w-full font-montserrat px-2 rounded-md bg-richblack-700 shadow-sm shadow-richblack-200 py-2"
          ></textarea>
          {errors && errors.benefitsOfCourse && (
            <span className="error translate-y-1  text-red-500">
              {errors.benefitsOfCourse?.message}
            </span>
          )}
        </div>
        {/* requirement / instruction */}
        <div className="mt-4">
          <Labels
            register={register}
            errors={errors}
            label="Course Requirement/Instruction"
            setValue={setValue}
            name="courseRequirment"
          />
        </div>
        <div className="relative my-4">
          <div className="h-20"></div>
          <button
            className="flex gap-2 top-0 translate-y-4 bg-yellow-50 border border-yellow-5 px-2 py-2 rounded-md text-richblack-800 font-bold absolute items-center right-0 "
            onClick={handleSubmit(onSubmit)}
          >
            NEXT{" "}
            <GrNext
              size={20}
              className=" bg-green-500 text-transparent bg-clip-text"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseInfoForm;
