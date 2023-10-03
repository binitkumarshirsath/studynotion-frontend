import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const CTAButton = ({
  text,
  linkTo,
  bgColor,
  shadowColor,
  textColor,
  icon,
  style,
}) => {
  return (
    <Link
      to={`${linkTo}`}
      className={`${bgColor} rounded-md ${
        style ? style : "py-3 px-4 font-bold font-mono text-lg"
      }  flex gap-2 justify-center items-center     transition-all duration-300 hover:scale-105 shadow-sm ${shadowColor} ${" "}  ${textColor} `}
    >
      {text}
      {icon}
    </Link>
  );
};

CTAButton.propTypes = {
  style: PropTypes.string,
  text: PropTypes.string,
  linkTo: PropTypes.string,
  bgColor: PropTypes.string,
  shadowColor: PropTypes.string,
  textColor: PropTypes.string,
  icon: PropTypes.any,
};
export default CTAButton;
