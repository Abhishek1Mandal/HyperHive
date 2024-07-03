import { Link } from "react-router-dom";
import NavBarLogics from "../../Logics/DashBoard";
import MainBody from "./DashBoard";

import Img1 from "../../../Components/img/avatar-1.jpg";

export default function Navbar() {
  const {
    isDropdownOpen,
    isNotificationOpen,
    isDropdownDashOpen,
    isDropdownEcommerceOpen,
    isDrawerOpen,
    isSidebarOpen,
    notificationRef,
    dropdownRef,
    toggleNotification,
    toggleDropdown,
    toggleDrawer,
    toggleDropdownDash,
    toggleDropdownEcommerce,
  } = NavBarLogics();

  return (
    <>
      <nav
        className={`fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 ${
          isSidebarOpen ? "ml-[16rem]" : ""
        }`}
      >
        <div className="px-3 border py-3 lg:px-5 lg:pl-3">
          <div
            className={`flex items-center justify-between ${
              isSidebarOpen ? " mr-64" : ""
            }`}
          >
            <div className="flex items-center justify-start rtl:justify-end">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  className="bi bi-text-indent-left text-muted text-gray-600"
                  viewBox="0 0 16 16"
                  onClick={toggleDrawer}
                >
                  <path d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.293 8 2.646 6.354a.5.5 0 0 1 0-.708zM7 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"></path>
                </svg>
              </div>

              <form className="flex items-center ml-3">
                <label htmlFor="voice-search" className="sr-only">
                  Search
                </label>
                <div className="relative w-full">
                  <input
                    type="text"
                    id="voice-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pr-12 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search Mockups, Logos, Design Templates..."
                    required
                  />
                  <button
                    type="button"
                    className="absolute border border-gray-300 border-l-gray-400 p-2 inset-y-0 end-0 flex items-center "
                  >
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>

            <div className="flex items-center">
              <div className="flex items-center ms-3 mr-3">
                <button
                  type="button"
                  aria-expanded={isNotificationOpen}
                  onClick={toggleNotification}
                >
                  <svg
                    className="w-[21px] h-[21px] text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.2"
                      d="M12 5.4V3m0 2.4a5.3 5.3 0 0 1 5.1 5.3v1.8c0 2.4 1.9 3 1.9 4.2 0 .6 0 1.3-.5 1.3h-13c-.5 0-.5-.7-.5-1.3 0-1.2 1.9-1.8 1.9-4.2v-1.8A5.3 5.3 0 0 1 12 5.4ZM8.7 18c.1.9.3 1.5 1 2.1a3.5 3.5 0 0 0 4.6 0c.7-.6 1.3-1.2 1.4-2.1h-7Z"
                    />
                  </svg>
                </button>

                {isNotificationOpen && (
                  <div
                    ref={notificationRef}
                    className={`z-50 absolute border mt-64 py-2 w-1/3 bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600 ${
                      isSidebarOpen ? "right-[21rem]" : "right-[5rem]"
                    }`}
                  >
                    <div className="flex px-4 py-3" role="none">
                      <h5 className="text-gray-900 dark:text-white" role="none">
                        Notification
                      </h5>
                      <div className="absolute right-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="feather feather-settings me-1 icon-xs text-gray-600"
                        >
                          <circle cx="12" cy="12" r="3"></circle>
                          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                        </svg>
                      </div>
                    </div>
                    <ul className="py-1" role="none">
                      <li>
                        <Link
                          to="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          role="menuitem"
                        >
                          Dashboard
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          role="menuitem"
                        >
                          Settings
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          role="menuitem"
                        >
                          Earnings
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          role="menuitem"
                        >
                          Sign out
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <div className="flex items-center ms-3">
                <button
                  type="button"
                  className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  aria-expanded={isDropdownOpen}
                  onClick={toggleDropdown}
                >
                  <span className="sr-only">Open user menu</span>
                  <img className="w-8 h-8 rounded-full" src={Img1} alt="" />
                </button>

                {isDropdownOpen && (
                  <div
                    ref={dropdownRef}
                    className={`z-50 absolute border mt-72 py-2 w-48 bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600 ${
                      isSidebarOpen ? "right-[18rem]" : "right-[2rem]"
                    }`}
                  >
                    <div className="px-4 py-3" role="none">
                      <p
                        className="text-sm text-gray-900 dark:text-white"
                        role="none"
                      >
                        Neil Sims
                      </p>
                      <p
                        className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                        role="none"
                      >
                        neil.sims@flowbite.com
                      </p>
                    </div>
                    <ul className="py-1" role="none">
                      <li>
                        <Link
                          className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dropdown-item d-flex align-items-center"
                          to="#"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather pt-2 text-gray-500 feather-user me-2 icon-xxs dropdown-item-icon"
                          >
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                          </svg>
                          <p className="pt-2">Edit Profile</p>
                        </Link>
                      </li>

                      <li>
                        <Link
                          className="flex py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dropdown-item d-flex align-items-center"
                          to="#"
                        >
                          <p className="pl-[2px]"></p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather text-gray-500 feather-activity me-2 icon-xxs dropdown-item-icon"
                          >
                            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                          </svg>
                          <p className="pl-[4px]">Activity Log</p>
                        </Link>
                      </li>

                      <li>
                        <Link
                          className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dropdown-item d-flex align-items-center"
                          to="#"
                        >
                          <p className="pl-[2px]"></p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="17"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather text-gray-500 feather-settings me-2 icon-xxs dropdown-item-icon"
                          >
                            <circle cx="12" cy="12" r="3"></circle>
                            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                          </svg>
                          <p className="pl-[5px]"></p>Settings
                        </Link>
                      </li>

                      <li>
                        <Link
                          className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dropdown-item d-flex align-items-center"
                          to="#"
                        >
                          <p className="pl-[2px]"></p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather text-gray-500 feather-power me-2 icon-xxs dropdown-item-icon"
                          >
                            <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
                            <line x1="12" y1="2" x2="12" y2="12"></line>
                          </svg>
                          <p className="pl-[5px]"></p>Sign Out
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div
        id="drawer-navigation"
        className={`fixed top-0 left-0 z-40 w-64 border h-screen p-4 overflow-y-auto transition-transform ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } bg-gray-50 dark:bg-gray-800`}
        tabIndex={-1}
        aria-labelledby="drawer-navigation-label"
      >
        <div className="bg-gray-50">
          <ul className="space-y-2 font-medium">
            <div className="p-[2%]">
              <Link to="https://github.com/Abhishek1Mandal" className="flex">
                <img
                  className="w-8 h-8 rounded-full ml-[6px]"
                  src={Img1}
                  alt=""
                />
                <span className="self-center ml-[12px] text-xl font-semibold sm:text-1xl whitespace-nowrap dark:text-white">
                  Abhishek1Mandal
                </span>
              </Link>
            </div>

            <div className="w-full h-0.5 bg-gray-400"></div>

            <li>
              <div>
                <Link
                  className={`flex px-4 py-2 text-sm bg-gray-100 rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dropdown-item d-flex align-items-center ${
                    isDropdownDashOpen ? "open" : ""
                  }`}
                  to="#!"
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
                </Link>
              </div>
              {isDropdownDashOpen && (
                <ul className="space-y-0 font-medium mt-2">
                  <li>
                    <Link
                      to="#"
                      className="flex items-center text-sm w-full p-2 text-gray-600 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                    >
                      Analytics
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="#"
                      className="flex items-center text-sm w-full p-2 text-gray-600 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                    >
                      Project
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="#"
                      className="flex items-center text-sm w-full p-2 text-gray-600 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                    >
                      Ecommerce
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="#"
                      className="flex items-center text-sm w-full p-2 text-gray-600 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                    >
                      CRM
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="#"
                      className="flex items-center text-sm w-full p-2 text-gray-600 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                    >
                      Finance
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="#"
                      className="flex items-center text-sm w-full p-2 text-gray-600 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <div className="ml-3">Apps</div>
            </li>

            <li>
              <Link
                className="flex px-4 py-2 text-sm rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dropdown-item d-flex align-items-center"
                to="#"
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
              </Link>
            </li>

            <li>
              <Link
                className="flex px-4 py-2 text-sm rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dropdown-item d-flex align-items-center"
                to="#"
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
              </Link>
            </li>

            <li className="nav-item">
              <div>
                <Link
                  className={`flex px-4 py-2 text-sm rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dropdown-item d-flex align-items-center ${
                    isDropdownEcommerceOpen ? "open" : ""
                  }`}
                  to="#"
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
                </Link>
              </div>
              {isDropdownEcommerceOpen && (
                <ul className="nav flex-column">
                  <li>
                    <Link
                      to="#"
                      className="flex items-center text-sm w-full p-2 text-gray-600 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                    >
                      Products
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="#"
                      className="flex items-center text-sm w-full p-2 text-gray-600 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                    >
                      Product Detail
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="#"
                      className="flex items-center text-sm w-full p-2 text-gray-600 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                    >
                      Add Product
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="#"
                      className="flex items-center text-sm w-full p-2 text-gray-600 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                    >
                      Orders
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="#"
                      className="flex items-center text-sm w-full p-2 text-gray-600 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                    >
                      Orders Detail
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="#"
                      className="flex items-center text-sm w-full p-2 text-gray-600 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                    >
                      Shopping cart
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="#"
                      className="flex items-center text-sm w-full p-2 text-gray-600 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                    >
                      Checkout
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="#"
                      className="flex items-center text-sm w-full p-2 text-gray-600 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                    >
                      Customer
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="#"
                      className="flex items-center text-sm w-full p-2 text-gray-600 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                    >
                      Seller
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>

      <div className={`p-4 mt-16 ${isSidebarOpen ? "ml-[16rem]" : ""}`}>
        <MainBody />
      </div>
    </>
  );
}
