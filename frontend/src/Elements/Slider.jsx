import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { Link } from "react-router-dom";
import s1 from "../assets/img/s1.webp";

const Slider = () => {
  useGSAP(() => {
    gsap.from(".sdiv", {
      x: -1440,
      // rotate:1440,
      scale: 0.1,
      opacity: 0,
      duration: 1,
      borderRadius: "50%",
    });
    gsap.from(".sdiv>div", {
      x: 1000,
      duration: 1.3,
    });
    gsap.from(".sdiv>div>*", {
      x: 100,
      duration: 2,
      scale: 0.2,
      opacity: 0,
      stagger: 0.3,
    });
  });

  return (
    <div className="row">
      <div className="col-sm-12 text-center sdiv">
        <div>
          <h1>Reach Your Best</h1>
          <p>
            Whether you’re training for a marathon or your biggest <br />
            season yet, we’re here to help you make serious progress.
          </p>
          <Link to="/Signup" className="btn btn-light w-25 fw-bold">
            SIGN UP
          </Link>
        </div>
        <img src={s1} alt="" className="w-90" />
      </div>
    </div>
  );
};

export default Slider;
