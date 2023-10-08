import SideBar from "src/components/common/SideBar";
import { Outlet } from "react-router-dom";
const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-2/12 ">
        <SideBar />
      </div>

      <div className="w-10/12 flex-wrap min-h-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
