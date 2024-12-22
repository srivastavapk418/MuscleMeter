import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Elements/Sidebar";

const Addash = () => {
  const [u,setU] = useState(0)
  const [m,setM] = useState(0)
  const [w,setW] = useState(0)
  const [f,setF] = useState(0)

  const navigate = useNavigate();

  // validate to do not open the '/user' or dashboard without login
  const validate = () => {
    if (!localStorage.getItem("useradmin")) {
      navigate("/Adlogin");
    }
  };

  async function getalldata(){
    const response1 = await fetch(`${import.meta.env.VITE_BASE_URL}/user`)
    const result1 = await response1.json()
    setU(result1.length)

    const response2 = await fetch(`${import.meta.env.VITE_BASE_URL}/membership`)
    const result2 = await response2.json()
    setM(result2.res.length)

    const response3 = await fetch(`${import.meta.env.VITE_BASE_URL}/workout`)
    const result3 = await response3.json()
    setW(result3.res.length)

    const response4 = await fetch(`${import.meta.env.VITE_BASE_URL}/feed`)
    const result4 = await response4.json()
    setF(result4.res.length)
  }

  useEffect(() => {
    validate();
    getalldata();
  });


  return (
    <>
      <div>
        <Sidebar utype="admin"></Sidebar>
        <div className="text-end mt-3 mh-70">
          <button
            className="btn btn-sm btn-outline-primary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptions"
            aria-controls="offcanvasWithBothOptions"
          >
            <i className="fa fa-bars"></i>
          </button>

          <button
            className="btn btn-sm btn-outline-danger mx-1"
            onClick={() => {
              localStorage.removeItem("useradmin");
              navigate("/Adlogin");
            }}
          >
            LOG OUT
          </button>


          <div className="col-md-12 mx-auto">
      <h3 className="text-center text-shadow text-danger fw-bold my-4">🧑 Welcome Admin 🥰</h3>

            <div className="row text-center">
              <div className="col-5 my-2 mx-auto p-5 border-3 border-primary shadow-lg rounded-3 border">
                <i className="fa fa-user fs-2 text-primary"></i>
                <div><br />
                <h3>Total Users</h3><br />
                <p>{u}</p>
                </div>
              </div>
              <div className="col-5 my-2 mx-auto p-5 border-3 border-danger shadow-lg rounded-3 border-primary border">
              <i className="fa-solid fa-people-group fs-2 text-danger"></i>
                <div><br />
                <h3>Total Members</h3><br />
                <p>{m}</p>
                </div>
              </div>
              <div className="col-5 my-2 mx-auto p-5 border-3 border-warning shadow-lg rounded-3 border">
                <i className="fa-solid fa-dumbbell fs-2 text-warning"></i>
                <div><br />
                <h3>Total Workouts</h3><br />
                <p>{w}</p>
                </div>
              </div>
              <div className="col-5 my-2 mx-auto p-5 border-3 border-success shadow-lg rounded-3 border">
                <i className="fa-regular fa-comment fs-2 text-success"></i>
                <div><br />
                <h3>Total Feedbacks</h3><br />
                <p>{f}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addash;

