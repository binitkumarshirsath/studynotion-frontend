import { useDispatch, useSelector } from "react-redux";
import { useState, useRef, useEffect } from "react";

import { GoTriangleDown } from "react-icons/go";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "src/api/operations/authApi";

const Dropbar = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(navigate, dispatch);
  };

  const dropdownRef = useRef(null);
  /*
  this useEffect hook 

  */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        open &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open]);

  const { image } = useSelector((state) => state.profileReducer);

  return (
    <div
      ref={dropdownRef}
      className="relative group"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center">
        <img src={image} alt="user-photu" className="rounded-full h-7" />
        <GoTriangleDown />
      </div>
      {open && (
        <div className="flex absolute text-start right-0 translate-x-7 bg-richblack-800 text-base transition-all duration-200 text-richblack-50  p-2 top-0 translate-y-11 flex-col gap-2 rounded-md">
          <Link
            to={"/dashboard/my-profile"}
            className="flex gap-2 items-center p-2"
          >
            <MdOutlineSpaceDashboard />
            Dashboard
          </Link>
          <Link
            to={"/"}
            onClick={handleLogout}
            className="flex gap-2 items-center p-2"
          >
            <IoMdLogOut />
            Logout
          </Link>
        </div>
      )}
    </div>
  );
};

export default Dropbar;
