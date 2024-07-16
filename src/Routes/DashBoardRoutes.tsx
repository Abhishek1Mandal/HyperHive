import { Routes, Route } from "react-router-dom";
import "../Components/CSS/TailWind.css";
import DashBoard from "../Main/Pages/DashBoard/DashBoardNavbar";

const FrontendRoute = () => {
  return (
    <Routes>
      <Route path="/user" element={<DashBoard />} />
    </Routes>
  );
};

export default FrontendRoute;
