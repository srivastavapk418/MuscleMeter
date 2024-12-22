import React from "react";
import { Link } from "react-router-dom";

function Sidebar({ utype }) {
  return (
    <div
      className="offcanvas offcanvas-start"
      data-bs-scroll="true"
      tabIndex="-1"
      id="offcanvasWithBothOptions"
      aria-labelledby="offcanvasWithBothOptionsLabel"
    >
      <div className="offcanvas-header">
        <h5
          className="offcanvas-title mx-4 fs-4 fw-bold"
          id="offcanvasWithBothOptionsLabel"
        >
          {utype == "admin" ? "Admin Dashboard" : "User Dashboard"}
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="d-flex side-list">
        {utype == "admin" ? ( //ternary operator
          <ul type="none" className="mx-auto w-80">
            <li className="bg-info py-3 my-3 px-4 text-light rounded-5">
              <Link to="/Addash" className="nav-link">
                Dashboard
              </Link>
            </li>
            <li className="bg-info py-3 my-3 px-4 text-light rounded-5">
              <Link to="/Viewuser" className="nav-link">
                View All User
              </Link>
            </li>
            <li className="bg-info py-3 my-3 px-4 text-light rounded-5">
              <Link to="/ViewAdMembership" className="nav-link">
                View All MemberShip
              </Link>
            </li>
            <li className="bg-info py-3 my-3 px-4 text-light rounded-5">
              <Link to="/ViewAdWorkout" className="nav-link">
                View All Workout
              </Link>
            </li>
            <li className="bg-info py-3 my-3 px-4 text-light rounded-5">
              <Link to="/ViewAdComplain" className="nav-link">
                View All Complaints
              </Link>
            </li>
            <li className="bg-info py-3 my-3 px-4 text-light rounded-5">
              <Link to="/ViewAdSuggestion" className="nav-link">
                View All Suggestions
              </Link>
            </li>
            <li className="bg-info py-3 my-3 px-4 text-light rounded-5">
              <Link to="/ViewAdAppreciation" className="nav-link">
                View All Appreciations
              </Link>
            </li>
            <li className="bg-info py-3 my-3 px-4 text-light rounded-5">
              <Link to="/ViewAdOtherFeed" className="nav-link">
                View Other Feedbacks
              </Link>
            </li>
          </ul>
        ) : (
          <>
            <ul type="none" className="mx-auto w-80">
              <li className="bg-warning py-3 my-3 px-4 text-light rounded-5">
                <Link to="/User" className="nav-link">
                  Dashboard
                </Link>
              </li>
              <li className="bg-warning py-3 my-3 px-4 text-light rounded-5">
                <Link to="/UpdateProfile" className="nav-link">
                  Update Profile
                </Link>
              </li>
              <li className="bg-warning py-3 my-3 px-4 text-light rounded-5">
                <Link to="/Feed" className="nav-link">
                  Add Feedback
                </Link>
              </li>
              <li className="bg-warning py-3 my-3 px-4 text-light rounded-5">
                <Link to="/ViewComplain" className="nav-link">
                  View Complain
                </Link>
              </li>
              <li className="bg-warning py-3 my-3 px-4 text-light rounded-5">
                <Link to="/ViewSuggestion" className="nav-link">
                  View Suggestion
                </Link>
              </li>
              <li className="bg-warning py-3 my-3 px-4 text-light rounded-5">
                <Link to="/ViewAppreciation" className="nav-link">
                  View Appreciation
                </Link>
              </li>
              <li className="bg-warning py-3 my-3 px-4 text-light rounded-5">
                <Link to="/ViewOtherFeed" className="nav-link">
                  View Other Feedback
                </Link>
              </li>
            </ul>
            <ul type="none" className="mx-auto w-90 side-list-l">
              <li className="bg-danger py-2 my-3 px-4 text-center text-light rounded-4">
                <Link
                  onClick={() => {
                    localStorage.removeItem("user");
                    navigate("/Signin");
                  }}
                  to=""
                  className="nav-link"
                >
                  Logout
                </Link>
              </li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
