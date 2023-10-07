import { useSelector } from "react-redux";
import { sidebarLinks } from "src/data/dashboard-links";
import SidebarItem from "../sidebar/SidebarItem";

const SideBar = () => {
  const user = useSelector((state) => state.profileReducer);
  const role = user.role;
  return (
    <div className=" bg-richblack-800 h-[calc(100vh-54px)] max-w-[200px] min-w-[200px] flex flex-col">
      {/* Before the border wale links */}
      <div className="flex flex-col mt-6 mb-6  ">
        {sidebarLinks.map((item) => {
          // if item.type doesnt exists , it means its for everyone
          if (item.type && item.type !== role) {
            return null;
          }
          return <SidebarItem key={item.id} item={item} />;
        })}
      </div>
      {/* border */}
      <div className="border w-10/12 mx-auto border-richblack-500 mb-4"></div>
      {/* Setting and logout */}
    </div>
  );
};

export default SideBar;
