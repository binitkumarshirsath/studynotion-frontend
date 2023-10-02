import PropTypes from "prop-types";

// import components and images
import background from "src/assets/Images/frame.png";
import HighlightText from "../Home/HighlightText";

// import login and signup form
import LoginForm from "src/components/common/auth/LoginForm";
import SignupForm from "src/components/common/auth/SignupForm";
// This is a template used for styling login and signup page
const Template = ({ img, heading, styledtext, subheading, formType }) => {
  return (
    <div className="h-screen w-full bg-richblack-900">
      <div className="flex w-9/12 mx-auto pt-16 flex-col md:flex-row-reverse   md:justify-between">
        {/* image */}
        <div className="relative md:w-4/12">
          <img src={img} alt="" className="absolute -top-4 -left-4" />
          <img src={background} alt="" />
        </div>
        {/* Heading and subheading and form */}
        <div className="flex flex-col md:w-5/12 ">
          <div className="text-white text-4xl font-bold font-montserrat">
            {heading}
          </div>
          <div className="text-mono mt-4 text-richblack-200 ">
            {subheading}
            <div className="font-edu-sa ">
              <HighlightText>
                <i>{styledtext}</i>
              </HighlightText>
            </div>
          </div>

          {/* Form */}
          {formType === "login" ? <LoginForm /> : <SignupForm />}
          <button
            className={` bg-yellow-50 py-2 rounded-md  font-semibold text-richblack-800 ${
              formType === "login" ? "mt-8" : "mt-4"
            }`}
          >
            {formType === "login" ? "Login" : "Create Account"}
          </button>
        </div>
      </div>
    </div>
  );
};

Template.propTypes = {
  img: PropTypes.any,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  styledtext: PropTypes.string,
  formType: PropTypes.string,
};

export default Template;
