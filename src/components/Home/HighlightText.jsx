import PropTypes from "prop-types";
const HighlightText = ({ children }) => {
  return (
    <span className=" text-transparent bg-clip-text bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] font-bold">
      {children}
    </span>
  );
};

HighlightText.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HighlightText;
