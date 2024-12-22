import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/logo.png";

const Navbar = () => {
  useGSAP(() => {
    gsap.from(".navbar-brand>*", {
      x: -90,
      opacity: 0, // 0 - transparent  & 1 - opaque
      delay: 0.5,
      duration: 0.5,
      scale: 0.1,
    });
    gsap.from(".nav-link", {
      y: -40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.3, // ek element ke baad dusra aae after some time.
    });
    gsap.from(".nav-btn", {
      x: -200,
      y: 200,
      opacity: 0,
      scale: 0.1,
      delay: 1,
      duration: 0.8,
      stagger: 0.3,
    });
  });

  return (
    <>
      <div className="row">
        <div className="col-12">
          <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
              <Link className="navbar-brand d-flex w-25" to="/">
                <img src={img1} className="w-10 my-auto" alt="" />
                &nbsp; &nbsp;
                <p className="my-auto">&nbsp;MuscleMeter</p>
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
              <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav w-50 d-flex justify-content-around">
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link"
                      to="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Workouts
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="#">
                          Dashboard
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link"
                      to="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Routes
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="/Ro">
                          Routes Home
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Find Your City
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link"
                      to="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Community
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="#">
                          Activity Feeds
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Challenges
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              <Link to="/Signin" className="btn btn-light nav-btn ms-auto">
                LOG IN
              </Link>
              &nbsp;&nbsp;
              <Link to="/Signup" className="btn btn-dark nav-btn mx-1">
                SIGN UP
              </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
