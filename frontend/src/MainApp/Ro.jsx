import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import a2 from '../assets/img/a2.png'
import a3 from '../assets/img/a3.png'
import { Link } from 'react-router-dom'

function Ro() {
    useGSAP(()=>{
        gsap.from('.banner h1',{   //banner ke andar indirect child h1
            x:-1000,
            opacity:0,
            duration:1,
        })
        gsap.from('.banner p',{
            x:1000,
            y:-200,
            opacity:0,
            duration:1,
        })
    })



  return (
    <>
    {/* banner start */}
    <div className="row">
        <div className="col-md-12 p-5 mx-auto banner">
            <div className="row mt-5">
                <div className="col-lg-6 me-auto mt-5">
                    <h1 className='display-5 fw-bold'>BLAZE NEW TRAILS</h1>
                </div>
                <div className="col-lg-4 col-sm-6 mt-5 pe-5">
                    <p>Create, discover, and save your favorites — from your neighborhood to around the world with MapMyFitness Routes.</p>
                </div>
            </div>
        </div>
    </div>
    {/* banner end */}

    {/* create route start */}
    <div className="row">
        <div className="col-md-12 mx-auto">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 z-10 my-auto position-relative ms-auto" style={{left:"10vw"}}>
                    <div class="card p-4 rounded-0 border-0" style={{backgroundColor:"#F3F3F3"}}>
                        <div class="card-body">
                            <h5 class="card-title fs-6 fw-bold">Create Your Own Route</h5><br />
                            <p class="card-text">Stay safe, plan logistics, and know the terrain when you create custom running routes.</p>
                            <br />
                            <Link to="#" class="btn btn-primary w-90 bg-black text-light fs-6 fw-bold nav-link text-center py-2 ms-3">CREATE ROUTE</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-7 p-5 me-auto">
                    <img src={a2} alt="" className='w-100'/>
                </div> 
            </div>

        </div>
    </div>
    {/* create route end */}

    {/* create route start */}
    <div className="row">
        <div className="col-md-12 mx-auto">
            <div className="row">
                <div className="col-md-7 p-5 ms-auto">
                    <img src={a3} alt="" className='w-100'/>
                </div> 
                <div className="col-lg-4 col-md-6 col-sm-12 z-10 my-auto position-relative me-auto" style={{left:"-10vw"}}>
                    <div class="card p-4 rounded-0 border-0" style={{backgroundColor:"#F3F3F3"}}>
                        <div class="card-body">
                            <h5 class="card-title fs-6 fw-bold">Create Your Own Route</h5><br />
                            <p class="card-text">Stay safe, plan logistics, and know the terrain when you create custom running routes.</p>
                            <br />
                            <Link to="#" class="btn btn-primary w-90 bg-black text-light fs-6 fw-bold nav-link text-center py-2 ms-3">CREATE ROUTE</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    {/* create route end */}
    </>
  )
}

export default Ro