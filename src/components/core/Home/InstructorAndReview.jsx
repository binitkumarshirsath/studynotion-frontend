// import image
import Instructor from "src/assets/Images/Instructor.png";
import HighlightText from "./HighlightText";
import CTAButton from "./CTAButton";
import { BsArrowRightShort } from "react-icons/bs";

const InstructorAndReview = () => {
  return (
    <div className="bg-richblack-900 w-full h-full">
      <div className="w-10/12 mx-auto py-16">
        <div className=" flex justify-between gap-16 items-center">
          <div>
            <img
              src={Instructor}
              alt="instructor"
              className="object-contain shadow-[-20px_-20px_rgba(255,255,255)]"
            />
          </div>
          <div className="flex flex-col ml-14">
            {/* heading */}
            <div className="font-bold text-4xl mb-10 text-white font-inter">
              Become an <br /> <HighlightText>Instructor</HighlightText>
            </div>
            {/* para */}
            <div className="text-white font-inter w-5/6 mb-7 font-medium">
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
