import { useSelector } from "react-redux";
import CourseInfoForm from "./CourseInfoForm";

const RenderSteps = () => {
  const steps = [
    {
      id: 1,
      title: "Course Information",
    },
    {
      id: 2,
      title: "Course Builder",
    },
    {
      id: 3,
      title: "Publishing Course",
    },
  ];

  const { step } = useSelector((state) => state.courseReducer);

  return (
    <div className="text-richblack-5 w-11/12">
      {/* Step number and title */}
      <div className="flex  w-full justify-between mt-16">
        {steps.map((item, index) => {
          return (
            <div key={index} className="flex w-full  items-center">
              {/* step */}
              <div>
                <div
                  className={` flex justify-center ${
                    step === item.id
                      ? "bg-yellow-700 border-yellow-5 text-yellow-25"
                      : ""
                  } items-center  cursor-default aspect-square w-10 rounded-full border-[1px]`}
                >
                  {item.id}
                </div>
              </div>
              {/* bich ka border */}
              {item.id < 3 && (
                <div className="`h-[calc(34px/2)] w-[100%] border-richblack-600  border-dashed border-b-2"></div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-10 bg-richblack-800 w-full h-full rounded-lg border border-richblack-600">
        {step === 1 && <CourseInfoForm />}
      </div>
    </div>
  );
};

export default RenderSteps;
