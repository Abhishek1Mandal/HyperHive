import { Routes, Route } from "react-router-dom";
import "../Components/CSS/TailWind.css";
import MainPageLink from "../Main/Pages/MainPages/MainPageLink";

import "../Components/CSS/style.css";
import "../Components/vendor/bootstrap/css/bootstrap.min.css";
import "../Components/vendor/animate.css/animate.min.css";
import "../Components/vendor/bootstrap-icons/bootstrap-icons.css";
import "../Components/vendor/glightbox/css/glightbox.min.css";
import "../Components/vendor/aos/aos.css";
import "../Components/vendor/swiper/swiper-bundle.min.css";
import Footer from "../Main/Pages/MainPages/Footer";
import Blog from "../Main/Pages/Blog/Blog";
import BlogSingle from "../Main/Pages/Blog/Blog_Single";

const FrontendRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPageLink />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog_single" element={<BlogSingle />} />
      </Routes>
      <Footer />
    </>
  );
};

export default FrontendRoute;
