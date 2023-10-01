/* eslint-disable no-unused-vars */
import HighlightText from "./HighlightText";

//import data for tabs and cards
import { HomePageExplore } from "src/data/homepage-explore";

//import hooks
import { useState } from "react";
import CourseCard from "./CourseCard";

const ExploreMore = () => {
  //default state --> Free
  const [tab, setTab] = useState(HomePageExplore[0].tag);

  //courses data --> data under free wala tab , it self is an array
  const [courses, setCourses] = useState(HomePageExplore[0].courses);

  //active card of courses -->learn html wala
  const [card, setCard] = useState(HomePageExplore[0].courses[0].heading);

  const handleChange = async (value) => {
    //suppose i click new to coding
    setTab(value);
    //goto array and get me the courses under newtocoding
    const newCourses = HomePageExplore.filter((courseItem, index) => {
      return courseItem.tag === value;
    });
    //filter returns array
    setCourses((prevData) => {
      return newCourses[0].courses;
    });

    setCard(newCourses[0].courses[0].heading);
  };

  return (
    <div className="mt-24 mb-52 h-full w-10/12 relative">
      <div className="text-4xl  font-mono text-center text-richblack-50 font-bold">
        Unlock the <HighlightText> Power of Code</HighlightText>
      </div>
      <div className="text-xl font-semibold text-richblack-100 text-center mt-4">
        Learn to build anything you can imagine
      </div>
      <div className="text-richblack-200 w-fit mx-auto rounded-full items-center flex gap-3 font-mono mt-10 text-lg bg-richblack-700 py-1 px-2">
        {HomePageExplore.map((courseItem, index) => {
          return (
            <div
              className={`px-2 ${
                tab === courseItem.tag
                  ? "bg-richblack-900  rounded-full text-richblack-25"
                  : ""
              } py-1  cursor-pointer transition-all duration-200 hover:bg-richblack-800 hover:rounded-full hover:scale-105 hover:text-richblack-50 `}
              onClick={() => handleChange(courseItem.tag)}
              key={index}
            >
              {courseItem.tag}{" "}
            </div>
          );
        })}
      </div>
      {/* cards */}
      <div className="absolute  top-52 mx-auto left-0 right-0 justify-center flex gap-12 w-full h-auto ">
        {/* map card with icons */}
        {courses?.map((courseItem, index) => {
          return (
            <CourseCard
              key={index}
              heading={courseItem?.heading}
              description={courseItem?.description}
              lessonNo={courseItem.lessionNumber}
              level={courseItem.level}
              currentCard={card}
              setCurrentCard={setCard}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ExploreMore;
