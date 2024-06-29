import { Routes, Route } from "react-router-dom";
import "../Components/CSS/TailWind.css";
import DashBoard from "../UserDashBoard/Pages/DashBoard/DashBoardNavbar";

const FrontendRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />} />
    </Routes>
  );
};

export default FrontendRoute;
