import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddWorkout from "../Elements/AddWorkout";
import MemberShip from "../Elements/MemberShip";
import Pending from "../Elements/Pending";
import Sidebar from "../Elements/Sidebar";
import ViewWorkout from "../Elements/ViewWorkout";

const Udash = () => {
  const [st, setSt] = useState("");
  const [x, setX] = useState(true);

  const navigate = useNavigate();

  // validate to do not open the '/user' or dashboard without login
  const validate = () => {
    if (!localStorage.getItem("user")) {
      navigate("/Signin");
    }
  };

  const check = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/membership/${localStorage.getItem("user")}`
    );
    const data = await response.json();
    if (data.msg == "Found") {
      setSt(data.res.pstatus)
    }
  };

  useEffect(() => {
    validate();
    check();
  });

  return (
    <div>
      {/* {localStorage.getItem('user')}  */}

      <Sidebar utype="user"></Sidebar>
      <div className="text-end mt-3">
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
            localStorage.removeItem("user");
            navigate("/Signin");
          }}
        >
          LOG OUT
        </button>
      </div>

      <div className="col-sm-12">
        <div className="row">
          {st && st != "e" ? (
            st == "n" ? (
              <Pending />
            ) : st == "a" ? (
              x ? (
                <>
                  <button
                    className=" btn btn-danger mt-3"
                    onClick={() => {
                      setX(!x);
                    }}
                  >
                    View Workout
                  </button>
                  <AddWorkout />
                </>
              ) : (
                <>
                  <button
                    className="btn btn-danger mt-3"
                    onClick={() => {
                      setX(!x);
                    }}
                  >
                    Add Workout
                  </button>
                  <ViewWorkout />
                </>
              )
            ) : (
              "Something Went Wrong"
            )
          ) : (
            <MemberShip />
          )}
        </div>
      </div>
    </div>
  );
};

export default Udash;
