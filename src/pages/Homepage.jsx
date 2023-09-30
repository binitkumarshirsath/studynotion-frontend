import { Link } from "react-router-dom";

import CTAButton from "src/components/core/Home/CTAButton";
import { BsArrowRightShort } from "react-icons/bs";
import Banner from "src/assets/Images/banner.mp4";
import HighlightText from "src/components/core/Home/HighlightText";
import CodeBlock from "src/components/core/Home/CodeBlock";
import Footer from "src/components/common/Footer";

const Homepage = () => {
  return (
    <div className="mt-16 w-full flex  flex-col items-center mx-auto h-screen">
      {/* Button */}
      <div className="font-inter max-h-fit text-richblack-200 flex justify-center items-center">
        <Link>
          <div
            className="flex py-3 px-5 rounded-3xl mx-2   shadow-richblack-100 font-bold shadow-sm transition-all 
          text-xl
          hover:scale-105 duration-300 justify-center items-center gap-1 bg-richblack-800"
          >
            <div className="flex">Become an Instructor</div>
            <div className="flex">
              <BsArrowRightShort />
            </div>
          </div>
        </Link>
      </div>

      {/* Heading + Para + 2Buttons */}
      <div className="mt-10  mx-auto flex w-7/12 text-center flex-col items-center text-white">
        <div className="font-bold text-4xl font-mono text-white">
          Empower Your Future with <HighlightText>Coding Skills</HighlightText>
        </div>
        <div className="text-richblack-300 font-inter font-semibold mt-4 ">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.{" "}
        </div>
        <div className="flex gap-5 mt-4 items-center">
          <CTAButton
            text="Learn More"
            linkTo="/signup"
            bgColor="bg-yellow-50"
            shadowColor="shadow-yellow-25"
            textColor="text-richblack-900"
          />
          <CTAButton
            text="Book a Demo"
            linkTo="/login"
            bgColor="bg-richblack-800"
            shadowColor="shadow-richblack-25"
            textColor="text-richblack-200"
          />
        </div>
      </div>

      {/* Video */}
      <div className="flex justify-center mt-10">
        <div className="mx-3 my-7 w-10/12 shadow-[10px_-5px_50px_-5px] shadow-blue-500">
          <video
            className="shadow-[20px_20px_rgba(255,255,255)]"
            muted
            loop
            autoPlay
          >
            <source src={Banner} type="video/mp4" />
          </video>
        </div>
      </div>

      {/*  CodeBlock section -> Text and animation*/}

      <CodeBlock
        content={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>Binit loves to code💓</title>\n</head>\n<body>\n<h1><a href="/dsa">DSA🔥</a></h1>\n<nav> <a href="/development">Development👨🏿‍💻</a> <a href="/ML">ML🤖</a> <a href="/happy">smile</a>\n</nav>\n</body>`}
        codeColor="text-yellow-5"
        heading={
          <div>
            Unlock your
            <HighlightText> coding potential </HighlightText>
            with our online courses.
          </div>
        }
        para="Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their
        knowledge with you."
        flexDirection=""
        key={0}
        ctaBtn1={{
          text: "Try it Yourself",
          icon: <BsArrowRightShort />,
          bgColor: "bg-yellow-50",
          linkTo: "/sighup",
          shadowColor: "bg-yellow-200",
          textColor: "text-blackrich-200",
        }}
        ctaBtn2={{
          text: "Learn More",
          icon: "",
          bgColor: "bg-richblack-800",
          linkTo: "/login",
          shadowColor: "shadow-richblack-25",
          textColor: "text-white",
        }}
      />

      <CodeBlock
        content={`import { Route, Routes } from "react-router-dom";
        import Homepage from "./pages/Homepage";
        const App = () => {
          return (
            <>
              <Routes>
                <Route path="/" element={<Homepage />} />
              </Routes>
            </>
          );
        };
        
        export default App;`}
        codeColor="text-blue-25"
        heading={
          <div>
            Start
            <HighlightText> coding in seconds </HighlightText>
            with our online courses.
          </div>
        }
        para="Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
        flexDirection="flex-row-reverse"
        key={1}
        ctaBtn1={{
          text: "Continue Lesson",
          icon: <BsArrowRightShort />,
          bgColor: "bg-yellow-50",
          linkTo: "/sighup",
          shadowColor: "bg-yellow-200",
          textColor: "text-blackrich-200",
        }}
        ctaBtn2={{
          text: "Learn More",
          icon: "",
          bgColor: "bg-richblack-800",
          linkTo: "/login",
          shadowColor: "shadow-richblack-25",
          textColor: "text-white",
        }}
      />
      <div className="my-12"></div>
      <Footer />
    </div>
  );
};

export default Homepage;
