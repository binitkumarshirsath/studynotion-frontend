// import proptype

import PropTypes from "prop-types";

//import icons
import { HiUsers } from "react-icons/hi";
import { ImTree } from "react-icons/im";

const CourseCard = ({
  heading,
  description,
  level,
  lessonNo,
  currentCard,
  setCurrentCard,
}) => {
  return (
    <div
      onClick={() => setCurrentCard(heading)}
      className={`w-1/3 h-full transition-all duration-300   flex flex-col items-center justify-between   ${
        currentCard === heading
          ? "shadow-[15px_15px_1px_rgba(255,255,0,1)] bg-white text-richblack-800"
          : "bg-richblack-800 text-white"
      }`}
    >
      {/* heading and subheading */}
      <div className="flex flex-col h-40 mt-4 mb-16 ml-4  ">
        <div className="font-bold  w-11/12 mx-auto mt-3 mb-2 font-inter montserrat text-xl">
          {heading}
        </div>
        <div
          className={`text-base font-poppins  w-11/12 mx-auto ${
            currentCard === heading
              ? "text-richblack-500"
              : "text-richblack-300"
          }`}
        >
          {description}
        </div>
      </div>
      {/* level and lesson */}
      <div className="border-t-2  w-full h-full border-dashed text-richblack-300 ">
        <div
          className={`flex  mt-7 h-full w-11/12 mx-auto items-center justify-between pb-8 ${
            currentCard === heading
              ? "text-caribbeangreen-200"
              : "text-blue-400"
          }`}
        >
          <div className="flex gap-2 items-center pl-4">
            <div>
              <HiUsers />
            </div>
            <div className="font-semibold">{level}</div>
          </div>
          <div className="flex gap-2 items-center pr-4">
            <div>
              <ImTree />
            </div>
            <div className="font-semibold">{lessonNo}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

CourseCard.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
  level: PropTypes.string,
  lessonNo: PropTypes.number,
  currentCard: PropTypes.string,
  setCurrentCard: PropTypes.func,
};

export default CourseCard;
