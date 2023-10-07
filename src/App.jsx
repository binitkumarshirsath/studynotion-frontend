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
const App = () => {
  const loading = useSelector((state) => state.authReducer.loading);
  return (
    <div className="h-auto w-full flex flex-col">
      <Navbar />
      {/* loader */}
      {loading ? (
        <div className="bg-richblack-700 h-[calc(100vh-56px)] flex justify-center items-center">
          <div className="custom-loader h-full"></div>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:id" element={<UpdatePassword />} />
          <Route path="/verify-otp" element={<VerifyOTP />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      )}
      <Footer />
    </div>
  );
};

export default App;
