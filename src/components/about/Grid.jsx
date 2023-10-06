import CTAButton from "../common/CTAButton";
import HighlightText from "../home/HighlightText";

const GridData = [
  {
    order: -1,
    heading: "World-Class Learning for",
    highlightText: "Anyone, Anywhere",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
    BtnText: "Learn More",
    BtnLink: "/",
  },
  {
    order: 1,
    heading: "Curriculum Based on Industry Needs",
    description:
      "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
  },
  {
    order: 2,
    heading: "Our Learning Methods",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 3,
    heading: "Certification",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 4,
    heading: `Rating "Auto-grading"`,
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 5,
    heading: "Ready to Work",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
];

const Grid = () => {
  return (
    <div className="w-full h-full pb-10  bg-richblack-900">
      <div className="w-10/12 mt-20 mx-auto grid grid-cols-4">
        {GridData.map((item, index) => {
          return (
            <div
              key={index}
              className={`${index === 0 && "col-span-2 bg-richblack-900"}
                ${index % 2 !== 0 ? "bg-richblack-600" : "bg-richblack-800"}
                ${index === 3 && "col-start-2"}

            `}
            >
              {item.order === -1 ? (
                <div className="flex flex-col gap-4 ">
                  {/* heading */}
                  <div className="text-white text-3xl font-bold ">
                    {item.heading} <br />
                    <HighlightText>{item.highlightText}</HighlightText>
                  </div>
                  <div className=" text-richblack-100 font-base ">
                    {item.description}
                  </div>
                  <div className="flex">
                    <CTAButton
                      text="Learn More"
                      linkTo="/signup"
                      bgColor="bg-yellow-50"
                      shadowColor="shadow-yellow-25"
                      textColor="text-richblack-900"
                    />
                  </div>
                </div>
              ) : (
                <div className="flex flex-col h-64 gap-5 text-white py-4 px-6">
                  <div className="text-white text-2xl font-bold mb-6 ">
                    {item.heading}
                  </div>
                  <div className="text-richblack-100 font-base">
                    {item.description}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Grid;
