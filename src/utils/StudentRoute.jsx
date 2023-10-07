import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { ACCOUNT_TYPE } from "./constants";
import toast from "react-hot-toast";

const StudentRoute = () => {
  const user = useSelector((state) => state.profileReducer);
  const token = useSelector((state) => state.authReducer.token);
  if (token && user && user.role === ACCOUNT_TYPE.STUDENT) {
    return <Outlet />;
  }
  toast.error("User is not student.");
  return <Navigate to={"/"} />;
};

export default StudentRoute;
