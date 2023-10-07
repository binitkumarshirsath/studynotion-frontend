import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const token = useSelector((state) => state.authReducer.token);
  const user = useSelector((state) => state.profileReducer);

  if (token && user) {
    return children;
  } else return <Navigate to={"/login"} />;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.element,
};

/*
    Outlet renders the child route
    so it wasnt working

const PrivateRoute = ({ children }) => {
  const token = useSelector((state) => state.authReducer.token);
  const user = useSelector((state) => state.profileReducer);

  if (token && user) {
    return <Outlet/>;
  } else return <Navigate to={"/login"} />;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.element,
};
*/
