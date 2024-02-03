import { Routes, Route } from "react-router-dom";
import "../Components/CSS/TailWind.css";
import Navbar from "../UserDashBoard/Navbar";

const FrontendRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />} />
    </Routes>
  );
};

export default FrontendRoute;
