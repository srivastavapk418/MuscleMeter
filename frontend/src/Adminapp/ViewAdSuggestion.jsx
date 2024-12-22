import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Elements/Sidebar";

function ViewAdSuggestion() {
  const [feed, setFeed] = useState([]);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const validate = () => {
    if (!localStorage.getItem("useradmin")) {
      navigate("/Adlogin");
    }
  };

  async function allfeed() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/feed/suggestion`
      );
      const data = await response.json();
  
      if (data.msg === "Found" && Array.isArray(data.result)) {
        setFeed(data.result); // Set only the array part
        console.log(feed)
        setMsg("View All Suggestions")
      } else {
        setMsg(data.msg || "Data Not Available");
        setFeed([]); // Reset feed to an empty array
      }
    } catch (error) {
      console.error("Error fetching feed:", error);
      setMsg("Failed to fetch feed");
      setFeed([]); // Ensure feed remains an array
    }
  }
  

  useEffect(() => {
    validate();
    allfeed();
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

      <div className="row mh-70">
        <div className="col-11 col-sm-10 col-md-10 col-lg-8 mx-auto table-responsive">
          <h2 className="text-center fw-bold" style={{ fontFamily: "serif" }}>
            <span className="text-danger">{msg}</span>
          </h2>
          {Array.isArray(feed) && feed.length > 0 ? (
          <table className="table table-secondary table-hover table-bordered border-primary table-striped mt-5 text-center">
            <thead className="table-dark">
              <tr>
                <th>Id</th>
                <th>Feedback Type</th>
                <th>Feedback</th>
                <th colSpan={2}>Action</th>
              </tr>
            </thead>
            {feed.map((e) => (
              <tbody>
                <tr>
                  <td>{e._id}</td>
                  <td>{e.feedtype}</td>
                  <td>{e.message}</td>
                  <td>
                    <button className="btn btn-sm btn-warning text-light px-3 mx-3">
                      Edit
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-danger ms-3">
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
          ) : (
            <tbody>
              
            </tbody>
          )}
        </div>
      </div>
    </div>
  );
}

export default ViewAdSuggestion;
