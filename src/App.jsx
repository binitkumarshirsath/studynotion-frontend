import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/navbar/Navbar";
import ForgotPassword from "./pages/ForgotPassword";
import UpdatePassword from "./pages/UpdatePassword";
import About from "./pages/About";
import VerifyOTP from "./pages/VerifyOTP";
import Footer from "src/components/footer/Footer";

import { useSelector } from "react-redux";
import ContactUs from "./pages/ContactUs";
import Error from "./pages/Error";
import OpenRoute from "./utils/OpenRoute";
import Dashboard from "src/pages/Dashboard/Dashboard";
import PrivateRoute from "./utils/PrivateRoute";
import EnrolledCourses from "./components/dashboard/EnrolledCourses";
import MyProfile from "./components/dashboard/MyProfile";
import Cart from "./components/dashboard/Cart";
import Settings from "./components/dashboard/Settings";
import AddCourse from "./pages/AddCourse";

const App = () => {
  const loading = useSelector((state) => state.authReducer.loading);
  const profLoading = useSelector((state) => state.profileReducer.loading);

  return (
    <div className="h-full w-full flex flex-col">
      <Navbar />
      {/* loader */}
      {loading || profLoading ? (
        <div className="bg-richblack-700 h-[calc(100vh-56px)] flex justify-center items-center">
          <div className="custom-loader h-full"></div>
        </div>
      ) : (
        <Routes>
          {/* Home page route accessible to everyon */}
          <Route path="/" element={<Homepage />} />
          {/* Open routes, Available to users  who arent logged in
          so once user is logged in , user cant access these */}
          <Route element={<OpenRoute />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* Reset password flow , accessible to users who arent logged in */}
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/verify-otp" element={<VerifyOTP />} />
            <Route path="/reset-password/:id" element={<UpdatePassword />} />
          </Route>

          <Route
            element={
              // PR checks if user is authenticed and returns *children*
              // which is dashboard here
              <PrivateRoute>
                {/* Dashboard on the other hand returns outlet */}
                <Dashboard />
              </PrivateRoute>
            }
          >
            {/* as dashboard returned outlet , ye wala route will render */}
            <Route path="dashboard/my-profile" element={<MyProfile />} />
            <Route
              path="dashboard/enrolled-courses"
              element={<EnrolledCourses />}
            />
            <Route path="dashboard/cart" element={<Cart />} />
            <Route path="dashboard/settings" element={<Settings />} />
            <Route path="dashboard/add-course" element={<AddCourse />} />
          </Route>

          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="*" element={<Error />} />
        </Routes>
      )}
      <Footer />
    </div>
  );
};

export default App;
