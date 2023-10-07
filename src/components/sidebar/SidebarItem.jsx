import * as Icons from "react-icons/vsc";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

const SidebarItem = ({ item }) => {
  //get the icon
  const Icon = Icons[item.icon];
  const location = useLocation();
  const isCurrentPath = (data) => {
    return location.pathname === data;
  };
  return (
    <Link
      to={item.path}
      className={`text-richblack-25 ${
        isCurrentPath(item.path)
          ? "bg-yellow-800 border-l-4    border-l-yellow-25"
          : ""
      } font-inter flex  py-2 gap-2 pl-5 items-center`}
    >
      <div>
        <Icon size={22} />
      </div>
      <div>{item.name}</div>
    </Link>
  );
};

SidebarItem.propTypes = {
  item: PropTypes.object,
};

export default SidebarItem;
