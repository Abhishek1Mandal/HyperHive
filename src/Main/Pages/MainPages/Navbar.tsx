import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Carousel: React.FC = () => {
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
                    <Link
                      className={`block py-2 px-3 ${
                        activeItem === "contact"
                          ? "text-green-600"
                          : "text-white"
                      } rounded`}
                      to="/blog"
                    >
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
    </>
  );
};

export default Carousel;
