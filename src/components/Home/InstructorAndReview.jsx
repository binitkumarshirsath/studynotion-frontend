// import image
import Instructor from "src/assets/Images/Instructor.png";
import HighlightText from "./HighlightText";
import CTAButton from "../common/CTAButton";
import { BsArrowRightShort } from "react-icons/bs";

const InstructorAndReview = () => {
  return (
    <div className="bg-richblack-900 w-full h-full">
      <div className="md:w-10/12 w-10/12 mx-auto py-16">
        <div className=" md:flex justify-between md:gap-16 items-center">
          {/* image */}
          <div>
            <img
              src={Instructor}
              alt="instructor"
              className="object-contain my-4 shadow-[-20px_-20px_rgba(255,255,255)]"
            />
          </div>
          <div className="flex flex-col w-full md:ml-14">
            {/* heading */}
            <div className="font-bold text-4xl my-5 mb-10 text-white font-inter">
              Become an <br /> <HighlightText>Instructor</HighlightText>
            </div>
            {/* para */}
            <div className="text-white font-inter md:w-5/6 mb-7 font-medium">
              Instructors from around the world teach millions of students on
              StudyNotion. We provide the tools and skills to teach what you
              love.
            </div>
            {/* button */}
            <div className="flex">
              <CTAButton
                bgColor="bg-yellow-50"
                icon={<BsArrowRightShort />}
                text="Become an Instructor"
                key={1}
                linkTo="/signup"
                shadowColor="shadow-yellow-200"
                textColor="text-richblack-800"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorAndReview;
