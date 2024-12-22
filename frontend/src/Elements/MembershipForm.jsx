import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import qr from "../assets/img/qr.png";

function MembershipForm() {
    const [amt, setAmt] = useState(0);
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [age, setAge] = useState("");
    const [weight, setWeight] = useState("");
    const [duration, setDuration] = useState("");
    const [tid, setTid] = useState("");
  
    const navigate = useNavigate()

    const getMember = async (e)=>{
      e.preventDefault();
      var data = {email,age,weight,duration,tid};
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/membership`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
      });
  
      const result = await response.json();
      console.log(result)
      if(result.msg=="MemberShip Registration Success"){
        window.alert(result.msg)
        setTid("");setDuration("");setAge("");setAmt("");setWeight("");setNumber("");setEmail("");
        navigate('/User')
      }
  
    }

  return (
    <div>
        <form
        onSubmit={getMember}
        className="p-5 rounded-5 shadow-lg border sign pt-4"
      >
        <h3 className="text-center text-danger fw-bold">Join MemberShip</h3>
        <br />
        <label className="fw-bold small" htmlFor="number">
          Number
        </label>
        <br />
        <input
          type="number"
          name=""
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
          id="number"
          placeholder="Enter Number"
        />
        <br />
        <br />

        <label className="fw-bold small" htmlFor="email">
          Email
        </label>
        <br />
        <input
          type="email"
          name=""
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          id="email"
          placeholder="Enter Email"
        />
        <br />
        <br />

        <label className="fw-bold small" htmlFor="age">
          Age
        </label>
        <br />
        <input
          type="number"
          name=""
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
          id="age"
          placeholder="Enter Age"
        />
        <br />
        <br />

        <label className="fw-bold small" htmlFor="weight">
          Weight
        </label>
        <br />
        <input
          type="number"
          name=""
          value={weight}
          onChange={(e) => {
            setWeight(e.target.value);
          }}
          id="weight"
          placeholder="Enter Weight"
        />
        <br />
        <br />

        <label className="fw-bold small" htmlFor="duration">
          MemberShip
        </label>
        <br />
        <select
          name=""
          value={duration}
          onChange={(e) => {
            setDuration(e.target.value);
            e.target.value == 3
              ? setAmt(30000)
              : e.target.value == 6
              ? setAmt(50000)
              : e.target.value == 12
              ? setAmt(90000)
              : setAmt(0);
          }}
          id="duration"
        >
          <option value="">Select MemberShip</option>
          <option value="12">Gold</option>
          <option value="6">Silver</option>
          <option value="3">Bronze</option>
        </select>
        <br />
        <br />

        <div className="d-flex flex-column">
          <img
            src={qr}
            alt="Not Found"
            className="w-25 mx-auto d-inline-block"
          />
          <label className="mx-auto pt-2">Payment : &#8377;{amt}</label>
        </div>
        <br />

        <label className="fw-bold small" htmlFor="tid">
          Transaction Id
        </label>
        <br />
        <input
          type="text"
          name=""
          value={tid}
          onChange={(e) => {
            setTid(e.target.value);
          }}
          id="tid"
          placeholder="Enter Transaction Id"
        />
        <br />
        <br />
        <br />

        <div className="text-center">
          <input
            type="submit"
            value="SUBMIT"
            className="bg-danger text-light fw-bold w-50 fs-5 p-2 rounded-5"
          />
          <br />
          <br />
          <p className="small">
            By subscribing the MapMyFitness, you agree to our{" "}
            <Link to="" className=" text-black">
              Privacy Policy
            </Link>{" "}
            &{" "}
            <Link to="" className=" text-black">
              Terms of Use.
            </Link>
          </p>
        </div>
      </form>
    </div>
  )
}

export default MembershipForm