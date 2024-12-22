import React from "react";
import bronze from "../assets/img/bronze.jpeg";
import gold from "../assets/img/gold.jpeg";
import silver from "../assets/img/silver.jpeg";
import { Link } from "react-router-dom";

function MemberShip() {
  return (
    <div className="col-8 col-md-10 mx-auto my-5">
      <div className="row row-cols-1 row-cols-md-4 gap-5">
        <div className="col border p-2 border-dark rounded-4 mx-auto">
            {/* gold is a external css that used here */}
          <div className="card h-100 gold">  
            <img src={gold} className="card-img-top p-2" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center fw-bold">Gold Member</h5>
              <p className="card-text d-flex justify-content-between text-center">
                <span><i>12 Months</i></span>
                <span><s className="text-danger"><small><i>&#8377;1,50,000/-</i></small></s><i> &#8377;90,000/-</i></span>
              </p>
            </div>
            <div className="card-footer text-center">
              <Link to={'/BeMember'} className="btn btn-sm btn-warning p-2 px-5 rounded-pill">Get</Link>
            </div>
          </div>
        </div>
        <div className="col border p-2 border-dark rounded-4 mx-auto">
            {/* silver is a external css that used here */}
          <div className="card h-100 silver">
            <img src={silver} className="card-img-top p-2" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center fw-bold">Silver Member</h5>
              <p className="card-text d-flex justify-content-between text-center">
                <span><i>06 Months</i></span>
                <span><s className="text-danger"><small><i>&#8377;1,10,000/-</i></small></s><i> &#8377;50,000/-</i></span>
              </p>
            </div>
            <div className="card-footer text-center">
              <Link to={'/BeMember'} className="btn btn-sm btn-warning p-2 px-5 rounded-pill">Get</Link>
            </div>
          </div>
        </div>
        <div className="col border p-2 border-dark rounded-4 mx-auto">
            {/* bronze is a external css that used here */}
          <div className="card h-100 bronze">
            <img src={bronze} className="card-img-top p-2" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center fw-bold">Bronze Member</h5>
              <p className="card-text d-flex justify-content-between text-center">
                <span><i>03 Months</i></span>&nbsp;&nbsp;
                <span><s className="text-danger"><small><i>&#8377;80,000/-</i></small></s><i> &#8377;30,000/-</i></span>
              </p>
            </div>
            <div className="card-footer text-center">
              <Link to={'/BeMember'} className="btn btn-sm btn-warning p-2 px-5 rounded-pill">Get</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberShip;
