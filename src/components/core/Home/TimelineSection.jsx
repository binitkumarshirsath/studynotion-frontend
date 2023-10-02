import CTAButton from "./CTAButton";
import HighlightText from "./HighlightText";

// import photos
import Logo1 from "src/assets/TimeLineLogo/Logo1.svg";
import Logo2 from "src/assets/TimeLineLogo/Logo2.svg";
import Logo3 from "src/assets/TimeLineLogo/Logo3.svg";
import Logo4 from "src/assets/TimeLineLogo/Logo4.svg";

import TimeLineImage from "src/assets/Images/TimelineImage.png";

// timeline data --> can be segregated into another file
const data = [
  {
    logo: Logo1,
    heading: "Leadership",
    para: "Fully committed to the success of students.",
  },
  {
    logo: Logo2,
    heading: "Responsibility",
    para: "Students will always be our top priority.",
  },
  {
    logo: Logo3,
    heading: "Flexibility",
    para: "The ability to switch is an important skills.",
  },
  {
    logo: Logo4,
    heading: "Solve the problem",
    para: "Code the way out of your problem.",
  },
];

const TimelineSection = () => {
  return (
    <>
      <div className="md:w-10/12 w-11/12 my-24 mx-auto">
        <div className=" md:flex md:mb-28 mb-16 justify-around">
          <div className="text-4xl md:w-3/6 mb-5 font-bold font-inter text-richblack-800">
            Get the Skills you need for a{" "}
            <HighlightText>Job that is in Demand</HighlightText>
          </div>
          <div className="flex flex-col  items-start md:w-[40%] ">
            <div className="text-base font-inter mb-5 text-richblack-200 font-semibold">
              The modern StudyNotion is the dictates its own terms. Today, to be
              a competitive specialist requires more than professional skills.
            </div>
            <div className="mt-6">
              <CTAButton
                bgColor="bg-yellow-25"
                icon=""
                text="Learn more"
                key={1}
                linkTo="/signup"
                shadowColor="shadow-yellow-200"
                textColor="text-richblack-800"
              />
            </div>
          </div>
        </div>

        <div className="md:flex justify-around items-center">
          {/* left side icons timeline */}
          <div className="flex flex-col gap-5 mb-16">
            {data.map((dataItem, index) => {
              return (
                <div key={index} className="flex gap-4  items-center flex-row">
                  {/* round photo */}
                  <div>
                    <img
                      src={dataItem.logo}
                      alt={`${dataItem.heading.toLocaleLowerCase()}`}
                      className="w-5 "
                    />
                  </div>
                  {/* heading and subheading */}
                  <div className="flex flex-col">
                    <div className="font-inter font-semibold text-richblack-900">
                      {dataItem.heading}
                    </div>
                    <div className="font-inter text-richblack-700 font-normal">
                      {dataItem.para}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* right side potu */}
          <div className="relative ">
            <div className="shadow-[20px_20px_rgba(255,230,230)]">
              <img
                src={TimeLineImage}
                alt="timelinephotu"
                className="shadow-lg z-0 shadow-blue-600"
              />
            </div>
            <div className="bg-caribbeangreen-700 md:w-10/12 w-5/6 flex justify-evenly items-center bottom-[0] md:translate-y-14 md:left-16 left-0 translate-x-6 translate-y-6 md:h-32 h-16 absolute z-10 ">
              <div className="flex md:justify-between md:gap-6 items-center border-r border-caribbeangreen-400">
                <div className="font-semibold md:text-3xl font-inter  text-white">
                  10+
                </div>
                <div className="font-thin md:text-2xl md:mr-16     text-caribbeangreen-300  ">
                  Years of <br /> Experience
                </div>
              </div>
              <div className="flex gap-6 items-center justify-around">
                <div className="font-semibold md:text-3xl font-inter  text-white">
                  250+
                </div>
                <div className="font-thin md:text-2xl text-caribbeangreen-300  ">
                  Types of <br /> Courses
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimelineSection;
