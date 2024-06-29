import { Routes, Route } from "react-router-dom";
import "../Components/CSS/TailWind.css";
import MainPageLink from "../UserDashBoard/Pages/MainPages/MainPageLink";

const FrontendRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPageLink />} />
    </Routes>
  );
};

export default FrontendRoute;
