// import logo
import { Link, NavLink } from "react-router-dom";
import Logo from "src/assets/Logo/Logo-Full-Light.png";

// import navlinks data
import NavbarLinks from "src/data/navbar-links";
import CTAButton from "../common/CTAButton";
const Navbar = () => {
  return (
    <div className="h-14 bg-richblack-800">
      <div className="w-10/12 h-full flex mx-auto justify-between items-center">
        {/* logo */}
        <Link to={"/"}>
          <img src={Logo} alt="logo" className="max-h-8 object-contain" />
        </Link>
        {/* navlinks */}
        <nav className="flex items-center text-richblack-25 gap-5 text-base font-montserrat">
          {NavbarLinks.map((navitem, index) => {
            return navitem.title === "Catalogue" ? (
              <div></div>
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
            key={1}
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
