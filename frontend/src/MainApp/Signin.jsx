import React, { useEffect, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import {Link , useNavigate} from 'react-router-dom'

const Signin = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [eye,setEye] = useState(true);
    const [emsg,setEmsg] = useState("");
    const navigate = useNavigate();


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


    const logcode =async (e)=>{
        e.preventDefault();
        let userData = {email,password};
        let response = await fetch(`${import.meta.env.VITE_BASE_URL}/userlog`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(userData),
        })
        let data = await response.json();
        if(data.msg=="Login Successful"){
            setEmsg(data.msg)
            setEmail(""); setPassword("");
            localStorage.setItem('user',data.id);
            navigate('/User')
        }else{
            setEmsg(data.msg)
        }
    }

    useGSAP(()=>{
        gsap.from('.sign>label',{
            scale:0,
            opacity:0,
            duration:1,
            fontSize:50,
            stagger:0.3
        })
        gsap.from('.sign>input',{
            scale:0,
            opacity:0,
            duration:1.5,
            fontSize:50,
            x:-500,
            paddingLeft:150,
            stagger:0.3
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
            x:700
        })
    })

  return (
    <div className='row my-3 mh-100'>
        <div className="col-md-5 col-sm-7 mx-auto p-3 text-center">
        <h2 className='fw-bold mb-4 signtitle'>Log In</h2>
        <p className='small mb-5'>Don't have an account?  <Link to="/Signup" className='text-black fw-bold'>Sign Up</Link></p>
        <p className='text-danger'>{emsg}</p>
        <form onSubmit={logcode} className='text-start mx-auto w-90 sign'>

            <label className="fw-bold small" htmlFor="email">Email</label>
            <br />
            <input type="email" name='' value={email} onChange={(e)=>{setEmail(e.target.value)}} id='email' placeholder='Enter Email' />
            <br /><br />

            <label className="fw-bold small" htmlFor="password">Password</label>
            <br />
            <div id="pass-eye">
            <input type={eye?"password":"text"} name='' value={password} onChange={(e)=>{setPassword(e.target.value)}} id='password' placeholder='Enter Password' />
            <i className={eye?"fa fa-eye me-2 fw-light":"fa fa-eye-slash me-2 fw-light"} onClick={()=>{setEye(!eye)}}></i>
            </div>
            <br /><br />

            <div className='text-center'>
            <Link to="" className='text-black fw-bold'>Forget Password?</Link>
            <br /><br />
            <input type="submit" value="LOG IN" className='bg-black text-light fw-bold w-50 fs-5 p-2' />
            </div>

        </form>
        </div>
       
    </div>
  )
}

export default Signin
