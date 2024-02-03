import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import Img from "../Components/img/avatar-7.jpg";

import ComponentNotification from "../Components/Pages/Notification";
import UserMiniProfile from "../Components/Pages/UserMiniProfile";
import SideNavbarComponents from "../Components/Pages/SideNavbarComponents";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const notificationRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
    setIsDropdownOpen(false); // Close dropdown when opening notification
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsNotificationOpen(false); // Close notification when opening dropdown
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
    setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar state
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target as Node) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsNotificationOpen(false);
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
                    <ComponentNotification />
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
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt="user photo"
                  />
                </button>

                {isDropdownOpen && (
                  <div
                    ref={dropdownRef}
                    className={`z-50 absolute border mt-72 py-2 w-48 bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600 ${
                      isSidebarOpen ? "right-[18rem]" : "right-[2rem]"
                    }`}
                  >
                    <UserMiniProfile />
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
        <SideNavbarComponents />
      </div>

      <div className={`p-4 mt-16 ${isSidebarOpen ? "ml-[16rem]" : ""}`}>
    
        <div className="rounded-md" style={{ background: "rgb(114 93 255)" }}>
          <div className="row mb-5 ">
            <div className="col-lg-12 col-md-12 col-12">
              <div className="p-6 d-lg-flex justify-content-between align-items-center ">
                <div className="d-md-flex align-items-center">
                  <img src={Img} alt="" className="rounded-circle w-16" />
                  <div className="ms-md-4 mt-3 mt-md-0 ml-2">
                    <h3 className="text-white mb-0">
                      Good afternoon, Jitu Chauhan
                    </h3>
                    <small className="text-white">
                      {" "}
                      Here is what’s happening with your projects today:
                    </small>
                  </div>
                </div>
                <button className="border mt-4 mb-4 p-1 bg-white rounded-md">
                  <Link to="#!" className="">
                    <div className="text-black">What’s New!</div>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-6 col-md-12 col-12 mb-5">
            <div className="grid grid-rows-2 grid-flow-col gap-4 ">
              <div className="col">
                <div className="card h-100 card-lift">
                  <div className="card-body rounded-md border shadow">
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="fw-semi-bold ">Bounce Rate [Avg]</span>
                      <span>
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
                          className="feather feather-activity text-gray-400"
                        >
                          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                        </svg>
                      </span>
                    </div>
                    <div className="mt-4 mb-2 ">
                      <h3 className="fw-bold mb-0">47.74%</h3>
                    </div>
                    <span className="text-danger ">
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
                        className="feather feather-arrow-down me-1 icon-xs"
                      >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <polyline points="19 12 12 19 5 12"></polyline>
                      </svg>
                      -26.50%
                    </span>
                    <small>vs 66.88(prev.)</small>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100 card-lift">
                  <div className="card-body rounded-md border shadow">
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="fw-semi-bold ">New Sessions</span>
                      <span>
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
                          className="feather feather-pie-chart text-gray-400"
                        >
                          <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                          <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                        </svg>
                      </span>
                    </div>
                    <div className="mt-4 mb-2 ">
                      <h3 className="fw-bold mb-0">76.40%</h3>
                    </div>
                    <span className=" text-success ">
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
                        className="feather feather-arrow-up me-1 icon-xs"
                      >
                        <line x1="12" y1="19" x2="12" y2="5"></line>
                        <polyline points="5 12 12 5 19 12"></polyline>
                      </svg>
                      -2.50%
                    </span>
                    <small>vs 74.60(prev.)</small>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100 card-lift">
                  <div className="card-body rounded-md border shadow">
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="fw-semi-bold ">Pageviews [Avg]</span>
                      <span>
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
                          className="feather feather-send text-gray-400"
                        >
                          <line x1="22" y1="2" x2="11" y2="13"></line>
                          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                      </span>
                    </div>
                    <div className="mt-4 mb-2 ">
                      <h3 className="fw-bold mb-0">2.15</h3>
                    </div>
                    <span className="text-danger ">
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
                        className="feather feather-arrow-down me-1 icon-xs"
                      >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <polyline points="19 12 12 19 5 12"></polyline>
                      </svg>
                      -1.83%
                    </span>
                    <small>vs 2.19 (prev.)</small>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100 card-lift">
                  <div className="card-body rounded-md border shadow">
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="fw-semi-bold ">Time on Site [Avg]</span>
                      <span>
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
                          className="feather feather-clock text-gray-400"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                      </span>
                    </div>
                    <div className="mt-4 mb-2 ">
                      <h3 className="fw-bold mb-0">2m:15s</h3>
                    </div>
                    <span className="text-success ">
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
                        className="feather feather-arrow-up me-1 icon-xs"
                      >
                        <line x1="12" y1="19" x2="12" y2="5"></line>
                        <polyline points="5 12 12 5 19 12"></polyline>
                      </svg>
                      21.50%
                    </span>
                    <small>vs 2.19 (prev.)</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-md-12 col-12 mb-5">
            <div className="card h-100">
              <div className="card-body rounded-md border shadow">
                <h4 className="mb-0">Session by Device Type</h4>
                <div className="row row-cols-lg-3  my-8">
                  <div className="col">
                    <div>
                      <h4 className="mb-3">Desktop</h4>
                      <div className="lh-1">
                        <h4 className="fs-2 fw-bold text-info mb-0 ">51.5%</h4>
                        <span className="text-info">201,434</span>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div>
                      <h4 className="mb-3">Mobile</h4>
                      <div className="lh-1">
                        <h4 className="fs-2 fw-bold text-success mb-0 ">
                          34.4%
                        </h4>
                        <span className="text-success">134,693</span>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div>
                      <h4 className="mb-3">Tablet</h4>
                      <div className="lh-1">
                        <h4 className="fs-2 fw-bold text-warning mb-0 ">
                          20.8%
                        </h4>
                        <span className="text-warning">81,525</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 mb-3">
                  <div className="progress" style={{ height: "40px" }}>
                    <div
                      className="progress-bar bg-info"
                      role="progressbar"
                      aria-label="Segment one"
                      style={
                        {
                          width: "35%",
                          "aria-valuenow": "35",
                          "aria-valuemin": "0",
                          "aria-valuemax": "100",
                        } as any
                      }
                    ></div>

                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      aria-label="Segment two"
                      style={
                        {
                          width: "40%",
                          "aria-valuenow": "40",
                          "aria-valuemin": "0",
                          "aria-valuemax": "100",
                        } as any
                      }
                    ></div>
                    <div
                      className="progress-bar bg-warning"
                      role="progressbar"
                      aria-label="Segment three"
                      style={
                        {
                          width: "25%",
                          "aria-valuenow": "25",
                          "aria-valuemin": "0",
                          "aria-valuemax": "100",
                        } as any
                      }
                    ></div>
                  </div>
                </div>
                <div>
                  <small>
                    <span className="mdi mdi-lightbulb-outline me-1"></span>How
                    perfformed over the last 30 days?
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
