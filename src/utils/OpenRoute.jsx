import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const OpenRoute = () => {
  // Get the token and user
  const token = useSelector((state) => state.authReducer.token);
  const user = useSelector((state) => state.profileReducer);

  if (token && user) {
    return <Navigate to="/dashboard/my-profile" />;
  }
  return <Outlet />;
};

export default OpenRoute;
