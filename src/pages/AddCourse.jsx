import RenderSteps from "src/components/dashboard/admin/RenderSteps";

const AddCourse = () => {
  return (
    <div className="bg-richblack-900 h-full w-full">
      <div className="w-11/12 flex items-start pt-10 ">
        {/* left side */}
        <div className="flex ml-20 w-7/12 flex-col ">
          {/* Heading */}
          <div className="text-white   font-semibold font-poppins text-3xl">
            Add Course
          </div>
          {/* Render steps */}
          <RenderSteps />
        </div>
        <div className="flex flex-col w-4/12 px-7 py-8 bg-richblack-800 round">
          <div className="text-white font-medium text-2xl mt-2 ">
            ⚡Course Upload Tips{" "}
          </div>
          <ul className="ml-5 list-item list-disc rounded-md mt-10 space-y-4 text-xs text-richblack-5">
            <li>Set the Course Price option or make it free.</li>
            <li>Standard size for the course thumbnail is 1024x576.</li>
            <li>Video section controls the course overview video.</li>
            <li>Course Builder is where you create and organize a course.</li>
            <li>
              Add Topics in the Course Builder section to create lessons,
              quizzes, and assignments.
            </li>
            <li>
              Information from the Additional Data section shows up on the
              course single page.
            </li>
            <li>Make Announcements to notify any important</li>
            <li>Notes to all enrolled students at once.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AddCourse;
