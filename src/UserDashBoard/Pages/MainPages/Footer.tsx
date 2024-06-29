import { useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleItemClick = (itemName: string) => {
    setActiveItem(itemName);
  };

  return (
    <>
      {/* ======= Footer ======= */}
      <footer id="footer" className="bg-gray-800 text-white">
        <div className="footer-top">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="footer-info">
                <h3 className="text-xl font-bold">BizPage</h3>
                <p className="mt-4">
                  Cras fermentum odio eu feugiat lide par naso tierra. Justo
                  eget nada terra videa magna derita valies darta donna mare
                  fermentum iaculis eu non diam phasellus. Scelerisque felis
                  imperdiet proin fermentum leo. Amet volutpat consequat mauris
                  nunc congue.
                </p>
              </div>

              <div className="footer-links">
                <h4 className="text-lg font-bold mb-4">Useful Links</h4>
                <ul>
                  <li className="flex items-center">
                    <i className="bi bi-chevron-right mr-2"></i>
                    <button
                      onClick={() => {
                        handleItemClick("hero");
                        const contactNavbar = document.getElementById("hero");
                        if (contactNavbar) {
                          contactNavbar.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className={`block ${
                        activeItem === "hero" ? "text-white" : "text-white"
                      } rounded`}
                    >
                      Home
                    </button>
                  </li>

                  <li className="flex items-center">
                    <i className="bi bi-chevron-right mr-2"></i>
                    <button
                      onClick={() => {
                        handleItemClick("hero");
                        const contactNavbar = document.getElementById("hero");
                        if (contactNavbar) {
                          contactNavbar.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className={`block ${
                        activeItem === "hero" ? "text-white" : "text-white"
                      } rounded`}
                    >
                      About us
                    </button>
                  </li>

                  <li className="flex items-center">
                    <i className="bi bi-chevron-right mr-2"></i>
                    <button
                      onClick={() => {
                        handleItemClick("hero");
                        const contactNavbar = document.getElementById("hero");
                        if (contactNavbar) {
                          contactNavbar.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className={`block ${
                        activeItem === "hero" ? "text-white" : "text-white"
                      } rounded`}
                    >
                      Services
                    </button>
                  </li>

                  <li className="flex items-center">
                    <i className="bi bi-chevron-right mr-2"></i>
                    <button
                      onClick={() => {
                        handleItemClick("hero");
                        const contactNavbar = document.getElementById("hero");
                        if (contactNavbar) {
                          contactNavbar.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className={`block ${
                        activeItem === "hero" ? "text-white" : "text-white"
                      } rounded`}
                    >
                      Terms of service
                    </button>
                  </li>

                  <li className="flex items-center">
                    <i className="bi bi-chevron-right mr-2"></i>
                    <button
                      onClick={() => {
                        handleItemClick("hero");
                        const contactNavbar = document.getElementById("hero");
                        if (contactNavbar) {
                          contactNavbar.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className={`block ${
                        activeItem === "hero" ? "text-white" : "text-white"
                      } rounded`}
                    >
                      Privacy policy
                    </button>
                  </li>
                </ul>
              </div>

              <div className="footer-contact">
                <h4 className="text-lg font-bold mb-4">Contact Us</h4>
                <p className="mt-4">
                  Rasoolpura
                  <br />
                  Secunderabad, Hyderbad
                  <br />
                  India <br />
                  <strong>Phone:</strong> +91 7********7
                  <br />
                  <strong>Email:</strong> rozzabhishekmandal@gmail.com
                  <br />
                </p>

                <div className="social-links mt-4">
                  <Link
                    to="https://github.com/Abhishek1Mandal"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-github"></i>
                  </Link>

                  <Link to="" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-facebook"></i>
                  </Link>

                  <Link
                    to="https://www.instagram.com/1abhishek_mandal/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-instagram"></i>
                  </Link>

                  <Link to="" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-linkedin"></i>
                  </Link>
                </div>
              </div>

              <div className="footer-newsletter">
                <h4 className="text-lg font-bold mb-4">Our Newsletter</h4>
                <p className="mt-4">
                  Tamen quem nulla quae legam multos aute sint culpa legam
                  noster magna veniam enim veniam illum dolore legam minim
                  quorum culpa amet magna export quem marada parida nodela
                  caramase seza.
                </p>
                <form action="" method="post" className="mt-4 flex">
                  <input
                    type="email"
                    name="email"
                    className="px-4 py-2 mr-2 rounded-lg border-gray-400 border"
                    placeholder="Your Email"
                  />
                  <input
                    type="submit"
                    value="Subscribe"
                    className="px-6 py-2 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 py-2">
          <div className="container mx-auto text-center text-sm text-gray-400">
            &copy; Copyright <strong className="text-white">BizPage</strong>.
            All Rights Reserved
          </div>
          <div className="container mx-auto text-center text-sm text-gray-400 mt-1">
            Developed in React.tsx by {}
            <Link
              to="https://github.com/Abhishek1Mandal"
              className="text-white"
            >
              Abhishek Mandal
            </Link>
          </div>
        </div>
      </footer>
      {/* End Footer */}
    </>
  );
}
