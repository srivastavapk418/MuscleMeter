import React, { useState } from 'react'
import work from '../assets/img/work.png'

function AddWorkout() {
    const [name,setName] = useState("")
    const [duration,setDuration] = useState("")
    const [set,setSet] = useState("")
    const [replication,setReplication] = useState("")
    const [cal,setCal] = useState("")
    const [cat,setCat] = useState("")
    const [date,setDate] = useState("")
    
    const uid = localStorage.getItem('user');

    const workout =async (e)=>{
        e.preventDefault();
        setDate(Date.now())
        const work = {uid,name,duration,set,replication,cat,cal,date};
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/workout`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(work)
        })
        const result = await response.json()
        if(result.msg=="Workout Added Success"){
            window.alert(result.msg);
            setName("");setDuration("");setSet("");setReplication("");setCal("");setCat("");
        }
    }


  return (
    <div className='row my-4'>
        <div className="col-sm-10 col-md-8 col-lg-5 ms-lg-auto mx-auto shadow-lg p-2 rounded-5 border">
                  <form onSubmit={workout} className="text-start mx-auto shadow-sm w-100 h-100 p-5 rounded-5 bg-light sign">
                    <h4 className="fw-bold fs-3 text-success text-center" style={{fontFamily:"serif"}}>Add Workout</h4>
                    <br />
                    <label className="fw-bold small" htmlFor="name">
                      Name of Workout
                    </label>
                    <br />
                    <select
                      name=""
                      value={name}
                      onChange={(e)=>{
                        setName(e.target.value)
                      }}
                      id="name"
                    >
                      <option value="">Select Workout</option>
                      <option value="Push-Up">Push-Up</option>
                      <option value="Pull-Up">Pull-Up</option>
                      <option value="Hamercut">Hamercut</option>
                      <option value="Sit-Up">Sit-Up</option>
                      <option value="Bench-Press">Bench-Press</option>
                      <option value="Other">Other</option>
                    </select>
                    <br />
                    <br />
        
                    <label className="fw-bold small" htmlFor="duration">
                      Duration
                    </label>
                    <br />
                    <input
                      type="number"
                      name=""
                      value={duration}
                      onChange={(e)=>{
                        setDuration(e.target.value)
                      }}
                      id="duration"
                      placeholder="Enter Duration in Min"
                    />
                    <br />
                    <br />

                    <label className="fw-bold small" htmlFor="set">
                      Sets
                    </label>
                    <br />
                    <input
                      type="number"
                      name=""
                      value={set}
                      onChange={(e)=>{
                        setSet(e.target.value)
                      }}
                      id="set"
                      placeholder="Enter Number of Sets"
                    />
                    <br />
                    <br />

                    <label className="fw-bold small" htmlFor="replication">
                      Replication of Sets
                    </label>
                    <br />
                    <input
                      type="number"
                      name=""
                      value={replication}
                      onChange={(e)=>{
                        setReplication(e.target.value)
                      }}
                      id="replication"
                      placeholder="Enter Number of Replication"
                    />
                    <br />
                    <br />
        
                    <label className="fw-bold small" htmlFor="cat">
                      Category of Workout
                    </label>
                    <br />
                    <select
                      name=""
                      value={cat}
                      onChange={(e)=>{
                        setCat(e.target.value)
                      }}
                      id="cat"
                    >
                      <option value="">Select Category</option>
                      <option value="Arms">Arms</option>
                      <option value="Byceps">Byceps</option>
                      <option value="Triceps">Triceps</option>
                      <option value="Shoulder">Shoulder</option>
                      <option value="Chest">Chest</option>
                      <option value="Back">Back</option>
                      <option value="Thigh">Thigh</option>
                      <option value="Other">Other</option>
                    </select>
                    <br />
                    <br />
        
                    <label className="fw-bold small" htmlFor="cal">
                      Approx Cal Burn
                    </label>
                    <br />
                    <input
                      type="number"
                      name=""
                      value={cal}
                      onChange={(e)=>{
                        setCal(e.target.value)
                      }}
                      id="cal"
                      placeholder="Enter Approx Cal Burn"
                    />
                    <br /><br />
        
                    <div className="text-center"  style={{fontFamily:"serif"}}>
                      <input
                        type="submit"
                        value="SUBMIT"
                        className="bg-success text-light fw-bold w-50 fs-5 p-2"
                      />
                    </div>
                  </form>
                </div>
                <div className="col-lg-5 d-none d-lg-inline me-auto">
                  <img
                    src={work}
                    alt=""
                    className="w-100 h-100 shadow-lg p-1 rounded-5 border bg-success"
                  />
                </div>
    </div>
  )
}

export default AddWorkout