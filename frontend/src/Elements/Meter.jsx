import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)


const Meter = () => {
  useGSAP(()=>{

    gsap.from('.meter>div>*',{
      x:500,
      duration:1,
      opacity:0,
      stagger:0.3,
      scrollTrigger:{
        trigger:'.meter>div',
        scroller:'body',
        start:"top 65%",
        end:"top 50%",
        scrub:3
      }
    })

  })

  return (
    <div className='row my-5'>
        <div className="col-lg-10 bg-black text-light mx-auto px-5 text-center py-4 rounded-4">
            <div className="row px-5 meter">
                <div className="col-lg-4 p-4">
                <i className="fa-solid fa-road fa-beat-fade fs-3 text-danger"></i>
                <p className='pt-3 fw-bold'>Miles Logged</p>
                &nbsp;
                <h1 className='display-5 fw-bold'>9.42</h1>
                <p>Billion</p>
                </div>
                <div className="col-lg-4 p-4">
                <i className="fa-solid fa-location-dot fa-beat-fade fs-3 text-danger"></i>
                <p className='pt-3 fw-bold'>Routes Created</p>
                &nbsp;
                <h1 className='display-5 fw-bold'>1.85</h1>
                <p>Billion</p>
                </div>
                <div className="col-lg-4 p-4">
                <i className="fa-solid fa-person-running fa-beat-fade fs-3 text-danger"></i>
                <p className='pt-3 fw-bold'>Workouts Logged</p>
                &nbsp;
                <h1 className='display-5 fw-bold'>2.44</h1>
                <p>Billion</p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Meter
