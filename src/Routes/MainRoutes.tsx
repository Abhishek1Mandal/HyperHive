import { Routes, Route } from "react-router-dom";
import Navbar from "../UserDashBoard/Navbar";
import Test from "../UserDashBoard/test";

const FrontendRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  );
};

export default FrontendRoute;
