import React, { useEffect, useState } from "react";

function ViewWorkout() {
  const uid = localStorage.getItem("user");
  const [d, setD] = useState("");
  const [t, setT] = useState("");
  const [a,setA] = useState(1);
  const [works, setWorks] = useState([]);

  const work =async ()=>{
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/workout/${uid}`);
    const data = await response.json();
    if (data.msg == "Not Found") {
        setA("Not Found");
    }else{
        console.log(data.res)
        setWorks(data.res)
        var x = new Date(data.res.date);
        // setT(x.toTimeString().split(" ")[0])
        // setD(x.toDateString())
    }
  }

  useEffect(()=>{
    work();
  },[])

  return (
    <>
      <div className="col-md-10 mx-auto my-5 p-5 table-responsive rounded-4 bg-dark shadow-lg">
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
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>

          <tbody className="text-info">  
          {works.map((e)=>(
        <tr key={e._id}>
          <td>{e._id}</td>
          <td>{e.name}</td>
          <td>{e.duration}</td>
          <td>{e.set}</td>
          <td>{e.replication}</td>
          <td>{e.cat}</td>
          <td>{e.cal}</td>
          <td>{d}</td>
          <td>{t}</td>
          </tr>
          ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ViewWorkout;
