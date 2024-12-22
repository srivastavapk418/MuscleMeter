import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'
import g1 from '../assets/img/g1.webp'
import gplay from '../assets/img/image.png'

gsap.registerPlugin(ScrollTrigger)

const Built = () => {
    useGSAP(()=>{
        gsap.from('.built>div>h1',{
            x:-500,
            opacity:0,
            scale:0,
            color:"red",
            scrollTrigger:{
                trigger:'.built>div>h1',
                scroller:"body",
                start:"top 65%",
                end:"top 55%",
                scrub:3
            }
        })
        gsap.from('.built>div>dl>*',{
            x:-500,
            opacity:0,
            scale:0,
            color:"red",
            scrollTrigger:{
                trigger:'.built>div>h1',
                scroller:"body",
                start:"top 65%",
                end:"top 55%",
                scrub:3
            }
        })

        gsap.from('.built>div>img',{
            y:500,
            scale:0,
            scrollTrigger: {
                scroller:"body",
                trigger:".built>div>h1",
                start:"top 65%",
                end:"top 50%",
                scrub:3
            }
        })
    })
    
  return (
    <div className='row my-5 built'>
        <div className="col-lg-3 my-auto ms-auto col-md-6 pe-5">
            <h1 className='fw-bold'>
                BUILD TO MAKE YOU BETTER
            </h1>
            <dl>
                <dt>Smarter training</dt>
                <dd className='text-justify'>
                Turn your phone or smartwatch into your coach <br />
                —track your workouts and get tons of data and tips to help you run better.
                </dd>

                <dt>Custom Workouts</dt>
                <dd className='text-justify'>
                5K? Marathon? No matter where you’re at, get personalized Training Plans built just for you and your goals.
                </dd>

                <dt>Strong Community</dt>
                <dd className='text-justify'>
                Create your own custom challenges to push yourself and your friends. For extra motivation, reach out and find support from the entire UA MapMyRun™ community.
                </dd>
            </dl>
            <img src={gplay} alt="" className='w-50'/>
        </div>
        <div className="me-auto my-auto col-lg-5 col-md-6">
            <img src={g1} alt="" className='w-100'/>
        </div>
      
    </div>
  )
}

export default Built
