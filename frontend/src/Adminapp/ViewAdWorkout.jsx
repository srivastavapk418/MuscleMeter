import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Elements/Sidebar";

function ViewAdWorkout() {
  const [a, setA] = useState("");
  const [works, setWorks] = useState([]);

  const allWork = async () => {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/workout`);
    const data = await response.json();
    if (data.msg == "Not Found") {
      setA("Not Found");
    } else {
      console.log(data.res);
      setWorks(data.res);
    }
  };

  const navigate = useNavigate();

  const validate = () => {
    if (!localStorage.getItem("useradmin")) {
      navigate("/Adlogin");
    }
  };
  useEffect(() => {
    validate();
    allWork();
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
        <h3 className="text-center text-shadow">All Workouts</h3>
        <p className="text-center mx-auto w-75 bg-danger text-light">{a}</p>
        <table className="table table-dark">
          <thead className="text-white">
            <tr>
              <th>S.No.</th>
              <th>Name</th>
              <th>Duration</th>
              <th>Sets</th>
              <th>Replication</th>
              <th>Category</th>
              <th>Burn Cal</th>
              <th>User Id</th>
            </tr>
          </thead>

          <tbody className="text-info">
            {works.map((e) => (
              <tr key={e._id}>
                <td>{e._id}</td>
                <td>{e.name}</td>
                <td>{e.duration}</td>
                <td>{e.set}</td>
                <td>{e.replication}</td>
                <td>{e.cat}</td>
                <td>{e.cal}</td>
                <td>{e.uid}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewAdWorkout;
