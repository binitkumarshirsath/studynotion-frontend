import PropTypes from "prop-types";

const CustomButton = ({ onClick, icon, text, type, style }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`flex gap-3 items-center px-4 mt-2 font-semibold  font-mono text-lg py-1 border-2 rounded-md ${style}`}
    >
      {text} <span className="text-white">{icon}</span>
    </button>
  );
};

CustomButton.propTypes = {
  onClick: PropTypes.func,
  icon: PropTypes.any,
  text: PropTypes.string,
  type: PropTypes.string,
  style: PropTypes.string,
};

export default CustomButton;
