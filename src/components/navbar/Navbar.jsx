// import logo
import { Link, NavLink } from "react-router-dom";
import Logo from "src/assets/Logo/Logo-Full-Light.png";

// import navlinks data
import NavbarLinks from "src/data/navbar-links";
import CTAButton from "../common/CTAButton";

//import icons
import { MdKeyboardArrowDown } from "react-icons/md";

import { useEffect, useState } from "react";
import axiosInstance from "src/api";
import { apiRoutes } from "src/api/apiRoute";

const Navbar = () => {
  // fetch categories from backend to show in catalogue
  useEffect(() => {
    getCategories();
  }, []);

  //course data
  const [categories, setCategories] = useState([]);
  const getCategories = async () => {
    try {
      const { data } = await axiosInstance.get(apiRoutes.getAllCategories);
      setCategories(data.categories);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-14 bg-richblack-800">
      <div className="w-10/12 h-full flex mx-auto justify-between items-center">
        {/* logo */}
        <Link to={"/"}>
          <img src={Logo} alt="logo" className="max-h-8 object-contain" />
        </Link>
        {/* navlinks */}
        <nav className="flex font-medium items-center text-richblack-25 gap-5 text-base font-montserrat">
          {NavbarLinks.map((navitem, index) => {
            return navitem.title === "Catalogue" ? (
              <div key={index} className="relative group">
                <div className="flex items-center gap-1" key={index}>
                  {navitem.title}
                  <MdKeyboardArrowDown />
                </div>
                <div
                  className="h-auto rounded-lg group-hover:opacity-100   w-64 flex flex-col gap-4 pb-4 group-hover:visible translate-x-28 z-20 transition-all
                invisible opacity-0  duration-200 right-0 top-8 absolute py-5 pl-5 bg-richblack-25 text-richblack-700 font-semibold font-montserrat"
                >
                  <div className="h-6 w-6 rounded-sm  bg-richblack-25 group-hover:opacity-100  absolute -top-2 left-0  group-hover:visible transform rotate-45 translate-x-32 transition-all duration-200 "></div>
                  {categories?.map((courseItem, index) => {
                    console.log(courseItem);
                    return (
                      <Link
                        key={index}
                        to={`${courseItem.name
                          .toLowerCase()
                          .split(" ")
                          .join("-")}`}
                      >
                        {courseItem.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ) : (
              <NavLink key={index} to={navitem.path}>
                {navitem.title}
              </NavLink>
            );
          })}
        </nav>
        {/* login signup dashboard cart */}
        <div className="flex gap-5 text-richblack-25  items-center">
          {/* <div>Cart</div> */}
          <CTAButton
            bgColor="bg-richblack-700"
            key={1}
            linkTo="/login"
            shadowColor="shadow-richblack-200"
            text="Login"
            textColor="text-richblack-25"
            style="py-1 px-2 font-base font-montserrat tracking-wider"
          />
          <CTAButton
            bgColor="bg-richblack-700"
            key={2}
            linkTo="/signup"
            shadowColor="shadow-richblack-200"
            text="Sign Up"
            textColor="text-richblack-25"
            style="py-1 px-2 font-base font-montserrat tracking-wider"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
