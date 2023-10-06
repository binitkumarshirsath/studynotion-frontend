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
const App = () => {
  const loading = useSelector((state) => state.authReducer.loading);
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navbar />
      {/* loader */}
      {loading ? (
        <div className="bg-richblack-800 flex-1 flex justify-center items-center">
          <div className="custom-loader"></div>
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
        </Routes>
      )}
      <Footer />
    </div>
  );
};

export default App;
