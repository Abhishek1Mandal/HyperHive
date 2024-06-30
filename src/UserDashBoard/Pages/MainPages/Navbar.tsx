import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCarousel } from "../../Logics/MainNav";

const Carousel: React.FC = () => {
  const { activeIndex, carouselItems, goToPrevious, goToNext } = useCarousel();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsScrolled(currentScrollPos > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleItemClick = (itemName: string) => {
    setActiveItem(itemName);
  };

  return (
    <>
      {/* ======= Header =======  */}
      <header
        id="header"
        className={`fixed top-0 w-full z-50 transition duration-500 ${
          isScrolled ? "bg-black" : "bg-transparent"
        }`}
        style={{ height: "60px" }}
      >
        <div className="container-fluid">
          <div className="row justify-content-center align-items-center">
            <div className="col-xl-11 d-flex align-items-center justify-content-between">
              <h1 className="logo">
                <button
                  onClick={() => {
                    handleItemClick("HyperHive");
                    const contactNavbar = document.getElementById("hero");
                    if (contactNavbar) {
                      contactNavbar.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className={`block py-2 px-3 ${
                    activeItem === "HyperHive" ? "text-white" : "text-white"
                  } rounded`}
                >
                  HyperHive
                </button>
              </h1>
              <nav id="Navbar" className="navbar">
                <ul>
                  <li>
                    <button
                      onClick={() => {
                        handleItemClick("hero");
                        const contactNavbar = document.getElementById("hero");
                        if (contactNavbar) {
                          contactNavbar.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className={`block py-2 px-3 ${
                        activeItem === "hero" ? "text-green-600" : "text-white"
                      } rounded`}
                    >
                      Home
                    </button>
                  </li>

                  <li>
                    <button
                      onClick={() => {
                        handleItemClick("about");
                        const contactNavbar = document.getElementById("about");
                        if (contactNavbar) {
                          contactNavbar.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className={`block py-2 px-3 ${
                        activeItem === "about" ? "text-green-600" : "text-white"
                      } rounded`}
                    >
                      About
                    </button>
                  </li>

                  <li>
                    <button
                      onClick={() => {
                        handleItemClick("services");
                        const contactNavbar =
                          document.getElementById("services");
                        if (contactNavbar) {
                          contactNavbar.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className={`block py-2 px-3 ${
                        activeItem === "services"
                          ? "text-green-600"
                          : "text-white"
                      } rounded`}
                    >
                      Services
                    </button>
                  </li>

                  <li>
                    <button
                      onClick={() => {
                        handleItemClick("portfolio");
                        const contactNavbar =
                          document.getElementById("portfolio");
                        if (contactNavbar) {
                          contactNavbar.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className={`block py-2 px-3 ${
                        activeItem === "portfolio"
                          ? "text-green-600"
                          : "text-white"
                      } rounded`}
                    >
                      Portfolio
                    </button>
                  </li>

                  <li>
                    <button
                      onClick={() => {
                        handleItemClick("team");
                        const contactNavbar = document.getElementById("team");
                        if (contactNavbar) {
                          contactNavbar.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className={`block py-2 px-3 ${
                        activeItem === "team" ? "text-green-600" : "text-white"
                      } rounded`}
                    >
                      Team
                    </button>
                  </li>

                  <li>
                    <button
                      onClick={() => {
                        handleItemClick("contact");
                        const contactNavbar =
                          document.getElementById("contact");
                        if (contactNavbar) {
                          contactNavbar.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className={`block py-2 px-3 ${
                        activeItem === "contact"
                          ? "text-green-600"
                          : "text-white"
                      } rounded`}
                    >
                      Contact
                    </button>
                  </li>

                  <li>
                    <Link className="nav-link  " to="blog.html">
                      Blog
                    </Link>
                  </li>

                  <li className="dropdown">
                    <Link to="#">
                      <span>Drop Down</span>{" "}
                      <i className="bi bi-chevron-down"></i>
                    </Link>
                    <ul>
                      <li>
                        <Link to="#">Drop Down 1</Link>
                      </li>
                      <li className="dropdown">
                        <Link to="#">
                          <span>Deep Drop Down</span>{" "}
                          <i className="bi bi-chevron-right"></i>
                        </Link>
                        <ul>
                          <li>
                            <Link to="#">Deep Drop Down 1</Link>
                          </li>
                          <li>
                            <Link to="#">Deep Drop Down 2</Link>
                          </li>
                          <li>
                            <Link to="#">Deep Drop Down 3</Link>
                          </li>
                          <li>
                            <Link to="#">Deep Drop Down 4</Link>
                          </li>
                          <li>
                            <Link to="#">Deep Drop Down 5</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="#">Drop Down 2</Link>
                      </li>
                      <li>
                        <Link to="#">Drop Down 3</Link>
                      </li>
                      <li>
                        <Link to="#">Drop Down 4</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
                <i className="bi bi-list mobile-nav-toggle"></i>
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/*End Header*/}

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
};

export default Carousel;
