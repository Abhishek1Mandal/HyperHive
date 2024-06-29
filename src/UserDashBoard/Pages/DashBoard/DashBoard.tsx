import { useState } from "react";
import { Link } from "react-router-dom";
import Img from "../../../Components/img/avatar-2.jpg";

export default function DashBoardNavbar() {
  const [showBox, setShowBox] = useState(true);

  const handleCloseBox = () => {
    setShowBox(false);
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-12">
          <div className="d-flex justify-content-between align-items-center mb-5">
            <h3 className="mb-0 text-2xl font-semibold">Analytics</h3>
          </div>
        </div>
      </div>

      {showBox && (
        <div
          className="rounded-md relative"
          style={{ background: "rgb(114 93 255)" }}
        >
          <div className="row mb-5 ">
            <div className="col-lg-12 col-md-12 col-12">
              <div className="p-6 d-lg-flex justify-content-between align-items-center ">
                <div className="d-md-flex align-items-center">
                  <img src={Img} alt="" className="rounded-circle w-16" />
                  <div className="ms-md-4 mt-3 mt-md-0 ml-2">
                    <h3 className="text-white mb-0">
                      Good Day, Abhishek
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
                <div
                  className="absolute top-0 right-3 mt-2 mr-2"
                  onClick={handleCloseBox}
                >
                  <svg
                    className="w-[20px] h-[20px] text-white cursor-pointer"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
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
                      <h4 className="fs-2 fw-bold text-success mb-0 ">34.4%</h4>
                      <span className="text-success">134,693</span>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div>
                    <h4 className="mb-3">Tablet</h4>
                    <div className="lh-1">
                      <h4 className="fs-2 fw-bold text-warning mb-0 ">20.8%</h4>
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
    </>
  );
}
