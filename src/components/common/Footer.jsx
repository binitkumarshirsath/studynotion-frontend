import { Link } from "react-router-dom";
import Logo from "src/assets/Logo/Logo-Full-Light.png";
import { FooterLinks } from "src/data/footer-links";
import FooterLink from "./FooterLink";
//import icons
import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";
import FooterHeading from "./FooterHeading";

const Footer = () => {
  return (
    <footer className="bg-richblack-800  w-full  ">
      <div className="flex justify-center">
        <div className="flex w-10/12 justify-center mt-5 border-b border-richblack-700 ">
          {/* first half */}
          <div className="w-3/6 flex border-r border-richblack-700  ">
            {/* First coloumn logo wala */}
            <div className="flex flex-col w-1/3">
              <img src={Logo} alt="logo" className="w-3/4 mb-3" />
              <FooterHeading heading="Company" />
              {["About", "Carrers", "Affiliates"].map((linkItem, i) => {
                return <FooterLink key={i} linkItem={linkItem} />;
              })}
              <div className="flex text-richblack-50 gap-2 my-3">
                <FaFacebook />
                <FaGoogle />
                <FaTwitter />
                <FaYoutube />
              </div>
            </div>
            {/* second columng */}
            <div className="flex flex-col w-1/3  ">
              <FooterHeading heading="Resources" />
              {[
                "Articles",
                "Blog",
                "Chart Sheet",
                "Code challenges",
                "Docs",
                "Projects",
                "Videos",
                "Workspaces",
              ].map((linkItem, i) => {
                return <FooterLink linkItem={linkItem} key={i} />;
              })}
              <FooterHeading heading="Support " />
              <Link
                to={"/help-center"}
                className="font-white inline my-1  w-fit font-inter text-richblack-400 text-sm"
              >
                Help center
              </Link>
            </div>
            <div className="flex flex-col w-1/3">
              <FooterHeading heading="Plans" />
              {["Paid memberships", "For students", "Business solutions"].map(
                (linkItem, i) => {
                  return <FooterLink linkItem={linkItem} key={i} />;
                }
              )}
              <FooterHeading heading="Community " />
              {["Forums", "Chapters", "Events"].map((linkItem, i) => {
                return <FooterLink linkItem={linkItem} key={i} />;
              })}
            </div>
          </div>
          {/* secon half == Right side  */}
          <div className="w-3/6 flex ml-10  ">
            {/* First coloumn logo wala */}
            <div className="flex flex-col w-1/3">
              <FooterHeading heading="Subjects" />
              {FooterLinks[0].links.map((linkItem, i) => {
                return <FooterLink key={i} linkItem={linkItem.title} />;
              })}
            </div>
            {/* second columnn */}
            <div className="flex flex-col w-1/3  ">
              <FooterHeading heading="Languages" />
              {FooterLinks[1].links.map((linkItem, i) => {
                return <FooterLink key={i} linkItem={linkItem.title} />;
              })}
            </div>
            <div className="flex flex-col w-1/3">
              <FooterHeading heading="Carrer Building" />
              {FooterLinks[2].links.map((linkItem, i) => {
                return <FooterLink key={i} linkItem={linkItem.title} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex justify-between w-10/12 h-20 mt-5 text-white">
          <div className="flex gap-2">
            <FooterLink key={1} linkItem="Privacy Policy" />
            <FooterLink key={2} linkItem="Cookies " />
            <FooterLink key={3} linkItem="Terms" />
          </div>
          <div className="font-mono text-richblack-50 ">
            Made with 💖 BinitTech &copy; 2023-2100{" "}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
