import { useSelector } from "react-redux";
import { useState } from "react";

import { GoTriangleDown } from "react-icons/go";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
const Dropbar = () => {
  const [open, setOpen] = useState(false);

  const { image } = useSelector((state) => state.profileReducer);
  return (
    <button className="relative group" onClick={() => setOpen(!open)}>
      <div className="flex items-center">
        <img src={image} alt="user-photu" className="rounded-full h-7" />
        <GoTriangleDown />
      </div>
      {open && (
        <div className="flex absolute text-start right-0 translate-x-7 bg-richblack-800 text-base transition-all duration-200 text-richblack-50  p-2 top-0 translate-y-11 flex-col gap-2 rounded-md">
          <Link to={"/dashboard"} className="flex gap-2 items-center p-2">
            <MdOutlineSpaceDashboard />
            <button>Dashboard</button>
          </Link>
          <Link to={"/"} className="flex gap-2 items-center p-2">
            <IoMdLogOut />
            <button>Logout</button>
          </Link>
        </div>
      )}
    </button>
  );
};

export default Dropbar;
