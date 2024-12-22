import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Signup = () => {
    const navigate = useNavigate();

    var [firstname,setFirstname] = useState("");
    var [lastname,setLastname] = useState("");
    var [number,setNumber] = useState("");
    var [email,setEmail] = useState("");
    var [password,setPassword] = useState("");
    var [dob,setDob] = useState("");
    var [gender,setGender] = useState("");
    var [country,setCountry] = useState("");
    var [errmsg,setErrmsg] = useState("");

    const validate = ()=>{
        if(localStorage.getItem('user')){
            navigate('/User')
        }else if(localStorage.getItem('useradmin')){
            navigate('/Addash')
        }
    }
    useEffect(()=>{
        validate();
    })


    const regcode = async (e) =>{
        e.preventDefault();
        let userData = {firstname,lastname,number,email,password,dob,gender,country}
        let response = await fetch(`${import.meta.env.VITE_BASE_URL}/user`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(userData)
        })
        let data = await response.json()
        console.log(data)
        if(data.msg=="Registration Success"){
            window.alert("Registration Successful")
            setFirstname(""); setLastname(""); setNumber(""); setEmail(""); setPassword(""); setDob(""); setGender(""); setCountry("");
            navigate('/Signin');
        }
        else{
            console.log(data.msg.errorResponse.errmsg)
            if(data.msg.errorResponse.keyPattern.email){
                setEmail("")
                setErrmsg("Email Already Taken")
            }else{
                setFirstname(""); setLastname(""); setNumber(""); setEmail(""); setPassword(""); setDob(""); setGender(""); setCountry("");
                setErrmsg("Something went wrong")
            }
        }
    }

  useGSAP(()=>{
    gsap.from('.sign>label',{
        scale:0,
        opacity:0,
        duration:1,
        fontSize:50,
        stagger:0.1
    })
    gsap.from('.sign>input, .sign>select',{
        scale:0,
        opacity:0,
        duration:1.5,
        fontSize:50,
        x:-500,
        paddingLeft:150,
        stagger:0.1
    })
    gsap.from('.signtitle',{
        scale:0,
        opacity:0,
        duration:0.5,
        fontSize:50,
        x:-500,
        paddingLeft:150,
        stagger:0.3
    })
    gsap.from('.signtitle+p',{
        scale:0,
        opacity:0,
        duration:1,
        fontSize:40,
        x:-500,
    })
    gsap.from('.sign>div>*',{
        scale:0,
        opacity:0,
        duration:2,
        x:700,
        stagger:0.2
    })
})

return (
<div className='row my-3'>
    <div className="col-md-5 col-sm-7 mx-auto p-3 text-center">
    <h3 className='fw-bold mb-4 signtitle'>Welcome to MuscleMeter</h3>
    <p className='small mb-5'>Already a member?  <Link to="/Signin" className='text-black fw-bold'>Log In</Link></p>
    <p className='text-danger'>{errmsg}</p>
    <form action="" className='text-start mx-auto w-90 sign' onSubmit={regcode}>

        <label className="fw-bold small" htmlFor="firstname">First Name</label>
        <br />
        <input type="text" name='' value={firstname} onChange={(e)=>{setFirstname(e.target.value)}} id='firstname' placeholder='Enter First Name' />
        <br /><br />

        <label className="fw-bold small" htmlFor="lastname">Last Name</label>
        <br />
        <input type="text" name='' value={lastname} onChange={(e)=>{setLastname(e.target.value)}} id='lastname' placeholder='Enter Last Name' />
        <br /><br />

        <label className="fw-bold small" htmlFor="number">Number</label>
        <br />
        <input type="number" name='' value={number} onChange={(e)=>{setNumber(e.target.value)}} id='number' placeholder='Enter Number' />
        <br /><br />

        <label className="fw-bold small" htmlFor="email">Email</label>
        <br />
        <input type="email" name='' value={email} onChange={(e)=>{setEmail(e.target.value)}} id='email' placeholder='Enter Email' />
        <br /><br />

        <label className="fw-bold small" htmlFor="password">Password</label>
        <br />
        <input type="password" name='' value={password} onChange={(e)=>{setPassword(e.target.value)}} id='password' placeholder='Enter Password' />
        <br /><br />

        <label className="fw-bold small" htmlFor="dob">Birthdate</label>
        <br />
        <input type="date" name='' value={dob} onChange={(e)=>{setDob(e.target.value)}} id='dob' />
        <br /><br />

        <label className="fw-bold small" htmlFor="gender">Gender</label>
        <br />
        <select name="" value={gender} onChange={(e)=>{setGender(e.target.value)}} id="gender">
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <br /><br />

        <label className="fw-bold small" htmlFor="country">Country/Region</label>
        <br />
        <select name="" value={country} onChange={(e)=>{setCountry(e.target.value)}} id="country">
          <option value="">Country</option>
          <option value="india">India</option>
          <option value="usa">USA</option>
        </select>
        <br /><br />

        <div className='d-flex'>
        <input type="checkbox" name="" id="accept" />&nbsp;&nbsp;&nbsp;
        <label htmlFor="accept" className='fs-7 mb-2'>Yes, I would like to receive by email the latest news, innovation updates, and offers from MapMyFitness and Outside.</label>
        </div>
        <br />

        <div className='text-center'>
        <input type="submit" value="SIGN UP" className='bg-black text-light fw-bold w-50 fs-5 p-2' />
        <br /><br />
        <p className='small'>By signing up with MapMyFitness, you agree to our <Link to="" className=' text-black'>Privacy Policy</Link> & <Link to="" className=' text-black'>Terms of Use.</Link>
        </p>
        </div>

    </form>
    </div>
   
</div>
)
}

export default Signup
