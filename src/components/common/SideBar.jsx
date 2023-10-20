import { useDispatch, useSelector } from "react-redux";
import { sidebarLinks } from "src/data/dashboard-links";
import SidebarItem from "../sidebar/SidebarItem";
import { FiLogOut } from "react-icons/fi";
import Modal from "./Modal";
import { useState } from "react";
import { logout } from "src/api/operations/authApi";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const user = useSelector((state) => state.profileReducer);
  const role = user.role;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" bg-richblack-800  min-h-[calc(100vh-54px)] h-full  min-w-[200px] flex flex-col">
      {/* Before  border wale links */}
      <div className="flex flex-col mt-12 mb-6  ">
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
      <SidebarItem
        item={{
          name: "Settings",
          path: "/dashboard/settings",
          icon: "VscSettingsGear",
        }}
      />
      {/* Logut --> Modal */}
      <div
        className={`text-richblack-25 font-inter flex  py-2 gap-2 pl-8 items-center`}
        onClick={() => setIsOpen(true)}
      >
        <div>
          <FiLogOut size={22} />
        </div>
        <div>Logout</div>
      </div>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          heading={"Confirm Logout ?"}
          text={"You will be logged out of your account."}
          btn1={{
            text: "Logout",
            onClick: () => logout(navigate, dispatch),
          }}
        />
      )}
    </div>
  );
};

export default SideBar;
