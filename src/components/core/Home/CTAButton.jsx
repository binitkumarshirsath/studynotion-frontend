import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const CTAButton = ({ text, linkTo, bgColor, shadowColor, textColor, icon }) => {
  return (
    <div
      className={`${bgColor} rounded-md py-3  px-4 flex gap-2 justify-center items-center font-bold font-mono text-lg  transition-all duration-300 hover:scale-105 shadow-sm ${shadowColor} ${" "}  ${textColor} font-semibold`}
    >
      <Link to={`${linkTo}`}>{text}</Link>
      {icon}
    </div>
  );
};

CTAButton.propTypes = {
  text: PropTypes.string,
  linkTo: PropTypes.string,
  bgColor: PropTypes.string,
  shadowColor: PropTypes.string,
  textColor: PropTypes.string,
  icon: PropTypes.any,
};
export default CTAButton;
