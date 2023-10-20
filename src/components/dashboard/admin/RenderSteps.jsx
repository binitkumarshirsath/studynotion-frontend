import { useSelector } from "react-redux";
import CourseInfoForm from "./CourseInfoForm";
import CouseBuilderForm from "./CourseBuilderForm";
import { FaCheck } from "react-icons/fa";

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
      <div className=" flex justify-center mt-10 items-center">
        <div className=" flex flex-col w-[calc(100vw-20%)] md:w-fit items-start">
          <div className=" ml-10 relative mb-2 flex w-full justify-center">
            {steps.map((item) => (
              <div key={item.id} className=" flex w-full justify-between">
                <div className="flex flex-col items-center">
                  <div
                    className={`grid cursor-default aspect-square w-[34px] place-items-center rounded-full border-[1px] ${
                      step === item.id
                        ? "bg-yellow-900 border-yellow-50 text-yellow-50"
                        : "border-richblack-700 bg-richblack-800 text-richblack-300"
                    }`}
                  >
                    {step > item.id ? (
                      <FaCheck className="text-yellow-50" />
                    ) : (
                      item.id
                    )}
                  </div>
                </div>
                {item.id < 3 && (
                  <div
                    className={`h-[calc(34px/2)] w-[100%]  border-dashed border-b-2 ${
                      step > item.id
                        ? "border-yellow-50"
                        : "border-richblack-700"
                    }
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>
          <div className="relative mb-16 flex w-full select-none justify-between">
            {steps.map((item) => (
              <div
                key={item.id}
                className="flex md:min-w-[180px] flex-col items-start"
              >
                <p className=" ml-3 md:ml-0 text-[10px] md:text-sm text-richblack-5">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 bg-richblack-800 w-full h-full rounded-lg border border-richblack-600">
        {step === 1 && <CourseInfoForm />}
        {step === 2 && <CouseBuilderForm />}
      </div>
    </div>
  );
};

export default RenderSteps;
