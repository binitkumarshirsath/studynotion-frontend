import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const FooterLink = ({ linkItem }) => {
  return (
    <Link
      to={`/${linkItem.toLocaleLowerCase().split(" ").join("-")}`}
      className="font-white inline  hover:text-richblack-100 my-1  w-fit font-inter text-richblack-400 text-sm"
    >
      {linkItem}
    </Link>
  );
};

FooterLink.propTypes = {
  linkItem: PropTypes.string,
};

export default FooterLink;
