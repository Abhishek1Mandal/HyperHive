import { useState } from "react";
import MiniDashBoardPages from "./SideNavbarMiniPages/MiniDashBoardPages";
import MiniEcommercePages from "./SideNavbarMiniPages/MiniEcommercePages";

export default function SideNavbarComponents() {
  const [isDropdownDashOpen, setIsDropdownDashOpen] = useState(false);
  const [isDropdownEcommerceOpen, setIsDropdownEcommerceOpen] = useState(false);

  const toggleDropdownDash = () => {
    setIsDropdownDashOpen(!isDropdownDashOpen);
  };

  const toggleDropdownEcommerce = () => {
    setIsDropdownEcommerceOpen(!isDropdownEcommerceOpen);
  };

  return (
    <>
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          <li>
            <div>
              <a
                className={`flex px-4 py-2 text-sm rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dropdown-item d-flex align-items-center ${
                  isDropdownDashOpen ? "open" : ""
                }`}
                href="#!"
                onClick={toggleDropdownDash}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-home nav-icon me-2 icon-xxs"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                Dashboard
                <div className="absolute right-8">
                  {isDropdownDashOpen ? (
                    <svg
                      className="w-5 h-4 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        d="m5 15 7-7 7 7"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-4 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        d="m19 9-7 7-7-7"
                      />
                    </svg>
                  )}
                </div>
              </a>
            </div>
            {isDropdownDashOpen && <MiniDashBoardPages />}
          </li>

          <li>
            <div className="ml-3">Apps</div>
          </li>

          <li>
            <a
              className="flex px-4 py-2 text-sm rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dropdown-item d-flex align-items-center"
              href=""
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather text-gray-500 feather-home nav-icon me-2 icon-xxs"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>{" "}
              Calendar
            </a>
          </li>

          <li>
            <a
              className="flex px-4 py-2 text-sm rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dropdown-item d-flex align-items-center"
              href=""
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather text-gray-500 feather-message-square nav-icon me-2 icon-xxs"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>{" "}
              Chat
            </a>
          </li>

          <li className="nav-item">
            <div>
              <a
                className={`flex px-4 py-2 text-sm rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dropdown-item d-flex align-items-center ${
                  isDropdownEcommerceOpen ? "open" : ""
                }`}
                href="#!"
                onClick={toggleDropdownEcommerce}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather text-gray-500 feather-shopping-cart nav-icon me-2 icon-xxs"
                >
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>{" "}
                Ecommerce
                <div className="absolute right-8">
                  {isDropdownEcommerceOpen ? (
                    <svg
                      className="w-5 h-4 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        d="m5 15 7-7 7 7"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-4 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        d="m19 9-7 7-7-7"
                      />
                    </svg>
                  )}
                </div>
              </a>
            </div>
            {isDropdownEcommerceOpen && <MiniEcommercePages />}
          </li>
        </ul>
      </div>
    </>
  );
}
