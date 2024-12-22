import React from 'react'
import Slider from '../Elements/Slider'
import a1 from '../assets/img/a1.webp'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import a2 from '../assets/img/kjizize.jpg'
import Built from '../Elements/Built'
import Meter from '../Elements/Meter'

const Home = () => {
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(()=>{
    gsap.from('.ab>div',{
      x:500,
      scale:0,
      duration:0.7,
      stagger:0.2,
      scrollTrigger:{
        trigger:'.ab>div',
        scroller:'body',
        // markers:true,
        start:'top 70%',
        end:"top 50%",
        scrub: 5,
      }
    })
    gsap.from('.ab2>*',{
      x:-500,
      scale:0.2,
      opacity:0,
      duration:1,
      stagger:0.2,
      scrollTrigger:{
        trigger:'.ab>*',
        scroller:'body',
        start:'top 70%',
        end:"top 50%",
        scrub: 5,
      }
    })

    gsap.from('.run>img',{
      x:-500,
      duration:1,
      scrollTrigger:{
        trigger:'.run>img',
        scroller:'body',
        start:'top 70%',
        end:"top 50%",
        scrub: 5,
      }
    })
    gsap.from('.run>div',{
      x:500,
      duration:1,
      scrollTrigger:{
        trigger:'.run>div',
        scroller:'body',
        start:'top 70%',
        end:"top 50%"
      }
    })

    gsap.from('.push>div>*',{
      x:-500,
      opacity:0,
      scale:0,
      rotate:1440,
      duration:2,
      stagger: 0.5,
      scrollTrigger:{
        trigger:'.push>div>*',
        scroller:'body',
        start:"top 70%",
        end: "top 55%",
      }
    })
  })
  return (
    // fw-bold, display-5,small, fs-5, d-flex, rounded-1,bg-black, text-muted, ps-3
    <>
    <Slider />
    <div className='row my-5 ab'> 
      <div className="col-md-4 px-5 ms-auto my-auto ab2"> 
        <h1 className='fw-bold'>
        Set Goals. <br />
        Log Workouts. 
        Stay On Track.</h1>
        <p className='small mt-3'>Easily track your Workouts, set Training Plans, and discover new Workout Routines to crush your goals.</p>
        <button className='btn-black bg-dark text-light px-2 py-1 fs-5 fw-bold w-75'>GET STARTED</button>
      </div>
      <div className="col-md-4 me-auto my-auto">
        <img src={a1} alt="" className='w-100'/>
      </div>

    </div>

    <div className="row my-5">
      <div className="col-md-8 d-flex mx-auto text-light bg-black p-3 rounded-1 run" style={{height:"55vh"}}>
        <img src={a2} alt="" className='w-60'/>
        <div className='my-auto ps-3'>
        <h2 className='fw-bold'>You VS The Year 2024</h2>
        <p className='text-muted'>Log 1,024 km in 2024</p>
        </div>
      </div>
    </div>

    <div className="row push">
      <div className="col-sm-12 text-center">
        <h1 className='fw-bold'>Push Your Limits</h1>
        <p className='small'>Hit milestones and PR’s by taking on a new challenge every month.</p>
        <button className='bg-dark text-light px-5 py-2 fw-bold'>JOIN A CHALLENGE</button>
      </div>
    </div>

    <Built />
    <Meter />
    </>
  )
}

export default Home
