import PropTypes from "prop-types";
const FooterHeading = ({ heading }) => {
  return (
    <div className="font-white font-bold w-fit  font-mono text-richblack-25 text-lg">
      {heading}
    </div>
  );
};

FooterHeading.propTypes = {
  heading: PropTypes.string,
};
export default FooterHeading;
