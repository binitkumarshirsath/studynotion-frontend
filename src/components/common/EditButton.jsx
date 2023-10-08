import { FaUserEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const EditButton = ({ text, icon = false, to }) => {
  return (
    <Link
      to={to}
      className="bg-yellow-100 font-bold text-richblack-900 font-montserrat py-3 px-3 rounded-md flex border-2 border-yellow-50 gap-2 justify-center items-center"
    >
      {text} {icon && <FaUserEdit size={24} className="text-richblack-600" />}
    </Link>
  );
};

EditButton.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.any,
  to: PropTypes.string,
};

export default EditButton;
