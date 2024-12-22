import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Elements/Sidebar";
import feed1 from "../assets/img/feedback.webp";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'


const Feed = () => {
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [feedtype, setFeedtype] = useState("");
  const navigate = useNavigate();

  // validate to do not open the '/user' or dashboard without login
  const validate = () => {
    if (!localStorage.getItem("user")) {
      navigate("/Signin");
    }
  };
  useEffect(() => {
    validate();
  });

  const feedcode = async (e) => {
      e.preventDefault();
      let userFeed = {email,number,message,feedtype}
      let response = await fetch(`${import.meta.env.VITE_BASE_URL}/feed`,{
          method:"POST",
          headers:{
              "Content-Type":"application/json"
          },
          body:JSON.stringify(userFeed)
      })
      let jsonResponse = await response.json()

      if(jsonResponse.msg=="Feedback Submitted"){
          window.alert("Feedback Submitted")
          setEmail(""); setNumber(""); setMessage(""); setFeedtype("");
          navigate('/User');
      }
      else{
        window.alert("Something went wrong")
      }
  
  }

  useGSAP(()=>{
    gsap.from('.row>div',{
        scale:0,
        opacity:0,
        duration:1,
        fontSize:50,
        stagger:0.2
    })
    gsap.from('form>*',{
        x:-500,
        scale:0,
        opacity:0,
        duration:1,
        stagger:0.1
    })
    gsap.from('.d-none>img',{
        scale:0,
        opacity:0,
        duration:4,
        fontSize:0
    })
  })

  return (
    <div>
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

      {/* content  */}
      <div className="row my-3">
        <div className="col-sm-10 col-md-8 col-lg-5 ms-lg-auto mx-auto shadow-lg p-2 rounded-5 border">
          <form onSubmit={feedcode} className="text-start mx-auto shadow-sm w-100 h-100 p-5 rounded-5 bg-light sign">
            <h4 className="fw-bold fs-3 text-success text-center" style={{fontFamily:"serif"}}>FEEDBACK</h4>
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

            <label className="fw-bold small" htmlFor="feedtype">
              Feed Type
            </label>
            <br />
            <select
              name=""
              value={feedtype}
              onChange={(e) => {
                setFeedtype(e.target.value);
              }}
              id="feedtype"
            >
              <option value="">Select FeedType</option>
              <option value="complain">Complain</option>
              <option value="suggestion">Suggestion</option>
              <option value="appreciation">Appreciation</option>
              <option value="other">Other</option>
            </select>
            <br />
            <br />

            <label className="fw-bold small" htmlFor="message">
              Message
            </label>
            <br />
            <textarea
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              name=""
              id="message"
              placeholder="Enter Your Message..."
            ></textarea>
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
            src={feed1}
            alt=""
            className="w-100 h-100 shadow-lg p-1 rounded-5 border bg-success"
          />
        </div>
      </div>
      <br /><br /><br />
    </div>
  );
};

export default Feed;
