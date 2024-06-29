import { useState } from "react";
import Img1 from "../../../Components/img/portfolio/app1.jpg";
import Img2 from "../../../Components/img/portfolio/web3.jpg";
import Img3 from "../../../Components/img/portfolio/app2.jpg";
import Img4 from "../../../Components/img/portfolio/card2.jpg";
import Img5 from "../../../Components/img/portfolio/web2.jpg";
import Img6 from "../../../Components/img/portfolio/app3.jpg";
import Img7 from "../../../Components/img/portfolio/card1.jpg";
import Img8 from "../../../Components/img/portfolio/card3.jpg";
import Img9 from "../../../Components/img/portfolio/web1.jpg";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [filter, setFilter] = useState<string>("*");

  const handleFilterChange = (filter: string) => {
    setFilter(filter);
  };

  return (
    <>
      {/* ======= Portfolio Section ======= */}
      <section id="portfolio" className="section-bg">
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <h3 className="section-title">Our Portfolio</h3>
          </header>

          <div className="row" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-12 flex justify-center">
              <ul id="portfolio-flters" className="flex space-x-4">
                <li
                  onClick={() => handleFilterChange("*")}
                  className={`cursor-pointer ${
                    filter === "*" ? "filter-active" : ""
                  }`}
                >
                  All
                </li>
                <li
                  onClick={() => handleFilterChange(".filter-app")}
                  className={`cursor-pointer ${
                    filter === ".filter-app" ? "filter-active" : ""
                  }`}
                >
                  App
                </li>
                <li
                  onClick={() => handleFilterChange(".filter-card")}
                  className={`cursor-pointer ${
                    filter === ".filter-card" ? "filter-active" : ""
                  }`}
                >
                  Card
                </li>
                <li
                  onClick={() => handleFilterChange(".filter-web")}
                  className={`cursor-pointer ${
                    filter === ".filter-web" ? "filter-active" : ""
                  }`}
                >
                  Web
                </li>
              </ul>
            </div>
          </div>

          <div
            className="row portfolio-container"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div
              className={`col-lg-4 col-md-6 portfolio-item filter-app ${
                filter !== "*" && filter !== ".filter-app" ? "hidden" : "block"
              }`}
            >
              <div className="portfolio-wrap">
                <figure>
                  <img src={Img1} className="img-fluid" alt="App 1" />
                  <Link
                    to="assets/img/portfolio/app1.jpg"
                    data-lightbox="portfolio"
                    data-title="App 1"
                    className="link-preview"
                  >
                    <i className="bi bi-plus"></i>
                  </Link>
                  <Link
                    to="portfolio-details.html"
                    className="link-details"
                    title="More Details"
                  >
                    <i className="bi bi-link"></i>
                  </Link>
                </figure>

                <div className="portfolio-info">
                  <h4>
                    <Link to="portfolio-details.html">App 1</Link>
                  </h4>
                  <p>App</p>
                </div>
              </div>
            </div>

            <div
              className={`col-lg-4 col-md-6 portfolio-item filter-web ${
                filter !== "*" && filter !== ".filter-web" ? "hidden" : "block"
              }`}
            >
              <div className="portfolio-wrap">
                <figure>
                  <img src={Img2} className="img-fluid" alt="Web 3" />
                  <Link
                    to="assets/img/portfolio/web3.jpg"
                    className="link-preview portfolio-lightbox"
                    data-gallery="portfolioGallery"
                    title="Web 3"
                  >
                    <i className="bi bi-plus"></i>
                  </Link>
                  <Link
                    to="portfolio-details.html"
                    className="link-details"
                    title="More Details"
                  >
                    <i className="bi bi-link"></i>
                  </Link>
                </figure>

                <div className="portfolio-info">
                  <h4>
                    <Link to="portfolio-details.html">Web 3</Link>
                  </h4>
                  <p>Web</p>
                </div>
              </div>
            </div>

            <div
              className={`col-lg-4 col-md-6 portfolio-item filter-app ${
                filter !== "*" && filter !== ".filter-app" ? "hidden" : "block"
              }`}
            >
              <div className="portfolio-wrap">
                <figure>
                  <img src={Img3} className="img-fluid" alt="App 2" />
                  <Link
                    to="assets/img/portfolio/app2.jpg"
                    className="link-preview portfolio-lightbox"
                    data-gallery="portfolioGallery"
                    title="App 2"
                  >
                    <i className="bi bi-plus"></i>
                  </Link>
                  <Link
                    to="portfolio-details.html"
                    className="link-details"
                    title="More Details"
                  >
                    <i className="bi bi-link"></i>
                  </Link>
                </figure>

                <div className="portfolio-info">
                  <h4>
                    <Link to="portfolio-details.html">App 2</Link>
                  </h4>
                  <p>App</p>
                </div>
              </div>
            </div>

            <div
              className={`col-lg-4 col-md-6 portfolio-item filter-card ${
                filter !== "*" && filter !== ".filter-card" ? "hidden" : "block"
              }`}
            >
              <div className="portfolio-wrap">
                <figure>
                  <img src={Img4} className="img-fluid" alt="Card 2" />
                  <Link
                    to="assets/img/portfolio/card2.jpg"
                    className="link-preview portfolio-lightbox"
                    data-gallery="portfolioGallery"
                    title="Card 2"
                  >
                    <i className="bi bi-plus"></i>
                  </Link>
                  <Link
                    to="portfolio-details.html"
                    className="link-details"
                    title="More Details"
                  >
                    <i className="bi bi-link"></i>
                  </Link>
                </figure>

                <div className="portfolio-info">
                  <h4>
                    <Link to="portfolio-details.html">Card 2</Link>
                  </h4>
                  <p>Card</p>
                </div>
              </div>
            </div>

            <div
              className={`col-lg-4 col-md-6 portfolio-item filter-web ${
                filter !== "*" && filter !== ".filter-web" ? "hidden" : "block"
              }`}
            >
              <div className="portfolio-wrap">
                <figure>
                  <img src={Img5} className="img-fluid" alt="Web 2" />
                  <Link
                    to="assets/img/portfolio/web2.jpg"
                    className="link-preview portfolio-lightbox"
                    data-gallery="portfolioGallery"
                    title="Web 2"
                  >
                    <i className="bi bi-plus"></i>
                  </Link>
                  <Link
                    to="portfolio-details.html"
                    className="link-details"
                    title="More Details"
                  >
                    <i className="bi bi-link"></i>
                  </Link>
                </figure>

                <div className="portfolio-info">
                  <h4>
                    <Link to="portfolio-details.html">Web 2</Link>
                  </h4>
                  <p>Web</p>
                </div>
              </div>
            </div>

            <div
              className={`col-lg-4 col-md-6 portfolio-item filter-app ${
                filter !== "*" && filter !== ".filter-app" ? "hidden" : "block"
              }`}
            >
              <div className="portfolio-wrap">
                <figure>
                  <img src={Img6} className="img-fluid" alt="App 3" />
                  <Link
                    to="assets/img/portfolio/app3.jpg"
                    className="link-preview portfolio-lightbox"
                    data-gallery="portfolioGallery"
                    title="App 3"
                  >
                    <i className="bi bi-plus"></i>
                  </Link>
                  <Link
                    to="portfolio-details.html"
                    className="link-details"
                    title="More Details"
                  >
                    <i className="bi bi-link"></i>
                  </Link>
                </figure>

                <div className="portfolio-info">
                  <h4>
                    <Link to="portfolio-details.html">App 3</Link>
                  </h4>
                  <p>App</p>
                </div>
              </div>
            </div>

            <div
              className={`col-lg-4 col-md-6 portfolio-item filter-card ${
                filter !== "*" && filter !== ".filter-card" ? "hidden" : "block"
              }`}
            >
              <div className="portfolio-wrap">
                <figure>
                  <img src={Img7} className="img-fluid" alt="Card 1" />
                  <Link
                    to="assets/img/portfolio/card1.jpg"
                    className="link-preview portfolio-lightbox"
                    data-gallery="portfolioGallery"
                    title="Card 1"
                  >
                    <i className="bi bi-plus"></i>
                  </Link>
                  <Link
                    to="portfolio-details.html"
                    className="link-details"
                    title="More Details"
                  >
                    <i className="bi bi-link"></i>
                  </Link>
                </figure>

                <div className="portfolio-info">
                  <h4>
                    <Link to="portfolio-details.html">Card 1</Link>
                  </h4>
                  <p>Card</p>
                </div>
              </div>
            </div>

            <div
              className={`col-lg-4 col-md-6 portfolio-item filter-card ${
                filter !== "*" && filter !== ".filter-card" ? "hidden" : "block"
              }`}
            >
              <div className="portfolio-wrap">
                <figure>
                  <img src={Img8} className="img-fluid" alt="Card 3" />
                  <Link
                    to="assets/img/portfolio/card3.jpg"
                    className="link-preview portfolio-lightbox"
                    data-gallery="portfolioGallery"
                    title="Card 3"
                  >
                    <i className="bi bi-plus"></i>
                  </Link>
                  <Link
                    to="portfolio-details.html"
                    className="link-details"
                    title="More Details"
                  >
                    <i className="bi bi-link"></i>
                  </Link>
                </figure>

                <div className="portfolio-info">
                  <h4>
                    <Link to="portfolio-details.html">Card 3</Link>
                  </h4>
                  <p>Card</p>
                </div>
              </div>
            </div>

            <div
              className={`col-lg-4 col-md-6 portfolio-item filter-web ${
                filter !== "*" && filter !== ".filter-web" ? "hidden" : "block"
              }`}
            >
              <div className="portfolio-wrap">
                <figure>
                  <img src={Img9} className="img-fluid" alt="Web 1" />
                  <Link
                    to="assets/img/portfolio/web1.jpg"
                    className="link-preview portfolio-lightbox"
                    data-gallery="portfolioGallery"
                    title="Web 1"
                  >
                    <i className="bi bi-plus"></i>
                  </Link>
                  <Link
                    to="portfolio-details.html"
                    className="link-details"
                    title="More Details"
                  >
                    <i className="bi bi-link"></i>
                  </Link>
                </figure>

                <div className="portfolio-info">
                  <h4>
                    <Link to="portfolio-details.html">Web 1</Link>
                  </h4>
                  <p>Web</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
