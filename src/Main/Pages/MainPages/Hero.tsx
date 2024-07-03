import { Link } from "react-router-dom";
import { useCarousel } from "../../Logics/MainNav";

export default function Hero() {
  const { activeIndex, carouselItems, goToPrevious, goToNext } = useCarousel();
  return (
    <>
      {/* ======= hero Section =======  */}
      <section id="hero">
        <div className="hero-container">
          <div
            id="heroCarousel"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
            data-bs-interval="5000"
          >
            <ol id="hero-carousel-indicators" className="carousel-indicators">
              {carouselItems.map((item, index) => (
                <li
                  key={index}
                  data-bs-target="#heroCarousel"
                  data-bs-slide-to={index}
                  className={index === activeIndex ? "active" : ""}
                ></li>
              ))}
            </ol>

            <div className="carousel-inner" role="listbox">
              {carouselItems.map((item, index) => (
                <div
                  key={index}
                  className={
                    index === activeIndex
                      ? "carousel-item active"
                      : "carousel-item"
                  }
                  style={{
                    backgroundImage: `url(${item.backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="carousel-container">
                    <div className="container">
                      <h2 className="animate__animated animate__fadeInDown">
                        {item.title}
                      </h2>
                      <p className="animate__animated animate__fadeInUp">
                        {item.description}
                      </p>
                      <Link
                        to="#featured-services"
                        className="btn-get-started scrollto animate__animated animate__fadeInUp"
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              onClick={goToPrevious}
              aria-label="Previous"
            >
              <span
                className="carousel-control-prev-icon bi bi-chevron-left"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              onClick={goToNext}
              aria-label="Next"
            >
              <span
                className="carousel-control-next-icon bi bi-chevron-right"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
      {/*End Hero Section*/}

      {/* ======= Featured Services Section Section =======  */}
      <section id="featured-services">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 box">
              <i className="bi bi-briefcase"></i>
              <h4 className="title">
                <Link to="">Lorem Ipsum Delino</Link>
              </h4>
              <p className="description">
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi sint occaecati cupiditate non provident
              </p>
            </div>

            <div className="col-lg-4 box box-bg">
              <i className="bi bi-card-checklist"></i>
              <h4 className="title">
                <Link to="">Dolor Sitema</Link>
              </h4>
              <p className="description">
                Minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat tarad limino ata
              </p>
            </div>

            <div className="col-lg-4 box">
              <i className="bi bi-binoculars"></i>
              <h4 className="title">
                <Link to="">Sed ut perspiciatis</Link>
              </h4>
              <p className="description">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*End Featured Services Section*/}
    </>
  );
}
