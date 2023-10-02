import HighlightText from "./HighlightText";

// import images
import Image1 from "src/assets/Images/Know_your_progress.png";
import Image2 from "src/assets/Images/Compare_with_others.png";
import Image3 from "src/assets/Images/Plan_your_lessons.png";
import CTAButton from "./CTAButton";
const LearningLanguage = () => {
  return (
    <div className="mx-auto w-11/12 my-32">
      {/* heading and para */}
      <div className="flex flex-col items-center">
        <div className="text-4xl font-bold font-inter text-richblack-800">
          Your Swiss Knife for{" "}
          <HighlightText>Learning any language</HighlightText>
        </div>
        <div className="text-base font-xl text-richblack-600 font-inter md:w-3/6 w-full mt-6 mb-4 text-center">
          Using spin making learning multiple languages easy. with 20+ languages
          realistic voice-over, progress tracking, custom schedule and more.
        </div>
      </div>
      {/* 3 images and a btn */}
      <div className="md:flex  justify-center">
        <img
          src={Image1}
          alt="firstphotu"
          className="object-contain md:-mr-32"
        />
        <img
          src={Image2}
          alt="secondphotu"
          className="object-contain  inline -mr-4"
        />
        <img
          src={Image3}
          alt="thiresphotu"
          className="object-contain md:-ml-32"
        />
      </div>
      <div className="flex justify-center mt-6">
        <CTAButton
          text="Learn More"
          linkTo="/signup"
          bgColor="bg-yellow-50"
          shadowColor="shadow-yellow-25"
          textColor="text-richblack-900"
        />
      </div>
    </div>
  );
};

export default LearningLanguage;
