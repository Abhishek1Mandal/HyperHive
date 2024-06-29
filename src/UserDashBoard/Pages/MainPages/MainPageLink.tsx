import Navbar from "./Navbar";
import About from "./About";
import Portfolio from "./Portfolio";
import Team from "./Team";
import Contact from "./Contact";
import Footer from "./Footer";

import "../../../Components/CSS/style.css";
import "../../../Components/vendor/bootstrap/css/bootstrap.min.css";
import "../../../Components/vendor/animate.css/animate.min.css";
import "../../../Components/vendor/bootstrap-icons/bootstrap-icons.css";
import "../../../Components/vendor/glightbox/css/glightbox.min.css";
import "../../../Components/vendor/aos/aos.css";
import "../../../Components/vendor/swiper/swiper-bundle.min.css";

export default function MainPageLink() {
  return (
    <>
      <>
        <Navbar />

        <About />
        <Portfolio />
        <Team />
        <Contact />
        <Footer />
        {/* 
        <FeatureSections />
        <Contact /> */}
      </>
    </>
  );
}
