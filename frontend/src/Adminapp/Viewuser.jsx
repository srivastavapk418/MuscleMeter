import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Elements/Sidebar";

const Viewuser = () => {
  const [user, setUser] = useState([]);

  const navigate = useNavigate();

  // validate to do not open the '/adminuser' or dashboard without login
  const validate = () => {
    if (!localStorage.getItem("useradmin")) {
      navigate("/Adlogin");
    }
  };

  async function alluser() {
    var response = await fetch(`${import.meta.env.VITE_BASE_URL}/user`);
    var data = await response.json();
    setUser(data);
    // console.log(data)
  }

  const userdel = async (id) => {
    var userdata = { id };
    var response = await fetch(`${import.meta.env.VITE_BASE_URL}/user`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userdata),
    });
    var data = await response.json();
    if (data.msg == "Deleted Successfully") {
      window.alert(data.msg);
      alluser();
    } else {
      window.alert("Something went wrong");
    }
  };

  function useredit(id) {
    localStorage.setItem("edit",id)
    navigate("/EditUser");
  }

  useEffect(() => {
    validate();
    alluser();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <Sidebar utype="admin"></Sidebar>
        <div className="text-end mt-3">
          <button
            className="btn btn-sm btn-outline-secondary"
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
        </div>
      </div>

      <div className="row mh-70">
        <div className="col-sm-11 mx-auto table-responsive">
          <h2 className="text-center fw-bold" style={{ fontFamily: "serif" }}>
            View All User
          </h2>
          <table className="table table-secondary table-hover table-bordered border-primary table-striped mt-5 text-center">
            <thead className="table-dark">
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Number</th>
                <th colSpan={2}>Action</th>
              </tr>
            </thead>
            {user.map((e) => (
              <tbody key={e._id}>
                <tr>
                  <td>{e._id}</td>
                  <td>
                    {e.firstname} {e.lastname}
                  </td>
                  <td>{e.email}</td>
                  <td>{e.number}</td>
                  <td>
                    <button
                      onClick={() => {
                        useredit(e._id);
                      }}
                      className="btn btn-sm btn-warning text-light px-3 mx-3"
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        userdel(e._id);
                      }}
                      className="btn btn-sm btn-danger ms-3"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </>
  );
};

export default Viewuser;
