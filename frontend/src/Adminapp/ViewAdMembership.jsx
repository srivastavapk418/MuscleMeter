import React, { useEffect, useState } from "react";
import Sidebar from "../Elements/Sidebar";
import { useNavigate } from "react-router-dom";

function ViewAdMembership() {
  const [mem, setMem] = useState([]);
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  // validate to do not open the '/user' or dashboard without login
  const validate = () => {
    if (!localStorage.getItem("useradmin")) {
      navigate("/Adlogin");
    }
  };

  const member = async () => {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/membership`);
    const result = await response.json();
    if (result.msg == "Found") {
      setMem(result.res);
    } else {
      window.alert("No Member Found");
      setMsg("No Member Found");
    }
  };

  const approve = async (id, ps) => {
    if (ps == "n") {
      ps = "a";
    } else if (ps == "a") {
      ps = "n";
    }
    const response = fetch(`${import.meta.env.VITE_BASE_URL}/membership/${id}/${ps}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = (await response).json();
    if (result.msg == "MemberShip Payment Status Changed") {
        setMsg("MemberShip Payment Status Changed");
        member();
    } else {
        setMsg("MemberShip Payment Status Changed");
        member();
    }
  };

  useEffect(() => {
    validate();
    member();
  }, []);

  return (
    <div className="row">
        <Sidebar utype="admin"></Sidebar>
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
              localStorage.removeItem("useradmin");
              navigate("/Adlogin");
            }}
          >
            LOG OUT
          </button>
        </div>
      <div className="col-md-10 mx-auto my-5 p-5 table-responsive rounded-4 bg-dark shadow-lg">
      <h3 className="text-center text-shadow">All Members</h3>
        <p className="text-center mx-auto w-75 bg-danger text-light">{msg}</p>
        <table className="table table-dark">
          <thead className="text-white">
            <tr>
              <th>User Id</th>
              <th>Email</th>
              <th>Duration</th>
              <th>Status</th>
              <th>P-Status</th>
              <th>Start Date</th>
              <th>Transact Id</th>
              <th>Expiry Date</th>
              <th>Age</th>
              <th>Weight</th>
              <th>Approval</th>
            </tr>
          </thead>

          <tbody className="text-info">
            {mem.map((e) => (
              <tr key={e._id}>
                <td>{e._id}</td>
                <td>{e.email}</td>
                <td>{e.duration}</td>
                <td>{e.status}</td>
                <td>{e.pstatus == "n" ? "Not Approved" : "Approved"}</td>
                <td>{e.starting}</td>
                <td>{e.tid}</td>
                <td>{e.ending}</td>
                <td>{e.age}</td>
                <td>{e.weight}</td>
                <td>
                  <button
                    onClick={() => {
                      approve(e._id, e.pstatus);
                    }}
                    className="btn btn-sm btn-warning"
                  >
                    {e.pstatus == "n" ? "Approved" : "Not Approved"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewAdMembership;
