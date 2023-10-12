import { useForm } from "react-hook-form";
import CustomInput from "src/components/common/CustomInput";
import { BsCurrencyRupee } from "react-icons/bs";
import { useEffect, useState } from "react";
import axiosInstance from "src/api";
import { apiRoutes } from "src/api/apiRoute";
import toast from "react-hot-toast";
import { AiFillDelete } from "react-icons/ai";
import { GrNext } from "react-icons/gr";
import Upload from "src/components/dashboard/admin/CourseInfoForm/Upload";

const CourseInfoForm = () => {
  const {
    register,
    formState: { errors },
    getValues,
    setValue,
    handleSubmit,
  } = useForm();

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

  const [tag, setTag] = useState("");
  const [tagList, setTagList] = useState([]);

  const [requirement, setRequirement] = useState("");
  const [requirementList, setRequirementList] = useState([]);

  const handleRequirementDelete = (e) => {
    const newRequirementList = requirementList.filter(
      (item, index) => index !== e
    );
    setRequirementList([...newRequirementList]);
  };

  const handleRequirementAdd = (e) => {
    if (e.key === "Enter") {
      setRequirementList([...requirementList, e.target.value]);
      setValue("requirement", "");
    }
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

  const handleTagClick = (e) => {
    if (e.key === "Enter") {
      setTagList((prevData) => {
        return [...prevData, tag];
      });
      setTag("");
    }
  };

  const handleDeleteTag = (e) => {
    const newList = tagList.filter((tagItem, index) => {
      return index !== e;
    });
    setTagList([...newList]);
  };

  const onSubmit = (data) => console.log(data);

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
        <div>
          <label
            htmlFor="
            Course Description"
            className="text-white mb-2 font-semibold"
          >
            Tags <sup className="text-red-500">*</sup>
          </label>
          <div className="flex flex-wrap gap-2 mt-2">
            {tagList.length > 0 &&
              tagList.map((tagItem, index) => {
                return (
                  <div
                    className="rounded-lg flex items-center gap-2 bg-richblack-600 px-2 py-1"
                    key={index}
                  >
                    {tagItem}
                    <AiFillDelete onClick={() => handleDeleteTag(index)} />
                  </div>
                );
              })}
          </div>
          <input
            onChange={(e) => setTag(e.target.value)}
            onKeyDown={handleTagClick}
            {...register("tag", {
              required: "Tags are required",
            })}
            className="text-richblack-25 mt-3 w-full font-montserrat px-2 rounded-md bg-richblack-700 shadow-sm shadow-richblack-200 py-2"
            type="text"
          />
          {errors && errors.tag && (
            <span className="error translate-y-1  text-red-500">
              {errors.tag?.message}
            </span>
          )}
        </div>
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
        <div className="my-4 ">
          <label
            htmlFor="
            Requirement/instrution"
            className="text-white mb-2  font-semibold"
          >
            Requirment/Instruction <sup className="text-red-500">*</sup>
          </label>
          <input
            id="requirement/instruction"
            name="requiremnt"
            type="text"
            onChange={(e) => setRequirement(e.target.value)}
            onKeyDown={handleRequirementAdd}
            placeholder="Requirment/Instruction"
            {...register("requirement", {
              required: "Requirement/Instruction is required",
            })}
            className={`text-richblack-25 w-full  font-montserrat  px-2 rounded-md bg-richblack-700 shadow-sm shadow-richblack-200 py-2`}
          />

          {errors && errors.requirement && (
            <span className="error translate-y-1  text-red-500">
              {errors.requirement?.message}
            </span>
          )}
          <div className="flex mt-1 gap-2">
            {requirementList.length > 0 &&
              requirementList.map((item, index) => {
                return (
                  <div
                    className="rounded-lg flex items-center gap-2 bg-richblack-600 px-2 py-1"
                    key={index}
                  >
                    {item}
                    <AiFillDelete
                      onClick={() => handleRequirementDelete(index)}
                    />
                  </div>
                );
              })}
          </div>
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
