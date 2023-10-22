import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillPlusCircle, AiFillEdit } from "react-icons/ai";
import CustomButton from "src/components/common/CustomButton";

import { GrFormNext } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { setCourse, setEditing, setStep } from "src/store/slices/courseSlice";
import toast from "react-hot-toast";
import { createSection, updateSection } from "src/api/operations/courseApi";
import NestedView from "./NestedView";

const CourseBuilderForm = () => {
  const [editSection, setEditSection] = useState(null);
  const dispatch = useDispatch();
  const { course } = useSelector((state) => state.courseReducer);

  const {
    register,
    formState: { errors },
    setValue,
    handleSubmit,
  } = useForm();

  const handleBack = () => {
    dispatch(setEditing({ editCourse: true }));
    dispatch(setStep({ step: 1 }));
  };
  const handleNext = () => {
    // check if course content is present and have atleast a single seection
    // check all sections have atleast one subsection
    if (course?.courseContent?.length === 0) {
      toast.error("Please add atleast one section");
      return;
    } else if (course?.courseContent?.some((section) => section.length === 0)) {
      toast.error("Each section must have atleast one subsection");
      return;
    }
    dispatch(setStep({ step: 3 }));
  };

  const handleCancel = () => {
    setEditSection(false);
    setValue("sectionName", "");
  };

  const onSubmit = async (data) => {
    let result;
    const loading = toast.loading("Loading...");
    if (editSection) {
      result = await updateSection({
        sectionName: data.sectionName,
        sectionId: editSection,
      });
      console.log(result);
    } else {
      result = await createSection({
        sectionName: data.sectionName,
        courseId: course?._id,
      });
    }
    if (result) {
      setCourse({
        course: result,
      });
      setEditSection(null);
      setValue("sectionName", "");

      toast.dismiss(loading);
    }
  };

  const handleEditSectionName = (sectionId, sectionName) => {
    if (editSection) {
      handleCancel();
      return;
    }

    setEditSection(sectionId);
    setValue("sectionName", sectionName);
  };

  return (
    <div className="pl-10 pt-7 flex flex-col">
      <div className="w-11/12">
        <div className="font-bold text-2xl text-richblack-100">
          Course Builder
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-7">
          <label
            htmlFor="sectionName"
            className="text-white mb-2 font-semibold"
          >
            Section Name<sup className="text-red-700">*</sup>
          </label>
          <input
            {...register("sectionName", {
              required: "Section name is required",
            })}
            type="text"
            className="text-richblack-25 mt-2 w-full  font-montserrat px-2 rounded-md bg-richblack-700 shadow-sm shadow-richblack-200 py-2"
          />

          {errors && errors.sectionName && (
            <span className="error translate-y-1  text-red-500">
              {errors.sectionName.message}
            </span>
          )}
          {/* submit /edit and cancel btn */}
          <div className=" flex items-center gap-5 ">
            <div className="flex gap-3 items-center font-mono font-bold  border-2 border-yellow-50 justify-start    rounded-md py-2 px-2 mt-5  text-yellow-50 cursor-pointer">
              {editSection ? "Edit Section" : "Create Section"}{" "}
              {editSection ? <AiFillEdit /> : <AiFillPlusCircle />}
            </div>
            {editSection && (
              <div
                onClick={handleCancel}
                className="py-2 px-2 mt-5 cursor-pointer text-red-500 font-semibold text-lg font-mono"
              >
                Cancel Edit
              </div>
            )}
          </div>
        </form>

        {/* Nested view */}
        <div className="mt-6">
          <NestedView handleEditSectionName={handleEditSectionName} />
        </div>

        {/* back and next btn */}
        <div className="flex gap-5 mt-10 ">
          <CustomButton
            text="Back"
            key={1}
            onClick={handleBack}
            type="button"
            style="border-richblack-500"
          />
          <CustomButton
            text="Next"
            icon={<GrFormNext />}
            key={2}
            style=" bg-green-800 border-green-400"
            onClick={handleNext}
            type="button"
          />
        </div>
      </div>
    </div>
  );
};

export default CourseBuilderForm;
